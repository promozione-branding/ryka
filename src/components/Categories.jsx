
"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Public Restrooms Partitions",
    image: "/imgi_5_Nexus-Grand-2.webp",
    href: "/public-restroom-partitions",
    color: "#f04412",
    layout: "large",
  },
  {
    title: "Luxe Partition Systems",
    image: "/imgi_6_HPL-Compact-Board.webp",
    href: "/luxe-partition-systems",
    color: "#8d6938",
    layout: "large",
  },
  {
    title: "Kids Restrooms Partitions",
    image: "/imgi_7_kids-cubicles.webp",
    href: "/kids-restroom-partitions",
    color: "#5d8425",
    layout: "small",
  },
  {
    title: "Urinals Partitions",
    image: "/imgi_8_closet-urinal.webp",
    href: "/urinal-partitions",
    color: "#4689b7",
    layout: "small",
  },
  {
    title: "Color & Finished",
    image: "/imgi_9_sa.webp",
    href: "/colors-and-finishes",
    color: "#00a5a5",
    layout: "small",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="w-full bg-[#e5e5e5] px-5 py-8 sm:px-8 lg:px-10 lg:py-6"
    >
      <div className="mx-auto max-w-[1250px]">
        {/* SECTION HEADING */}
        <div className="mb-7 text-center sm:mb-8">
          <h2 className="text-[40px] font-semibold leading-tight tracking-tight text-[#191919] sm:text-[54px] lg:text-[72px]">
            Our Categories
          </h2>

          <div className="mx-auto mt-1 h-px w-[60px] bg-[#777]" />
        </div>

        {/* TOP TWO LARGE CARDS */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3">
          {categories.slice(0, 2).map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
              large
            />
          ))}
        </div>

        {/* BOTTOM THREE SMALL CARDS */}
        <div className="mt-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[13px]">
          {categories.slice(2).map((category) => (
            <CategoryCard
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, large = false }) {
  return (
    <Link
      href={category.href}
      className={`group block rounded-[6px] p-[20px] transition-transform duration-300 hover:-translate-y-1 ${
        large ? "h-[280px] sm:h-[320px] lg:h-[344px]" : "h-[240px]"
      }`}
      style={{ backgroundColor: category.color }}
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[15px] ${
          large ? "" : ""
        }`}
      >
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes={
            large
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />

        {/* CENTERED TITLE */}
        <div className="absolute inset-0 flex items-center justify-center px-3 text-center">
          <h3
            className={`max-w-[95%] font-semibold leading-[1.15] text-white drop-shadow-md ${
              large
                ? "text-[25px] sm:text-[30px]"
                : "text-[23px] sm:text-[25px]"
            }`}
          >
            {category.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
