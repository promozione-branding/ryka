import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { makeToken, isAdmin, safeEqual } from "@/lib/auth"

const fails = (globalThis._loginFails ||= new Map())
const WINDOW = 15 * 60 * 1000
const MAX_FAILS = 5

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown"
  const rec = fails.get(ip)
  if (rec && Date.now() - rec.first > WINDOW) fails.delete(ip)
  if ((fails.get(ip)?.count || 0) >= MAX_FAILS) {
    return NextResponse.json({ message: "Too many attempts. Try again later." }, { status: 429 })
  }

  const { username, password } = await req.json().catch(() => ({}))

  if (
    !process.env.ADMIN_USERNAME ||
    !process.env.ADMIN_PASSWORD ||
    !safeEqual(username, process.env.ADMIN_USERNAME) ||
    !safeEqual(password, process.env.ADMIN_PASSWORD)
  ) {
    const r = fails.get(ip) || { count: 0, first: Date.now() }
    r.count++
    fails.set(ip, r)
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }
  fails.delete(ip)

  let token
  try {
    token = makeToken()
  } catch (e) {
    console.error(e.message)
    return NextResponse.json({ message: "Server is not configured (SESSION_SECRET)" }, { status: 500 })
  }

  ;(await cookies()).set("admin", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  })
  return NextResponse.json({ ok: true })
}

export async function DELETE() {
  ;(await cookies()).delete("admin")
  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json({ isAdmin: await isAdmin() })
}