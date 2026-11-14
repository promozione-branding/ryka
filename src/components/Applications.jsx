
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Stethoscope,
  UtensilsCrossed,
  Building2,
  GraduationCap,
  TreePine,
  Dumbbell,
  BedDouble,
  Home,
  Factory,
  Plane,
  Briefcase,
  Film,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const applications = [
  {
    name: "Hospitals",
    icon: Stethoscope,
    image: "/applications/hospitals.webp",
  },
 
  {
    name: "Schools & Universities",
    icon: GraduationCap,
    image: "/applications/schools.webp",
  },
  {
    name: "Parks",
    icon: TreePine,
    image: "/applications/park.webp",
  },
  {
    name: "Fitness Centers",
    icon: Dumbbell,
    image: "/applications/fitness.webp",
  },
  {
    name: "Hotels",
    icon: BedDouble,
    image: "/applications/hotels.webp",
  },
  {
    name: "Retirement Homes",
    icon: Home,
    image: "/applications/retirement.webp",
  },
  {
    name: "Industrial Areas",
    icon: Factory,
    image: "/applications/industrial.webp",
  },
  {
    name: "Airports",
    icon: Plane,
    image: "/applications/airports.webp",
  },
  {
    name: "Offices",
    icon: Briefcase,
    image: "/applications/offices.webp",
  },
  {
    name: "Cinemas",
    icon: Film,
    image: "/applications/cinemas.webp",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Applications() {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(6);
  const [paused, setPaused] = useState(false);

  // Responsive cards
  useEffect(() => {
    const updateView = () => {
      const width = window.innerWidth;

      if (width >= 1280) setPerView(6);
      else if (width >= 1024) setPerView(4);
      else if (width >= 768) setPerView(3);
      else if (width >= 480) setPerView(2);
      else setPerView(1);
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxStart = Math.max(applications.length - perView, 0);

  useEffect(() => {
    setStart((previous) => Math.min(previous, maxStart));
  }, [maxStart]);

  const next = () => {
    setStart((previous) =>
      previous >= maxStart ? 0 : previous + 1
    );
  };

  const prev = () => {
    setStart((previous) =>
      previous <= 0 ? maxStart : previous - 1
    );
  };

  // Autoplay
  useEffect(() => {
    if (paused || maxStart === 0) return;

    const interval = setInterval(() => {
      setStart((previous) =>
        previous >= maxStart ? 0 : previous + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, maxStart]);

  // Highlight center card
  const activeIndex = Math.min(
    start + Math.floor((perView - 1) / 2),
    applications.length - 1
  );

  return (
    <section
      id="applications"
      className="relative isolate overflow-hidden bg-[#f3f8ff] py-6 sm:py-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full border-[55px] border-white/70" />

      <div className="pointer-events-none absolute -right-40 -top-52 h-[600px] w-[600px] rounded-full border-[60px] border-white/70" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-[#dcecff]/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1650px] px-4 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-6 text-center lg:mb-6"
        >
          <div className="mb-4 flex items-center justify-center gap-5">
            <span className="h-px w-12 bg-[#173e71]" />

            <span className="text-xs font-bold uppercase tracking-[0.45em] text-[#0755b9] sm:text-sm">
              Applications
            </span>

            <span className="h-px w-12 bg-[#173e71]" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#101d32] sm:text-5xl lg:text-[68px]">
            Cubicle Stall{" "}
            <span className="relative inline-block text-[#0755b9]">
              Applications

              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4, ease }}
                className="absolute -bottom-2 left-0 h-[5px] w-full origin-left rounded-full bg-[#0755b9]"
              />
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#536174] sm:text-lg">
            From high-traffic public spaces to luxury private facilities,
            our solutions adapt to every environment.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div
          className="relative flex items-center gap-2 sm:gap-4 lg:gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* PREVIOUS BUTTON */}
          <motion.button
            type="button"
            onClick={prev}
            whileHover={{ scale: 1.12, x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous applications"
            className="z-20 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white bg-white text-[#0755b9] shadow-[0_8px_25px_rgba(0,75,160,0.15)] transition-colors hover:bg-[#0755b9] hover:text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          >
            <ArrowLeft size={23} />
          </motion.button>

          {/* SLIDER */}
          <div className="min-w-0 flex-1 overflow-hidden py-8">
            <motion.div
              className="flex items-center"
              animate={{
                x: `${-(start * 100) / applications.length}%`,
              }}
              transition={{
                duration: 0.75,
                ease,
              }}
              style={{
                width: `${(applications.length / perView) * 100}%`,
              }}
            >
              {applications.map((app, index) => {
                const Icon = app.icon;
                const active = index === activeIndex;

                return (
                  <div
                    key={app.name}
                    className="flex-none px-1.5 sm:px-2.5"
                    style={{
                      width: `${100 / applications.length}%`,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: active ? -12 : 0,
                        scale: active ? 1.025 : 1,
                      }}
                      transition={{
                        duration: 0.55,
                        ease,
                      }}
                      className={`group relative h-[280px] overflow-hidden rounded-[25px] border bg-white shadow-[0_12px_30px_rgba(20,70,130,0.10)] transition-shadow duration-500 sm:h-[260px]  ${
                        active
                          ? "border-[#1686d4] shadow-[0_20px_40px_rgba(0,100,190,0.20)]"
                          : "border-white hover:shadow-[0_18px_35px_rgba(20,70,130,0.17)]"
                      }`}
                    >
                      {/* IMAGE */}
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={app.image}
                          alt={app.name}
                          fill
                     
                          className="object-cover transition-transform duration-1000 scale-120"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                      </div>

                      {/* CURVED WHITE BOTTOM PANEL */}
                      <svg
                        viewBox="0 0 400 180"
                        preserveAspectRatio="none"
                        className="absolute bottom-0 left-0 z-10 h-[33%] w-full"
                      >
                        <path
                          d="M0 38 C65 0 105 48 165 32 C245 5 310 55 400 20 L400 180 L0 180 Z"
                          fill="white"
                        />
                      </svg>

                      {/* ICON */}
                      

                      {/* TITLE */}
                  <div className="absolute bottom-5 left-2 right-2 z-20 flex min-h-[40px] items-center justify-center">
  <div className="flex items-center justify-center gap-2">
    <h3 className="text-center text-[14px] font-semibold leading-snug tracking-tight text-[#122039] sm:text-[15px] lg:text-base">
      {app.name}
    </h3>

    <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full border border-[#e5effb] bg-white text-[#075bd0] shadow-[0_4px_12px_rgba(0,70,150,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#0755b9] group-hover:text-white sm:h-[38px] sm:w-[38px]">
      <Icon size={15} strokeWidth={1.9} />
    </div>
  </div>
</div>

                      {/* ACTIVE CARD ACCENT */}
                      <div
                        className={`absolute bottom-0 left-1/2 z-30 h-[4px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0876d5] to-[#42c1e7] transition-all duration-500 ${
                          active ? "w-2/3" : "w-0"
                        }`}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* NEXT BUTTON */}
          <motion.button
            type="button"
            onClick={next}
            whileHover={{ scale: 1.12, x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next applications"
            className="z-20 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#0869c7] text-white shadow-[0_8px_25px_rgba(0,75,160,0.25)] transition-colors hover:bg-[#084b9d] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          >
            <ArrowRight size={23} />
          </motion.button>
        </div>

        {/* PAGINATION */}
        <div className="mt-7 flex items-center justify-center gap-2.5">
          {Array.from({ length: maxStart + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setStart(index)}
              aria-label={`Go to application slide ${index + 1}`}
              aria-current={start === index ? "true" : undefined}
              className={`h-[11px] rounded-full transition-all duration-500 ${
                start === index
                  ? "w-12 bg-[#0872d0]"
                  : "w-[11px] bg-[#c3d2e5] hover:bg-[#68a8e5]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM ARCHITECTURAL DECORATION */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden opacity-40">
        <svg
          viewBox="0 0 1500 140"
          fill="none"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 110 C180 65 250 120 400 105 S700 125 850 100 S1150 115 1300 85 S1430 100 1500 90"
            stroke="#64a9ee"
            strokeWidth="2"
          />
          <path
            d="M0 125 C200 85 300 135 500 115 S800 130 1000 110 S1300 130 1500 105"
            stroke="#64a9ee"
            strokeWidth="1.5"
          />

          {/* Buildings */}
          <path
            d="M250 110 V65 H280 V45 H320 V110 M265 65 H305 M270 80 H280 M290 80 H300 M270 95 H280 M290 95 H300"
            stroke="#64a9ee"
            strokeWidth="2"
          />

          <path
            d="M1100 108 V30 H1145 V10 H1190 V108 M1115 45 H1130 M1150 45 H1165 M1115 65 H1130 M1150 65 H1165 M1135 108 V85 H1155 V108"
            stroke="#64a9ee"
            strokeWidth="2"
          />

          {/* Trees */}
          <path
            d="M150 110 V75 M130 85 C115 55 145 45 150 65 C165 40 190 60 170 85 M130 95 C110 80 100 100 125 105 M170 95 C190 80 200 100 175 105"
            stroke="#64a9ee"
            strokeWidth="2"
          />

          <path
            d="M1350 110 V70 M1330 85 C1315 55 1345 45 1350 65 C1365 40 1390 60 1370 85 M1330 95 C1310 80 1300 100 1325 105 M1370 95 C1390 80 1400 100 1375 105"
            stroke="#64a9ee"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
