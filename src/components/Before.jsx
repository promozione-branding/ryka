
"use client";

import { useState } from "react";
import {
  MoveHorizontal,
  ShieldCheck,
  Sparkles,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

export default function Before() {
  const [position, setPosition] = useState(38);

  const features = [
    {
      icon: ShieldCheck,
      title: "Better Hygiene",
      description: "Cleaner and more hygienic restroom spaces.",
    },
    {
      icon: Layers3,
      title: "Modern Design",
      description: "Premium finishes with contemporary aesthetics.",
    },
    {
      icon: Sparkles,
      title: "Built to Last",
      description: "Durable materials and reliable performance.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f3] px-5 py-10 sm:px-8 md:py-13 lg:py-14">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[350px] w-[350px] rounded-full bg-[#FFA21A]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#0B2E63]/[0.05] blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">

        {/* LEFT - BEFORE AFTER COMPARISON */}
        <div className="relative">

          {/* Top Label */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#FFA21A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#555]">
                The Transformation
              </span>
            </div>

            <span className="text-[11px] font-medium tracking-[0.15em] text-[#999]">
              01 / 02
            </span>
          </div>

          {/* Image Frame */}
          <div className="group relative overflow-hidden rounded-[5px] border border-black/10 bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">

            <div className="relative h-[330px] w-full select-none overflow-hidden rounded-[3px] sm:h-[430px] lg:h-[510px] xl:h-[555px]">

              {/* AFTER IMAGE */}
              <img
                src="/after.webp"
                alt="Modern restroom cubicles after renovation"
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* AFTER IMAGE LABEL */}
              <div className="absolute right-4 top-4 z-10 bg-[#0B2E63] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg sm:right-6 sm:top-6">
                After
              </div>

              {/* BEFORE IMAGE */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
              >
                <img
                  src="/before.webp"
                  alt="Old restroom cubicles before renovation"
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* BEFORE LABEL */}
                <div className="absolute left-4 top-4 bg-black/65 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:left-6 sm:top-6">
                  Before
                </div>
              </div>

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

              {/* DIVIDER */}
              <div
                className="pointer-events-none absolute bottom-0 top-0 z-20 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
                style={{ left: `${position}%` }}
              />

              {/* SLIDER HANDLE */}
              <div
                className="pointer-events-none absolute top-1/2 z-20 flex h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#FFA21A] text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] sm:h-[54px] sm:w-[54px]"
                style={{ left: `${position}%` }}
              >
                <MoveHorizontal size={22} strokeWidth={2.2} />
              </div>

              {/* RANGE INPUT */}
              <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                aria-label="Compare before and after images"
                className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>
          </div>

          {/* Bottom Image Caption */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#777]">
              Drag to experience the difference
            </p>

            <div className="flex items-center gap-2 text-[#0B2E63]">
              <MoveHorizontal size={15} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                Interactive Comparison
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div className="relative py-2 lg:py-0">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#FFA21A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B2E63]">
              Upgrade Your Restroom
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[600px] text-[34px] font-normal leading-[1.17] tracking-[-0.035em] text-[#171717] sm:text-[43px] md:text-[48px] xl:text-[53px]">
            From Cluttered & Unhygienic to{" "}
            <span className="relative inline-block font-semibold text-[#0B2E63]">
              Clean & Contemporary
              <span className="absolute -bottom-1 left-0 h-[3px] w-[70%] bg-[#FFA21A]" />
            </span>
          </h2>

          {/* Dotted Divider */}
          <div className="mb-7 mt-8 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-[#FFA21A]" />
            <span className="h-[2px] w-2 border-t-2 border-dotted border-[#777]" />
          </div>

          {/* Description */}
          <div className="space-y-5 text-[14px] leading-[1.95] text-[#555] sm:text-[15px]">

            <p>
              Say goodbye to outdated restroom spaces marked by rusted
              hardware, poor layouts, and compromised hygiene. As a leading{" "}
              <strong className="font-semibold text-[#222]">
                toilet cubicle partition supplier
              </strong>{" "}
              and{" "}
              <strong className="font-semibold text-[#222]">
                bathroom partition manufacturer
              </strong>
              , Ryka Restroom Cubicles transforms your restrooms into smart,
              durable, and elegantly designed environments.
            </p>

            <p>
              Our modular{" "}
              <strong className="font-semibold text-[#222]">
                restroom partition systems
              </strong>{" "}
              are crafted for modern aesthetics, maximum privacy, and
              long-lasting performance. Whether you're searching for a{" "}
              <strong className="font-semibold text-[#222]">
                toilet cubicle partition near me
              </strong>{" "}
              or need a trusted{" "}
              <strong className="font-semibold text-[#222]">
                restroom partition distributor
              </strong>
              , Ryka is your one-stop solution — where luxury meets hygiene
              effortlessly.
            </p>
          </div>

          {/* Feature Points */}
          <div className="mt-9 grid grid-cols-1 gap-4 border-t border-black/10 pt-7 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0B2E63] text-[#FFA21A]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-semibold text-[#171717]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-[1.6] text-[#777]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

         

        </div>
      </div>
    </section>
  );
}
