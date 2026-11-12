"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { User, Mail, Phone, Package, MessageSquare, Send, Loader2, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";




/* ---------------------------------- */
/*  Main page component               */
/* ---------------------------------- */

const PRODUCT_NAME = "Urinal Partitions";

const inputClass =
  "w-full h-[42px] pl-10 pr-3 bg-[#fafafa] border border-[#dcdcdc] rounded-[3px] text-[14px] text-black placeholder:text-[#9a9a9a] outline-none transition-all duration-300 hover:border-[#b8b8b8] focus:bg-white focus:border-[#169bc8] focus:ring-4 focus:ring-[#169bc8]/15";

function Field({ icon: Icon, label, alignTop = false, children }) {
  return (
    <label className="block group">
      <span className="block text-[10px] font-semibold tracking-[1.5px] uppercase text-[#555] mb-1 transition-colors group-focus-within:text-[#169bc8]">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={16}
          strokeWidth={1.8}
          className={`absolute left-3.5 text-[#9a9a9a] transition-colors group-focus-within:text-[#169bc8] pointer-events-none ${
            alignTop ? "top-[13px]" : "top-1/2 -translate-y-1/2"
          }`}
        />
        {children}
      </div>
    </label>
  );
}

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

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Enquiry form -> brandbnalo API (same as the Contact Us page)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const formData = {
      platform: "Ryka Restroom Cubicles",
      supplierToken: "6a9bb67ac077e066ff1e0d9e",
      platformEmail: "rykarestroomcubicle@gmail.com",
      name: fd.get("name")?.toString().trim(),
      phone: fd.get("mobile")?.toString().trim(),
      email: fd.get("email")?.toString().trim(),
      product: PRODUCT_NAME,
      message: fd.get("message")?.toString().trim(),
      place: "N/A",
    };

    if (!/^\d{10}$/.test(formData.phone)) {
      return alert("Enter a valid 10-digit phone number");
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      console.log(data);
      form.reset();
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">

      {/* ============ SUCCESS POPUP ============ */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="bg-white w-full max-w-[380px] rounded-md px-8 py-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check size={34} strokeWidth={3} className="text-green-600" />
            </div>

            <h3 className="text-[22px] font-semibold text-black mb-2">
              Message Sent Successfully!
            </h3>

            <p className="text-[14px] text-[#555] mb-6">
              Thank you for your interest in {PRODUCT_NAME}. Our team will get
              back to you shortly.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="bg-[#169bc8] hover:bg-[#087eaa] text-white text-[15px] font-semibold px-8 py-2 rounded-[2px] transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}

     
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
      <div className="bg-white rounded-[4px] border-t-4 border-[#169bc8] shadow-[0_12px_40px_rgba(0,0,0,0.12)] px-6 sm:px-7 py-5 sm:py-6">

        <h2
          className="text-[28px] sm:text-[32px] font-semibold text-transparent leading-tight tracking-tight"
          style={{ WebkitTextStroke: "1.5px #222222" }}
        >
          Get in Touch
        </h2>

        <div className="w-[60px] h-[1px] bg-[#b5a17b] mt-2 mb-4" />

        <form onSubmit={handleSubmit} className="space-y-3">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field icon={User} label="Your Name">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="name"
                className={inputClass}
              />
            </Field>

            <Field icon={Phone} label="Mobile Number">
              <input
                type="tel"
                name="mobile"
                placeholder="10-digit mobile number"
                required
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={10}
                pattern="\d{10}"
                title="Enter a valid 10-digit phone number"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field icon={Mail} label="Your Email">
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className={inputClass}
              />
            </Field>

            {/* Product (auto-filled) */}
            <Field icon={Package} label="Product">
              <input
                type="text"
                value={PRODUCT_NAME}
                readOnly
                tabIndex={-1}
                className={`${inputClass} bg-[#f0f0f0] text-[#333] font-medium cursor-default truncate`}
              />
            </Field>
          </div>

          <Field icon={MessageSquare} label="Your Message" alignTop>
            <textarea
              name="message"
              placeholder="Tell us about your requirement..."
              rows={2}
              required
              className={`${inputClass} h-auto min-h-[68px] py-2.5 resize-y`}
            />
          </Field>

          {/* Consent */}
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-[2px] w-4 h-4 shrink-0 accent-[#169bc8] cursor-pointer"
            />
            <span className="text-[11px] sm:text-[12px] leading-[1.6] text-[#555]">
              I agree to be contacted about my enquiry and accept the{" "}
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-[#169bc8] underline hover:text-[#087eaa]"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#169bc8] hover:bg-[#087eaa] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-semibold tracking-wide px-9 h-[42px] rounded-[3px] shadow-[0_6px_16px_rgba(22,155,200,0.35)] hover:shadow-[0_8px_20px_rgba(8,126,170,0.4)] transition-all duration-300"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Now
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  </div>
</section>


    </main>
  );
}