
"use client";

import { motion } from "framer-motion";
import {
  Award,
  Layers3,
  Building2,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Premium Quality Products",
    description: "Superior craftsmanship for lasting performance.",
  },
  {
    icon: Layers3,
    title: "Reliable & Consistent Standards",
    description: "Trust in quality, every time.",
  },
  {
    icon: Building2,
    title: "Built for Modern Commercial Spaces",
    description: "Designed for today's professional environments.",
  },
  {
    icon: ShieldCheck,
    title: "Durable & Easy to Maintain",
    description: "A long-term solution with minimal upkeep.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function WhyChooseRyka() {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FC] py-6 md:py-12">

      {/* Background decoration */}
      <div className="absolute -right-40 -top-48 h-[450px] w-[450px] rounded-full border-[70px] border-[#026DB5]/[0.035]" />
      <div className="absolute -bottom-64 -left-40 h-[450px] w-[650px] rounded-full bg-[#026DB5]/[0.035]" />

      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-16">

        {/* SECTION HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center md:mb-8"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#026DB5]" />
            <span className="text-[11px] font-bold uppercase tracking-[4px] text-[#026DB5]">
              Why Choose RYKA
            </span>
            <span className="h-[2px] w-12 bg-[#026DB5]" />
          </div>

          <h2 className="text-[38px] font-medium leading-tight tracking-[-1.5px] text-[#202020] sm:text-[48px] md:text-[64px]">
            The <span className="font-semibold text-[#026DB5]">RYKA</span>{" "}
            Advantage.
          </h2>

          <p className="mt-3 text-[15px] text-[#737D85] md:text-[20px]">
            Because Quality Makes the Difference.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-7">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[380px] overflow-hidden rounded-[120px_20px_20px_20px] sm:min-h-[450px] lg:col-span-5 lg:min-h-[540px]"
          >
            <img
              src="/gallery/silvera-3.webp"
              alt="RYKA premium toilet cubicles"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071D31]/75 via-transparent to-transparent" />

            {/* Image text */}
            <div className="absolute bottom-0 left-0 p-7 md:p-10">
              <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[3px] text-[#83CCF4]">
                RYKA | Premium Solutions
              </span>

              <h3 className="max-w-[350px] text-[30px] font-medium leading-tight text-white md:text-[40px]">
                Creating Better Spaces.
              </h3>

              <p className="mt-3 max-w-[300px] text-[13px] leading-6 text-white/75">
                Premium toilet cubicles designed for modern commercial
                environments.
              </p>
            </div>

            {/* Image accent */}
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[100%] bg-[#026DB5]/20" />
          </motion.div>

          {/* RIGHT BENEFITS */}
          <div className="flex flex-col justify-center lg:col-span-7">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.13 },
                },
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="group flex min-h-[185px] items-start gap-5 rounded-[22px] border border-white bg-white/80 p-6 shadow-[0_8px_35px_rgba(28,65,95,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#026DB5]/20 hover:shadow-[0_15px_35px_rgba(2,109,181,0.09)] md:p-7"
                  >
                    {/* Icon */}
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#E8F3FA] text-[#026DB5] transition-all duration-500 group-hover:bg-[#026DB5] group-hover:text-white">
                      <Icon size={34} strokeWidth={1.6} />
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <span className="mb-2 block text-[10px] font-bold tracking-[2px] text-[#026DB5]/70">
                        0{index + 1}
                      </span>

                      <h3 className="text-[16px] font-semibold leading-6 text-[#202020] md:text-[18px]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-[#737D85]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-[#DCE7EF] pt-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[2.5px] text-[#026DB5]">
                One Solution. Multiple Environments.
              </p>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#026DB5]" />
                <span className="text-[12px] text-[#7B858D]">
                  Serving diverse spaces with confidence
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
