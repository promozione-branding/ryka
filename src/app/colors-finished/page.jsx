
"use client";

import React from "react";

const colors = [
  // Row 1
  { color: "#A99B8D" },
  { color: "#FFD095" },
  { color: "#704332", image: "/color-finished/wood-1.webp" },
  { color: "#E4CDA6", image: "/color-finished/wood-2.webp" },
  { color: "#77797A" },
  { color: "#D7D9BD", image: "/color-finished/texture-1.webp" },
  { color: "#D6B5A6" },
  { color: "#B8A28C", image: "/color-finished/wood-3.webp" },
  { color: "#DCC49B", image: "/color-finished/wood-4.webp" },
  { color: "#F47728" },
  { color: "#D8B98F" },
  { color: "#54222C", image: "/color-finished/wood-5.webp" },

  // Row 2
  { color: "#453421" },
  { color: "#ED3029" },
  { color: "#0063A9" },
  { color: "#050505" },
  { color: "#A0834C" },
  { color: "#FFFFFF" },
  { color: "#D9CFC2" },
  { color: "#F7EDC1" },
  { color: "#C6C5C1" },
  { color: "#BEB49C" },
  { color: "#D4AD49" },
  { color: "#E9DD31" },

  // Row 3
  { color: "#F1DF30" },
  { color: "#438C70" },
  { color: "#8BC33E" },
  { color: "#55353D" },
  { color: "#9B9588", image: "/color-finished/texture-2.webp" },
  { color: "#515C72" },
  { color: "#B5A17A" },
  { color: "#8DA4B7" },
  { color: "#55534C" },
  { color: "#78685B", image: "/color-finished/wood-6.webp" },
  { color: "#74777A", image: "/color-finished/texture-3.webp" },
  { color: "#B9B8B3" },

  // Row 4
  { color: "#57565A" },
  { color: "#424548" },
  { color: "#39494A" },
  { color: "#747A69" },
  { color: "#C6C0B9" },
  { color: "#515052" },
  { color: "#45474A" },
  { color: "#E3E5BE" },
  { color: "#B6A775" },
  { color: "#B68C50" },
  { color: "#A9635F" },
  { color: "#572322" },

  // Row 5
  { color: "#382231" },
  { color: "#202222" },
  { color: "#24566D" },
  { color: "#424457" },
  { color: "#537638" },
  { color: "#A8E2B5" },
  { color: "#DCE52D" },
  { color: "#B4A18B", image: "/color-finished/wood-7.webp" },
  { color: "#785B45", image: "/color-finished/wood-8.webp" },
  { color: "#D2CBB8", image: "/color-finished/texture-4.webp" },
  { color: "#D5BFB2", image: "/color-finished/wood-9.webp" },
  { color: "#BCA68D", image: "/color-finished/wood-10.webp" },

  // Row 6
  { color: "#D0D0CD", image: "/color-finished/marble-1.webp" },
  { color: "#BBA78B", image: "/color-finished/wood-11.webp" },
  { color: "#D0DED1", image: "/color-finished/texture-5.webp" },
  { color: "#B9CED9", image: "/color-finished/texture-6.webp" },
  { color: "#F0E8D7", image: "/color-finished/texture-7.webp" },
  { color: "#D8C09B", image: "/color-finished/wood-12.webp" },
  { color: "#92938F", image: "/color-finished/stone-1.webp" },
  { color: "#996343", image: "/color-finished/wood-13.webp" },
  { color: "#77716B", image: "/color-finished/stone-2.webp" },
  { color: "#24536B" },
  { color: "#E0E0DB", image: "/color-finished/stone-3.webp" },
];

export default function ColorFinished() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= COLOR & FINISHED ================= */}

      <section
        className="relative w-full overflow-hidden bg-[#EDE8D4] px-4 pb-7 pt-10 md:px-8 md:pb-8 md:pt-10"
        style={{
          backgroundImage: "url('/Flowers-1-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top-center",
        }}
      >
        {/* Light overlay */}
        <div className="absolute inset-0 bg-[#EEE9D6]/90" />

        <div className="relative z-10 mx-auto max-w-[1250px]">
<h1 className="color-heading text-center text-[36px] font-bold leading-tight tracking-tight text-black sm:text-[46px] md:text-[56px] lg:text-[64px]">
  {"Color & Finished".split("").map((letter, index) => (
    <span
      key={index}
      className="color-letter"
      style={{ "--i": index }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</h1>

          {/* Subtitle */}
          <p className="mt-3 text-center text-[12px] leading-relaxed text-gray-800 sm:text-sm md:text-base">
            Choose from vibrant shades, textures, and premium finishes to
            perfectly match your restroom interiors.
          </p>

          {/* Layered Finish Diagram */}
          <div className="mx-auto mt-8 flex  w-full  items-center justify-center 
          sm:mt-10 max-w-[900px] ">
            <img
              src="/color-1536x960.webp"
              alt="RYKA laminate finish material layers"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Color Swatches */}
          <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-2.5 md:grid-cols-8 md:gap-3 lg:grid-cols-12">

            {colors.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[1.25/1] cursor-pointer overflow-hidden border border-white/80 shadow-sm transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: item.color,
                  backgroundImage: item.image
                    ? `url('${item.image}')`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                title={`Finish ${index + 1}`}
              />
            ))}

            {/* More Button */}
            <div className="flex aspect-[1.25/1] cursor-pointer items-center justify-center border border-white bg-[#D0D0D0] text-[13px] font-bold text-black transition hover:bg-white sm:text-sm">
              & MORE
            </div>

          </div>

        </div>
      </section>

      {/* ================= CUBICLE SHOWCASE ================= */}

      <section className="relative w-full overflow-hidden bg-[#e8e8e8]">

        <img
          src="/sa-1536x800.webp"
          alt="RYKA restroom cubicles in multiple colors and finishes"
          className="block h-auto min-h-[300px] w-full object-cover object-center sm:min-h-[400px] lg:min-h-0"
          loading="lazy"
        />

      </section>

    </main>
  );
}
