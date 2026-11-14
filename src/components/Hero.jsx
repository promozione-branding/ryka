"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
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
    image: "/product/imgi_18_Lil-Shine.webp",
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

const features = [
  "Premium Quality Products",
  "Reliable & Consistent Standards",
  "Built for Modern Commercial Spaces",
  "Durable & Easy to Maintain",
];

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ products: productsProp }) {
  const products = productsProp?.length ? productsProp : defaultProducts;

  const [current, setCurrent] = useState(0);
  const [productStart, setProductStart] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // how many cards are visible: 2 on mobile, 4 on lg+
  const [perView, setPerView] = useState(4);

  // HERO AUTOPLAY
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(mq.matches ? 4 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
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
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#07111d] lg:h-full">
      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/get-in-touch-5-1024x576.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07111d]/75 via-[#07111d]/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-32 w-32 rounded-tl-[90px] border-l-[8px] border-t-[8px] border-white" />

      <div className="pointer-events-none absolute bottom-20 right-0 z-0 h-32 w-40 rounded-br-[100px] border-b-[8px] 
      border-r-[8px] border-white" />
 

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-5 pb-6 pt-[90px] sm:px-8 lg:h-full lg:min-h-0 lg:px-10 lg:pb-5 xl:px-12">
        <div className="grid flex-none grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1fr)_255px] 
        xl:grid-cols-[minmax(0,1fr)_270px] xl:gap-7 mt-6">
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

          <motion.aside
            initial={{
              opacity: 0,
              x: 25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="hidden rounded-[25px] border border-white/40 bg-[#07111d]/85 p-5 text-white shadow-2xl backdrop-blur-md md:block lg:mt-8 lg:self-start xl:p-6"
          >

            <h2 className="text-3xl font-bold text-white">
              RYKA
            </h2>

            <p className="mt-2 text-sm leading-6">
              Premium Toilet Cubicles Built for Modern Spaces
            </p>

            <div className="my-5 h-[2px] w-32 bg-[#6C6D71]" />

            <h3 className="mb-5 text-lg font-bold text-white">
              Why Choose RYKA?
            </h3>

            <div className="space-y-4">

              {features.map((feature, index) => (

                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.12,
                    ease,
                  }}
                  className="flex items-start gap-3"
                >

                  <Check
                    size={21}
                    strokeWidth={3}
                    className="shrink-0 text-white"
                  />

                  <span className="text-sm leading-5">
                    {feature}
                  </span>

                </motion.div>

              ))}

            </div>

          </motion.aside>

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

                {products.map((product) => (

                  <div
                    key={product.name}
                    className="w-1/2 flex-none px-1.5 sm:px-2 lg:w-1/4 lg:px-2.5"
                  >

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="group overflow-hidden rounded-xl border border-white/70 bg-white shadow-xl sm:rounded-2xl"
                    >

                      <Link
                        href={product.href}
                        className="block"
                      >

                        {/* PRODUCT IMAGE */}

                        <div className="relative h-[85px] overflow-hidden bg-gray-700 sm:h-[110px] lg:h-[105px] xl:h-[125px]">

                          <motion.img
                            src={product.image}
                            alt={product.name}
                            draggable={false}
                            className="h-full w-full object-cover"
                            whileHover={{
                              scale: 1.08,
                            }}
                            transition={{
                              duration: 0.7,
                              ease,
                            }}
                          />

                        </div>

                        {/* PRODUCT NAME */}

                        <div className="flex items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-400">

                          <h3 className="text-xs font-semibold text-white sm:text-sm lg:text-base">
                            {product.name}
                          </h3>

                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:bg-[#101820] group-hover:text-white">
                            <ArrowRight size={16} />
                          </span>

                        </div>

                      </Link>

                    </motion.div>

                  </div>

                ))}

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