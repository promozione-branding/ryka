"use client";

import { useState } from "react";
import { Upload, ChevronDown } from "lucide-react";
import axios from "axios";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    message: "",
  });
  const [fileName, setFileName] = useState("No file chosen");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clean phone number (remove spaces, dashes etc.)
    const cleanPhone = formData.phone.replace(/\D/g, "");

    if (!/^\d{10}$/.test(cleanPhone)) {
      return alert("Enter a valid 10-digit phone number");
    }

    const payload = {
      platform: "Ryka Restroom Cubicles",
      supplierToken: "6a9bb67ac077e066ff1e0d9e",
      platformEmail: "rykarestroomcubicle@gmail.com",
      name: formData.name,
      phone: cleanPhone,
      email: formData.email,
      product: formData.position,
      message: formData.message,
      place: formData.location || "N/A",
    };

    try {
      setIsSubmitting(true);

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      console.log("Response:", data);
      alert("Application submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        location: "",
        message: "",
      });
      setFileName("No file chosen");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-white text-[#102b55]">
      {/* Hero */}
      <section className="relative w-full bg-[#d4edda] py-24 md:py-28 sm:py-28 px-5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg
            className="absolute top-6 left-6 w-40 h-40 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M20 80 Q40 20 80 40 Q50 60 30 90" />
            <path d="M30 70 Q50 30 70 50" />
            <path d="M60 90 Q80 50 100 70" />
          </svg>
          <svg
            className="absolute top-6 right-6 w-40 h-40 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M80 80 Q60 20 20 40 Q50 60 70 90" />
            <path d="M70 70 Q50 30 30 50" />
            <path d="M40 90 Q20 50 0 70" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
              Application Form
            </h2>
            <p className="mt-5 text-[#171717] text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto">
              Join a team where innovation, craftsmanship, and commitment to quality
              come together. Whether you&apos;re an experienced professional or just
              starting your journey, we offer opportunities to grow, contribute, and
              make an impact in the world of modern restroom solutions.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-[#102b55] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102b55]/30 focus:border-[#102b55] transition"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-[#102b55] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102b55]/30 focus:border-[#102b55] transition"
              />

              {/* Phone with country code */}
              <div className="relative flex items-center bg-white border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#102b55]/30 focus-within:border-[#102b55]">
                <div className="flex items-center gap-1.5 pl-3 pr-2 border-r border-gray-200">
                  <span className="text-lg leading-none">🇮🇳</span>
                  <ChevronDown size={14} className="text-gray-500" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="081234 56789"
                  required
                  className="w-full px-3 py-3.5 bg-transparent text-[#102b55] placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Position */}
            <div>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
                required
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-[#102b55] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102b55]/30 focus:border-[#102b55] transition"
              />
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block text-sm font-medium text-[#102b55] mb-2">
                Upload Resume
              </label>
              <div className="flex items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-md text-sm text-[#102b55] hover:bg-gray-50 transition">
                  <Upload size={16} />
                  Choose File
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className="text-sm text-gray-500 truncate max-w-[200px]">
                  {fileName}
                </span>
              </div>
            </div>

            {/* Location */}
            <div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-[#102b55] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102b55]/30 focus:border-[#102b55] transition"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-[#102b55] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#102b55]/30 focus:border-[#102b55] transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-black text-white font-medium tracking-wide rounded-md hover:bg-gray-900 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}