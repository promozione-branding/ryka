
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15000, suffix: "K+", label: "Projects", display: "15K+" },
  { value: 15, suffix: "+", label: "Year of Experience", display: "15+" },
  { value: 50000, suffix: "K+", label: "Cubicle Installed", display: "50K+" },
  { value: 11000, suffix: "K+", label: "Happy Client", display: "11K+" },
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    let frame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(stats.map((stat) => Math.floor(stat.value * eased)));

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
      className="w-full bg-[#f5f5f7] px-0 py-7"
    >
      <div className="grid min-h-[145px] w-full grid-cols-2 items-center gap-y-7 rounded-bl-[72px] rounded-tr-none border-[3px] border-black bg-[#207eae] px-3 py-5 text-center text-white sm:grid-cols-4 sm:gap-y-0 sm:px-4 sm:py-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex flex-col items-center">
            <h3 className="text-[34px] font-bold leading-tight tracking-wide sm:text-[42px] md:text-[50px]">
              {index === 0
                ? `${Math.floor(counts[index] / 1000)}K+`
                : index === 2
                  ? `${Math.floor(counts[index] / 1000)}K+`
                  : index === 3
                    ? `${Math.floor(counts[index] / 1000)}K+`
                    : `${counts[index]}+`}
            </h3>

            <p className="mt-2 text-[14px] font-normal sm:text-[16px] md:text-[19px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
