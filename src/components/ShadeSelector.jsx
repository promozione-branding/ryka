
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shades = [
  { name: "Arctic White", code: "1001 AC", color: "#F3F1EA", dark: "#DCD9CF" },
  { name: "Ivory", code: "1002 AC", color: "#EFE6D2", dark: "#D6C9AF" },
  { name: "Silver Grey", code: "1003 AC", color: "#D4DBDF", dark: "#AEB8C0" },
  { name: "Cloud Grey", code: "1004 AC", color: "#C5CBD0", dark: "#A0A8B0" },
  { name: "Champagne", code: "1005 AC", color: "#D8C6A6", dark: "#BBA37C" },
  { name: "Golden Oak", code: "1006 AC", color: "#B99B6B", dark: "#96794F" },
  { name: "Sun Yellow", code: "1007 AC", color: "#F3D16A", dark: "#D1A83D" },
  { name: "Orange", code: "1008 AC", color: "#F19A48", dark: "#CF7831" },
  { name: "Ruby Red", code: "1009 AC", color: "#BE242D", dark: "#901A23" },
  { name: "Royal Blue", code: "1010 AC", color: "#20509E", dark: "#15376F" },
  { name: "Graphite", code: "1011 AC", color: "#454B50", dark: "#303438" },
  { name: "Black", code: "1012 AC", color: "#1D1D1F", dark: "#080808" },
  { name: "Stone Grey", code: "1013 AC", color: "#898379", dark: "#6D675F" },
  { name: "Walnut Brown", code: "1014 AC", color: "#69482F", dark: "#49301F" },
  { name: "Maple", code: "1015 AC", color: "#C99B6B", dark: "#A87B50" },
  { name: "Teak", code: "1016 AC", color: "#A77C4F", dark: "#805B37" },
  { name: "Sapele", code: "1022 AC", color: "#80432D", dark: "#63301F" },
  { name: "Dark Sapele", code: "1023 AC", color: "#3E2D26", dark: "#291D19" },
  { name: "Forest Green", code: "1024 AC", color: "#385C45", dark: "#25412F" },
  { name: "Ocean Blue", code: "1025 AC", color: "#315F80", dark: "#20445E" },
  { name: "Sand Beige", code: "1026 AC", color: "#C8B59A", dark: "#A28D71" },
  { name: "Deep Maroon", code: "1027 AC", color: "#642F3B", dark: "#48212B" },
];

const finishes = [
  "Matte",
  "Gloss",
  "Woodgrain",
  "Printed / Branded",
];

export default function ShadeSelector() {
  const [selectedShade, setSelectedShade] = useState(16);
  const [selectedFinish, setSelectedFinish] = useState("Woodgrain");

  const shade = shades[selectedShade];

  const handleQuote = () => {
    const quoteDetails = {
      shade: shade.name,
      shadeCode: shade.code,
      color: shade.color,
      finish: selectedFinish,
    };

    window.dispatchEvent(
      new CustomEvent("shadeQuote", {
        detail: quoteDetails,
      })
    );

    const form = document.querySelector("#quote-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <section className="w-full bg-[#f4f5f8] py-10 md:py-16 px-4">

      <div className="max-w-[1224px] mx-auto relative overflow-hidden rounded-[4px] border border-[#d5ad35] bg-gradient-to-br from-[#0b2147] via-[#12376b] to-[#204a89] text-white">

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 px-6 md:px-10 lg:px-[52px] py-10 md:py-[50px]">

          {/* LEFT SIDE */}
          <div>

            {/* Heading */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-[1px] bg-[#d9b42e]" />
              <span className="text-[#e2b832] text-[11px] font-bold tracking-[3px] uppercase">
                Shade Selector
              </span>
            </div>

            <h2 className="font-serif text-[31px] md:text-[38px] leading-tight mb-2">
              Try a shade on the cubicles
            </h2>

            <p className="text-[#c5cbd4] text-[15px] leading-[27px] max-w-[560px]">
              25+ colours with matte, gloss and woodgrain finishes
              — plus printed laminates for branding. Tap a swatch
              to preview it. Your pick carries into the quote form.
            </p>

            {/* Cubicle Preview */}
            <div className="mt-6 border border-[#b99a39]/50 bg-[#07162e] p-[10px] rounded-[2px]">

              <div className="h-[230px] sm:h-[255px] flex items-stretch overflow-hidden">

                {[0, 1, 2, 3, 4, 5].map((panel, index) => (
                  <motion.div
                    key={`${selectedShade}-${selectedFinish}-${panel}`}
                    initial={{
                      opacity: 0.65,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.045,
                      ease: "easeOut",
                    }}
                    className="relative border-r-[2px] border-black/20"
                    style={{
                      flex: index === 0 || index === 2 || index === 4
                        ? "0.85"
                        : "1.25",
                      backgroundColor:
                        selectedFinish === "Gloss"
                          ? shade.color
                          : selectedFinish === "Matte"
                          ? shade.color
                          : shade.color,
                      backgroundImage:
                        selectedFinish === "Woodgrain"
                          ? `repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.035) 2px, transparent 5px), linear-gradient(90deg, ${shade.dark}, ${shade.color}, ${shade.dark})`
                          : selectedFinish === "Gloss"
                          ? `linear-gradient(115deg, rgba(255,255,255,0.42), transparent 35%, rgba(255,255,255,0.12) 65%, transparent)`
                          : selectedFinish === "Printed / Branded"
                          ? `linear-gradient(135deg, ${shade.color}, ${shade.dark})`
                          : "none",
                    }}
                  >

                    {/* Panel Handle */}
                    <div className="absolute top-1/2 right-[16%] -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-gradient-to-br from-[#fff0a0] via-[#caa74a] to-[#7e6224] shadow-[0_1px_5px_rgba(0,0,0,0.5)] border border-[#a48737]" />

                    {selectedFinish === "Printed / Branded" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white/40 rotate-[-90deg] tracking-widest">
                          RYKA
                        </span>
                      </div>
                    )}

                  </motion.div>
                ))}

              </div>

              {/* Bottom Base */}
              <div className="h-[14px] bg-gradient-to-b from-[#244574] to-[#071b3d] border-t border-[#41618a]" />

            </div>

            {/* Selected Shade Information */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

              <div>
                <p className="text-[10px] text-[#c2a24e] font-bold tracking-[2px] uppercase mb-1">
                  Now Previewing
                </p>

                <AnimatePresence mode="wait">
                  <motion.h3
                    key={shade.code + selectedFinish}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif text-[23px] md:text-[25px] font-bold"
                  >
                    {shade.name} · {shade.code} · {selectedFinish}
                  </motion.h3>
                </AnimatePresence>
              </div>

              <button
                onClick={handleQuote}
                className="bg-[#d9b431] text-[#111827] px-5 py-4 text-[11px] font-bold tracking-[1.5px] hover:bg-[#f0cd4b] transition-all duration-300"
              >
                QUOTE IN THIS SHADE →
              </button>

            </div>

            {/* Finish Buttons */}
            <div className="flex flex-wrap gap-2 mt-6">

              {finishes.map((finish) => (
                <button
                  key={finish}
                  onClick={() => setSelectedFinish(finish)}
                  className={`px-4 py-3 text-[11px] font-bold tracking-[0.5px] border transition-all duration-300 ${
                    selectedFinish === finish
                      ? "bg-[#d9b431] border-[#d9b431] text-[#101827]"
                      : "bg-[#244675]/70 border-[#52698c] text-[#d3dce8] hover:border-[#d9b431]"
                  }`}
                >
                  {finish.toUpperCase()}
                </button>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Colour Swatches */}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-[9px]">

              {shades.map((item, index) => (
                <motion.button
                  key={item.code}
                  onClick={() => setSelectedShade(index)}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.93 }}
                  title={`${item.name} - ${item.code}`}
                  aria-label={`Select ${item.name}`}
                  aria-pressed={selectedShade === index}
                  className={`relative aspect-square w-full rounded-[2px] border-2 transition-all duration-200 ${
                    selectedShade === index
                      ? "border-[#e6bc28] outline outline-1 outline-[#e6bc28] outline-offset-[2px] z-10"
                      : "border-white/10 hover:border-white/60"
                  }`}
                  style={{
                    backgroundColor: item.color,
                  }}
                >
                  {selectedShade === index && (
                    <motion.span
                      layoutId="selected-shade"
                      className="absolute inset-0 border border-black/20"
                    />
                  )}
                </motion.button>
              ))}

            </div>

            {/* Description */}
            <p className="text-[#b9c7d9] text-[13px] leading-[24px] mt-7">
              Showing: {shades.length} of 25+ shades from Ryka's
              Shade Spectrum. Woodgrains and printed laminates
              are available on request — ask for the full chart
              with your quote.
            </p>

            {/* Selected Colour Details */}
            <div className="mt-8 pt-5 border-t border-white/15 flex items-center gap-4">

              <motion.div
                key={shade.color}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-12 h-12 rounded-sm border border-white/30 shadow-lg"
                style={{ backgroundColor: shade.color }}
              />

              <div>
                <p className="text-[10px] uppercase tracking-[2px] text-[#d5b342]">
                  Selected Colour
                </p>
                <p className="text-sm font-semibold mt-1">
                  {shade.name} ({shade.code})
                </p>
              </div>

              <div className="ml-auto text-right">
                <p className="text-[10px] uppercase tracking-[2px] text-[#d5b342]">
                  Finish
                </p>
                <p className="text-sm font-semibold mt-1">
                  {selectedFinish}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
