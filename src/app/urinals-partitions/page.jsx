"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";




/* ---------------------------------- */
/*  Main page component               */
/* ---------------------------------- */

export default function page() {

    const heroSlides = [
  {
    image: "/imgi_7_closet-urinal.webp",
    alt: "Modern blue urinal partitions",
  },
  {
    image: "/imgi_7_closet-urinal.webp",
    alt: "Premium urinal partition systems",
  },

];

    const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const email = formData.get("email");
  const mobile = formData.get("mobile");
  const message = formData.get("message");

  const subject = encodeURIComponent(
    `Sky Hung Product Enquiry - ${productName}`
  );

  const body = encodeURIComponent(
    `Product: ${productName}
Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}`
  );

  window.location.href =
    `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
};


  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
     
{/* ============ HERO SLIDER ============ */}

<section className="relative w-full overflow-hidden">

  <Swiper
    modules={[Autoplay, Navigation, Pagination, EffectFade]}
    slidesPerView={1}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    loop={true}
    speed={1200}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    navigation
    pagination={{
      clickable: true,
    }}
    className="urinals-hero-slider w-full"
  >

    {heroSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="relative h-[420px] w-full overflow-hidden sm:h-[550px] lg:h-[90vh] lg:min-h-[500px]">

          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        </div>
      </SwiperSlide>
    ))}

  </Swiper>

  <style jsx global>{`
    .urinals-hero-slider .swiper-button-next,
    .urinals-hero-slider .swiper-button-prev {
      color: white;
      width: 38px;
      height: 38px;
    }

    .urinals-hero-slider .swiper-button-next::after,
    .urinals-hero-slider .swiper-button-prev::after {
      font-size: 22px;
      font-weight: bold;
    }

    .urinals-hero-slider .swiper-pagination-bullet {
      background: white;
      opacity: 0.6;
    }

    .urinals-hero-slider .swiper-pagination-bullet-active {
      background: white;
      opacity: 1;
      width: 24px;
      border-radius: 10px;
    }
  `}</style>

</section>


     {/* URINAL PARTITIONS OVERVIEW */}
<section className="relative bg-cover bg-center px-5 py-8 md:py-10"
  style={{ backgroundImage: "url('/c3-box-1-1-2-1.webp')" }}
>
  <div className="absolute inset-0 bg-white/85" />

  <div className="relative z-10 mx-auto max-w-7xl text-center">
    <h2 className="mb-3 text-3xl font-semibold text-black md:text-5xl">
      Urinals Partitions
    </h2>

    <p className="mx-auto max-w-7xl text-[14px] leading-[1.8] text-gray-600 md:text-[16px]">
      Our urinal partitions are designed to enhance privacy, promote
      hygiene, and elevate the overall appearance of modern washrooms.
      Manufactured using robust, water-resistant materials, these
      partitions are built to withstand heavy daily usage in high-traffic
      environments such as malls, offices, schools, airports, and
      hospitality venues. Engineered for durability and easy maintenance,
      our urinal dividers come in a variety of sleek finishes and sizes
      to suit different design preferences and space layouts. Each unit
      is installed with precision using rust-proof, high-quality hardware
      to ensure long-lasting performance and a polished look.
    </p>
  </div>
</section>

{/* HARDWARE & ACCESSORIES */}

<section className="w-full bg-[#e7e7e7] px-5 py-8 md:py-12">
  <div className="mx-auto max-w-[1300px]">

    <h2 className="mb-7 text-center text-[30px] font-semibold md:text-[46px]">
      Hardware & <span className="text-[#0785cc]">Accessories</span>
    </h2>

    <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-3 md:gap-10">

      {/* SS Clamp */}
      <div className="flex flex-col items-center">
        <div className="flex h-[165px] w-[165px] items-center justify-center 
        overflow-hidden rounded-xl bg-white p-3 md:h-[185px] md:w-[185px]">
          <img
            src="/ss-clamp.webp"
            alt="SS Clamp"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="mt-3 text-sm font-medium text-black">
          SS Clamp
        </h3>
      </div>

      {/* Nylon Clamp */}
      <div className="flex flex-col items-center">
        <div className="flex h-[165px] w-[165px] items-center justify-center 
        overflow-hidden rounded-xl bg-white p-3 md:h-[185px] md:w-[185px]">
          <img
            src="/nylon-clamp.webp"
            alt="Nylon Clamp"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="mt-3 text-sm font-medium text-black">
          Nylon Clamp
        </h3>
      </div>

      {/* Hardware Description */}
      <div className="col-span-2 flex items-center justify-center md:col-span-1">
        <p className="max-w-[300px] text-center text-[14px] leading-7 text-black md:text-left md:text-[22px]">
          SS 304 or nylon PA-6 made brackets are used for fixing the UPP
          panels to the wall.
        </p>
      </div>

    </div>
  </div>
</section>


    

{/* DESCRIPTION FOR DIFFERENT DESIGN */}

<section
  className="relative w-full bg-cover bg-center px-5 py-8 md:py-10"
  style={{
    backgroundImage: "url('/c3-box-1-1-2-1.webp')",
  }}
>
  <div className="absolute inset-0 bg-white/85" />

  <div className="relative z-10 mx-auto max-w-[1300px]">

    {/* Heading */}
    <h2 className="mb-7 text-center text-[25px] font-semibold md:text-[40px]">
      Description for{" "}
      <span className="text-[#0785cc]">Different Design</span>
    </h2>

    {/* Drawing Images */}
    <div className="mx-auto mb-7 grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">

      <div className="flex  items-center justify-center overflow-hidden rounded-lg border
       border-gray-400 bg-white p-2 ">
        <img
          src="/specifications-1024x1024 (1).webp"
          alt="Urinal partition different design types"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex  items-center justify-center overflow-hidden rounded-lg
       border border-gray-400 bg-white p-2 ">
        <img
          src="/specifications-1-1024x1024 (1).webp"
          alt="Urinal partition design dimensions"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

    </div>

    {/* Specification Table */}
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[450px] border-collapse text-[11px] md:text-[16px]">

        <thead>
          <tr className="bg-black text-white">
            <th className="border border-gray-500 px-3 py-3 text-left">
              Specification
            </th>
            <th className="border border-gray-500 px-3 py-3 text-left">
              Measurement (mm)
            </th>
          </tr>
        </thead>

        <tbody>
          {[
            ["Length", "900 mm"],
            ["Width", "450 mm"],
            ["Panel Thickness", "12 mm / 18 mm"],
          ].map(([spec, value]) => (
            <tr key={spec} className="bg-white/80">
              <td className="border border-gray-400 px-3 py-2 text-gray-800">
                {spec}
              </td>
              <td className="border border-gray-400 px-3 py-2 text-gray-800">
                {value}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

    {/* Note */}
    <p className="mt-5 text-center text-[10px] font-semibold text-gray-800 md:text-[14px]">
      NOTE: The dimensions shown here are standard dimensions only.
      However, specialised dimensions are also made on specific requirement.
    </p>

  </div>
</section>



{/* GET IN TOUCH */}

<section className="w-full bg-[#f5f5f5] px-5 py-9 md:py-12">
  <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">

    {/* Left Image */}
    <div className="mx-auto w-full  overflow-hidden rounded-md ">
      <img
        src="/get-in-touch-5-1024x576.webp"
        alt="Urinal partitions installation"
        className=" w-full object-cover "
        loading="lazy"
      />
    </div>

    {/* Contact Form */}
    <div className="w-full">

      <h2 className="mb-6 text-center text-[38px] font-semibold text-black md:text-[48px]">
        Get in Touch
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2">

          <div>
            <label className="mb-1 block text-[22px] text-black">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="h-9 w-full border-0 border-b border-black bg-transparent px-2 text-xs outline-none focus:border-[#0785cc]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[22px] text-black">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="081234 56789"
              required
              className="h-9 w-full border-0 border-b border-black bg-transparent px-2 text-xs outline-none focus:border-[#0785cc]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[22px] text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-9 w-full border-0 border-b border-black bg-transparent px-2 text-xs outline-none focus:border-[#0785cc]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[22px] text-black">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter Message"
              rows={3}
              required
              className="h-[75px] w-full resize-none border-0 border-b border-black bg-transparent px-2 py-2 text-xs outline-none focus:border-[#0785cc]"
            />
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-5 h-9 w-full max-w-[180px] border border-black text-xs text-black transition hover:bg-black hover:text-white"
        >
          Submit Now
        </button>

      </form>

    </div>
  </div>
</section>


    </main>
  );
}
