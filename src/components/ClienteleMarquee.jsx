"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { clients } from "@/lib/clientele";

export default function ClienteleMarquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="clientele-marquee-heading"
      className="relative overflow-hidden border-y border-[#e7e5df] bg-[#f5f5f7] py-12 md:py-16"
    >
      <div className="mx-auto mb-8 max-w-[1400px] px-5 text-center sm:px-8 md:mb-10">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#D6A927]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#026eb6] sm:text-[11px]">
            Trusted partnerships
          </span>
          <span className="h-[2px] w-8 bg-[#D6A927]" />
        </div>
        <h2
          id="clientele-marquee-heading"
          className="text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl"
        >
          Trusted by industry leaders
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#666]">
          Proud to create better spaces for organisations across India.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f5f5f7] to-transparent sm:w-20 md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f5f5f7] to-transparent sm:w-20 md:w-28" />

        <motion.div
          className="flex w-max"
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 140, ease: "linear", repeat: Infinity }
          }
        >
          {[0, 1].map((group) => (
            <ul
              key={group}
              aria-hidden={group === 1}
              className="flex shrink-0 items-center gap-3 pr-3 sm:gap-5 sm:pr-5"
            >
              {clients.map((client) => (
                <li
                  key={`${group}-${client.image}`}
                  className="group flex h-[88px] w-[142px] shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white px-4 shadow-[0_5px_20px_rgba(20,35,55,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#D6A927]/50 hover:shadow-[0_10px_26px_rgba(20,35,55,0.10)] sm:h-[100px] sm:w-[170px]"
                >
                  <Image
                    src={`/clientele/${client.image}`}
                    alt={group === 0 ? client.name : ""}
                    width={170}
                    height={100}
                    sizes="(max-width: 640px) 142px, 170px"
                    className="h-full w-full object-contain opacity-80 transition duration-300 group-hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
