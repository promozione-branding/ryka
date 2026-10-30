
"use client";

import { useState } from "react";

export default function Before() {
  const [position, setPosition] = useState(38);

  return (
    <section className="w-full bg-[#f0f0f0] py-8 md:py-10 px-5 md:px-6 overflow-hidden">

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-10 items-center">

        {/* ================= BEFORE AFTER IMAGE ================= */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[553px] rounded-[4px] overflow-hidden select-none">

          {/* AFTER IMAGE - BASE */}
          <img
            src="/images/restroom-after.jpg"
            alt="Modern restroom cubicle after renovation"
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* BEFORE IMAGE - CLIPPED */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <img
              src="/images/restroom-before.jpg"
              alt="Old restroom before renovation"
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* BEFORE LABEL */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/25 backdrop-blur-sm px-5 py-3 text-white text-xs sm:text-sm tracking-wide">
            Before
          </div>

          {/* AFTER LABEL */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/25 backdrop-blur-sm px-5 py-3 text-white text-xs sm:text-sm tracking-wide">
            After
          </div>

          {/* SLIDER DIVIDER */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white -translate-x-1/2 pointer-events-none"
            style={{ left: `${position}%` }}
          />

          {/* SLIDER HANDLE */}
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[42px] h-[42px] rounded-full border-[3px] border-white bg-black/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <span className="text-[22px] font-light leading-none">
              ◀
            </span>
            <span className="text-[22px] font-light leading-none -ml-1">
              ▶
            </span>
          </div>

          {/* RANGE INPUT */}
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Compare before and after images"
            className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize"
          />

        </div>


        {/* ================= RIGHT CONTENT ================= */}
        <div className="w-full py-3 lg:py-0">

          <h2 className="text-[30px] sm:text-[38px] md:text-[42px] lg:text-[40px] xl:text-[42px] font-normal leading-[1.2] text-[#111111]">
            From Cluttered & Unhygienic to Clean & Contemporary
          </h2>

          {/* Dotted Divider */}
          <div className="w-[66px] border-t-2 border-dotted border-black mt-6 mb-8" />

          <div className="space-y-5 text-[14px] md:text-[15px] text-[#111111] leading-[1.95] text-justify">

            <p>
              Say goodbye to outdated restroom spaces marked by rusted
              hardware, poor layouts, and compromised hygiene. As a leading{" "}
              <strong>toilet cubicle partition supplier</strong> and{" "}
              <strong>bathroom partition manufacturer</strong>, Ryka
              Restroom Cubicles transforms your restrooms into smart,
              durable, and elegantly designed environments.
            </p>

            <p>
              Our modular{" "}
              <strong>restroom partition systems</strong> are crafted for
              modern aesthetics, maximum privacy, and long-lasting
              performance. Whether you're searching for a{" "}
              <strong>toilet cubicle partition near me</strong> or need a
              trusted{" "}
              <strong>restroom partition distributor</strong>, Ryka is
              your one-stop solution — where luxury meets hygiene
              effortlessly.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
