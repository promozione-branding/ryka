
"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Leaf,
  ArrowRight,
  Check,
} from "lucide-react";


const ethics = [
  {
    title: "OUR MISSION",
    heading: "Our Mission",
    image: "/mission-2-2-768x512-1.webp",
    description:
      "Our mission is to deliver high-quality restroom cubicle solutions that combine functionality, durability and visual appeal. We strive to exceed customer expectations through innovative designs, premium materials, reliable installation and exceptional service.",
  },
  {
    title: "OUR VISION",
    heading: "Our Vision",
    image: "/imgi_47_visions-1024x683.webp",
    description:
      "Our vision is to become a trusted and recognised leader in restroom partition solutions by continuously improving our products, embracing innovation and setting higher standards in quality, design and customer satisfaction.",
  },
  {
    title: "OUR VALUES",
    heading: "Our Values",
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

const faqs = [
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
  [
    "Hospitals",
    "Restaurants",
    "Office Partition",
    "School and Universities",
  ],
  [
    "Parks",
    "Fitness Centers",
    "Hotels",
    "Retirement Homes",
  ],
  [
    "Industrial Areas",
    "Airports",
    "Offices",
    "Cinemas",
  ],
];


export default function AboutUs() {
 
  const [activeFaq, setActiveFaq] = useState(0);
  return (
    <main className="w-full overflow-hidden bg-white text-[#102b55]">
 {/* ================= TITLE BAR ================= */}
      <section className="relative w-full bg-[#c5c3c3] min-h-[136px] flex items-center justify-center px-5 py-7 overflow-hidden">

        {/* Decorative Background */}
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

        {/* Blueprint Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.10] bg-center bg-cover"
          style={{
            backgroundImage: "url('/imgi_6_HPL-Compact-Board.webp')",
          }}
        />

        <div className="relative z-10 max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Product Image */}
          <div className="w-full">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[390px] overflow-hidden rounded-[10px] shadow-[0_5px_18px_rgba(0,0,0,0.20)]">

              <Image
                src="/imgi_6_HPL-Compact-Board.webp"
                alt="Ryka Restroom Cubicles"
                fill
                priority
                // sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

            </div>
          </div>


          {/* Right Content */}
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


           {/* ================= OUR ETHICS ================= */}
      <div
        className="relative bg-[#171819] mt-5 bg-cover bg-center px-5 py-12 md:py-14 lg:py-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,16,17,0.94),rgba(15,16,17,0.94)),url('/bg1-aboutus')",
        }}
      >

        <div className="relative max-w-[1235px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-11">
            <h2 className="text-white text-[36px] md:text-[46px] font-normal leading-tight">
              Our Ethics
            </h2>

            <div className="w-[60px] h-px bg-white/50 mx-auto mt-5" />
          </div>

          {/* Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">

            {ethics.map((item, index) => (
              <div
                key={item.title}
                className="group relative w-full h-[260px] sm:h-[300px] md:h-[250px] lg:h-[262px] [perspective:1200px]"
              >

                {/* Flip Inner */}
                <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* FRONT IMAGE */}
                  <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-all duration-500" />

                    {/* Front Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">

                      <div className="w-12 h-12 border border-white/70 flex items-center justify-center mb-4">
                        <span className="text-white text-xl font-light">
                          {index === 0 ? "✓" : index === 1 ? "◎" : "✦"}
                        </span>
                      </div>

                      <h3 className="text-white text-[19px] md:text-[20px] font-medium tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-white/70 text-[9px] tracking-[2px] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        HOVER TO DISCOVER
                      </p>

                    </div>
                  </div>

                  {/* BACK CONTENT */}
                  <div className="absolute inset-0 bg-[#000000] text-white p-6 md:p-5 lg:p-7 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

              

                    <div className="w-12 h-px bg-white/70 mb-4" />

                    <p className="text-white/90 text-[15px] md:text-[11px] lg:text-[12px] leading-[1.9]">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ================= STATISTICS ================= */}
      <div className="relative bg-[#fafafa] px-5 py-12 md:py-14 lg:py-12">

        {/* Subtle diagonal background pattern */}
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
                index !== 0
                  ? "lg:border-l border-[#d6d6d6]"
                  : ""
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

      </div>


 <div className="max-w-[1152px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 
 lg:gap-[18px] items-stretch">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">

          {/* Label */}
          <div className="text-[#999999] text-[11px] font-semibold tracking-[2px] uppercase mb-3">
            [ HOW IT WORKS ]
          </div>

          {/* Heading */}
          <h2 className="text-[#252525] text-[34px] md:text-[38px] lg:text-[36px] font-normal leading-tight">
            From Sketch to Life
          </h2>

          {/* Small Divider */}
          <div className="w-[60px] border-t border-dotted border-[#555555] mt-6" />

          {/* FAQ List */}
          <div className="mt-12 border-b border-[#555555]">

            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-t border-[#cccccc] first:border-t-0"
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? -1 : index)
                  }
                  aria-expanded={activeFaq === index}
                  className="w-full flex items-center justify-between text-left py-5 px-3 group"
                >
                  <span className="text-[15px] md:text-[16px] text-[#222222] font-normal group-hover:text-[#237da8] transition-colors">
                    {faq.question}
                  </span>
                </button>

                {/* Answer */}
                {activeFaq === index && (
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

        {/* RIGHT IMAGE */}
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

 <div className=" w-full bg-[#1684b5]  ">
        <div className="w-7xl mx-auto py-10 ">

        {/* Heading */}
        <h2 className="text-center text-white text-[38px] sm:text-[52px] md:text-[66px] lg:text-[72px] font-semibold leading-tight tracking-[-2px] mb-5 md:mb-3">
          Cubicles Stall Applications
        </h2>

        {/* Application Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-x-12 lg:gap-x-[55px] gap-y-1">

          {applications.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col">

              {column.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-2 py-[8px] border-b border-white/70 
                  last:border-b-0 group"
                >

                  <Leaf
                    size={13}
                    fill="white"
                    strokeWidth={1.5}
                    className="shrink-0 text-white"
                  />

                  <span className="text-white text-[14px] font-normal 
                  group-hover:translate-x-1 transition-transform duration-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>
          ))}

        </div>

      </div>
      </div>


      
    </main>
  );
}
