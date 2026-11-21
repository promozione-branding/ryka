
"use client";

import { Check } from "lucide-react";

import { motion } from "framer-motion";

const whyRyka = [
  "Premium Quality Products",
  "Reliable & Consistent Standards",
  "Built for Modern Commercial Spaces",
  "Durable & Easy to Maintain",
];

export default function SpaceMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-6 md:py-8">

      {/* Background details */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5a15c]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5a15c]/50 to-transparent" />

      <div className="max-w-[1500px] mx-auto">

        {/* SECTION HEADER */}
        <div className="px-5 lg:px-16 mb-5 md:mb-7">

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-[#b68a39]" />

                <span className="text-[10px] md:text-[11px] font-bold tracking-[3px] text-[#936c2e] uppercase">
                  Spaces we serve
                </span>
              </div>

              <h2 className=" text-[32px] sm:text-[38px] md:text-[48px] leading-[1.12] text-[#202020] max-w-[650px]">
                Designed for every space.
                <span className="block text-[#b68a39] ">
                  Trusted across industries.
                </span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[430px] border-l-2 border-[#c5a15c] bg-white/70 px-5 py-5 shadow-[0_12px_35px_rgba(71,61,42,0.06)] md:px-7 md:py-6"
            >
              <h3 className="mb-1 text-[26px] font-semibold leading-tight text-[#202020] md:text-[30px]">
                RYKA
              </h3>
              <p className="mb-5 text-sm font-medium leading-6 text-[#936c2e] md:text-[15px]">
                Premium Toilet Cubicles Built for Modern Spaces
              </p>

              <div className="border-t border-[#e8dfce] pt-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[#202020]">
                  Why Choose RYKA?
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {whyRyka.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[12px] leading-5 text-[#777166]"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#b68a39] text-white">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

        </div>

      

        {/* BOTTOM NOTE */}
        <div className="px-5 lg:px-16 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-[10px] md:text-[11px] uppercase tracking-[2px] text-[#9a907e]">
            One solution. Multiple environments.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b68a39]" />
            <span className="text-[11px] text-[#8b806e]">
              Serving diverse spaces with confidence
            </span>
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          :global(.motion-reduce) {
            animation: none !important;
          }
        }
      `}</style>

    </section>
  );
}
