import productData from "@/lib/data";

/**
 * Single source of truth for product categories and product URLs.
 *
 * - `name` must match the strings used in `product.categories` in data.js.
 * - `href` is the real route folder under src/app.
 * - Categories with `type: "showcase"` have their own landing page but no
 *   individual product entries in data.js, so they render as a banner card.
 */
export const CATEGORIES = [
  {
    id: "public",
    name: "Public Restroom Partitions",
    href: "/public-restroom-partitions",
    type: "products",
    description:
      "From commercial buildings to public facilities, our restroom partition systems offer modern design, easy maintenance, and robust functionality.",
  },
  {
    id: "luxe",
    name: "Luxe Partition Systems",
    href: "/luxe-partition-systems",
    type: "showcase",
    description:
      "Sleek finishes, golden metallic accents and simple hardware for high-end workplaces, hotels, fine dining venues and luxury retail.",
    images: [
      { src: "/golder-cubicles.webp", alt: "Ryka Luxor black and gold restroom cubicles" },
      { src: "/Golden-Partitions.webp", alt: "Ryka Luxor premium golden partitions" },
    ],
    cta: "Explore Luxe Partition Systems",
  },
  {
    id: "kids",
    name: "Kids Restroom Partitions",
    href: "/kids-restrooms-partitions",
    type: "products",
    description:
      "Our kids restroom partitions combine fun colors, low-height panels, and smooth edges to ensure safety and comfort for young users.",
  },
  {
    id: "urinals",
    name: "Urinal Partitions",
    href: "/urinals-partitions",
    type: "showcase",
    description:
      "Designed to enhance privacy, promote hygiene, and elevate the appearance of modern washrooms, built to withstand heavy daily usage.",
    images: [
      { src: "/imgi_7_closet-urinal.webp", alt: "Modern blue urinal partitions" },
      { src: "/imgi_8_closet-urinal.webp", alt: "Premium urinal partition systems" },
    ],
    cta: "Explore Urinal Partitions",
  },
];

const categoryByName = Object.fromEntries(CATEGORIES.map((c) => [c.name, c]));

const slugOf = (url = "") => url.replace(/^\/+|\/+$/g, "").toLowerCase();

/** Deduplicated list (data.js currently contains Nexus Canvas twice, id 4). */
const uniqueProducts = Array.from(
  new Map(productData.map((p) => [p.id, p])).values()
);

/** Correct, absolute URL for a product's detail page. */
export function getProductHref(product) {
  const category = categoryByName[product.categories?.[0]];
  const base = category ? category.href : "/public-restroom-partitions";
  return `${base}/${slugOf(product.url)}`;
}

/** Look a product up by its display name, e.g. "Nexus Evo". */
export function getProductByName(name) {
  return uniqueProducts.find((p) => p.productName === name);
}

/** All products belonging to a category (by category name). */
export function getProductsByCategory(categoryName) {
  return uniqueProducts.filter((p) => p.categories?.includes(categoryName));
}
