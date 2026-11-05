"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import FlowerBackdrop from "@/components/FlowerBackdrop";


const galleryImages = [
    {
    src: "/gallery/Golden-Partitions.webp",
    alt: "Gold framed restroom partitions",
  },
    {
    src: "/gallery/ryka-luxors.webp",
    alt: "RYKA LUXOR black cubicles",
  },
   {
    src: "/gallery/Aero-kids-3.webp",
    alt: "Aero Kids Zone blue and orange cubicles",
  },
  {
    src: "/gallery/premium-cubicles.webp",
    alt: "Premium red and yellow geometric cubicles",
  },
  {
    src: "/gallery/straight-2.webp",
    alt: "Modern restroom with straight partitions",
  },
  {
    src: "/gallery/ONEX.webp",
    alt: "ONEX office restroom partition",
  },
  {
    src: "/gallery/nexus-grand.webp",
    alt: "Nexus Grand modern black cubicle system",
  },
  {
    src: "/gallery/petar-pan.webp",
    alt: "Peter Pan colorful school cubicles",
  },
  {
    src: "/gallery/silvera-3.webp",
    alt: "Silvera series cubicles",
  },
  {
    src: "/gallery/Hansel-Gretel-Series.webp",
    alt: "Hansel & Gretel Series cubicles",
  },
  {
    src: "/gallery/Cb-doorz.webp",
    alt: "CB Doorz cubicle system",
  },
  {
    src: "/gallery/Lil-Shine-1.webp",
    alt: "Lil Shine kids cubicles",
  },
  {
    src: "/gallery/Nexus-Canvas-1.webp",
    alt: "Nexus Canvas series",
  },
  {
    src: "/gallery/Silvera-4.webp",
    alt: "Silvera 4 series cubicles",
  },
  {
    src: "/gallery/Slice-Cut-2.webp",
    alt: "Slice Cut series partitions",
  },
  {
    src: "/gallery/Swing-Lite-4.webp",
    alt: "Swing Lite series cubicles",
  },
  {
    src: "/gallery/Carlton-Prime-1.webp",
    alt: "Carlton Prime series",
  },
  {
    src: "/gallery/Carlton-Pristine-2.webp",
    alt: "Carlton Pristine alternative view",
  },
  {
    src: "/gallery/Urinal-Privacy.webp",
    alt: "Urinal privacy partitions",
  },
  {
    src: "/gallery/golder-cubicles.webp",
    alt: "Golden finish cubicles",
  },
  {
    src: "/gallery/top-hung-2.webp",
    alt: "Top hung partition system",
  },
  {
    src: "/gallery/sa.webp",
    alt: "SA series partitions",
  },
  {
    src: "/gallery/onex-3.webp",
    alt: "ONEX series alternative view",
  },
  {
    src: "/gallery/cubicles-8.webp",
    alt: "Modern cubicle installation",
  },
  {
    src: "/gallery/Hansel-Gretel.webp",
    alt: "Hansel & Gretel kids series",
  },
  {
    src: "/gallery/Strength.webp",
    alt: "High-strength HPL cubicles",
  },
  {
    src: "/gallery/HPL-Compact-Board.webp",
    alt: "HPL Compact Board material",
  },
    {
    src: "/gallery/green-cubicles.webp",
    alt: "Green cubicle installation",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : (prev) - 1
    );
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : (prev) + 1
    );
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <main className="w-full overflow-hidden bg-white text-[#102b55]">
      {/* Hero */}
      <section className="relative w-full bg-[#C3B091] min-h-[136px] flex items-center justify-center px-5 py-7 overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-20 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute -top-16 right-20 w-48 h-48 border border-white rounded-full" />
        </div>
<FlowerBackdrop/>
        <div className="relative z-10 text-center">
          <h1 className="text-black text-[42px] sm:text-[55px] md:text-[72px] font-semibold leading-none tracking-tight">
            Gallery
          </h1>

          <p className="text-[#171717] text-[13px] sm:text-[14px] md:text-[15px] mt-5 leading-relaxed">
            Learn more about our journey, values, and commitment to delivering
            high-quality solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative w-full bg-[#C3B091] py-14 md:py-16 lg:py-20 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg
            className="absolute top-8 left-8 w-32 h-32 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M20 80 Q40 20 80 40 Q50 60 30 90" />
            <path d="M30 70 Q50 30 70 50" />
          </svg>
          <svg
            className="absolute top-8 right-8 w-32 h-32 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M80 80 Q60 20 20 40 Q50 60 70 90" />
            <path d="M70 70 Q50 30 30 50" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Dynamic 3-column Grid - All images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Optional hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX POPUP ================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-3 md:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-3 md:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-6xl mx-4 md:mx-16 aspect-[4/3] md:aspect-auto md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-wide">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </main>
  );
}