"use client";

import { useState, useEffect } from "react";
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
  { name: "Hospitals", icon: Stethoscope },
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Office Partition", icon: Building2 },
  { name: "Schools & Universities", icon: GraduationCap },
  { name: "Parks", icon: TreePine },
  { name: "Fitness Centers", icon: Dumbbell },
  { name: "Hotels", icon: BedDouble },
  { name: "Retirement Homes", icon: Home },
  { name: "Industrial Areas", icon: Factory },
  { name: "Airports", icon: Plane },
  { name: "Offices", icon: Briefcase },
  { name: "Cinemas", icon: Film },
];

const ease = [0.22, 1, 0.36, 1];

export default function Applications() {
  const [start, setStart] = useState(0);
  const [perView, setPerView] = useState(6);
  const [paused, setPaused] = useState(false);

  // cards per view: 2 mobile, 3 sm, 4 md, 6 lg
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 6 : w >= 768 ? 4 : w >= 640 ? 3 : 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxStart = Math.max(applications.length - perView, 0);

  useEffect(() => {
    setStart((prev) => Math.min(prev, maxStart));
  }, [maxStart]);

  const next = () => setStart((p) => (p >= maxStart ? 0 : p + 1));
  const prev = () => setStart((p) => (p <= 0 ? maxStart : p - 1));

  // autoplay (pauses on hover/touch)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [paused, maxStart]);

  return (
    <section className="bg-white py-13 lg:py-15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Applications
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Cubicle Stall Applications
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mx-auto mt-4 h-1 w-16 origin-center rounded-full bg-blue-600"
          />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From high-traffic public spaces to luxury private facilities, our
            solutions adapt to every environment.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          className="flex items-center gap-3 sm:gap-5"
        >
          {/* PREVIOUS */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Previous applications"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#026ab3] text-white shadow-lg transition-colors hover:bg-blue-800 lg:h-12 lg:w-12"
          >
            <ArrowLeft size={20} />
          </motion.button>

          {/* TRACK (all cards rendered once, track slides) */}
          <div className="min-w-0 flex-1 overflow-hidden py-6">
            <motion.div
              className="flex"
              animate={{ x: `-${start * (100 / perView)}%` }}
              transition={{ type: "tween", duration: 0.6, ease }}
            >
              {applications.map((app) => {
                const Icon = app.icon;

                return (
                  <div
                    key={app.name}
                    className="flex-none px-2"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative flex h-full cursor-default flex-col items-center justify-center overflow-hidden rounded-xl border border-transparent bg-gray-50 p-6 transition-[background-color,border-color,box-shadow] duration-300 hover:border-blue-100 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-900/10"
                    >
                      <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 group-hover:scale-x-100" />

                      <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
                        <Icon
                          size={26}
                          strokeWidth={1.75}
                          className="transition-transform duration-500 group-hover:-rotate-6"
                        />
                      </span>

                      <span className="text-center text-sm font-medium text-gray-800 transition-colors duration-300 group-hover:text-blue-800">
                        {app.name}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* NEXT */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Next applications"
            className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#026ab3] text-white shadow-lg transition-colors hover:bg-blue-800 lg:h-12 lg:w-12"
          >
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* DOTS */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Go to position ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                start === i
                  ? "w-8 bg-[#026ab3]"
                  : "w-2.5 bg-gray-300 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}