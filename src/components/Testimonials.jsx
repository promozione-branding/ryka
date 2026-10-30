"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "When upgrading restrooms at K. R. Mangalam University, we needed a reliable partner. Choosing Grand and Canvas EVO cubicles was the right decision, delivering quality, professionalism, and timely execution.",
    author: "K. R. Mangalam University",
  },
  {
    text: "Despite tight deadlines, the Carlton Prime cubicles were delivered and installed with precision. The team demonstrated excellent workmanship, professionalism, and a commitment to high standards.",
    author: "Commercial Client",
  },
  {
    text: "Ryka's Carlton Prime doors streamlined our mall renovation with no wet work, minimal disruption, and significant time saved. The upgrade made our restrooms feel modern, clean, and more premium to visitors.",
    author: "Mall Renovation Project",
  },
  {
    text: "Thanks to Ryka, our hotel restrooms now reflect modern luxury. Guests often compliment the sleek, clean design—an upgrade that has elevated the overall experience.",
    author: "Hotel Group",
  },
  {
    text: "The Frisking Booths installed at DMRC offer outstanding durability and performance. Built to withstand heavy usage, they reflect quality engineering and robust construction.",
    author: "Delhi Metro Rail Corporation",
  },
  {
    text: "Carlton Pristine was installed at our Uno Minda facility on time. The quick, hassle-free installation and clean, high-quality finish showed true professionalism.",
    author: "Uno Minda",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-700 font-semibold tracking-widest text-sm uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 relative">
            <svg
              className="absolute top-6 left-6 w-10 h-10 text-teal-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10 pt-4">
              {testimonials[active].text}
            </p>
            <p className="font-semibold text-teal-800">
              — {testimonials[active].author}
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-teal-700 w-6" : "bg-gray-300"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
