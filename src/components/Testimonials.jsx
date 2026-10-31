
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Despite tight deadlines, the Carlton Prime cubicles were delivered and installed with precision. The team demonstrated excellent workmanship, professionalism, and a commitment to high standards.",
    brand: "zudio",
    brandClass: "text-black text-[30px] font-black tracking-tight",
  },
  {
    text: "Ryka’s Carlton Prime doors streamlined our mall renovation with no wet work, minimal disruption, and significant time saved. The upgrade made our restrooms feel modern, clean, and more premium to visitors.",
    brand: "cinépolis",
    brandClass: "text-[#18266B] text-[29px] font-extrabold tracking-tight",
  },
  {
    text: "Thanks to Ryka, our hotel restrooms now reflect modern luxury. Guests often compliment the sleek, clean design—an upgrade that has elevated the overall experience and enhanced our amenities significantly.",
    brand: "ClubMahindra",
    brandClass: "text-black text-[19px] font-semibold tracking-tight",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = [
    ...testimonials.slice(activeIndex),
    ...testimonials.slice(0, activeIndex),
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-10 sm:py-12 lg:py-14">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(#e9e9e9 1px, transparent 1px),
            linear-gradient(90deg, #e9e9e9 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-[38px] leading-tight font-bold text-[#191919] sm:text-[48px] lg:text-[60px]">
            Testimonials
          </h2>

          <div className="mx-auto mt-4 w-[65px] border-b-2 border-dotted border-black" />
        </div>

        {/* Cards and Navigation */}
        <div className="relative">

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="absolute -left-3 sm:-left-7 lg:-left-9 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-black transition-transform duration-300 hover:-translate-x-1"
          >
            <ChevronLeft size={34} strokeWidth={3} />
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-[18px]">
            {visibleTestimonials.map((item, index) => (
              <AnimatePresence mode="wait" key={`${item.brand}-${activeIndex}`}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className={`flex min-h-[370px] flex-col items-center justify-between rounded-[25px] border border-[#777] bg-[#fafafa]/90 px-6 py-8 sm:min-h-[390px] sm:px-7 sm:py-8 lg:min-h-[405px] lg:px-7 lg:py-8 ${
                    index > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  {/* Testimonial Text */}
                  <p className="w-full text-center text-[16px] italic leading-[1.85] text-[#252525] sm:text-[17px] lg:text-[18px]">
                    {item.text}
                  </p>

                  {/* Brand Name */}
                  <div className="mt-8 flex min-h-[55px] w-full items-center justify-center">
                    <span className={item.brandClass}>
                      {item.brand}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-3 sm:-right-7 lg:-right-9 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-black transition-transform duration-300 hover:translate-x-1"
          >
            <ChevronRight size={34} strokeWidth={3} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-[7px] rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-black"
                  : "w-[7px] bg-black/30 hover:bg-black/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
