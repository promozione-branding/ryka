"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Navigation,
  User,
  Package,
  MessageSquare,
  Send,
  Loader2,
  ChevronDown,
} from "lucide-react";
import FlowerBackdrop from "@/components/FlowerBackdrop";

/* ================= SHARED STYLES ================= */

const inputClass =
  "w-full h-[52px] pl-11 pr-4 bg-[#fafafa] border border-[#dcdcdc] rounded-[3px] text-[15px] text-black placeholder:text-[#9a9a9a] outline-none transition-all duration-300 hover:border-[#b8b8b8] focus:bg-white focus:border-[#169bc8] focus:ring-4 focus:ring-[#169bc8]/15";

const productOptions = [
  "Public Restroom Partitions",
  "Luxe Partition Systems",
  "Kids Restroom Partitions",
  "Urinal Partitions",
  "Colors & Finishes",
  "Other",
];

/* ================= REUSABLE FIELD ================= */

function Field({ icon: Icon, label, alignTop = false, children }) {
  return (
    <label className="block group">
      <span className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-[#555] mb-2 transition-colors group-focus-within:text-[#169bc8]">
        {label}
      </span>

      <div className="relative">
        <Icon
          size={17}
          strokeWidth={1.8}
          className={`absolute left-4 text-[#9a9a9a] transition-colors group-focus-within:text-[#169bc8] pointer-events-none ${
            alignTop ? "top-[17px]" : "top-1/2 -translate-y-1/2"
          }`}
        />
        {children}
      </div>
    </label>
  );
}

/* ================= PAGE ================= */

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const phone = fd.get("phone")?.toString().trim();
    const product = fd.get("product")?.toString().trim();
    const message = fd.get("message")?.toString().trim();

    const formData = {
      platform: "Ryka Restroom Cubicles",
      supplierToken: "6a9bb67ac077e066ff1e0d9e",
      platformEmail: "rykarestroomcubicle@gmail.com",
      name,
      phone,
      email,
      product,
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
    <main className="w-full overflow-hidden bg-white">

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
              <svg
                className="h-9 w-9 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-[22px] font-semibold text-black mb-2">
              Message Sent Successfully!
            </h3>

            <p className="text-[14px] text-[#555] mb-6">
              Thank you for contacting us. Our team will get back to you shortly.
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

      {/* ================= TITLE BAR ================= */}
      <section
        className="relative min-h-[145px] md:min-h-[145px] flex items-center justify-center px-5 py-15
        bg-[#c9c7c7] bg-cover bg-center overflow-hidden pt-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(195,193,193,0.92),rgba(195,193,193,0.92)),url('/images/floral-bg.png')",
        }}
      >
        <FlowerBackdrop />

        <div className="relative z-10 text-center">

          <h1 className="text-black text-[43px] sm:text-[55px] md:text-[65px] font-semibold leading-none tracking-tight">
            Contact Us
          </h1>

          <p className="text-[#171717] text-[12px] sm:text-[13px] md:text-[14px] mt-4 leading-6">
            Reach out today via phone, email, or our contact form for prompt
            assistance and expert guidance tailored to your needs.
          </p>

        </div>
      </section>

      {/* ================= FORM + DETAILS ================= */}
      <section
        className="relative bg-[#f5f5f5] bg-fill bg-center px-5 py-12 md:py-16"
        style={{
          backgroundImage: "url('/contact-us-bann-e.webp')",
        }}
      >

        <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-10 items-stretch">

          {/* ---------- FORM CARD ---------- */}
          <div className="w-full bg-white rounded-[4px] border-t-4 border-[#169bc8] shadow-[0_12px_40px_rgba(0,0,0,0.12)] px-6 sm:px-9 py-8 sm:py-10">

            <h2
              className="text-[36px] sm:text-[42px] font-semibold text-transparent leading-tight tracking-tight"
              style={{ WebkitTextStroke: "1.5px #222222" }}
            >
              Get in Touch
            </h2>

            <div className="w-[60px] h-[1px] bg-[#b5a17b] mt-3 mb-3" />

            <p className="text-[#555] text-[13px] sm:text-[14px] leading-[1.8] mb-7">
              Fill in the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

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

              </div>

              {/* Phone + Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <Field icon={Phone} label="Phone Number">
                  <input
                    type="tel"
                    name="phone"
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

                <Field icon={Package} label="Select a Category">
                  <select
                    name="product"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-11 cursor-pointer invalid:text-[#9a9a9a]`}
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    {productOptions.map((option) => (
                      <option key={option} value={option} className="text-black">
                        {option}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a9a9a] pointer-events-none transition-colors group-focus-within:text-[#169bc8]"
                  />
                </Field>

              </div>

              {/* Message */}
              <Field icon={MessageSquare} label="Your Message" alignTop>
                <textarea
                  name="message"
                  placeholder="Tell us about your project, number of cubicles, location..."
                  rows={5}
                  required
                  className={`${inputClass} h-auto min-h-[130px] py-3.5 resize-y`}
                />
              </Field>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-[3px] w-[18px] h-[18px] shrink-0 accent-[#169bc8] cursor-pointer"
                />
                <span className="text-[12px] sm:text-[13px] leading-[1.7] text-[#555]">
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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#169bc8] hover:bg-[#087eaa] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[15px] font-semibold tracking-wide px-10 h-[50px] rounded-[3px] shadow-[0_6px_16px_rgba(22,155,200,0.35)] hover:shadow-[0_8px_20px_rgba(8,126,170,0.4)] transition-all duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>

            </form>

          </div>

          {/* ---------- CONTACT DETAILS ---------- */}
          <div
            className="relative w-full min-h-[490px] bg-[#191919] text-white px-7 sm:px-10 py-10 md:py-16 overflow-hidden rounded-[4px]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(20,20,20,0.72),
                  rgba(20,20,20,0.82)
                ),
                url('/contact_detail_.webp')
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >

            <div className="relative z-10">

              <h2 className="text-[29px] sm:text-[33px] font-normal mb-5">
                Reach Out Today
              </h2>

              {/* Address */}
              <div className="flex gap-5 mb-6">

                <MapPin
                  size={19}
                  className="shrink-0 text-white mt-1"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="text-[12px] font-bold mb-2">
                    OUR ADDRESS:
                  </h3>

                  <p className="text-[12px] leading-[24px] text-white/90">
                    H-3/216, 2nd Floor, Vardhman Plaza Tower,
                    Netaji Subhash Place, Pitampura, New Delhi
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="flex gap-5 mb-6">

                <Mail
                  size={19}
                  className="shrink-0 text-white mt-1"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="text-[12px] font-bold mb-2">
                    OUR MAILBOX:
                  </h3>

                  <a
                    href="mailto:rykarestroomcubicle@gmail.com"
                    className="text-[12px] text-white/90 hover:text-[#26a9d2] transition-colors break-all"
                  >
                    rykarestroomcubicle@gmail.com
                  </a>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-5">

                <Phone
                  size={19}
                  className="shrink-0 text-white mt-1"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="text-[12px] font-bold mb-2">
                    OUR PHONE:
                  </h3>

                  <div className="flex flex-col gap-2 text-[12px] text-white/90">

                    <a href="tel:+919873516255" className="hover:text-[#26a9d2] transition-colors">
                      91-9873516255
                    </a>

                    <a href="tel:+919667233007" className="hover:text-[#26a9d2] transition-colors">
                      91-9667233007
                    </a>

                    <a href="tel:01145118057" className="hover:text-[#26a9d2] transition-colors">
                      011-4511-8057
                    </a>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <div className="group relative min-h-[280px] flex-1 overflow-hidden border border-white/15 lg:min-h-0">
        <iframe
          title="Ryka Restroom Cubicles Head Office"
          src="https://www.google.com/maps?q=Ryka+Restroom+Cubicles,+H3/216,+Vardhman+Plaza+Tower,+Netaji+Subhash+Place,+Pitampura,+New+Delhi&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            minHeight: "600px",
            filter: "grayscale(100%) contrast(0.9)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        {/* FLOATING MAP INFO */}
        <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-3 border border-white/20 bg-[#101820]/95 px-3 py-2.5 shadow-xl">
          <div className="flex h-9 w-9 items-center justify-center bg-[#FFA21A] text-[#101820]">
            <MapPin size={18} />
          </div>

          <div>
            <p className="text-[11px] font-semibold text-white">
              Ryka Restroom Cubicles
            </p>

            <p className="mt-0.5 text-[10px] text-white/55">
              New Delhi, India
            </p>
          </div>
        </div>

        {/* MAP ICON */}
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-white/30 bg-[#101820]/90 text-white">
          <Navigation size={16} />
        </div>
      </div>

    </main>
  );
}