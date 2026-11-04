
"use client";

import React from "react";
import { useParams } from "next/navigation";
import productData from "@/lib/data";


function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-7 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-amber-500" />
    </div>
  );
}

function HardwareCard({ item }) {
  return (
    <div className="group flex flex-col items-center min-w-0">
      <div className="w-full max-w-[142px] aspect-square overflow-hidden rounded-[5px] border border-[#777] bg-white flex items-center justify-center">
        <img
          src={item.image || "/placeholder.webp"}
          alt={item.name || "Hardware accessory"}
          loading="lazy"
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-3 text-center text-[12px] md:text-[14px] font-medium text-black leading-5">
        {item.name}
      </h3>
    </div>
  );
}

function SpecRow({ spec, measurement, highlight, unit }) {
  return (
    <div
      className={`grid grid-cols-2 px-6 py-4 text-sm ${
        highlight ? "bg-amber-50/60" : "bg-white"
      }`}
    >
      <span className="font-medium text-gray-600">
        {spec}
      </span>

      <span className="text-right font-semibold text-gray-900">
        {measurement}
        <span className="ml-1 text-xs font-normal text-gray-400">
          {unit}
        </span>
      </span>
    </div>
  );
}

/* ---------------------------------- */
/* Dynamic Product Page               */
/* ---------------------------------- */

export default function Page() {
  const params = useParams();

  // Supports both single and multiple URL segments
  const currentSlug = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";

  // Normalize product URLs
  const normalizeSlug = (url = "") =>
    url.replace(/^\/+|\/+$/g, "").toLowerCase();

  // Find matching product from data.js
  const product = Array.isArray(productData)
    ? productData.find(
        (item) =>
          normalizeSlug(item.url) ===
          normalizeSlug(currentSlug)
      )
    : null;

  // Product not found
  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-5">
        <h1 className="text-3xl font-semibold text-gray-900">
          Product Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The requested product does not exist.
        </p>
      </main>
    );
  }

  // Dynamic product information
  const productName = product.productName || "";
  const description = product.description || "";
  const mainImage = product.mainImage || {};

  const hardwareAndAccessories = Array.isArray(
    product.hardwareAndAccessories
  )
    ? product.hardwareAndAccessories
    : [];

  const dimensions = product.dimensions || {};

  const specifications = Array.isArray(
    dimensions.specifications
  )
    ? dimensions.specifications
    : [];

  const drawings = Array.isArray(dimensions.drawings)
    ? dimensions.drawings
    : [];

  const keyFeatures = Array.isArray(product.keyFeatures)
    ? product.keyFeatures
    : [];

  const categories = Array.isArray(product.categories)
    ? product.categories
    : [];

  const unit = dimensions.unit || "mm";

  // Dynamic enquiry form
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const message = formData.get("message");

    const contactEmail =
      process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!contactEmail) {
      alert("Please configure your contact email.");
      return;
    }

    const subject = encodeURIComponent(
      `${productName} Product Enquiry`
    );

    const body = encodeURIComponent(
      `Product: ${productName}
Product URL: ${product.url}
Name: ${name}
Email: ${email}
Mobile: ${mobile}

Message:
${message}`
    );

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">

      {/* ============ HERO ============ */}

      <section className="relative">
        <div className="relative h-[30vh] lg:h-[90vh] min-h-[420px] w-full overflow-hidden">

          <img
            src={mainImage.url || "/placeholder.webp"}
            alt={mainImage.alt || productName}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent" />

        </div>
      </section>

      {/* ============ OVERVIEW ============ */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <SectionHeading
          title={`About ${productName}`}
        />

        <p className="text-gray-600 leading-relaxed text-center">
          {description}
        </p>

      </section>

      {/* ============ KEY FEATURES ============ */}

      {keyFeatures.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <SectionHeading title="Key Features" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex gap-3 items-start bg-gray-50 p-5 rounded-lg"
              >
                <span className="text-[#0785cc] font-bold">
                  ✓
                </span>

                <p className="text-gray-700 text-sm">
                  {feature}
                </p>
              </div>
            ))}

          </div>
        </section>
      )}

      {/* ============ HARDWARE & ACCESSORIES ============ */}

      {hardwareAndAccessories.length > 0 && (
        <section className="w-full bg-[#e7e7e7] py-12 md:py-16 overflow-hidden">

          <div className="mx-auto max-w-[1350px] px-5 md:px-8">

            <h2 className="text-center text-[34px] sm:text-[46px] md:text-[58px] lg:text-[64px] font-semibold tracking-tight leading-tight mb-8 md:mb-5">

              <span className="text-black">
                Hardware &{" "}
              </span>

              <span className="text-[#0785cc]">
                Accessories
              </span>

            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-6 md:gap-x-7 md:gap-y-5">

              {hardwareAndAccessories.map((item, index) => (
                <HardwareCard
                  key={item.name || index}
                  item={item}
                />
              ))}

            </div>

          </div>

        </section>
      )}

      {/* ============ DIMENSIONS ============ */}

      {(drawings.length > 0 || specifications.length > 0) && (
        <section
          className="relative w-full overflow-hidden py-13 md:py-15"
          style={{
            backgroundImage: "url('/c3-box-1-1-2-1.webp')",
            backgroundRepeat: "repeat",
            backgroundSize: "445px 106px",
            backgroundColor: "#f5f5f5",
          }}
        >

          <div className="absolute inset-0 bg-white/20 pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

            <SectionHeading
              title="Dimensions & Specifications"
              subtitle={`All measurements in ${unit}.`}
            />

            {/* Drawings */}

            {drawings.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12">

                {drawings.map((d, index) => (
                  d.image && (
                    <figure
                      key={d.name || index}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
                    >

                      <div className="h-[260px] sm:h-[320px] lg:h-[360px] flex items-center justify-center overflow-hidden rounded-lg bg-white">

                        <img
                          src={d.image}
                          alt={d.name || "Dimension drawing"}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />

                      </div>

                      <figcaption className="mt-4 text-center text-sm font-semibold text-gray-700">
                        {d.name}
                      </figcaption>

                    </figure>
                  )
                ))}

              </div>
            )}

            {/* Specifications */}

            {specifications.length > 0 && (
              <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">

                <div className="bg-[#03070e] px-6 py-4">
                  <h3 className="text-lg font-semibold text-white">
                    Technical Specifications
                  </h3>
                </div>

                <div className="divide-y divide-gray-100">

                  {specifications.map((s, index) => (
                    <SpecRow
                      key={s.specification || index}
                      spec={s.specification}
                      measurement={s.measurement}
                      highlight={index % 2 === 0}
                      unit={unit}
                    />
                  ))}

                </div>

              </div>
            )}

          </div>

        </section>
      )}
{/* 
      ============ CATEGORIES ============ */}

      {/* {categories.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 rounded-full px-5 py-2 text-sm"
              >
                {category}
              </span>
            ))}
          </div>

        </section>
      )} */}

      {/* ============ GET IN TOUCH ============ */}

      <section className="w-full bg-[#f5f5f5] px-5 py-10 md:py-11">

        <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

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

            <h2 className="text-center text-black text-[38px] sm:text-[46px] md:text-[50px] font-semibold leading-tight mb-5">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-5">

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
