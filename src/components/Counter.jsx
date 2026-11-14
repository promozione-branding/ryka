
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 15000,
    label: "PROJECTS",
    number: "15",
    suffix: "K+",
  },
  {
    value: 15,
    label: "YEARS OF EXPERIENCE",
    number: "15",
    suffix: "+",
  },
  {
    value: 50000,
    label: "CUBICLES INSTALLED",
    number: "50",
    suffix: "K+",
  },
  {
    value: 11000,
    label: "HAPPY CLIENTS",
    number: "11",
    suffix: "K+",
  },
];

export default function Counter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    let frame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * eased)
        )
      );

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((stat) => stat.value));
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f5f5f7] px-0 "
    >
      <div className="relative w-full overflow-hidden border-t-[3px]
       border-[#D6A927] bg-gradient-to-r from-[#0B2147] via-[#123C79] to-[#174A96]">

        {/* STATS GRID */}

        <div className="grid min-h-[170px] grid-cols-2 sm:grid-cols-4">

          {stats.map((stat, index) => {
            const count = counts[index];

            const displayNumber =
              index === 1
                ? count
                : Math.floor(count / 1000);

            return (
              <div
                key={stat.label}
                className={`relative flex flex-col justify-center px-4 py-7 pl-5 sm:px-5 sm:pl-7 md:px-8 lg:px-10 ${
                  index !== 0
                    ? "border-l border-white/20"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-white/20 sm:border-t-0"
                    : ""
                }`}
              >

                {/* COUNTER */}

                <h3 className="whitespace-nowrap  text-[32px] font-bold leading-none tracking-tight text-white sm:text-[35px] md:text-[40px] lg:text-[46px]">

                  <span>{displayNumber}</span>

                  <span className="ml-0.2     text-[#E6B62E]">
                    {stat.suffix}
                  </span>

                </h3>

                {/* LABEL */}

                <p className="mt-3 text-[9px] font-semibold uppercase leading-relaxed tracking-[1.5px] text-[#D8E5FF] sm:text-[10px] md:text-[11px] lg:text-xs lg:tracking-[1.8px]">

                  {stat.label}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
