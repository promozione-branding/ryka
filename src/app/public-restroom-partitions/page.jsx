
"use client";

import FlowerBackdrop from "@/components/FlowerBackdrop";
import {
  FadeInUp,
  Stagger,
  StaggerItem,
} from "@/components/MotionWrappers";
import { Layers3, Star, Crown, ArrowUpRight } from "lucide-react";

const productCategories = [
  {
    title: "STANDARD",
    icon: Layers3,
    color: "#092e61",
    gradient: "from-[#034a92] to-[#061d46]",
    products: [
      {
        name: "Carlton Pristine",
        image: "/product/imgi_13_Carlton-Pristine-2.webp",
        href: "/public-restroom-partitions/carlton-pristine",
      },
      {
        name: "Carlton Prime",
        image: "/product/imgi_12_Carlton-Prime-1.webp",
        href: "/public-restroom-partitions/carlton-prime",
      },
      {
        name: "Nexus Grand",
        image: "/product/imgi_11_Nexus-Grand-2.webp",
        href: "/public-restroom-partitions/nexus-grand",
      },
    ],
  },
  {
    title: "PREMIUM",
    icon: Star,
    color: "#0875d8",
    gradient: "from-[#087ce7] to-[#06499e]",
    products: [
      {
        name: "Nexus Evo",
        image: "/product/imgi_9_Nexus-Evos.webp",
        href: "/public-restroom-partitions/nexus-evo",
      },
      {
        name: "Nexus Canvas",
        image: "/product/imgi_10_Nexus-Canvas-1.webp",
        href: "/public-restroom-partitions/nexus-canvas",
      },
      {
        name: "Floatex",
        image: "/product/imgi_7_Swing-Lite-4.webp",
        href: "/public-restroom-partitions/floatex",
      },
      {
        name: "Sky Hung",
        image: "/product/imgi_8_top-hung-2.webp",
        href: "/public-restroom-partitions/sky-hung",
      },
    ],
  },
 
];

function ProductCard({ product, index }) {
  return (
    <StaggerItem custom={index} className="min-w-0">
      <a href={product.href} className="group block">
        <div className="relative aspect-[1.65] w-full overflow-hidden rounded-[12px] bg-[#e2e4df] shadow-sm">
          <img
            src={product.image}
            alt={`${product.name} restroom partition`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/15" />

          <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#092e61] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <h3 className="mt-4 text-center text-[18px] font-bold text-[#0a2855] transition-colors duration-300 group-hover:text-[#b78722] md:text-[21px]">
          {product.name}
        </h3>
      </a>
    </StaggerItem>
  );
}

function ProductCategory({ category }) {
  const Icon = category.icon;

  return (
    <FadeInUp className="relative pt-10">
      <div
        className="relative rounded-[30px] border-[2px] bg-white/75 px-5 pb-9 pt-14 shadow-[0_12px_30px_rgba(20,45,90,0.08)] backdrop-blur-sm sm:px-7 md:px-9"
        style={{ borderColor: category.color }}
      >
        {/* Category Heading */}
        <div
          className={`absolute left-1/2 top-0 flex min-w-[230px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-5 rounded-full bg-gradient-to-r ${category.gradient} px-8 py-4 text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)] sm:min-w-[290px]`}
        >
          <Icon size={30} strokeWidth={1.8} />

          <span className="h-8 w-px bg-white/70" />

          <h3 className="text-[22px] font-bold tracking-[1.5px] sm:text-[27px]">
            {category.title}
          </h3>
        </div>

        {/* Products */}
        <Stagger
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${
            category.products.length === 4
              ? "lg:grid-cols-4"
              : category.products.length === 2
              ? "lg:mx-auto lg:max-w-[850px] lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
          {category.products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index}
            />
          ))}
        </Stagger>
      </div>
    </FadeInUp>
  );
}

export default function PublicRestroomProducts() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f5f6fa] py-6 md:py-24">
      <FlowerBackdrop />

      <div className="relative pt-20 md:pt-10 z-10 mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Main Heading */}
        <FadeInUp className="mb-5 md:mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="hidden h-px w-16 bg-[#0b2b5d] sm:block" />

            <span className="text-[11px] font-semibold tracking-[5px] text-[#0b2b5d] sm:text-[14px]">
              RYKA RESTROOM CUBICLES
            </span>

            <span className="hidden h-px w-16 bg-[#0b2b5d] sm:block" />
          </div>

          <h2 className="text-[38px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#0b2858] sm:text-[52px] lg:text-[68px]">
            Our Product{" "}
            <span className="text-[#0871ce]">Segments</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] text-[15px] text-[#243a5d] sm:text-[18px]">
            Tailored for every space. Designed for excellence.
          </p>

          <div className="mx-auto mt-5 h-[3px] w-28 rounded-full bg-[#0871ce]" />
        </FadeInUp>

        {/* Category Sections */}
        <div className="flex flex-col gap-16 md:gap-20">
          {productCategories.map((category) => (
            <ProductCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
