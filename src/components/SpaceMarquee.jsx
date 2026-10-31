"use client";

const spaces = [
  { name: "HOTELS & HOSPITALITY", icon: "🏨" },
  { name: "AIRPORTS & TRANSIT", icon: "✈️" },
  { name: "GYMS & POOLS", icon: "🏋️" },
  { name: "INDUSTRIAL FACILITIES", icon: "🏭" },
  { name: "CORPORATE OFFICES", icon: "🏢" },
  { name: "MALLS & RETAIL", icon: "🛍️" },
  { name: "EDUCATIONAL INSTITUTES", icon: "🏫" },
  { name: "HOSPITALS & HEALTHCARE", icon: "🏥" },
];

export default function SpaceMarquee() {
  return (
    <section className="w-full bg-[#faf8f3] py-12 overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-5">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-[1px] bg-[#b68a39]" />

          <span className="text-[10px] font-semibold tracking-[3px] text-[#936c2e] uppercase">
            Built for every kind of space
          </span>
        </div>

        {/* Marquee Container */}
        <div className="relative max-w-[1240px] mx-auto overflow-hidden">

          {/* Left Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#faf8f3] via-[#faf8f3]/80 to-transparent" />

          {/* Right Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#faf8f3] via-[#faf8f3]/80 to-transparent" />

          {/* Marquee */}
          <div className="flex w-max animate-space-marquee hover:[animation-play-state:paused]">

            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex items-center gap-[10px] pr-[10px]"
                aria-hidden={group === 1}
              >
                {spaces.map((space, index) => (
                  <div
                    key={`${group}-${index}`}
                    className="h-[58px] px-5 md:px-6 border border-[#e6ddcf] bg-white flex items-center gap-3 shrink-0"
                  >
                    <div className="w-[33px] h-[33px] bg-[#f4edda] flex items-center justify-center text-[19px]">
                      {space.icon}
                    </div>

                    <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.5px] text-[#292929] whitespace-nowrap">
                      {space.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}

          </div>
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
          animation: spaceMarquee 35s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .animate-space-marquee {
            animation-duration: 28s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-space-marquee {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
