
"use client";

import Image from "next/image";
import { useState } from "react";
import { DraftingCompass, Ruler, Building2 } from "lucide-react";

const aboutCards = [
  {
    title: "Our Mission",
    description:
      "Our goal is to surpass customer expectations by providing premium restroom cubicles, quality materials, and reliable installation services.",
    icon: DraftingCompass,
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to become the most trusted and admired brand in the restroom cubicle partition industry.",
    icon: Ruler,
  },
];

export default function AboutUs() {
  const [expanded, setExpanded] = useState([]);

  const toggleReadMore = (title) => {
    setExpanded((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f5f7] px-5 py-12 
      md:px-8 lg:min-h-[760px] lg:px-7 lg:py-14"
    >
      {/* Subtle vertical lines like the reference */}
      <div className="pointer-events-none absolute inset-y-0 left-[6.3%] w-px bg-black/[0.07]" />
      <div className="pointer-events-none absolute inset-y-0 right-[6.5%] w-px bg-black/[0.07]" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-[5.8%]">

        {/* LEFT IMAGE */}
        <div className="relative w-full">
          <div className="relative aspect-[1.72/1] w-full overflow-hidden rounded-[11px] border border-black/10 shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            <Image
              src="/golder-cubicles-1536x800.webp"
              alt="Premium restroom cubicle partitions"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full">
          <h2 className="text-[46px] font-bold leading-[1.1] tracking-tight text-[#191919] sm:text-[56px] lg:text-[76px]">
            About Us
          </h2>

          <div className="mb-3 mt-3 h-[2px] w-[66px] bg-black" />

          <h3 className="mb-1 text-xl font-bold leading-snug text-black sm:text-2xl">
            Toilet Cubicles Partition Manufacturer
          </h3>

          <p className="text-[15px] leading-[1.95] text-[#252525] sm:text-base">
            Our company is an amazing mix of restroom visual appeal and equally
            essential functionality. As a trusted{" "}
            <a
              href="/"
              className="font-semibold text-[#0000a8] hover:underline"
            >
              Toilet Cubicles Partition Manufacturer
            </a>
            , Team Interior Solutions cubicles offer guaranteed customer
            satisfaction. Our team makes sure that the extensive range of
            products is available for timely delivery, distribution, and
            installation by our competent technicians.
          </p>

          {/* MISSION & VISION CARDS */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:ml-4 lg:mt-10 lg:gap-[30px]">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              const isExpanded = expanded.includes(card.title);

              return (
                <article
                  key={card.title}
                  className="flex min-h-[290px] flex-col rounded-[8px] border-[1.5px] border-black bg-[#421923] p-5 text-white sm:p-5"
                >
                  <Icon
                    size={46}
                    strokeWidth={1.4}
                    className="mb-5 text-white"
                    aria-hidden="true"
                  />

                  <h4 className="mb-3 text-[22px] font-normal leading-tight">
                    {card.title}
                  </h4>

                  <p className="text-[15px] leading-[1.95] text-white">
                    {isExpanded
                      ? card.description
                      : card.description.length > 75
                        ? `${card.description.slice(0, 75).trim()}..`
                        : card.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleReadMore(card.title)}
                    aria-expanded={isExpanded}
                    className="mt-auto w-fit pt-4 text-[12px] font-bold uppercase tracking-wide transition-colors hover:text-[#e5c5cb]"
                  >
                    {isExpanded ? "Read Less −" : "Read More"}
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
