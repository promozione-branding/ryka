"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Building2,
  Send,
} from "lucide-react";
import axios from "axios";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "h-[46px] w-full rounded-[3px] border-2 border-[#c8c8c8] bg-white px-4 text-[13px] text-[#222] placeholder:text-[#888] shadow-sm outline-none transition-all duration-300 hover:border-[#999] focus:border-[#0B2E63] focus:ring-2 focus:ring-[#0B2E63]/15";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);
    setLoading(true);

    const form = e.target;
const firstName = form.firstName.value.trim();
const lastName = form.lastName.value.trim();
const name = `${firstName} ${lastName}`.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const product = form.projectType.value;
    const place = form.location.value.trim();
    const message = form.description.value.trim();

    const formData = {
      platform: "Ryka Restroom Cubicles",
      supplierToken: "6a9bb67ac077e066ff1e0d9e",
      platformEmail: "rykarestroomcubicle@gmail.com",
      name,
      phone,
      email,
      product,
      message,
      place,
    };

    if (!/^\d{10}$/.test(formData.phone)) {
      setLoading(false);
      setError("Enter a valid 10-digit phone number");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#101820] px-4 py-8 sm:px-7 lg:px-10">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-bg.webp')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-[#071321]/80" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/35 to-[#071321]/70" />

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[450px] w-[450px] rounded-full border border-white/[0.08]" />

      <div className="pointer-events-none absolute -right-20 top-20 -z-10 h-[300px] w-[300px] rounded-full border border-white/[0.08]" />

      <div className="pointer-events-none absolute -bottom-40 left-[-100px] -z-10 h-[350px] w-[350px] rounded-full bg-[#FFA21A]/10 blur-[100px]" />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end lg:mb-7"
        >
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#FFA21A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#FFA21A]">
                Let's Start Something Great
              </span>
            </div>

            <h2 className="text-[32px] font-medium leading-tight text-white sm:text-[40px] lg:text-[46px]">
              Connect With Us Today?
            </h2>
          </div>

          <p className="max-w-[310px] text-[12px] leading-6 text-white/65">
            Have a project in mind? Share your requirements and
            let's create something exceptional together.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-7">
          {/* ================= LEFT: MAP ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden border border-white/20 bg-white/[0.07] p-4 backdrop-blur-sm sm:p-5"
          >
            {/* MAP HEADER */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFA21A]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Our Location
                  </span>
                </div>

                <h3 className="text-[22px] font-medium text-white sm:text-[26px]">
                  Our Head Office
                </h3>
              </div>

              <div className="flex h-10 w-10 items-center justify-center border border-white/20 text-[#FFA21A]">
                <Building2 size={20} />
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="group relative min-h-[280px] flex-1 overflow-hidden border border-white/15 lg:min-h-0">
              <iframe
                title="Ryka Restroom Cubicles Head Office"
                src="https://www.google.com/maps?q=Ryka+Restroom+Cubicles,+H3/216,+Vardhman+Plaza+Tower,+Netaji+Subhash+Place,+Pitampura,+New+Delhi&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "300px",
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

            {/* ADDRESS */}
            <div className="mt-4 flex flex-col justify-between gap-3 border-t border-white/20 pt-4 sm:flex-row sm:items-center">
              <div className="flex items-start gap-2.5">
                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#FFA21A]"
                />
                <p className="max-w-[350px] text-[11px] leading-[1.7] text-white/75">
                  H3/216, Vardhman Plaza Tower, Netaji Subhash Place,
                  Pitampura, New Delhi - 110034
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ryka+Restroom+Cubicles+New+Delhi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-[#FFA21A] transition-colors hover:text-white"
              >
                Get Directions
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT: FORM ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden border border-black/10 bg-[#f7f7f5] px-5 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:px-7 sm:py-7 lg:px-9"
          >
            {/* FORM DECORATION */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#0B2E63]/[0.06]" />

            <div className="relative z-10">
              {/* FORM HEADER */}
              <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-5">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-[2px] w-7 bg-[#FFA21A]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777]">
                      Project Enquiry
                    </span>
                  </div>

                  <h3 className="text-[27px] font-semibold leading-tight text-[#151515] sm:text-[32px]">
                    Request a Quote
                  </h3>

                  <p className="mt-1.5 text-[12px] text-[#777]">
                    Fill in the details below and our team will get in touch.
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center border border-black/10 bg-white text-[#0B2E63] sm:flex">
                  <Building2 size={21} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* PERSONAL INFORMATION */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#FFA21A]">
                      01
                    </span>

                    <h4 className="text-[14px] font-semibold text-[#222]">
                      Personal Information
                    </h4>

                    <span className="h-px flex-1 bg-black/10" />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                        First Name *
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        autoComplete="given-name"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                        Last Name *
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        autoComplete="family-name"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        autoComplete="tel"
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        autoComplete="email"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#FFA21A]">
                      02
                    </span>

                    <h4 className="text-[14px] font-semibold text-[#222]">
                      Project Information
                    </h4>

                    <span className="h-px flex-1 bg-black/10" />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                        Project Type *
                      </label>

                      <select
                        name="projectType"
                        required
                        defaultValue=""
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select project type
                        </option>

                        <option value="Public Restroom Partition">
                          Public Restroom Partition
                        </option>

                        <option value="Kids Restroom Partition">
                          Kids Restroom Partition
                        </option>

                        <option value="Urinal Partition">
                          Urinal Partition
                        </option>
                        <option value="Colors & finished">
                          Colors & finished
                        </option>
                                           <option value="Luxe Partition Systems">
                          Luxe Partition Systems
                        </option>
                        
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                        Project Location *
                      </label>

                      <input
                        type="text"
                        name="location"
                        placeholder="Enter project location"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-3">
                    <label className="mb-1.5 block text-[11px] font-semibold text-[#444]">
                      Project Description *
                    </label>

                    <textarea
                      name="description"
                      rows={3}
                      placeholder="Tell us about your project requirements..."
                      required
                      className="min-h-[90px] w-full resize-y rounded-[3px] border-2 border-[#c8c8c8] bg-white p-4 text-[13px] leading-6 text-[#222] placeholder:text-[#888] shadow-sm outline-none transition-all duration-300 hover:border-[#999] focus:border-[#0B2E63] focus:ring-2 focus:ring-[#0B2E63]/15"
                    />
                  </div>
                </div>

                {/* CONSENT */}
                <label className="flex cursor-pointer items-start gap-3 text-[11px] leading-5 text-[#666]">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#0B2E63]"
                  />

                  <span>
                    I agree to be contacted by Ryka Restroom Cubicles
                    regarding my project enquiry.
                  </span>
                </label>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-between bg-[#111820] px-5 py-3.5 text-white transition-all duration-300 hover:bg-[#FFA21A] hover:text-[#111820] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {loading ? "Submitting..." : "Submit Your Enquiry"}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:border-black/30">
                    <ArrowUpRight size={17} />
                  </span>
                </button>

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <p className="rounded-sm border border-green-200 bg-green-50 p-3 text-[12px] text-green-700">
                    Thank you! Your enquiry has been submitted.
                  </p>
                )}

                {/* ERROR MESSAGE */}
                {error && (
                  <p className="rounded-sm border border-red-200 bg-red-50 p-3 text-[12px] text-red-700">
                    {error}
                  </p>
                )}
              </form>

              {/* FORM FOOTER */}
              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#999]">
                  Ryka Restroom Cubicles
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#0B2E63]">
                  Let's Build Better Spaces
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}