"use client";

import FlowerBackdrop from "@/components/FlowerBackdrop";
import {
  FadeInUp,
  Stagger,
  StaggerItem,
} from "@/components/MotionWrappers";
import { Layers3, Star, ArrowUpRight } from "lucide-react";

const productCategories = [
  {
    title: "STANDARD",
    icon: Layers3,
    color: "#092e61",
    gradient: "from-[#034a92] to-[#061d46]",
    products: [
      {
        name: "Straight",
        image: "/product/straight.webp",
        href: "/kids-restrooms-partitions/straight",
      },
      {
        name: "Aero Kids",
        image: "/product/aero-kids.webp",
        href: "/kids-restrooms-partitions/aero-kids",
      },
      {
        name: "Half Round",
        image: "/product/imgi_20_Hansel-Gretel.webp",
        href: "/kids-restrooms-partitions/half-round",
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
        name: "Lil-Waves",
        image: "/product/imgi_17_petar-pan.webp",
        href: "/kids-restrooms-partitions/lil-waves",
      },
      {
        name: "Lil-Shine",
        image: "/product/imgi_18_Lil-Shine.webp",
        href: "/kids-restrooms-partitions/lil-shine",
      },
      {
        name: "Slice Cut",
        image: "/product/imgi_21_Slice-Cut-2.webp",
        href: "/kids-restrooms-partitions/slice-cut",
      },
      {
        name: "Miniput",
        image: "/product/imgi_16_kids-cubicles.webp",
        href: "/kids-restrooms-partitions/miniput",
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
            alt={`${product.name} Kids Restroom Partition`}
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
        <div
          className={`absolute left-1/2 top-0 flex min-w-[230px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-5 rounded-full bg-gradient-to-r ${category.gradient} px-8 py-4 text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)] sm:min-w-[290px]`}
        >
          <Icon size={30} strokeWidth={1.8} />
          <span className="h-8 w-px bg-white/70" />
          <h3 className="text-[22px] font-bold tracking-[1.5px] sm:text-[27px]">
            {category.title}
          </h3>
        </div>

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

export default function KidsRestroomProducts() {
  return (
    <section className="relative w-full bg-[#cad6c1] overflow-hidden py-12 md:py-12">
      <FlowerBackdrop />

      <div className="relative z-10 max-w-[1350px] mx-auto py-6 px-5 md:px-8 py-20">
        {/* Heading */}
        <FadeInUp className="text-center mb-3 md:mb-8">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[68px] font-semibold text-black leading-[1.05] tracking-[-2px]">
            Kids Restroom Partitions
          </h2>

          <p className="text-[13px] md:text-[15px] text-[#242424] mt-4 max-w-[1000px] mx-auto leading-6">
            Our kids restroom partitions combine fun colors, low-height
            panels, and smooth edges to ensure safety and comfort for
            young users.
          </p>
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