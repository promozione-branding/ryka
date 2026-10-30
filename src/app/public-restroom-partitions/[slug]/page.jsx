"use client";

import React from "react";
import productData from "@/app/lib/data";

/* ---------------------------------- */
/*  Small reusable UI pieces          */
/* ---------------------------------- */

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-7 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-amber-500" />
    </div>
  );
}



function HardwareCard({ item }) {
  return (
    <div className="group flex flex-col items-center min-w-0">

      {/* Product Image Box */}
      <div className="w-full max-w-[142px] aspect-square overflow-hidden rounded-[5px] border border-[#777] bg-white flex items-center justify-center">

        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
        />

      </div>

      {/* Product Name */}
      <h3 className="mt-3 text-center text-[12px] md:text-[14px] font-medium text-black leading-5">
        {item.name}
      </h3>

    </div>
  );
}


function SpecRow({ spec, measurement, highlight }) {
  return (
    <div
      className={`grid grid-cols-2 px-6 py-4 text-sm ${
        highlight ? "bg-amber-50/60" : "bg-white"
      }`}
    >
      <span className="font-medium text-gray-600">{spec}</span>
      <span className="text-right font-semibold text-gray-900">
        {measurement}
        <span className="ml-1 text-xs font-normal text-gray-400">
          {productData.dimensions.unit}
        </span>
      </span>
    </div>
  );
}



/* ---------------------------------- */
/*  Main page component               */
/* ---------------------------------- */

export default function SkyHungProductPage() {

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
  const {
    productName,
    fullTitle,
    brand,
    series,
    description,
    shortDescription,
    keyFeatures,
    mainImage,
    hardwareAndAccessories,
    dimensions,
    categories,
  } = productData;

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* ============ HERO ============ */}
      <section className="relative">
        <div className="relative h-[30vh] lg:h-[90vh] min-h-[420px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mainImage.url}
            alt={mainImage.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent" />
          
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5  lg:grid-cols-1 items-center">
          <div>
            <SectionHeading
              title={`About ${productName}`}
            />
            <p className="text-gray-600 leading-relaxed text-center">
              {description}
            </p>
          </div>

        </div>
      </section>

{/* ============ HARDWARE & ACCESSORIES ============ */}
<section className="w-full bg-[#e7e7e7] py-12 md:py-16 overflow-hidden">

  <div className="mx-auto max-w-[1350px] px-5 md:px-8">

    {/* Heading */}
    <h2 className="text-center text-[34px] sm:text-[46px] md:text-[58px] lg:text-[64px] font-semibold tracking-tight leading-tight mb-8 md:mb-5">

      <span className="text-black">
        Hardware &{" "}
      </span>

      <span className="text-[#0785cc]">
        Accessories
      </span>

    </h2>

    {/* Products Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-6 md:gap-x-7 md:gap-y-5">

      {hardwareAndAccessories.map((item) => (
        <HardwareCard
          key={item.name}
          item={item}
        />
      ))}

    </div>

  </div>

</section>

    

{/* ============ DIMENSIONS ============ */}
<section
  className="relative w-full overflow-hidden py-13 md:py-15"
  style={{
    backgroundImage: "url('/c3-box-1-1-2-1.webp')",
    backgroundRepeat: "repeat",
    backgroundSize: "445px 106px",
    backgroundColor: "#f5f5f5",
  }}
>
  {/* Subtle white overlay */}
  <div className="absolute inset-0 bg-white/20 pointer-events-none" />

  <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

    <SectionHeading
      title="Dimensions & Specifications"
      subtitle={`All measurements in ${dimensions.unit}. Disabled-access sizes included.`}
    />

    {/* TWO IMAGES AT TOP */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12">

      {dimensions.drawings.map((d) => (
        <figure
          key={d.name}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center overflow-hidden rounded-lg bg-white">
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <figcaption className="mt-4 text-center text-sm font-semibold text-gray-700">
            {d.name}
          </figcaption>
        </figure>
      ))}

    </div>

    {/* SPECIFICATION TABLE BELOW */}
    <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">

      <div className="bg-[#03070e] px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Technical Specifications
        </h3>
      </div>

      <div className="divide-y divide-gray-100">
        {dimensions.specifications.map((s, i) => (
          <SpecRow
            key={s.specification}
            spec={s.specification}
            measurement={s.measurement}
            highlight={i % 2 === 0}
          />
        ))}
      </div>

    </div>

  </div>
</section>




 <section className="w-full bg-[#f5f5f5] px-5 py-10 md:py-11">

      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full">
          <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[318px] overflow-hidden rounded-[6px]">

            <img
              src="/get-in-touch-5-1024x576.webp"
              alt="Modern restroom cubicle partitions"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full">

          {/* Heading */}
          <h2 className="text-center text-black text-[38px] sm:text-[46px] md:text-[50px] font-semibold leading-tight mb-5">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-5">

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[17px] text-[#222] mb-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full h-[37px] px-2 bg-transparent border-0 border-b border-black text-[12px] outline-none placeholder:text-[#888] focus:border-[#168fc0]"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col">
                <label className="text-[17px] text-[#222] mb-1">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="081234 56789"
                  required
                  className="w-full h-[37px] px-2 bg-transparent border-0 border-b border-black text-[12px] outline-none placeholder:text-[#888] focus:border-[#168fc0]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-[17px] text-[#222] mb-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full h-[37px] px-2 bg-transparent border-0 border-b border-black text-[12px] outline-none placeholder:text-[#888] focus:border-[#168fc0]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-[17px] text-[#222] mb-1">
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Enter Message"
                  required
                  rows={4}
                  className="w-full h-[108px] px-2 py-2 bg-transparent border-0 border-b border-black text-[12px] outline-none resize-y placeholder:text-[#888] focus:border-[#168fc0]"
                />
              </div>

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-[217px] h-[33px] mt-4 border border-black bg-transparent text-black text-[12px] font-normal hover:bg-black hover:text-white transition-all duration-300"
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
