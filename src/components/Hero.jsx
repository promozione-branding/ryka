"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Gem,
  Box,
  Settings,
} from "lucide-react";

const slides = [
  {
    title: "Delhi Metro.",
    highlight: "Scalable Privacy & Hygiene.",
    subtitle: "THOUGHTFULLY DESIGNED FEMALE FRISKING BOOTHS AND DURABLE RESTROOM CUBICLES FOR HIGH-TRAFFIC PUBLIC SPACES.",
    video: "/metro-map-1.mp4",
    mobileImage: "/metro-mobile.webp",
  },
  {
    title: "Indigo.",
    highlight: "IndiGo Approved",
    subtitle: "WE DESIGN, BUILD & INSTALL RESTROOM CUBICLES THAT PRIORITIZE USER COMFORT, HYGIENE, AND SAFETY.",
    image: "/indigo-1 (1).webp",
    mobileImage: "/indigi-mobile.webp",
  },
  {
    title: "Architect Approved.",
    highlight: "M3M Preferred.",
    subtitle: "PREMIUM TOILET CUBICLES CRAFTED FOR LUXURY COMMERCIAL AND RESIDENTIAL PROJECTS.",
    image: "/m3m-hotels-1 (1).webp",
    mobileImage: "/m3m-mobile.webp",
  },
  {
    title: "Roaring Crowds.",
    highlight: "Restroom Calm.",
    subtitle:
      "RELIABLE RESTROOM SOLUTIONS DESIGNED FOR ENTERTAINMENT VENUES AND HIGH-FOOTFALL SPACES.",
    image: "/jurasic-park (1).webp",
    mobileImage: "/imgi_167_Jurassic-mobile.webp",
  },
  {
    title: "Comfort Where It Counts.",
    highlight: "Campus Ready.",
    subtitle:
      "ERGONOMIC, DURABLE AND EASY-TO-MAINTAIN CUBICLE SOLUTIONS FOR MODERN EDUCATIONAL INSTITUTIONS.",
    image: "/school (2).webp",
    mobileImage: "/imgi_168_kr-mangalam-mobile.webp",
  },
];

// fallback list, used only if no `products` prop is passed
const defaultProducts = [
  {
    name: "Nexus Evo",
    image: "/product/imgi_9_Nexus-Evos.webp",
    href: "/public-restroom-partitions/nexus-evo",
  },
  {
    name: "Nexus Canvas",
    image: "/product/imgi_10_Nexus-Canvas-1.webp",
    href: "/public-restroom-partitions/nexus-canvas",
  },
  {
    name: "Nexus Grand",
    image: "/product/imgi_11_Nexus-Grand-2.webp",
    href: "/public-restroom-partitions/nexus-grand",
  },
  {
    name: "Carlton Prime",
    image: "/product/imgi_12_Carlton-Prime-1.webp",
    href: "/public-restroom-partitions/carlton-prime",
  },
  {
    name: "Floatex",
    image: "/product/imgi_7_Swing-Lite-4.webp",
    href: "/public-restroom-partitions/floatex",
  },
  {
    name: "Sky Hung",
    image: "/product/imgi_8_top-hung-2.webp",
    href: "/public-restroom-partitions/sky-hung",
  },
  {
    name: "Miniput",
    image: "/product/imgi_16_kids-cubicles.webp",
    href: "/kids-restrooms-partitions/miniput",
  },
  {
    name: "Lil-Waves",
    image: "/product/imgi_17_petar-pan.webp",
    href: "/kids-restrooms-partitions/lil-waves",
    featured: true,
  },
  {
    name: "Lil-Shine",
    image: "/newimag.webp",
    href: "/kids-restrooms-partitions/lil-shine",
    
  },
  {
    name: "Aero Kids",
    image: "/product/aero-kids.webp",
    href: "/kids-restrooms-partitions/aero-kids",
  },
  {
    name: "Half Round",
    image: "/product/imgi_20_Hansel-Gretel.webp",
    href: "/kids-restrooms-partitions/half-round",
  },
  {
    name: "Slice Cut",
    image: "/product/imgi_21_Slice-Cut-2.webp",
    href: "/kids-restrooms-partitions/slice-cut",
  },
  {
    name: "Straight",
    image: "/product/straight.webp",
    href: "/kids-restrooms-partitions/straight",
  },
];

const ease = [0.22, 1, 0.36, 1];

const getProductDetails = (product) => ({
  application: product.application || "Public Restroom",
  series: product.featured ,
  model: product.model || product.name,
  hardware: product.hardware || "Full Stainless Steel",
});

export default function Hero({ defaultProducts: suppliedProducts }) {
  const products = suppliedProducts?.length ? suppliedProducts : defaultProducts;

  const [current, setCurrent] = useState(0);
  const [productStart, setProductStart] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  // 1 card on mobile, 2 on tablet, 3 on desktop
  const [perView, setPerView] = useState(3);

  // HERO AUTOPLAY
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxProductStart = Math.max(products.length - perView, 0);

  useEffect(() => {
    setProductStart((prev) => Math.min(prev, maxProductStart));
  }, [maxProductStart]);

  // PRODUCT AUTOPLAY
  useEffect(() => {
    if (isPaused || maxProductStart === 0) return;

    const timer = setInterval(() => {
      setProductStart((prev) => (prev >= maxProductStart ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, maxProductStart, productStart]);

  const nextProducts = () => {
    setProductStart((prev) => (prev >= maxProductStart ? 0 : prev + 1));
  };

  const previousProducts = () => {
    setProductStart((prev) => (prev <= 0 ? maxProductStart : prev - 1));
  };

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#ffffff] lg:h-full">
      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/get-in-touch-5-1024x576.webp')",
          }}
        />

        <div className="absolute inset-0 bg-white/100" />


      </div>
 

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-5 pb-6 pt-[90px] sm:px-8 lg:h-full lg:min-h-0 lg:px-10 lg:pb-5 xl:px-12">
        <div className="grid flex-none grid-cols-1 items-start gap-5 
         xl:gap-7 mt-6">
          <div className="relative h-[500px] overflow-hidden rounded-[25px] border
           border-white/50 bg-[#07111d] shadow-2xl sm:h-[450px] lg:h-[460px]">
            <div className="absolute inset-0">

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  {current === 0 ? (
                    <video
                      key={slides[0].video}
                      src="/metro-map-1.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls={false}
                      onError={(e) => {
                        console.error(
                          "Video loading error:",
                          e.currentTarget.error
                        );
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={slides[current].image}
                      alt={slides[current].title}
                      fill
                      priority={current === 1}
                      sizes="(max-width: 1024px) 100vw, 80vw"
                      className="object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-[#06111c]/40" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-black/30" />

            </div>

            {/* SLIDER CONTENT */}

            <div className="absolute inset-0 z-10 flex items-center justify-center pl-[65px] pr-10 text-center sm:pl-20 sm:pr-16">

              <AnimatePresence mode="wait">

                <motion.div
                  key={current}
                  initial={{
                    opacity: 0,
                    y: 25,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(5px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="max-w-[1000px]"
                >

                  <h1 className="mb-4 text-3xl font-Poppins font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[58px]">

                    {slides[current].title}{" "}

                    <span className="text-white">
                      {slides[current].highlight}
                    </span>

                  </h1>

                  <p className="mx-auto max-w-[900px] text-[11px] font-medium leading-[1.9] tracking-[1.2px] text-white/90 sm:text-xs md:text-sm">
                    {slides[current].subtitle}
                  </p>

                  <Link
                    href="/public-restroom-partitions"
                    className="mt-8 inline-flex items-center justify-center border border-white px-9 py-4 text-xs font-semibold tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    VIEW MORE
                  </Link>

                </motion.div>

              </AnimatePresence>

            </div>

            {/* RIGHT SLIDER INDICATORS */}

            <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-6">

              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full border transition-all duration-300 ${
                    current === index
                      ? "h-9 w-9 border-white bg-white/10"
                      : "h-2 w-2 border-white/50 bg-white"
                  }`}
                >
                  {current === index && (
                    <span className="mx-auto block h-2 w-2 rounded-full bg-white" />
                  )}
                </button>
              ))}

            </div>

            {/* BOTTOM SLIDE PROGRESS */}

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:left-24 sm:translate-x-0">

              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-[7px] rounded-full transition-all duration-500 ${
                    current === index
                      ? "w-12 bg-black"
                      : "w-8 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}

            </div>

          </div>

          {/* RYKA INFORMATION CARD */}

         

        </div>

        {/* BOTTOM PRODUCT CAROUSEL */}

        <div className="relative mt-8 pb-2 lg:mt-auto lg:pt-8">

          {/* pause autoplay on hover / touch */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >

            {/* PREVIOUS BUTTON */}

            <motion.button
              onClick={previousProducts}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#FFA21A",
                color: "#07111d",
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Previous product"
              className="absolute -left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#101820] text-white shadow-xl sm:-left-5 lg:-left-14 lg:h-12 lg:w-12"
            >
              <ArrowLeft size={22} />
            </motion.button>

            {/* PRODUCT TRACK (all products rendered once, track slides smoothly) */}

            <div className="overflow-hidden px-0 py-2">

              <motion.div
                className="flex"
                animate={{ x: `-${productStart * (100 / perView)}%` }}
                transition={{
                  type: "tween",
                  duration: 0.6,
                  ease,
                }}
              >
              

                {products.map((product, index) => {
                  const details = getProductDetails(product);
                  const productKey = `${product.name}-${index}`;
                  const isHovered = hoveredProduct === productKey;

                  return (
                    <div
                      key={productKey}
                      className="w-full flex-none px-1.5 sm:w-1/2 sm:px-2 lg:w-1/3 lg:px-2.5"
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        onMouseEnter={() => setHoveredProduct(productKey)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        onFocus={() => setHoveredProduct(productKey)}
                        onBlur={() => setHoveredProduct(null)}
                        className="group relative h-[210px] overflow-hidden rounded-xl border border-white/70 bg-white shadow-xl sm:h-[235px] sm:rounded-2xl lg:h-[260px]"
                      >
                        <Link
                          href={product.href}
                          className="block h-full"
                        >
                          <div className="absolute inset-0 overflow-hidden bg-[#dfe4e8]">
                            <motion.img
                              src={product.image}
                              alt={product.name}
                              draggable={false}
                              className="h-full w-full object-cover"
                              whileHover={{ scale: 1.06 }}
                              transition={{ duration: 0.7, ease }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/10" />
                          </div>

                          <div
                            className={`absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 bg-[#7f8993]/65 px-4 py-3 text-white transition-all duration-300 sm:px-5 sm:py-4 ${
                              isHovered ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
                            }`}
                          >
                            <h3 className="text-sm font-semibold sm:text-base lg:text-lg">
                              {product.name}
                            </h3>
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#101820]">
                              <ArrowRight size={17} />
                            </span>
                          </div>

                          <motion.div
                            initial={false}
                            animate={{
                              x: isHovered ? "0%" : "105%",
                              opacity: isHovered ? 1 : 0,
                            }}
                            transition={{ duration: 0.35, ease }}
                            className="absolute bottom-0 right-0 top-0 w-[58%] bg-white px-4 py-4 text-[#102a46] shadow-[-14px_0_35px_rgba(7,17,29,0.12)] sm:px-5 lg:px-6"
                          >
                            <div className="mb-2 flex items-start justify-between gap-2 border-b border-[#e8edf2] pb-2">
                              <h3 className="text-sm font-bold uppercase leading-tight sm:text-base lg:text-lg">
                                {product.name}
                              </h3>
                              {product.featured && (
                                <span className="rounded-full bg-[#4285f4] px-2 py-1 text-[8px] font-bold uppercase text-white">
                                  Premium
                                </span>
                              )}
                            </div>

                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2.5">
                                <Users size={16} className="shrink-0 text-[#5d7390]" />
                                <div>
                                  <p className="text-[8px] font-bold uppercase tracking-wider text-[#8b97a7]">Application</p>
                                  <p className="text-[11px] font-semibold leading-tight">{details.application}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <Gem size={16} className="shrink-0 text-[#5d7390]" />
                                <div>
                                  <p className="text-[8px] font-bold uppercase tracking-wider text-[#8b97a7]">Series</p>
                                  <p className="text-[11px] font-semibold leading-tight">{details.series}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <Box size={16} className="shrink-0 text-[#5d7390]" />
                                <div>
                                  <p className="text-[8px] font-bold uppercase tracking-wider text-[#8b97a7]">Model</p>
                                  <p className="text-[11px] font-semibold leading-tight">{details.model}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <Settings size={16} className="shrink-0 text-[#5d7390]" />
                                <div>
                                  <p className="text-[8px] font-bold uppercase tracking-wider text-[#8b97a7]">Hardware</p>
                                  <p className="text-[11px] font-semibold leading-tight">{details.hardware}</p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 flex items-center justify-between border-t border-[#e8edf2] pt-2 text-xs font-bold">
                              <span>View Full Product Details</span>
                              <ArrowRight size={16} />
                            </div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}

              </motion.div>

            </div>

            {/* NEXT BUTTON */}

            <motion.button
              onClick={nextProducts}
              whileHover={{
                scale: 1.08,
                backgroundColor: "white",
                color: "#07111d",
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Next product"
              className="absolute -right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#101820] text-white shadow-xl sm:-right-5 lg:-right-14 lg:h-12 lg:w-12"
            >
              <ArrowRight size={22} />
            </motion.button>

          </div>

          {/* PRODUCT SLIDER INDICATORS (one dot per slide position) */}

          <div className="mt-4 flex items-center justify-center gap-2">

            {Array.from({ length: maxProductStart + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setProductStart(index)}
                aria-label={`Show products from ${products[index].name}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  productStart === index
                    ? "w-8 bg-black"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}