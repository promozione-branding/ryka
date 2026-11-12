"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Package,
  MessageSquare,
  Send,
  Loader2,
  Check,
  ArrowDown,
} from "lucide-react";
import productData from "@/lib/data";
import {
  FadeInUp,
  Stagger,
  StaggerItem,
} from "@/components/MotionWrappers";

/* ================= SHARED STYLES ================= */

const inputClass =
  "w-full h-[42px] pl-10 pr-3 bg-[#fafafa] border border-[#dcdcdc] rounded-[3px] text-[14px] text-black placeholder:text-[#9a9a9a] outline-none transition-all duration-300 hover:border-[#b8b8b8] focus:bg-white focus:border-[#169bc8] focus:ring-4 focus:ring-[#169bc8]/15";

/* ================= REUSABLE COMPONENTS ================= */

function SectionHeading({ title, subtitle }) {
  return (
    <FadeInUp className="mb-10 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      )}

      <div className="mt-5 mx-auto h-[2px] w-16 bg-[#b5a17b]" />
    </FadeInUp>
  );
}

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

function HardwareCard({ item }) {
  return (
    <div className="group flex flex-col items-center min-w-0">
      <div className="w-full max-w-[142px] aspect-square overflow-hidden rounded-[6px] border border-[#c9c9c9] bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-[#0785cc] group-hover:shadow-lg group-hover:-translate-y-1">
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
      className={`grid grid-cols-2 gap-4 px-6 py-4 text-sm transition-colors hover:bg-[#eaf6fb] ${
        highlight ? "bg-[#f4f9fc]" : "bg-white"
      }`}
    >
      <span className="font-medium text-gray-600">{spec}</span>

      <span className="text-right font-semibold text-gray-900">
        {measurement}
        <span className="ml-1 text-xs font-normal text-gray-400">{unit}</span>
      </span>
    </div>
  );
}

/* ---------------------------------- */
/* Dynamic Product Page               */
/* ---------------------------------- */

export default function Page() {
  const params = useParams();

  // Hooks must run before any early return
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
        (item) => normalizeSlug(item.url) === normalizeSlug(currentSlug)
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

  const hardwareAndAccessories = Array.isArray(product.hardwareAndAccessories)
    ? product.hardwareAndAccessories
    : [];

  const dimensions = product.dimensions || {};

  const specifications = Array.isArray(dimensions.specifications)
    ? dimensions.specifications
    : [];

  const drawings = Array.isArray(dimensions.drawings)
    ? dimensions.drawings
    : [];

  const keyFeatures = Array.isArray(product.keyFeatures)
    ? product.keyFeatures
    : [];

  const unit = dimensions.unit || "mm";

  // Enquiry form -> same API as the Contact Us page
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const phone = fd.get("mobile")?.toString().trim();
    const message = fd.get("message")?.toString().trim();

    const formData = {
      platform: "Ryka Restroom Cubicles",
      supplierToken: "6a9bb67ac077e066ff1e0d9e",
      platformEmail: "rykarestroomcubicle@gmail.com",
      name,
      phone,
      email,
      product: productName,
      message,
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
              Thank you for your interest in {productName}. Our team will get
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

      {/* ============ HERO ============ */}

      <section className="relative">
        <div className="relative h-[30vh] lg:h-[90vh] min-h-[420px] w-full overflow-hidden">
          <img
            src={mainImage.url || "/placeholder.webp"}
            alt={mainImage.alt || productName}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10">
            {/* <div className="mx-auto max-w-7xl px-6 pb-8 md:pb-14">
              <nav
                aria-label="Breadcrumb"
                className="text-[12px] md:text-[13px] text-white/75 mb-3"
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">{productName}</span>
              </nav>

              <h1 className="text-white text-[30px] sm:text-[42px] md:text-[58px] font-semibold leading-tight tracking-tight max-w-4xl">
                {productName}
              </h1>

              <a
                href="#enquiry"
                className="mt-5 inline-flex items-center gap-2 bg-[#169bc8] hover:bg-[#087eaa] text-white text-[14px] font-semibold px-6 h-[46px] rounded-[3px] shadow-[0_6px_16px_rgba(22,155,200,0.4)] transition-all duration-300"
              >
                Get a Quote
                <ArrowDown size={16} />
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}

      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <SectionHeading title={`About ${productName}`} />

        <FadeInUp custom={1}>
          <p className="text-gray-600 text-[15px] md:text-[17px] leading-8 text-center">
            {description}
          </p>
        </FadeInUp>
      </section>

      {/* ============ KEY FEATURES ============ */}

      {keyFeatures.length > 0 && (
        <section className="bg-[#f7f7f7] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading title="Key Features" />

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {keyFeatures.map((feature, index) => (
                <StaggerItem
                  key={index}
                  custom={index}
                  className="group flex gap-4 items-start bg-white p-5 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0785cc]/40"
                >
                  <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#0785cc]/10 text-[#0785cc] transition-colors duration-300 group-hover:bg-[#0785cc] group-hover:text-white">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <p className="text-gray-700 text-[14px] leading-6 pt-1">
                    {feature}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ============ HARDWARE & ACCESSORIES ============ */}

      {hardwareAndAccessories.length > 0 && (
        <section className="w-full bg-[#e7e7e7] py-12 md:py-16 overflow-hidden">
          <div className="mx-auto max-w-[1350px] px-5 md:px-8">
            <FadeInUp>
              <h2 className="text-center text-[34px] sm:text-[46px] md:text-[58px] lg:text-[64px] font-semibold tracking-tight leading-tight mb-4">
                <span className="text-black">Hardware & </span>
                <span className="text-[#0785cc]">Accessories</span>
              </h2>

              <div className="mx-auto mb-9 h-[2px] w-16 bg-[#b5a17b]" />
            </FadeInUp>

            <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-8 md:gap-x-7 md:gap-y-8">
              {hardwareAndAccessories.map((item, index) => (
                <StaggerItem key={item.name || index}>
                  <HardwareCard item={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ============ DIMENSIONS ============ */}

      {(drawings.length > 0 || specifications.length > 0) && (
        <section
          className="relative w-full overflow-hidden py-14 md:py-16"
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
              <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12">
                {drawings.map(
                  (d, index) =>
                    d.image && (
                      <StaggerItem key={d.name || index} custom={index}>
                        <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
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
                      </StaggerItem>
                    )
                )}
              </Stagger>
            )}

            {/* Specifications */}

            {specifications.length > 0 && (
              <FadeInUp margin="-60px">
                <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                  <div className="bg-[#03070e] px-6 py-4 border-b-2 border-[#b5a17b]">
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
              </FadeInUp>
            )}
          </div>
        </section>
      )}

      {/* ============ GET IN TOUCH ============ */}

      <section
        id="enquiry"
        className="w-full bg-[#f5f5f5] px-5 py-10 md:py-11 scroll-mt-24"
      >
        <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* LEFT IMAGE */}

          <FadeInUp margin="-60px" className="w-full">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[318px] overflow-hidden rounded-[6px]">
              <img
                src="/get-in-touch-5-1024x576.webp"
                alt="Modern restroom cubicle partitions"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInUp>

          {/* RIGHT FORM */}

          <FadeInUp margin="-60px" custom={1} className="w-full">
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
                      value={productName}
                      readOnly
                      tabIndex={-1}
                      title={productName}
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
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}