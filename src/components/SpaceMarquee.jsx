
"use client";

import {
  Hotel,
  Plane,
  Dumbbell,
  Factory,
  Building2,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const spaces = [
  { name: "Hotels & Hospitality", sub: "Lobbies, suites & spas", icon: Hotel, number: "01" },
  { name: "Airports & Transit", sub: "High-traffic terminals", icon: Plane, number: "02" },
  { name: "Gyms & Pools", sub: "Moisture-resistant spaces", icon: Dumbbell, number: "03" },
  { name: "Industrial Facilities", sub: "Built for demanding use", icon: Factory, number: "04" },
  { name: "Corporate Offices", sub: "Modern professional spaces", icon: Building2, number: "05" },
  { name: "Malls & Retail", sub: "Designed for high footfall", icon: ShoppingBag, number: "06" },
  { name: "Educational Institutes", sub: "Safe & durable solutions", icon: GraduationCap, number: "07" },
  { name: "Hospitals & Healthcare", sub: "Clean & hygienic spaces", icon: HeartPulse, number: "08" },
];

export default function SpaceMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f3] py-6 md:py-12">

      {/* Background details */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5a15c]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5a15c]/50 to-transparent" />

      <div className="max-w-[1500px] mx-auto">

        {/* SECTION HEADER */}
        <div className="px-5 lg:px-16 mb-10 md:mb-14">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

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

            <p className="text-sm md:text-[15px] leading-7 text-[#777166] max-w-[360px] md:pb-1">
              From hospitality to healthcare, our solutions bring lasting
              quality, functionality and refined design to every environment.
            </p>

          </div>

        </div>

        {/* MARQUEE */}
        <div className="relative">

          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#faf8f3] to-transparent" />

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#faf8f3] to-transparent" />

          <div className="overflow-hidden py-5">

            <motion.div
              className="flex w-max gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 45,
                ease: "linear",
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >

              {[0, 1].map((group) => (
                <div
                  key={group}
                  className="flex shrink-0 gap-5"
                  aria-hidden={group === 1}
                >

                  {spaces.map((space) => {
                    const Icon = space.icon;

                    return (
                      <div
                        key={`${group}-${space.number}`}
                        className="group relative w-[260px] md:w-[290px] min-h-[150px] md:min-h-[165px] bg-white border border-[#e9e1d4] rounded-2xl p-5 md:p-6 shadow-[0_5px_25px_rgba(50,40,20,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c6a15d] hover:shadow-[0_18px_40px_rgba(91,67,29,0.12)]"
                      >

                        {/* Number */}
                        <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest text-[#c5b99f]">
                          {space.number}
                        </span>

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-[#f7f1e5] flex items-center justify-center text-[#a17a36] transition-all duration-500 group-hover:bg-[#b68a39] group-hover:text-white group-hover:rotate-[-5deg]">
                          <Icon size={23} strokeWidth={1.6} />
                        </div>

                        {/* Content */}
                        <div className="mt-5 flex items-end justify-between gap-2">

                          <div>
                            <h3 className="text-[14px] md:text-[15px] font-semibold text-[#26231f] tracking-tight">
                              {space.name}
                            </h3>

                            <p className="text-[11px] md:text-xs text-[#92897b] mt-1.5">
                              {space.sub}
                            </p>
                          </div>

                          <div className="w-7 h-7 shrink-0 rounded-full border border-[#e8dfd0] flex items-center justify-center text-[#a17a36] transition-all duration-300 group-hover:bg-[#b68a39] group-hover:border-[#b68a39] group-hover:text-white">
                            <ArrowUpRight size={14} />
                          </div>

                        </div>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#b68a39] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                      </div>
                    );
                  })}

                </div>
              ))}

            </motion.div>

          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="px-5 lg:px-16 mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">

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
