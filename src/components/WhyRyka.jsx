
"use client";

import { motion } from "framer-motion";
import {
  Droplet,
  Shield,
  CircleCheck,
  PencilRuler,
  Accessibility,
  RotateCw,
} from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "100% waterproof",
    description:
      "High-pressure compact laminate (HPL) and HDPE panels resist swelling, rusting and delamination — even in gyms, pools and high-humidity zones.",
  },
  {
    icon: Shield,
    title: "Hardware that doesn't rust",
    description:
      "Rust-proof aluminium alloy profiles with Grade 304 stainless steel fittings, tested for chemical resistance and load-bearing strength.",
  },
  {
    icon: CircleCheck,
    title: "Hygienic & anti-bacterial",
    description:
      "Non-porous, anti-graffiti surfaces resist stains, mould and odour. Daily cleaning needs only a damp cloth and mild soap.",
  },
  {
    icon: PencilRuler,
    title: "Scratch & impact resistant",
    description:
      "Built for high-footfall areas like airports, malls and metro stations — panels keep their finish under heavy daily use.",
  },
  {
    icon: Accessibility,
    title: "Accessible by design",
    description:
      "ADA-compliant options with wider entrances, lever handles, grab bars and wheelchair clearance for elderly and differently-abled users.",
  },
  {
    icon: RotateCw,
    title: "Low maintenance, long life",
    description:
      "No repainting, no polishing, no wet-work repairs. Modular parts are individually replaceable, keeping lifetime cost low.",
  },
];

export default function WhyRyka() {
  return (
    <section className="min-h-screen bg-[#eef2fa] flex items-center justify-center 
    px-5 sm:px-8 lg:px-10 py-14 md:py-13">

      <div className="w-full max-w-[1300px] mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-10"
        >

          <div className="flex items-center gap-3 mb-4">
            <span className="w-[35px] h-[1px] bg-[#d5ae32]" />

            <span className="text-[9px] font-bold tracking-[2.5px] text-[#2454a0] uppercase">
              Why Ryka
            </span>
          </div>

          <h2 className="font-serif text-[#102b5b] text-[32px] sm:text-[38px] md:text-[40px] leading-[1.08] tracking-[-1px] max-w-[600px]">
            Engineered for wet, busy, real-world washrooms
          </h2>

          <p className="text-[#71809e] text-[13px] sm:text-[14px] leading-[24px] mt-3 max-w-[620px]">
            Say goodbye to rusted hardware, poor layouts and compromised hygiene.
            This is what goes into every Ryka panel and fitting:
          </p>

        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="bg-white border border-[#d9e0ed] min-h-[201px] px-6 py-6 sm:px-6 sm:py-6 hover:border-[#d4ad35] hover:-translate-y-1 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-[35px] h-[35px] border border-[#c49a20] flex items-center justify-center text-[#b18715] mb-3">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[17px] font-bold text-[#102b5b] mb-1">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] leading-[21px] text-[#71809e]">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
