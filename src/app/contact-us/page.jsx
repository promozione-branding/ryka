"use client";

import { useState } from "react";
import axios from "axios";
import {
  MapPin,
  Mail,
  Phone,
  Navigation,
} from "lucide-react";
import FlowerBackdrop from "@/components/FlowerBackdrop";

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

      <section
        className="relative min-h-[145px] md:min-h-[145px] flex items-center justify-center px-5 py-15 
        bg-[#c9c7c7] bg-cover bg-center overflow-hidden pt-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(195,193,193,0.92),rgba(195,193,193,0.92)),url('/images/floral-bg.png')",
        }}
      >
<FlowerBackdrop/>
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
      <section
        className="relative bg-[#f5f5f5] bg-fill bg-center px-5 py-10 md:py-12 lg:py-10"
        style={{
          backgroundImage: "url('/contact-us-bann-e.webp')",
        }}
      >


        <div className="relative z-10 max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">

          <div className="w-full">

            <h2
              className="text-[39px] sm:text-[46px] md:text-[52px] font-semibold text-transparent leading-tight tracking-tight mb-5"
              style={{
                WebkitTextStroke: "1.5px #222222",
              }}
            >
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="w-full space-y-2">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full h-[58px] px-5 bg-white/20 border-0 border-b border-black/80 text-[15px] text-black placeholder:text-[#777] outline-none focus:border-[#168fbe] transition-colors"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full h-[58px] px-5 bg-white/20 border-0 border-b border-black/80 text-[15px] text-black placeholder:text-[#777] outline-none focus:border-[#168fbe] transition-colors"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
                inputMode="numeric"
                maxLength={10}
                pattern="\d{10}"
                title="Enter a valid 10-digit phone number"
                className="w-full h-[58px] px-5 bg-white/20 border-0 border-b border-black/80 text-[15px] text-black placeholder:text-[#777] outline-none focus:border-[#168fbe] transition-colors"
              />

              {/* Product */}
              <input
                type="text"
                name="product"
                placeholder="Product Interested In"
                required
                className="w-full h-[58px] px-5 bg-white/20 border-0 border-b border-black/80 text-[15px] text-black placeholder:text-[#777] outline-none focus:border-[#168fbe] transition-colors"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full min-h-[105px] px-5 py-4 bg-white/20 border-0 border-b border-black/80 text-[15px] text-black placeholder:text-[#777] outline-none resize-y focus:border-[#168fbe] transition-colors"
              />

              {/* Captcha Placeholder */}
              <div className="flex items-center gap-3 border border-[#d5d5d5] bg-white/80 w-fit px-3 py-3 mt-2">

                <input
                  type="checkbox"
                  id="robot"
                  required
                  className="w-5 h-5 accent-[#168fbe] cursor-pointer"
                />

                <label
                  htmlFor="robot"
                  className="text-[11px] text-[#333] cursor-pointer"
                >
                  I'm not a robot
                </label>

                <div className="ml-8 text-center">
                  <span className="text-[25px] leading-none text-[#4285f4]">
                    ↻
                  </span>
                  <p className="text-[8px] text-gray-500">
                    reCAPTCHA
                  </p>
                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#169bc8] hover:bg-[#087eaa] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[15px] font-semibold px-7 py-2 mt-2 rounded-[2px] transition-all duration-300"
              >
                {loading ? "Sending..." : "Send"}
              </button>

            </form>

          </div>


<div
  className="relative w-full min-h-[490px] md:min-h-[490px] bg-[#191919] text-white px-7 sm:px-10 py-10 md:py-16 overflow-hidden"
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