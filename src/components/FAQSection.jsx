"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqsData = [
  {
    question: "How should a new door be measured?",
    answer:
      "Measure the width and height of the opening between pilasters, allowing standard clearance for proper door fit.",
  },
  {
    question: "How long does delivery take?",
    answer: "We deliver within 14 working days after order confirmation.",
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#1a1a1a] py-16 md:py-24 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-10">
          FAQS
        </h2>

        {/* FAQ List */}
        <div className="border border-gray-700 rounded-sm overflow-hidden">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-700 last:border-b-0"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-black text-white text-left hover:bg-[#111] transition-colors"
                >
                  <span className="text-[15px] md:text-base font-medium pr-4">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 py-4 bg-white text-[#171717] text-[14px] md:text-[15px] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}