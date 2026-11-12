"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { User, Mail, Phone, Package, MessageSquare, Send, Loader2, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FadeInUp,
  Stagger,
  StaggerItem,
} from "@/components/MotionWrappers";

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
  { name: "Stainless Steel U-Channel", image: "/golden-1.webp" },
  {
    name: "Stainless Steel Privacy Thumb-Turn with Indicator",
    image: "/golden-2.webp",
  },
  { name: "Stainless Steel Adjustable Foot", image: "/golden-3.webp" },
  { name: "Stainless Steel Door Stopper Channel", image: "/golden-4.webp" },
  { name: "Stainless Steel Door Knob", image: "/golden-5.webp" },
  { name: "Stainless Steel Top Rail", image: "/golden-6.webp" },
  { name: "Coat Hook SS", image: "/golden-7.webp" },
  { name: "Screws & Wall Plug", image: "/golden-9.webp" },
  { name: "Noise Deafening Rubber", image: "/golden-8.webp" },
  { name: "Stainless Steel Hinges", image: "/golden-11.webp" },
  { name: "Golden Shoebox", image: "/golden-10.webp" },
];

const applications = [
  { title: "5-Star Hotels And Resort", image: "/hOTELS-1.webp" },
  { title: "High End Restaurant & Lounges", image: "/bAR.webp" },
  { title: "Premium Corporate Office", image: "/OFFICE-1.webp" },
  { title: "Luxury Shopping Malls", image: "/mall.webp" },
  { title: "Banquet Halls", image: "/BANKETS.webp" },
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

const darkBg = { backgroundImage: "url('/STARSBLACK-scaled.webp')" };

const overlayStyle = {
  background: `
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.75) 20%,
      rgba(0, 0, 0, 0.65) 50%,
      rgba(0, 0, 0, 0.40) 100%
    )
  `,
};

const PRODUCT_NAME = "Luxe Partition Systems";

const darkInputClass =
  "w-full h-[42px] pl-10 pr-3 bg-white/5 border border-white/25 rounded-[3px] text-[14px] text-white placeholder:text-white/40 outline-none transition-all duration-300 hover:border-white/50 focus:bg-white/10 focus:border-[#F4C735] focus:ring-4 focus:ring-[#F4C735]/15";

function DarkField({ icon: Icon, label, alignTop = false, children }) {
  return (
    <label className="block group">
      <span className="block text-[10px] font-semibold tracking-[1.5px] uppercase text-white/70 mb-1 transition-colors group-focus-within:text-[#F4C735]">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={16}
          strokeWidth={1.8}
          className={`absolute left-3.5 text-white/45 transition-colors group-focus-within:text-[#F4C735] pointer-events-none ${
            alignTop ? "top-[13px]" : "top-1/2 -translate-y-1/2"
          }`}
        />
        {children}
      </div>
    </label>
  );
}

export default function HeroSlider() {
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
    <>

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
              className="bg-[#F4C735] hover:bg-[#e0b52a] text-black text-[15px] font-semibold px-8 py-2 rounded-[2px] transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {/* Hero slider (left static so it shows immediately) */}
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

      {/* Intro */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-10 md:px-12 md:py-12"
        style={darkBg}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={overlayStyle}
        />

        <div className="relative z-10 mx-auto max-w-[1350px] text-center">
          <FadeInUp>
            <h2
              className="font-serif text-[48px] leading-none tracking-tight text-[#F2C735] md:text-[76px] lg:text-[90px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              RYKA LUXOR
            </h2>

            <h3
              className="mt-1 text-[15px] font-bold tracking-[1.5px] text-white underline decoration-white underline-offset-2 md:text-[21px] md:tracking-[2px]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Designed for Those Who Demand the Exceptional
            </h3>
          </FadeInUp>

          <FadeInUp
            custom={2}
            className="mt-5 space-y-5 text-[13px] leading-[1.9] text-white md:text-[14px]"
          >
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
          </FadeInUp>
        </div>
      </section>

      {/* Hardware & Accessories */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-10 md:px-8 md:py-8"
        style={darkBg}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={overlayStyle}
        />

        <div className="relative z-10 mx-auto max-w-[1250px]">
          <FadeInUp>
            <h2 className="mb-9 text-center font-serif text-[36px] leading-tight text-white md:text-[52px] lg:text-[68px]">
              Hardware <span className="mx-2">&</span>
              <span className="text-[#F4C735]">Accessories</span>
            </h2>
          </FadeInUp>

          <Stagger className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-7 lg:gap-y-5">
            {products.map((product, index) => (
              <StaggerItem
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-[125px] w-full max-w-[120px] items-center justify-center overflow-hidden rounded-[4px] bg-white p-1 md:h-[120px] md:max-w-[120px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <h3 className="mt-3 min-h-[34px] max-w-[180px] text-[11px] font-semibold leading-[1.4] text-white md:text-[12px]">
                  {product.name}
                </h3>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Usage & Application */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8 md:px-10 md:py-7"
        style={darkBg}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={overlayStyle}
        />

        <div className="relative z-10 mx-auto max-w-[1250px]">
          <FadeInUp>
            <h2 className="mb-10 text-center font-serif text-[38px] leading-tight text-white md:text-[58px] lg:text-[68px]">
              Usage <span className="mx-2">&</span>
              <span className="text-[#F4C735]">Application</span>
            </h2>
          </FadeInUp>

          <Stagger className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
            {applications.map((item, index) => (
              <StaggerItem
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="h-[145px] w-full overflow-hidden rounded-[11px] border border-white/70 md:h-[150px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-[12px] font-medium leading-relaxed text-white md:text-[14px]">
                  {item.title}
                </h3>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Dimensions */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-8 md:px-8 md:py-10"
        style={darkBg}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={overlayStyle}
        />

        <div className="relative z-10 mx-auto max-w-[1250px]">
          <FadeInUp>
            <h2 className="mb-5 text-center font-serif text-[40px] font-bold leading-tight text-white md:text-[58px] lg:text-[68px]">
              Dimensions
            </h2>
          </FadeInUp>

          <Stagger className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-5">
            {dimensionImages.map((item, index) => (
              <StaggerItem
                key={index}
                custom={index}
                className="w-full overflow-hidden rounded-[9px] bg-white"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Specifications table */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-6 md:px-8 md:py-8"
        style={darkBg}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={overlayStyle}
        />

        <div className="relative z-10 mx-auto max-w-[1260px]">
          <FadeInUp margin="-60px" className="w-full overflow-x-auto">
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
          </FadeInUp>
        </div>
      </section>

      {/* Get in touch */}
      <section
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-10 md:px-10 md:py-12"
        style={darkBg}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={overlayStyle}
        />

        <div className="relative z-10 mx-auto grid max-w-[1165px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left Image */}
          <FadeInUp
            margin="-60px"
            className="w-full overflow-hidden rounded-[9px] border border-white/70"
          >
            <img
              src="/ryka-luxors.webp"
              alt="RYKA LUXOR Premium Restroom Cubicles"
              className="h-[280px] w-full object-cover sm:h-[350px] lg:h-[367px]"
            />
          </FadeInUp>

          {/* Right Contact Form */}
          <FadeInUp margin="-60px" custom={1} className="w-full">
            <div className="rounded-[4px] border border-white/20 border-t-4 border-t-[#F4C735] bg-black/45 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.5)] px-6 sm:px-7 py-5 sm:py-6">

              <h2 className="font-serif text-[32px] leading-none text-white sm:text-[38px]">
                Get in <span className="text-[#F4C735]">Touch</span>
              </h2>

              <div className="mt-3 mb-4 h-[1px] w-[60px] bg-[#F4C735]" />

              <form onSubmit={handleSubmit} className="space-y-3">

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <DarkField icon={User} label="Your Name">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      autoComplete="name"
                      className={darkInputClass}
                    />
                  </DarkField>

                  <DarkField icon={Phone} label="Mobile Number">
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
                      className={darkInputClass}
                    />
                  </DarkField>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <DarkField icon={Mail} label="Your Email">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className={darkInputClass}
                    />
                  </DarkField>

                  {/* Product (auto-filled) */}
                  <DarkField icon={Package} label="Product">
                    <input
                      type="text"
                      value={PRODUCT_NAME}
                      readOnly
                      tabIndex={-1}
                      title={PRODUCT_NAME}
                      className={`${darkInputClass} cursor-default truncate font-medium text-white/80`}
                    />
                  </DarkField>
                </div>

                <DarkField icon={MessageSquare} label="Your Message" alignTop>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirement..."
                    rows={2}
                    required
                    className={`${darkInputClass} h-auto min-h-[68px] resize-y py-2.5`}
                  />
                </DarkField>

                {/* Consent */}
                <label className="flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    required
                    className="mt-[2px] h-4 w-4 shrink-0 cursor-pointer accent-[#F4C735]"
                  />
                  <span className="text-[11px] leading-[1.6] text-white/70 sm:text-[12px]">
                    I agree to be contacted about my enquiry and accept the{" "}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className="text-[#F4C735] underline hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-[42px] w-full items-center justify-center gap-2.5 rounded-[3px] bg-[#F4C735] px-9 text-[14px] font-semibold tracking-wide text-black shadow-[0_6px_16px_rgba(244,199,53,0.25)] transition-all duration-300 hover:bg-[#e0b52a] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

              </form>

            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}