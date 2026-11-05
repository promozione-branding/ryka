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
} from "lucide-react";
import { motion } from "framer-motion";
const spaces = [
  { name: "Hotels & Hospitality", sub: "Lobbies, suites, spas", icon: Hotel },
  { name: "Airports & Transit", sub: "High-traffic terminals", icon: Plane },
  { name: "Gyms & Pools", sub: "Moisture-resistant", icon: Dumbbell },
  { name: "Industrial Facilities", sub: "Heavy-duty use", icon: Factory },
  { name: "Corporate Offices", sub: "Sleek, professional", icon: Building2 },
  { name: "Malls & Retail", sub: "Built for footfall", icon: ShoppingBag },
  { name: "Educational Institutes", sub: "Safe & durable", icon: GraduationCap },
  { name: "Hospitals & Healthcare", sub: "Hygienic finishes", icon: HeartPulse },
];

export default function SpaceMarquee() {
  return (
    <section className="relative w-full bg-[#faf8f3] py-14 md:py-16 overflow-hidden">
      {/* subtle top/bottom gold hairlines */}
{/* Edge fades */}
<div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 z-20 pointer-events-none bg-gradient-to-r from-[#faf8f3] to-transparent" />
<div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 z-20 pointer-events-none bg-gradient-to-l from-[#faf8f3] to-transparent" />
<div className="max-w-[1600px] mx-auto px-5">
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <span className="w-11 h-[1px] bg-[#b68a39]" />
            <span className="text-[11px] font-bold tracking-[3px] text-[#936c2e] uppercase">
              Built for every kind of space
            </span>
          </div>

          <h2 className="font-serif text-[26px] md:text-[32px] leading-tight text-[#1c1c1c]">
            Trusted across <span className="text-[#b68a39]">every industry</span>
          </h2>
        </div>

        {/* Marquee Container */}
<div className="relative max-w-[1500px] mx-auto overflow-hidden py-2">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#faf8f3] via-[#faf8f3]/80 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#faf8f3] via-[#faf8f3]/80 to-transparent" />

          {/* Marquee */}
<motion.div
  className="flex w-max"
  animate={{ x: ["0%", "-50%"] }}
  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
>
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex items-center gap-3 pr-3"
                aria-hidden={group === 1}
              >
                {spaces.map((space, index) => {
                  const Icon = space.icon;
                  return (
                    <div
                      key={`${group}-${index}`}
                      className="group h-[72px] pl-3 pr-6 rounded-[4px] border border-[#e6ddcf] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex items-center gap-3.5 shrink-0 cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b431] hover:shadow-[0_8px_20px_rgba(182,138,57,0.18)]"
                    >
                      <div className="w-[46px] h-[46px] rounded-[3px] bg-gradient-to-br from-[#f8efd2] to-[#efe0b0] flex items-center justify-center text-[#936c2e] transition-all duration-300 group-hover:from-[#d9b431] group-hover:to-[#b68a39] group-hover:text-white">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>

                      <div className="leading-tight">
                        <p className="text-[13px] md:text-[14px] font-semibold text-[#1f1f1f] whitespace-nowrap">
                          {space.name}
                        </p>
                        <p className="mt-1 text-[11px] text-[#8a8274] whitespace-nowrap">
                          {space.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spaceMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-space-marquee {
          animation: spaceMarquee 40s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .animate-space-marquee {
            animation-duration: 30s;
          }
        }

@media (prefers-reduced-motion: reduce) {
  .animate-space-marquee {
    animation-duration: 90s;
  }
}
      `}</style>
    </section>
  );
}