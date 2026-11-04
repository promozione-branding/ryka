import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FlowerBackdrop from "@/components/FlowerBackdrop";
import {
  CATEGORIES,
  getProductHref,
  getProductsByCategory,
} from "@/lib/catalog";

export const metadata = {
  title: "All Products | Toilet Cubicles & Washroom Partitions | Ryka",
  description:
    "Browse every Ryka restroom partition range: public restroom partitions, luxe partition systems, kids restroom partitions and urinal partitions.",
};

export default function ProductsPage() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e8e4d0] pb-16 pt-32 md:pb-24 md:pt-40">
      <FlowerBackdrop />

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-8">
        {/* PAGE INTRO */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="text-[40px] font-bold leading-[1.05] tracking-tight text-black sm:text-[52px] md:text-[64px]">
            Solutions
          </h1>
          <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-6 text-[#242424] md:text-[15px]">
            Explore every Ryka partition range, organised by category.
          </p>
        </div>

        {/* CATEGORY SECTIONS */}
        <div className="space-y-16 md:space-y-24">
          {CATEGORIES.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="scroll-mt-28"
            >
              {/* CATEGORY NAME ON TOP */}
              <div className="mb-8 text-center md:mb-10">
                <h2
                  id={`${category.id}-heading`}
                  className="text-[32px] font-bold leading-[1.05] tracking-tight text-black sm:text-[44px] md:text-[56px]"
                >
                  {category.name}
                </h2>
                <p className="mx-auto mt-3 max-w-[900px] text-[12px] leading-5 text-[#242424] md:text-[13px]">
                  {category.description}
                </p>
              </div>

              {category.type === "products" ? (
                <ProductGrid category={category} />
              ) : (
                <ShowcaseBanner category={category} />
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/*  Product grid (name under image)   */
/* ---------------------------------- */

function ProductGrid({ category }) {
  const products = getProductsByCategory(category.name);

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          key={product.id}
          href={getProductHref(product)}
          className="group block min-w-0"
        >
          <div className="relative h-[200px] w-full overflow-hidden rounded-[6px] bg-[#d9d5bf] md:h-[215px]">
            <Image
              src={product.mainImage.url}
              alt={`${product.productName} - ${category.name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          </div>

          <h3 className="pt-4 text-center text-[17px] font-medium text-black transition-colors duration-300 group-hover:text-[#755d24] md:text-[19px]">
            {product.productName}
          </h3>
        </Link>
      ))}
    </div>
  );
}

/* ---------------------------------- */
/*  Banner for categories that have   */
/*  a landing page but no product     */
/*  entries (Luxe, Urinals)           */
/* ---------------------------------- */

function ShowcaseBanner({ category }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {category.images.map((image) => (
          <Link
            key={image.src}
            href={category.href}
            aria-label={category.name}
            className="group block rounded-[6px] bg-[#8f6b35] p-3 md:p-4"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-[4px] sm:h-[240px] md:h-[260px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href={category.href}
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-black underline-offset-4 transition-colors hover:text-[#755d24] hover:underline"
        >
          {category.cta}
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}