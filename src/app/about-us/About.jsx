
"use client";

import Image from "next/image";
import { useState } from "react";
import { Leaf, ChevronDown } from "lucide-react";

/* ================= DATA ================= */

const ethics = [
  {
    title: "OUR MISSION",
    image: "/mission-2-2-768x512-1.webp",
    description:
      "Our mission is to deliver high-quality restroom cubicle solutions that combine functionality, durability and visual appeal. We strive to exceed customer expectations through innovative designs, premium materials, reliable installation and exceptional service.",
  },
  {
    title: "OUR VISION",
    image: "/imgi_47_visions-1024x683.webp",
    description:
      "Our vision is to become a trusted and recognised leader in restroom partition solutions by continuously improving our products, embracing innovation and setting higher standards in quality, design and customer satisfaction.",
  },
  {
    title: "OUR VALUES",
    image: "/imgi_51_values-768x512.webp",
    description:
      "We believe in quality, integrity, commitment and customer satisfaction. Every project reflects our dedication to honest relationships, professional workmanship, continuous improvement and delivering lasting value to our clients.",
  },
];

const stats = [
  { number: "15K+", label: "PROJECTS" },
  { number: "15+", label: "YEARS OF EXPERIENCE" },
  { number: "50K+", label: "CUBICLES INSTALLED" },
  { number: "11K+", label: "HAPPY CLIENTS" },
];

const designFaqs = [
  {
    question: "What is 3D design and how does it work for toilet cubicles?",
    answer:
      "Our 3D design service helps you visualize your restroom layout, including cubicle partitions, before installation. It allows customization, layout planning, and material selection in a digital format.",
  },
  {
    question: "How much does toilet cubicle design and installation cost?",
    answer:
      "The cost depends on the project size, cubicle dimensions, selected materials, hardware, finishes and installation requirements. Contact our team for a customized quotation based on your project.",
  },
  {
    question: "How long does the planning and installation process take?",
    answer:
      "Planning generally takes a few days depending on the project complexity. Installation timelines vary according to the number of cubicles, site conditions and material availability.",
  },
  {
    question: "Can I request a custom toilet cubicle design?",
    answer:
      "Yes. We offer customized restroom cubicle designs based on your available space, preferred colours, materials, finishes and architectural requirements.",
  },
];

const applications = [
  ["Hospitals", "Restaurants", "Office Partition", "School and Universities"],
  ["Parks", "Fitness Centers", "Hotels", "Retirement Homes"],
  ["Industrial Areas", "Airports", "Offices", "Cinemas"],
];

const faqsData = [
  {
    question: "How should a new door be measured?",
    answer:
      "Measure the clear opening width at three points (top, middle, bottom) and the height at three points (left, center, right). Always use the smallest measurements and allow for recommended clearances as advised by our team.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "We deliver within 14 working days after order confirmation.",
  },
  {
    question: "Are Ryka Restroom Cubicles water-resistant?",
    answer:
      "Yes. They are built with High Pressure Compact Laminate (HPL), which is highly resistant to water, humidity, and heat.",
  },
  {
    question: "Can I choose custom colours and designs?",
    answer:
      "Absolutely. We offer 40+ colour options and designs to match your brand or interior theme.",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "Yes, our trained technicians provide complete delivery and installation support across India.",
  },
  {
    question: "Are these suitable for children or schools?",
    answer:
      "Yes! We offer Kids Zone cubicles with safe edges, bright colours, and child-friendly fittings.",
  },
  {
    question: "How do I clean and maintain the cubicles?",
    answer:
      "Ryka Restroom Cubicles are low-maintenance—just wipe with a damp cloth or mild cleaner. No special treatment needed.",
  },
  {
    question: "Can the cubicles be installed in existing brick-wall layouts?",
    answer:
      "Yes, models like Carlton Pristine are designed to fit seamlessly into pre-built masonry spaces.",
  },
  {
    question: "What’s the material used in fittings?",
    answer:
      "We use stainless steel, aluminum, and nylon polyamide for hardware—durable, rust-resistant, and long-lasting.",
  },
  {
    question: "Is there support for physically challenged access?",
    answer:
      "Yes. We offer custom cubicle dimensions and accessibility fittings for inclusive restroom designs.",
  },
];


/* ================= REUSABLE COMPONENTS ================= */

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 py-5 px-1 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed text-sm pb-5 px-1">
            {answer}
          </p>
        </div>
      </div>

    </div>
  );
}


function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
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

/* ================= MAIN ABOUT PAGE ================= */

export default function AboutUs() {

  const [activeDesignFaq, setActiveDesignFaq] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="w-full overflow-hidden bg-white text-[#102b55]">

      {/* ================= TITLE BAR ================= */}
      <section className="relative w-full bg-[#c5c3c3] min-h-[136px] flex items-center justify-center px-5 py-7 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-20 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute -top-16 right-20 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="relative z-10 text-center">

          <h1 className="text-black text-[42px] sm:text-[55px] md:text-[72px] font-semibold leading-none tracking-tight">
            About Us
          </h1>

          <p className="text-[#171717] text-[13px] sm:text-[14px] md:text-[15px] mt-5 leading-relaxed">
            Learn more about our journey, values, and commitment to delivering
            high-quality solutions tailored to your unique needs.
          </p>

        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="relative w-full bg-[#f7f7f7] py-14 md:py-16 lg:py-20 px-5 md:px-10 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] bg-center bg-cover"
          style={{
            backgroundImage: "url('/imgi_6_HPL-Compact-Board.webp')",
          }}
        />

        <div className="relative z-10 max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="w-full">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[390px] overflow-hidden rounded-[10px] shadow-[0_5px_18px_rgba(0,0,0,0.20)]">

              <Image
                src="/imgi_6_HPL-Compact-Board.webp"
                alt="Ryka Restroom Cubicles"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

            </div>
          </div>

          {/* Content */}
          <div className="w-full">

            <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-normal text-[#222222] leading-tight">
              Our Journey
            </h2>

            <div className="w-[60px] h-[1px] bg-[#b5a17b] mt-3 mb-3" />

            <h3 className="text-[19px] md:text-[22px] font-semibold text-black mb-1">
              Toilet Cubicles Partition Manufacturer
            </h3>

            <p className="text-[#172b45] text-[13px] sm:text-[14px] leading-[1.95]">
              We are a trusted name in delivering the perfect blend of visual
              appeal and functional excellence for modern restroom cubicle
              systems. We specialize in high-quality restroom partitions made
              from High Pressure Compact Laminate (HPL) — a material known for
              its durability, hygiene, and suitability for high-traffic
              commercial spaces. With a strong commitment to customer
              satisfaction, our team ensures that an extensive range of
              products is always ready for timely delivery, seamless
              distribution, and expert installation. Our skilled technicians
              bring years of experience to every project, ensuring precision,
              professionalism, and long-lasting results.
            </p>

          </div>
        </div>
      </section>

      {/* ================= OUR ETHICS ================= */}
      <section
        className="relative bg-[#171819] bg-cover bg-center px-5 py-12 md:py-14 lg:py-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,16,17,0.94),rgba(15,16,17,0.94)),url('/bg1-aboutus.webp')",
        }}
      >

        <div className="relative max-w-[1235px] mx-auto">

          <div className="text-center mb-10 md:mb-11">
            <h2 className="text-white text-[36px] md:text-[46px] font-normal leading-tight">
              Our Ethics
            </h2>

            <div className="w-[60px] h-px bg-white/50 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">

            {ethics.map((item, index) => (
              <div
                key={item.title}
                className="group relative w-full h-[260px] sm:h-[300px] md:h-[250px] lg:h-[262px] [perspective:1200px]"
              >

                <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front */}
                  <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">

                      <div className="w-12 h-12 border border-white/70 flex items-center justify-center mb-4">
                        <span className="text-white text-xl">
                          {index === 0 ? "✓" : index === 1 ? "◎" : "✦"}
                        </span>
                      </div>

                      <h3 className="text-white text-[19px] md:text-[20px] font-medium">
                        {item.title}
                      </h3>

                      <p className="text-white/70 text-[9px] tracking-[2px] mt-3">
                        HOVER TO DISCOVER
                      </p>

                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-black text-white p-6 md:p-5 lg:p-7 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

                    <span className="text-[#d8b43c] text-[10px] tracking-[3px] font-bold mb-4">
                      RYKA / 0{index + 1}
                    </span>

                    <h3 className="text-white text-xl font-semibold mb-4">
                      {item.title.replace("OUR ", "")}
                    </h3>

                    <div className="w-12 h-px bg-white/70 mb-4" />

                    <p className="text-white/90 text-[12px] leading-[1.9]">
                      {item.description}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}
      <section className="relative bg-[#fafafa] px-5 py-12 md:py-14 lg:py-12">

        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #e9e9e9 0px, #e9e9e9 2px, transparent 2px, transparent 6px)",
          }}
        />

        <div className="relative max-w-[1235px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center px-3 ${
                index !== 0 ? "lg:border-l border-[#d6d6d6]" : ""
              }`}
            >

              <h3 className="text-[#2183b7] text-[39px] sm:text-[46px] md:text-[52px] lg:text-[53px] font-semibold tracking-[1px] leading-none">
                [{stat.number}]
              </h3>

              <p className="text-[#252525] text-[11px] sm:text-[13px] tracking-[1px] font-medium mt-5">
                {stat.label}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="w-full bg-white py-14 md:py-20 px-5 md:px-8">

        <div className="max-w-[1152px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[18px] items-stretch">

          {/* Left FAQ */}
          <div className="flex flex-col">

            <div className="text-[#999999] text-[11px] font-semibold tracking-[2px] uppercase mb-3">
              [ HOW IT WORKS ]
            </div>

            <h2 className="text-[#252525] text-[34px] md:text-[38px] lg:text-[36px] font-normal leading-tight">
              From Sketch to Life
            </h2>

            <div className="w-[60px] border-t border-dotted border-[#555555] mt-6" />

            <div className="mt-12 border-b border-[#555555]">

              {designFaqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border-t border-[#cccccc] first:border-t-0"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveDesignFaq(
                        activeDesignFaq === index ? -1 : index
                      )
                    }
                    aria-expanded={activeDesignFaq === index}
                    className="w-full flex items-center justify-between gap-4 text-left py-5 px-3 group"
                  >
                    <span className="text-[15px] md:text-[16px] text-[#222222] group-hover:text-[#237da8] transition-colors">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`shrink-0 transition-transform ${
                        activeDesignFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDesignFaq === index && (
                    <div className="px-3 pb-5 pr-5">
                      <p className="text-[#333333] text-[12px] md:text-[13px] leading-[27px] max-w-[570px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden">

            <img
              src="/image2-aboutus-1000x1024.webp"
              alt="Architectural design and 3D planning"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />

          </div>

        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="w-full bg-[#1684b5] px-5 py-10 md:py-12">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-white text-[38px] sm:text-[52px] md:text-[66px] lg:text-[72px] font-semibold leading-tight tracking-[-2px] mb-5 md:mb-3">
            Cubicles Stall Applications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-[55px] gap-y-1">

            {applications.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col">

                {column.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 py-[8px] border-b border-white/70 last:border-b-0 group"
                  >

                    <Leaf
                      size={13}
                      fill="white"
                      strokeWidth={1.5}
                      className="shrink-0 text-white"
                    />

                    <span className="text-white text-[14px] font-normal group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>

                  </div>
                ))}

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FAQs ================= */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          <SectionHeading title="FAQs" />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden px-4 sm:px-6">

            {faqsData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            ))}

          </div>
        </div>
      </section>


    </main>
  );
}
