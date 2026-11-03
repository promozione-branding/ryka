
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/golder-cubicles.webp",
    alt: "Premium black restroom cubicles",
  },
  {
    id: 2,
    image: "/Golden-Partitions.webp",
    alt: "Premium luxury restroom cubicles",
  },

];

const products = [
  {
    name: "Stainless Steel U-Channel",
    image: "/golden-1.webp",
  },
  {
    name: "Stainless Steel Privacy Thumb-Turn with Indicator",
    image: "/golden-2.webp",
  },
  {
    name: "Stainless Steel Adjustable Foot",
    image: "/golden-3.webp",
  },
  {
    name: "Stainless Steel Door Stopper Channel",
    image: "/golden-4.webp",
  },
  {
    name: "Stainless Steel Door Knob",
    image: "/golden-5.webp",
  },
  {
    name: "Stainless Steel Top Rail",
    image: "/golden-6.webp",
  },
  {
    name: "Coat Hook SS",
    image: "/golden-7.webp",
  },
  {
    name: "Screws & Wall Plug",
    image: "/golden-9.webp",
  },
  {
    name: "Noise Deafening Rubber",
    image: "/golden-8.webp",
  },
  {
    name: "Stainless Steel Hinges",
    image: "/golden-11.webp",
  },
  {
    name: "Golden Shoebox",
    image: "/golden-10.webp",
  },
];

const applications = [
  {
    title: "5-Star Hotels And Resort",
    image: "/hOTELS-1.webp",
  },
  {
    title: "High End Restaurant & Lounges",
    image: "/bAR.webp",
  },
  {
    title: "Premium Corporate Office",
    image: "/OFFICE-1.webp",
  },
  {
    title: "Luxury Shopping Malls",
    image: "/mall.webp",
  },
  {
    title: "Banquet Halls",
    image: "/BANKETS.webp",
  },
];

const dimensionImages = [
  {
    image: "/Graf.webp",
    alt: "Restroom cubicles dimension layout",
  },
  {
    image: "/graphs-1024x683.webp",
    alt: "Restroom cubicles front and top view technical drawings",
  },
];

const specifications = [
  ["Width of Cubicle", "1000", "1500"],
  ["Depth of Cubicle", "1500", "1750"],
  ["Height of entire cubicle", "1980", "1980"],
  ["Width of Door", "600", "900"],
  ["Height of Door", "1765", "1765"],
  ["Ground Clearance", "150", "150"],
];
export default function HeroSlider() {
  return (
    <>
    <section className="w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".ryka-next",
          prevEl: ".ryka-prev",
        }}
        className="ryka-hero-slider w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
                fetchPriority={slide.id === 1 ? "high" : "auto"}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Previous */}
        <button
          className="ryka-prev absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black md:left-3"
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        {/* Next */}
        <button
          className="ryka-next absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:bg-white hover:text-black md:right-3"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </Swiper>
    </section>

// Intro


<section
  className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-10 
  md:px-12 md:py-12"
  style={{
    backgroundImage: "url('/STARSBLACK-scaled.webp')",
  }}
>
  {/* Top Black Gradient Overlay */}
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      background: `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.75) 20%,
          rgba(0, 0, 0, 0.65) 50%,
          rgba(0, 0, 0, 0.40) 100%
        )
      `,
    }}
  />

  <div className="relative z-10 mx-auto max-w-[1350px] text-center">

    {/* Main Heading */}
    <h2
      className="font-serif text-[48px] leading-none tracking-tight text-[#F2C735] md:text-[76px] lg:text-[90px]"
      style={{ fontFamily: "Georgia, serif" }}
    >
      RYKA LUXOR
    </h2>

    {/* Tagline */}
    <h3
      className="mt-1 text-[15px] font-bold tracking-[1.5px] text-white underline decoration-white underline-offset-2 md:text-[21px] md:tracking-[2px]"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Designed for Those Who Demand the Exceptional
    </h3>

    {/* Description */}
    <div className="mt-5 space-y-5 text-[13px] leading-[1.9] text-white md:text-[14px]">
      <p>
        Luxe Partition Systems reinvents style and utility in
        contemporary bathroom design. Our partition solutions,
        which are designed for high-end commercial and hospitality
        environments, provide the ideal balance of privacy, luxury,
        and durability. Each unit makes a sophisticated and
        fashionable statement with its sleek finishes, golden
        metallic accents, and simple hardware.
      </p>

      <p>
        Our dividers are precision-installed with corrosion-free
        fasteners and constructed from sturdy, moisture-resistant
        materials for optimal performance. Luxe Partition Systems
        provide a smooth aesthetic appeal while guaranteeing
        long-lasting comfort and dependability, making them perfect
        for high-end workplaces, hotels, fine dining venues, and
        luxury retail settings.
      </p>
    </div>

  </div>
</section>


{/* Hardware & Accessories */}

<section
  className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-10 md:px-8 md:py-8"
  style={{
    backgroundImage: "url('/STARSBLACK-scaled.webp')",
  }}
>
  {/* Top Black Gradient Overlay */}
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      background: `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.75) 20%,
          rgba(0, 0, 0, 0.65) 50%,
          rgba(0, 0, 0, 0.40) 100%
        )
      `,
    }}
  />

  <div className="relative z-10 mx-auto max-w-[1250px]">

    {/* Heading */}
    <h2 className="mb-9 text-center font-serif text-[36px] leading-tight text-white md:text-[52px] lg:text-[68px]">
      Hardware <span className="mx-2">&</span>
      <span className="text-[#F4C735]">
        Accessories
      </span>
    </h2>

    {/* Products Grid */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-7 lg:gap-y-5">

      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          {/* Product Image */}
          <div className="flex h-[125px] w-full max-w-[120px] items-center justify-center overflow-hidden rounded-[4px] bg-white p-1 md:h-[120px] md:max-w-[120px]">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Product Name */}
          <h3 className="mt-3 min-h-[34px] max-w-[180px] text-[11px] font-semibold leading-[1.4] text-white md:text-[12px]">
            {product.name}
          </h3>
        </div>
      ))}

    </div>
  </div>
</section>

{/* Usage & Application */}

<section
  className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8 md:px-10 md:py-7"
  style={{
    backgroundImage: "url('/STARSBLACK-scaled.webp')",
  }}
>
  {/* Top Black Gradient Overlay */}
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      background: `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.95) 0%,
          rgba(0, 0, 0, 0.75) 20%,
          rgba(0, 0, 0, 0.65) 50%,
          rgba(0, 0, 0, 0.40) 100%
        )
      `,
    }}
  />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-[1250px]">

    {/* Heading */}
    <h2 className="mb-10 text-center font-serif text-[38px] leading-tight text-white md:text-[58px] lg:text-[68px]">
      Usage <span className="mx-2">&</span>
      <span className="text-[#F4C735]">
        Application
      </span>
    </h2>

    {/* Application Grid */}
    <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">

      {applications.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          {/* Image */}
          <div className="h-[145px] w-full overflow-hidden rounded-[11px] border border-white/70 md:h-[150px]">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Title */}
          <h3 className="mt-4 text-[12px] font-medium leading-relaxed text-white md:text-[14px]">
            {item.title}
          </h3>
        </div>
      ))}

    </div>
  </div>
</section>


 <section
      className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-8 md:px-8 md:py-10"
      style={{
        backgroundImage: "url('/STARSBLACK-scaled.webp')",
      }}
    >
      {/* Top Black Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.95) 0%,
              rgba(0, 0, 0, 0.75) 20%,
              rgba(0, 0, 0, 0.65) 50%,
              rgba(0, 0, 0, 0.40) 100%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* Heading */}
        <h2 className="mb-5 text-center font-serif text-[40px] font-bold leading-tight text-white md:text-[58px] lg:text-[68px]">
          Dimensions
        </h2>

        {/* Dimension Images */}
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-5">

          {dimensionImages.map((item, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-[9px] bg-white"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>

    <section
      className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-6 md:px-8 md:py-8"
      style={{
        backgroundImage: "url('/STARSBLACK-scaled.webp')",
      }}
    >
      {/* Black Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.95) 0%,
              rgba(0, 0, 0, 0.75) 20%,
              rgba(0, 0, 0, 0.65) 50%,
              rgba(0, 0, 0, 0.40) 100%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1260px]">

        {/* Responsive Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[650px] table-fixed border-collapse text-left text-[13px] text-white md:text-[14px]">

            <thead>
              <tr className="bg-white text-center font-bold text-black">
                <th className="w-[28%] border border-gray-300 px-2 py-4 md:px-3">
                  Specification
                </th>
                <th className="w-[35.5%] border border-gray-300 px-2 py-4 md:px-3">
                  Standard Dimensions (mm)
                </th>
                <th className="w-[36.5%] border border-gray-300 px-2 py-4 md:px-3">
                  Physically Challenged (mm)
                </th>
              </tr>
            </thead>

            <tbody>
              {specifications.map((item, index) => (
                <tr
                  key={index}
                  className="transition-colors duration-200 hover:bg-white/5"
                >
                  {item.map((value, i) => (
                    <td
                      key={i}
                      className="border border-white/60 px-2 py-3 text-left md:px-3 md:py-[11px]"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>

     <section
      className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-10 md:px-10 md:py-12"
      style={{
        backgroundImage: "url('/STARSBLACK-scaled.webp')",
      }}
    >
      {/* Black Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.95) 0%,
              rgba(0, 0, 0, 0.75) 20%,
              rgba(0, 0, 0, 0.65) 50%,
              rgba(0, 0, 0, 0.40) 100%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1165px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">

        {/* Left Image */}
        <div className="w-full overflow-hidden rounded-[9px] border border-white/70">
          <img
            src="/ryka-luxors.webp"
            alt="RYKA LUXOR Premium Restroom Cubicles"
            className="h-[280px] w-full object-cover sm:h-[350px] lg:h-[367px]"
          />
        </div>

        {/* Right Contact Form */}
        <div className="w-full">

          {/* Heading */}
          <h2 className="mb-5 text-center font-serif text-[46px] leading-none text-white md:text-[60px] lg:text-[68px]">
            Get in <span className="text-[#F4C735]">Touch</span>
          </h2>

          <form className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2">

            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-3 text-[18px] text-white md:text-[21px]">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border-b border-white/70 bg-transparent px-2 py-2 text-[13px] text-white outline-none placeholder:text-gray-400 focus:border-[#F4C735]"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col">
              <label className="mb-3 text-[18px] text-white md:text-[21px]">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="081234 56789"
                required
                className="w-full border-b border-white/70 bg-transparent px-2 py-2 text-[13px] text-white outline-none placeholder:text-gray-400 focus:border-[#F4C735]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-3 text-[18px] text-white md:text-[21px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="mt-5 w-full border-b border-white/70 bg-transparent px-2 py-2 text-[13px] text-white outline-none placeholder:text-gray-400 focus:border-[#F4C735]"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-3 text-[18px] text-white md:text-[21px]">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter Message"
                rows={3}
                required
                className="w-full resize-none border-b border-white/70 bg-transparent px-2 py-2 text-center text-[13px] text-white outline-none placeholder:text-gray-400 focus:border-[#F4C735]"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full max-w-[216px] border border-white px-5 py-2 text-[13px] text-white transition-all duration-300 hover:border-[#F4C735] hover:bg-[#F4C735] hover:text-black"
              >
                Submit Now
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
</>
  );
}
