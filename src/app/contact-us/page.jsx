
"use client";

import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const subject = encodeURIComponent("Website Contact Enquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:rykarestroomcubicle@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ================= CONTACT TITLE BAR ================= */}
      <section
        className="relative min-h-[145px] md:min-h-[145px] flex items-center justify-center px-5 py-15 
        bg-[#c9c7c7] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(195,193,193,0.92),rgba(195,193,193,0.92)),url('/images/floral-bg.png')",
        }}
      >

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


      {/* ================= CONTACT SECTION ================= */}
      <section
        className="relative bg-[#f5f5f5] bg-cover bg-center px-5 py-10 md:py-12 lg:py-10"
        style={{
          backgroundImage: "url('/contact-us-bann-e.webp')",
        }}
      >

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/55 pointer-events-none" />

        <div className="relative z-10 max-w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">

          {/* ================= LEFT: CONTACT FORM ================= */}
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
                className="bg-[#169bc8] hover:bg-[#087eaa] text-white text-[15px] font-semibold px-7 py-2 mt-2 rounded-[2px] transition-all duration-300"
              >
                Send
              </button>

            </form>

          </div>


          {/* ================= RIGHT: CONTACT INFORMATION ================= */}
          <div
            className="relative w-full min-h-[490px] md:min-h-[490px] bg-[#191919] text-white px-7 sm:px-10 py-10 md:py-16 overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(rgba(20,20,20,0.92),rgba(20,20,20,0.92)),url('/images/blueprint-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
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

    </main>
  );
}
