"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Delhi Metro - Scalable Privacy & Hygiene",
    subtitle:
      "We delivered thoughtfully designed female frisking booths to ensure privacy and safety. Along with durable and hygienic toilet cubicles to enhance overall comfort and sanitation in high-traffic public spaces.",
    bg: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Architect-Approved. M3M-Preferred",
    subtitle:
      "Installed high-end toilet cubicles across M3M's premium commercial and residential projects, aligning with their luxury standards and architectural vision.",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Clean Design. IndiGo Approved",
    subtitle:
      "We design, build & install restroom cubicles that prioritize user comfort, hygiene, and safety. Every element is thoughtfully crafted to ensure dignity and peace of mind.",
    bg: "https://images.unsplash.com/photo-1436491865332-7a61a109cab0?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Roaring Crowds. Restroom Calm",
    subtitle:
      "Ensuring clean breaks between big thrills — toilet cubicle solutions tailored for Jurassic Amusement Park and high-traffic entertainment venues.",
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Comfort Where it Counts - Campus Ready",
    subtitle:
      "Delivered ergonomic, easy-to-maintain cubicle solutions for major Indian universities, ensuring hygiene and comfort for thousands of students daily.",
    bg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1
              key={current}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up"
            >
              {slides[current].title}
            </h1>
            <p
              key={`sub-${current}`}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up delay-100"
            >
              {slides[current].subtitle}
            </p>
            <Link
              href="/public-restroom-partitions"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-teal-50 transition-all shadow-lg hover:shadow-xl animate-fade-in-up delay-200"
            >
              VIEW MORE
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Social sidebar */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {["Instagram", "Facebook", "LinkedIn"].map((name) => (
          <a
            key={name}
            href="#"
            className="text-white/70 hover:text-white text-xs tracking-widest uppercase writing-mode-vertical rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
