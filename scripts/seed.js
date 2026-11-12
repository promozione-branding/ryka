/**
 * Bulk-import blogs from https://toiletcubiclespartition.com/blog/ (8 pages)
 * into the Ryka Mongo "blogs" collection.
 *
 * What it does, per post:
 *   - scrapes title / permalink / date / meta title / meta description / body HTML
 *   - downloads the cover image and re-uploads it to Cloudflare R2  -> image + imageFileId
 *   - re-hosts images inside the body to R2 too (so nothing depends on the old site)
 *   - rewrites internal links  (old post URL -> /blogs/<slug>)
 *   - inserts it into MongoDB using the same shape as src/models/blogs.js
 *
 * Usage (see package.json):
 *   npm i                                  # cheerio is already a devDependency
 *   npm run seed                           # scrape + upload images + insert into Mongo
 *   npm run seed -- --dry-run              # scrape only, print a table, touch nothing
 *   npm run seed:export                    # scrape only, write scripts/blogs.export.json
 *   npm run seed -- --force                # overwrite posts whose permalink already exists
 *   npm run seed -- --limit=3              # only the first 3 posts (good for a trial run)
 *   npm run seed -- --content-selector=".entry-content"   # override body detection
 *
 * Required .env (same names the app already uses):
 *   MONGODB_URI
 *   CLOUD_FLARE_ACCOUNT_ID, CLOUD_FLARE_ACCESS_KEY_ID, CLOUD_FLARE_SECRET_ACCESS_KEY,
 *   CLOUD_FLARE_R2_BUCKET, CLOUD_FLARE_R2_PUBLIC_URL
 */

const fs = require("node:fs")
const path = require("node:path")
const crypto = require("node:crypto")
const cheerio = require("cheerio")

/* ───────────────────────── config ───────────────────────── */

const BASE = "https://toiletcubiclespartition.com"
const pageUrl = (n) => (n === 1 ? `${BASE}/blog/` : `${BASE}/blog/page/${n}/`)
const DEFAULT_LAST_PAGE = 8
const DELAY_MS = 400
const UA = "Mozilla/5.0 (compatible; RykaBlogSeeder/1.0)"

const argv = process.argv.slice(2)
const flag = (n) => argv.includes(`--${n}`)
const opt = (n) => (argv.find((a) => a.startsWith(`--${n}=`)) || "").split("=").slice(1).join("=") || undefined

const EXPORT = flag("export")
const DRY = flag("dry-run")
const FORCE = flag("force")
const LIMIT = Number(opt("limit")) || Infinity
const CONTENT_SELECTOR = opt("content-selector")
const LIVE = !EXPORT && !DRY // only LIVE mode touches R2 + Mongo

/* ───────────────────────── helpers ───────────────────────── */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const clean = (s) => (s || "").replace(/\s+/g, " ").trim()

// identical to slugify() in src/lib/blogs.js
const slugify = (s = "") => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

// WordPress adds "-1024x576" style suffixes to resized copies; strip to get the original
const stripSize = (u) => u.replace(/-\d+x\d+(?=\.[a-z0-9]+(\?|$))/i, "")

const absUrl = (u) => {
  try {
    return new URL(u, BASE).href
  } catch {
    return null
  }
}

// cut at a word boundary so we never exceed the schema's maxlength
function clip(s, n) {
  s = clean(s)
  if (s.length <= n) return s
  const cut = s.slice(0, n + 1)
  const i = cut.lastIndexOf(" ")
  return (i > n * 0.6 ? cut.slice(0, i) : cut.slice(0, n)).replace(/[\s,.:;|-]+$/, "")
}

// schema: metaTitle maxlength 70. "Title | Ryka Restroom Cubicle" is often longer -> drop the site suffix first.
function fitMetaTitle(t) {
  t = clean(t)
  if (t.length <= 70) return t
  const i = t.lastIndexOf(" | ")
  return clip(i > 0 ? t.slice(0, i) : t, 70)
}

async function get(url, { binary = false, tries = 3 } = {}) {
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url, {
        headers: { "user-agent": UA, accept: binary ? "image/*,*/*" : "text/html,*/*" },
        redirect: "follow",
        signal: AbortSignal.timeout(30000),
      })
      if (res.status === 404) return null
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      if (!binary) return await res.text()
      return {
        buffer: Buffer.from(await res.arrayBuffer()),
        type: (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase(),
      }
    } catch (e) {
      if (i >= tries) throw new Error(`${url} -> ${e.message}`)
      await sleep(800 * i)
    }
  }
}

/* ───────────────────────── listing pages ───────────────────────── */

const isPostPath = (href) => {
  try {
    const u = new URL(href, BASE)
    if (u.origin !== BASE) return false
    const p = u.pathname.replace(/\/+$/, "")
    if (!p || /^\/(blog|category|tag|author|page|wp-content|wp-json|wp-admin)(\/|$)/.test(p)) return false
    return p.split("/").filter(Boolean).length === 1 // posts live at /<slug>/
  } catch {
    return false
  }
}

function parseListing(html) {
  const $ = cheerio.load(html)
  const posts = new Map() // url -> listing title

  const add = (href, title) => {
    if (!isPostPath(href)) return
    const url = absUrl(href).replace(/\/+$/, "") + "/"
    if (!posts.has(url) || (!posts.get(url) && title)) posts.set(url, clean(title))
  }

  $("h1,h2,h3,h4,h5,h6").find("a[href]").each((_, a) => add($(a).attr("href"), $(a).text()))
  $("a[href]").each((_, a) => {
    if (/read\s*more/i.test($(a).text())) add($(a).attr("href"), "")
  })

  let last = 1
  $('a[href*="/blog/page/"]').each((_, a) => {
    const m = ($(a).attr("href") || "").match(/\/blog\/page\/(\d+)/)
    if (m) last = Math.max(last, Number(m[1]))
  })

  return { posts, last }
}

async function collectPostUrls() {
  const all = new Map()
  const first = await get(pageUrl(1))
  if (!first) throw new Error("Could not load " + pageUrl(1))

  let { posts, last } = parseListing(first)
  last = Math.max(last, DEFAULT_LAST_PAGE)
  posts.forEach((t, u) => all.set(u, t))
  console.log(`page 1/${last}: ${posts.size} posts`)

  for (let n = 2; n <= last; n++) {
    await sleep(DELAY_MS)
    const html = await get(pageUrl(n))
    if (!html) {
      console.log(`page ${n}/${last}: not found, stopping`)
      break
    }
    const { posts: p } = parseListing(html)
    p.forEach((t, u) => all.set(u, t))
    console.log(`page ${n}/${last}: ${p.size} posts`)
  }
  return all
}

/* ───────────────────────── single post ───────────────────────── */

const BLOCKS = "p,h2,h3,h4,h5,h6,ul,ol,blockquote,table"

// The post body is the element whose *direct* children hold the most paragraph/heading/list text.
function pickContainer($) {
  if (CONTENT_SELECTOR) return $(CONTENT_SELECTOR).first()
  let best = null
  let bestScore = 0
  $("div,article,section,main").each((_, el) => {
    const $el = $(el)
    if ($el.closest("header,footer,nav,aside").length) return
    let score = 0
    $el.children(BLOCKS).each((_, c) => {
      score += $(c).text().trim().length
    })
    if (score > bestScore) {
      best = $el
      bestScore = score
    }
  })
  return best
}

const lazySrc = ($el) =>
  [$el.attr("data-lazy-src"), $el.attr("data-src"), $el.attr("data-lazy-original"), $el.attr("src")].find(
    (s) => s && !s.startsWith("data:")
  )

const KEEP_ATTRS = {
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "title"],
  iframe: ["src", "title", "allowfullscreen"],
  td: ["colspan", "rowspan"],
  th: ["colspan", "rowspan"],
}

function cleanContent(inner, { title, coverStem, knownSlugs }) {
  const $c = cheerio.load(`<div id="root">${inner}</div>`, null, false)

  // junk: scripts, share buttons, tag links, related posts, comments …
  $c("script,style,noscript,form,button,svg,picture source").remove()
  $c(
    [
      'a[rel~="tag"]',
      'a[href*="/tag/"]',
      'a[href*="/author/"]',
      'a[href*="twitter.com/intent"]',
      'a[href*="facebook.com/sharer"]',
      'a[href*="pinterest.com/pin/create"]',
      'a[href*="linkedin.com/shareArticle"]',
      "[class*='share']",
      "[class*='related']",
      "[class*='comment']",
      "[class*='breadcrumb']",
      "[class*='post-navigation']",
      "[class*='tagcloud']",
    ].join(",")
  ).remove()

  // the page already renders the title as <h1>
  $c("h1").each((_, h) => {
    if (clean($c(h).text()).toLowerCase() === title.toLowerCase()) $c(h).remove()
  })

  // images: resolve WP-Rocket lazy-loading, make absolute, drop the cover (shown separately by the app)
  $c("img").each((_, img) => {
    const $i = $c(img)
    const src = lazySrc($i)
    const abs = src && absUrl(src)
    if (!abs) return $i.remove()
    if (coverStem && path.basename(stripSize(abs)).replace(/\.[a-z0-9]+$/i, "") === coverStem) return $i.remove()
    $i.attr("src", abs)
  })

  // <a href="…/big.jpg"><img></a>  ->  just the image
  $c("a[href]").each((_, a) => {
    const $a = $c(a)
    if ($a.find("img").length && /\.(jpe?g|png|webp|gif|avif)(\?|$)/i.test($a.attr("href"))) $a.replaceWith($a.contents())
  })

  // internal links: old post URL -> /blogs/<slug>, other same-site pages -> relative path
  $c("a[href]").each((_, a) => {
    const $a = $c(a)
    const href = $a.attr("href")
    if (/^(mailto:|tel:|#)/i.test(href)) return
    const abs = absUrl(href)
    if (!abs) return
    const u = new URL(abs)
    if (u.origin !== BASE || /^\/wp-/.test(u.pathname)) return
    const p = u.pathname.replace(/\/+$/, "")
    const slug = slugify(p.split("/").filter(Boolean).pop() || "")
    if (p.split("/").filter(Boolean).length === 1 && knownSlugs.has(slug)) $a.attr("href", `/blogs/${slug}${u.hash}`)
    else $a.attr("href", (p || "/") + u.search + u.hash)
  })

  // strip classes / ids / inline styles / lazy-load junk — keep only meaningful attributes
  $c("span").each((_, s) => {
    $c(s).replaceWith($c(s).contents())
  })
  $c("#root *").each((_, el) => {
    const keep = KEEP_ATTRS[el.tagName] || []
    for (const k of Object.keys(el.attribs || {})) if (!keep.includes(k)) delete el.attribs[k]
  })

  // empty wrappers (e.g. the <p> that held only the removed tag links)
  for (let pass = 0; pass < 3; pass++) {
    $c("#root p,#root div,#root li,#root ul,#root ol,#root section,#root strong,#root em,#root b,#root i,#root a").each(
      (_, el) => {
        const $el = $c(el)
        if (!$el.text().trim() && !$el.find("img,iframe,table,hr").length) $el.remove()
      }
    )
  }

  return $c("#root").html().replace(/\n{3,}/g, "\n\n").trim()
}

function extractPost(html, url, { listingTitle = "", knownSlugs = new Set() } = {}) {
  const $ = cheerio.load(html)
  const meta = (k) => $(`meta[property="${k}"]`).attr("content") || $(`meta[name="${k}"]`).attr("content") || ""

  const slug = slugify(new URL(url).pathname.split("/").filter(Boolean).pop() || "")
  const title = clean($("h1").first().text()) || clean(listingTitle) || clean(meta("og:title"))

  let date = new Date(meta("article:published_time") || $("time[datetime]").first().attr("datetime") || "")
  if (isNaN(date)) {
    const m = $("body")
      .text()
      .match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b/)
    if (m) date = new Date(`${m[0]} 00:00:00 UTC`)
  }

  const ogImg = meta("og:image")
  const covers = [...new Set([ogImg && stripSize(ogImg), ogImg, meta("twitter:image")].filter(Boolean))]

  const container = pickContainer($)
  if (!container || !container.length) throw new Error("could not find the post body")
  const containerInfo = `${container.get(0).tagName}${container.attr("class") ? "." + container.attr("class").trim().split(/\s+/).join(".") : ""}`

  const coverStem = covers[0] ? path.basename(covers[0]).replace(/\.[a-z0-9]+$/i, "") : ""
  let content = cleanContent(container.html(), { title, coverStem, knownSlugs })

  // no og:image? use the first body image as the cover
  if (!covers.length) {
    const $t = cheerio.load(`<div id="r">${content}</div>`, null, false)
    const first = $t("img").first()
    if (first.length) {
      covers.push(first.attr("src"))
      first.remove()
      content = $t("#r").html().trim()
    }
  }

  const metaDescription = meta("description") || meta("og:description")
  const metaTitle = meta("og:title") || clean($("title").text())

  return {
    sourceUrl: url,
    title: clip(title, 200),
    permalink: slug,
    date,
    metaTitle: fitMetaTitle(metaTitle),
    metaDescription: clip(metaDescription, 200),
    content,
    coverCandidates: covers,
    _container: containerInfo,
  }
}

/* ───────────────────────── R2 + Mongo (live mode only) ───────────────────────── */

const MIME = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".gif": "image/gif", ".avif": "image/avif", ".svg": "image/svg+xml" }
const EXT = Object.fromEntries(Object.entries(MIME).map(([e, t]) => [t, e === ".jpeg" ? ".jpg" : e]))

let s3, S3
let Blog, mongoose

function requireEnv() {
  const need = [
    "MONGODB_URI",
    "CLOUD_FLARE_ACCOUNT_ID",
    "CLOUD_FLARE_ACCESS_KEY_ID",
    "CLOUD_FLARE_SECRET_ACCESS_KEY",
    "CLOUD_FLARE_R2_BUCKET",
    "CLOUD_FLARE_R2_PUBLIC_URL",
  ]
  const missing = need.filter((k) => !process.env[k])
  if (missing.length) {
    console.error("Missing env vars: " + missing.join(", ") + "\n(run via `npm run seed` so .env is loaded)")
    process.exit(1)
  }
}

async function setupLive() {
  requireEnv()
  S3 = require("@aws-sdk/client-s3")
  s3 = new S3.S3Client({
    region: "auto",
    endpoint: `https://${process.env.CLOUD_FLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.CLOUD_FLARE_ACCESS_KEY_ID,
      secretAccessKey: process.env.CLOUD_FLARE_SECRET_ACCESS_KEY,
    },
  })

  mongoose = require("mongoose")
  // keep in sync with src/models/blogs.js
  const BlogSchema = new mongoose.Schema(
    {
      title: { type: String, required: true, trim: true, maxlength: 200 },
      permalink: { type: String, required: true, unique: true, trim: true, lowercase: true },
      date: { type: Date, required: true, default: Date.now, index: true },
      metaTitle: { type: String, trim: true, maxlength: 70, default: "" },
      metaDescription: { type: String, trim: true, maxlength: 200, default: "" },
      content: { type: String, default: "" },
      image: { type: String, required: true },
      imageFileId: { type: String, required: true },
    },
    { timestamps: true }
  )
  Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
  await mongoose.connect(process.env.MONGODB_URI)
}

async function uploadToR2({ buffer, type }, srcUrl) {
  const urlExt = path.extname(new URL(srcUrl).pathname).toLowerCase()
  const contentType = type.startsWith("image/") ? type : MIME[urlExt] || "application/octet-stream"
  const ext = urlExt || EXT[contentType] || ""
  const key = `blogs/${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`
  await s3.send(
    new S3.PutObjectCommand({
      Bucket: process.env.CLOUD_FLARE_R2_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    })
  )
  return { url: `${process.env.CLOUD_FLARE_R2_PUBLIC_URL.replace(/\/$/, "")}/${key}`, key }
}

async function deleteFromR2(key) {
  if (!key) return
  try {
    await s3.send(new S3.DeleteObjectCommand({ Bucket: process.env.CLOUD_FLARE_R2_BUCKET, Key: key }))
  } catch (e) {
    console.warn("   R2 cleanup failed:", e.message)
  }
}

// try each candidate URL until one returns a real image
async function downloadFirst(urls) {
  for (const u of urls) {
    const r = await get(u, { binary: true }).catch(() => null)
    if (r && r.buffer.length && (r.type.startsWith("image/") || MIME[path.extname(new URL(u).pathname).toLowerCase()])) {
      return { ...r, url: u }
    }
  }
  return null
}

// upload every <img> in the body to R2 and swap the src; leaves the remote URL if a download fails
async function rehostInlineImages(content, uploadedKeys, cache) {
  const $ = cheerio.load(`<div id="r">${content}</div>`, null, false)
  for (const el of $("img").toArray()) {
    const src = $(el).attr("src")
    if (!src || !/^https?:/i.test(src)) continue
    if (!cache.has(src)) {
      const img = await downloadFirst([stripSize(src), src])
      if (!img) {
        console.warn(`   ! inline image not downloadable, keeping remote URL: ${src}`)
        cache.set(src, src)
      } else {
        const up = await uploadToR2(img, img.url)
        uploadedKeys.push(up.key)
        cache.set(src, up.url)
      }
    }
    $(el).attr("src", cache.get(src))
  }
  return $("#r").html().trim()
}

async function saveToDb(post, existing, imageCache) {
  const uploadedKeys = []
  try {
    const cover = await downloadFirst(post.coverCandidates)
    if (!cover) throw new Error("cover image could not be downloaded")
    const up = await uploadToR2(cover, cover.url)
    uploadedKeys.push(up.key)

    const content = await rehostInlineImages(post.content, uploadedKeys, imageCache)

    const doc = {
      title: post.title,
      permalink: post.permalink,
      date: post.date,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      content,
      image: up.url,
      imageFileId: up.key,
    }

    if (existing) {
      const oldKey = existing.imageFileId
      existing.set(doc)
      await existing.save()
      await deleteFromR2(oldKey)
    } else {
      await Blog.create(doc)
    }
  } catch (e) {
    for (const k of uploadedKeys) await deleteFromR2(k) // don't leave orphans in the bucket
    throw e
  }
}

/* ───────────────────────── main ───────────────────────── */

async function main() {
  console.log(`mode: ${EXPORT ? "export (json only)" : DRY ? "dry-run" : "LIVE (R2 + MongoDB)"}${FORCE ? " + force" : ""}`)
  if (LIVE) await setupLive()

  const listing = await collectPostUrls()
  const knownSlugs = new Set([...listing.keys()].map((u) => slugify(new URL(u).pathname.split("/").filter(Boolean).pop())))
  console.log(`\nfound ${listing.size} posts in total\n`)

  const entries = [...listing.entries()].slice(0, LIMIT)

  let existingBySlug = new Map()
  if (LIVE) {
    const found = await Blog.find({ permalink: { $in: [...knownSlugs] } })
    existingBySlug = new Map(found.map((b) => [b.permalink, b]))
  }

  const imageCache = new Map()
  const results = { saved: 0, skipped: 0, failed: [] }
  const exported = []

  for (const [i, [url, listingTitle]] of entries.entries()) {
    const slug = slugify(new URL(url).pathname.split("/").filter(Boolean).pop())
    const tag = `[${String(i + 1).padStart(2)}/${entries.length}]`
    try {
      const existing = existingBySlug.get(slug)
      if (LIVE && existing && !FORCE) {
        console.log(`${tag} skip (already in DB)  ${slug}`)
        results.skipped++
        continue
      }

      const html = await get(url)
      if (!html) throw new Error("404")
      const post = extractPost(html, url, { listingTitle, knownSlugs })

      if (!post.title) throw new Error("no title")
      if (isNaN(post.date)) throw new Error("no valid date")
      const textLen = clean(cheerio.load(`<div>${post.content}</div>`)("div").text()).length
      if (textLen < 300) console.warn(`${tag} ! body is only ${textLen} chars — check selector (${post._container})`)

      if (LIVE) await saveToDb(post, existing, imageCache)
      else if (EXPORT || DRY) {
        exported.push({
          title: post.title,
          permalink: post.permalink,
          date: post.date.toISOString(),
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          content: post.content,
          image: post.coverCandidates[0] || "",
          imageFileId: "",
          sourceUrl: post.sourceUrl,
        })
      }

      results.saved++
      console.log(
        `${tag} ${LIVE ? "saved" : "ok   "}  ${post.date.toISOString().slice(0, 10)}  ${post.permalink}  (${textLen} chars, body: ${post._container})`
      )
    } catch (e) {
      results.failed.push({ url, error: e.message })
      console.error(`${tag} FAILED ${slug}: ${e.message}`)
    }
    await sleep(DELAY_MS)
  }

  if (EXPORT) {
    const out = path.join(__dirname, "blogs.export.json")
    fs.writeFileSync(out, JSON.stringify(exported, null, 2))
    console.log(`\nwrote ${exported.length} posts -> ${out}`)
  }

  console.log(`\ndone: ${results.saved} ${LIVE ? "saved" : "parsed"}, ${results.skipped} skipped, ${results.failed.length} failed`)
  if (results.failed.length) {
    console.log("failed:")
    results.failed.forEach((f) => console.log(`  - ${f.url}  (${f.error})`))
  }

  if (mongoose) await mongoose.disconnect()
  process.exit(results.failed.length ? 1 : 0)
}

if (require.main === module) {
  main().catch(async (e) => {
    console.error(e)
    if (mongoose) await mongoose.disconnect().catch(() => {})
    process.exit(1)
  })
}

module.exports = { parseListing, extractPost, fitMetaTitle, slugify }