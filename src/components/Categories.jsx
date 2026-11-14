
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Layers3,
  Baby,
  Droplets,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Public Restrooms Partitions",
    image: "/imgi_5_Nexus-Grand-2.webp",
    href: "/public-restroom-partitions",
    color: "#e95322",
    accent: "#ff8b45",
    icon: Users,
    size: "large",
  },
  {
    title: "Luxe Partition Systems",
    image: "/imgi_6_HPL-Compact-Board.webp",
    href: "/luxe-partition-systems",
    color: "#a77b43",
    accent: "#d8b078",
    icon: Layers3,
    size: "large",
  },
  {
    title: "Kids Restrooms Partitions",
    image: "/imgi_7_kids-cubicles.webp",
    href: "/kids-restrooms-partitions",
    color: "#638d29",
    accent: "#a4ce42",
    icon: Baby,
    size: "small",
  },
  {
    title: "Urinals Partitions",
    image: "/imgi_8_closet-urinal.webp",
    href: "/urinals-partitions",
    color: "#328bb9",
    accent: "#64c8ef",
    icon: Droplets,
    size: "small",
  },
  {
    title: "Color & Finished",
    image: "/imgi_9_sa.webp",
    href: "/colors-finished",
    color: "#078e91",
    accent: "#45d8d2",
    icon: Palette,
    size: "small",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#faf9f7] px-5 py-16 sm:px-8  sm:py-10"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-48 h-[450px] w-[450px] rounded-full border-[45px] border-[#f1ece7]/70" />

      <div className="pointer-events-none absolute -right-40 -top-64 h-[550px] w-[550px] rounded-full border-[55px] border-[#f1ece7]/60" />

      <div className="relative z-10 mx-auto max-w-[1650px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center lg:mb-14"
        >
          <div className="mb-3 flex items-center justify-center gap-5">
            <span className="h-[1px] w-12 bg-[#222]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#222] sm:text-sm">
              Explore Our Range
            </span>
            <span className="h-[1px] w-12 bg-[#222]" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#171717] sm:text-6xl lg:text-[76px]">
            Our{" "}
            <span className="text-[#123f70]">
              Categories
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#666] sm:text-lg">
            Complete restroom partition solutions designed
            for every space.
          </p>

          <div className="mx-auto mt-5 h-[4px] w-[90px] rounded-full bg-[#1684bd]" />
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* Top two large cards */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-4">
            {categories.slice(0, 2).map((category) => (
              <CategoryCard
                key={category.title}
                category={category}
                large
              />
            ))}
          </div>

          {/* Bottom three cards */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {categories.slice(2).map((category) => (
              <CategoryCard
                key={category.title}
                category={category}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ category, large = false }) {
  const Icon = category.icon;

  return (
    <motion.div variants={cardVariants} className="min-w-0">
      <Link
        href={category.href}
        className={`group relative isolate block overflow-hidden rounded-[24px] border-[2px] border-white bg-white shadow-[0_12px_25px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_40px_rgba(0,0,0,0.18)] ${
          large
            ? "h-[290px] sm:h-[340px] lg:h-[330px] xl:h-[360px]"
            : "h-[235px] sm:h-[245px] lg:h-[225px] xl:h-[245px]"
        }`}
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={category.image}
            alt={category.title}
            fill
            priority={large}
            sizes={
              large
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 1024px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
        </div>

        {/* Subtle image overlay */}
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />

        {/* Curved colored panel */}
        <div className="absolute inset-0 z-10">
          <svg
            viewBox="0 0 450 300"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <defs>
              <linearGradient
                id={`gradient-${category.title.replace(/\s/g, "")}`}
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={category.color}
                />
                <stop
                  offset="100%"
                  stopColor={category.color}
                />
              </linearGradient>
            </defs>

            <path
              d="M0 0 H220 C165 75 145 205 125 300 H0 Z"
              fill={category.color}
              opacity="0.97"
              className="transition-all duration-700 group-hover:opacity-100"
            />

            {/* Curved accent border */}
            <path
              d="M220 0 C165 75 145 205 125 300"
              fill="none"
              stroke={category.accent}
              strokeWidth="4"
              className="transition-all duration-700 group-hover:translate-x-3"
            />
          </svg>
        </div>

        {/* Content */}
        <div
          className={`absolute inset-y-0 left-0 z-20 flex flex-col items-start justify-center text-white ${
            large
              ? "w-[43%] px-5 sm:px-8 lg:px-9"
              : "w-[45%] px-5 sm:px-6 lg:px-7"
          }`}
        >
          {/* Icon */}
          <div className="mb-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
            <Icon
              strokeWidth={1.7}
              className={`${
                large ? "h-9 w-9 sm:h-12 sm:w-12" : "h-8 w-8 sm:h-10 sm:w-10"
              }`}
            />
          </div>

          {/* Title */}
          <h3
            className={`max-w-[190px] font-bold leading-[1.08] tracking-tight ${
              large
                ? "text-xl sm:text-[27px] lg:text-[25px] xl:text-[30px]"
                : "text-lg sm:text-[22px] lg:text-[21px] xl:text-[24px]"
            }`}
          >
            {category.title}
          </h3>

          {/* Arrow */}
          <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#343434] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#123f70] group-hover:text-white sm:h-11 sm:w-11">
            <ArrowUpRight
              size={24}
              strokeWidth={2.5}
            />
          </div>
        </div>

        {/* Hover shine effect */}
        <div className="pointer-events-none absolute inset-0 z-30 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]" />
      </Link>
    </motion.div>
  );
}
