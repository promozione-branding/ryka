
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Despite tight deadlines, the Carlton Prime cubicles were delivered and installed with precision. The team demonstrated excellent workmanship, professionalism, and a commitment to high standards.",
    brand: "Zudio",
    logo: "/testi/zudio.webp",
  },
  {
    text: "Ryka’s Carlton Prime doors streamlined our mall renovation with no wet work, minimal disruption, and significant time saved. The upgrade made our restrooms feel modern, clean, and more premium to visitors.",
    brand: "Cinépolis",
    logo: "/testi/cinepolis.webp",
  },
  {
    text: "Thanks to Ryka, our hotel restrooms now reflect modern luxury. Guests often compliment the sleek, clean design—an upgrade that has elevated the overall experience and enhanced our amenities significantly.",
    brand: "Club Mahindra",
    logo: "/testi/club.webp",
  },
  {
    text: "Ryka’s skilled team installed the toilet cubicles and wall paneling flawlessly, delivering exceptional quality with a perfect finish and precise alignment. Their professionalism ensured a smooth",
    brand: "CRIS",
     logo: "/testi/cris.webp",
  },
  {
    text: "The Freasking Booths installed at DMRC offer outstanding durability and performance. Built to withstand heavy usage, they reflect quality engineering and robust construction. A perfect fit for high-footfall environments.",
    brand: "Delhi Metro",
     logo: "/testi/delhimetro.webp",
  },
  {
    text: "Carlton Pristine was installed at our Uno Minda facility on time. The quick, hassle-free installation and clean, high-quality finish showed true professionalism and efficiency. Highly appreciated work.",
    brand: "Uno Minda",
    logo: "/testi/unominda.webp",
  },
  {
    text: "Ryka Restroom Cubicles delivered luxury and hygiene with sleek, durable, low-maintenance partitions. Their professional team ensured a smooth upgrade, transforming commercial restrooms with modern style and quality.",
    brand: "SAYA",
    logo: "/testi/saya.webp",
  },
  {
    text: "When upgrading restrooms at K. R. Mangalam University, we needed a reliable partner. Choosing Grand and Canvas EVO cubicles was the right decision, delivering quality, professionalism, and timely execution.",
    brand: "K. R. Mangalam University",
     logo: "/testi/kr.webp",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, index) =>
      testimonials[(activeIndex + index) % testimonials.length]
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-10 sm:py-12 lg:py-14">
      {/* Subtle Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(#e9e9e9 1px, transparent 1px),
            linear-gradient(90deg, #e9e9e9 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-[38px] font-bold leading-tight text-[#191919] sm:text-[48px] lg:text-[60px]">
            Testimonials
          </h2>

          <div className="mx-auto mt-4 w-[65px] border-b-2 border-dotted border-black" />
        </div>

        {/* Cards and Navigation */}
        <div className="relative">
          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-black transition-transform duration-300 hover:-translate-x-1 sm:-left-7 lg:-left-9"
          >
            <ChevronLeft size={34} strokeWidth={3} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-[18px]"
            >
              {visibleTestimonials.map((item, index) => (
                <div
                  key={`${item.brand}-${index}`}
                  className={`flex min-h-[370px] flex-col items-center rounded-[25px] border border-[#777] bg-[#fafafa]/90 px-6 py-8 sm:min-h-[390px] sm:px-7 lg:min-h-[405px] lg:px-7 ${
                    index > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  {/* Testimonial Text */}
                  <p className="w-full text-center text-[16px] italic leading-[1.85] text-[#252525] sm:text-[17px] lg:text-[18px]">
                    {item.text}
                  </p>

                  {/* Actual Brand Logo */}
                  <div className="mt-auto flex min-h-[135px] w-full items-center justify-center pt-8">
                    <img
                      src={item.logo}
                      alt={`${item.brand} logo`}
                      loading="lazy"
                      className="md:max-h-[195px] h-30 md:max-w-[220px] object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling.style.display =
                          "block";
                      }}
                    />

                    {/* Fallback if logo image is missing */}
                    <span
                      className="hidden text-center text-[22px] font-extrabold text-[#142b60]"
                    >
                      {item.brand}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center text-black transition-transform duration-300 hover:translate-x-1 sm:-right-7 lg:-right-9"
          >
            <ChevronRight size={34} strokeWidth={3} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
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
