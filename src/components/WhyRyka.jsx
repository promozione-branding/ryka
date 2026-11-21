
"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  ShieldCheck,
  ShieldPlus,
  Gem,
  Accessibility,
  RotateCcw,
} from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "100% Waterproof",
    description:
      "High-pressure compact laminate (HPL) and HDPE panels resist swelling, rusting and delamination — even in gyms, pools and high-humidity zones.",
    texture: "water",
  },
  {
    icon: ShieldCheck,
    title: "Hardware that Doesn’t Rust",
    description:
      "Rust-proof aluminium alloy profiles with Grade 304 stainless steel fittings, tested for chemical resistance and load-bearing strength.",
    texture: "metal",
  },
  {
    icon: ShieldPlus,
    title: "Hygienic & Anti-bacterial",
    description:
      "Non-porous, anti-graffiti surfaces resist stains, mould and odour. Daily cleaning needs only a damp cloth and mild soap.",
    texture: "hygiene",
  },
  {
    icon: Gem,
    title: "Scratch & Impact Resistant",
    description:
      "Built for high-footfall areas like airports, malls and metro stations — panels keep their finish under heavy daily use.",
    texture: "scratch",
  },
  {
    icon: Accessibility,
    title: "Accessible by Design",
    description:
      "ADA-compliant options with wider entrances, lever handles, grab bars and wheelchair clearance for elderly and differently-abled users.",
    texture: "access",
  },
  {
    icon: RotateCcw,
    title: "Low Maintenance, Long Life",
    description:
      "No repainting, no polishing, no wet-work repairs. Modular parts are individually replaceable, keeping lifetime cost low.",
    texture: "maintenance",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -7 }}
      className="
        group relative flex min-h-[200px]
        overflow-hidden rounded-[30px]
        border-[3px] border-white
        bg-gradient-to-br from-white via-[#fdfdff] to-[#f1f3fa]
        shadow-[0_12px_28px_rgba(15,39,81,0.13)]
        transition-shadow duration-300
        hover:shadow-[0_20px_40px_rgba(15,39,81,0.2)]
      "
    >
      {/* Dark blue decorative icon panel */}
      <div
        className="
          relative z-10 flex w-[31%] min-w-[115px]
          shrink-0 items-center justify-center
          overflow-hidden
          rounded-l-[26px] rounded-r-[65px]
          border-r-[5px] border-[#e5a51f]
          bg-gradient-to-br
          from-[#365e87] via-[#026db5] to-[#026db5]
          shadow-[6px_0_12px_rgba(9,36,75,0.1)]
          sm:min-w-[125px]
        "
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(145deg,transparent 0px,transparent 8px,rgba(255,255,255,0.08) 9px,transparent 10px)",
          }}
        />

        {feature.texture === "water" && (
          <div
            className="absolute inset-x-0 bottom-0 h-[48%] opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 80%,#9bd9ff 1px,transparent 3px), radial-gradient(circle at 70% 40%,#9bd9ff 2px,transparent 4px)",
              backgroundSize: "19px 22px",
            }}
          />
        )}

        {feature.texture === "hygiene" && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle,#b9d9f3 1px,transparent 1px)",
              backgroundSize: "13px 13px",
            }}
          />
        )}

        <Icon
          size={58}
          strokeWidth={1.6}
          className="
            relative z-10 text-white
            drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Card content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-5 xl:px-7">
        <h3
          className="
            text-[19px] font-extrabold leading-[1.13]
            tracking-[-0.6px] text-[#102d5a]
            md:text-[20px] xl:text-[23px]
          "
        >
          {feature.title}
        </h3>

        <div
          className="
            mt-3 h-[3px] w-[52px] rounded-full
            bg-gradient-to-r from-[#ffe09a] to-[#eda500]
            transition-all duration-300
            group-hover:w-[85px]
          "
        />

        <p
          className="
            mt-3 text-[12px] leading-[1.55]
            text-[#344052]
            xl:text-[14px]
          "
        >
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function WhyRyka() {
  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#f2f5fc]
        pt-7 pb-12
        md:pt-12 md:pb-12
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_at_20%_15%,#ffffff_0%,#f2f5fc_55%,#e8edf7_100%)]
        "
      />

      {/* Hero */}
      <div
        className="
          relative mx-auto flex w-full max-w-[1720px]
          flex-col px-5 sm:px-8 lg:min-h-[300px]
          lg:flex-row lg:items-center lg:px-16
        "
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-20 w-full lg:w-[51%]"
        >
          <div className="mb-5 flex items-center gap-4">
            <span
              className="
                h-[5px] w-[55px]
                bg-gradient-to-r from-[#ffcb42] to-[#b98208]
              "
            />
            <span
              className="
                text-[14px] font-extrabold
                tracking-[1.5px] text-[#0c2853]
                sm:text-[17px]
              "
            >
              WHY RYKA
            </span>
          </div>

          <h2
            className="
              max-w-[770px] text-[30px]
              font-extrabold leading-[1.08]
              tracking-[-1.8px] text-[#026db5]
              sm:text-[46px]
              lg:text-[48px]
              xl:text-[57px]
            "
          >
            Engineered for wet, busy,
            <span
              className="
                mt-1 block
                bg-gradient-to-r
                from-[#b98121] via-[#d89c2b] to-[#ffb72f]
                bg-clip-text text-transparent
              "
            >
              real-world washrooms
            </span>
          </h2>

          {/* Gold underline */}
          <div
            className="
              mt-4 h-[8px] w-[250px] max-w-[60%]
              bg-gradient-to-r from-transparent via-[#f3b536] to-transparent
              opacity-70 blur-[2px]
            "
          />

          <p
            className="
              mt-5 max-w-[700px]
              text-[14px] leading-[1.65]
              text-[#3c4656]
              sm:text-[16px] xl:text-[18px]
            "
          >
            Say goodbye to rusted hardware, poor layouts and
            compromised hygiene. This is what goes into every
            Ryka panel and fitting:
          </p>
        </motion.div>

        {/* Curved washroom image */}
        <motion.div
          initial={{ opacity: 0, x: 55 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            relative mt-9 h-[250px] w-full
            lg:absolute lg:top-[-64px] lg:right-0
            lg:mt-0 lg:h-[370px] lg:w-[51%]
          "
        >
          {/* Gold outer curve */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b from-[#fbd16b] via-[#d79c2b] to-[#f5c96a]
              shadow-[-12px_12px_0_rgba(15,45,91,0.10)]
            "
            style={{
              clipPath:
                "path('M 95 0 L 1400 0 L 1400 500 L 160 500 Q -40 370 45 180 Z')",
            }}
          />

          {/* Image wrapper */}
          <div
            className="
              absolute inset-[8px_0_8px_12px]
              overflow-hidden
              rounded-bl-[140px]
              border-l-[8px] border-[#e9ae36]
              bg-[#d7dce5]
              lg:rounded-bl-[220px]
            "
            style={{
              clipPath:
                "polygon(15% 0,100% 0,100% 100%,12% 100%,0 82%,0 48%)",
            }}
          >
            <img
              src="/get-in-touch-5-1024x576.webp"
              alt="Premium Ryka washroom cubicle partitions"
              className="h-full w-full object-cover object-center"
            />

            <div
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-r
                from-[#0e2d59]/10 via-transparent to-transparent
              "
            />
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="
          relative z-20 mx-auto mt-12
          grid w-full max-w-[1720px]
          grid-cols-1 gap-6 px-5
          sm:grid-cols-2 sm:px-8
          lg:mt-10 lg:grid-cols-3 lg:gap-7 lg:px-16
        "
      >
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </motion.div>

      {/* Bottom decorative waves */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65px] overflow-hidden">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="absolute bottom-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M0 36 C160 15 300 85 480 90 L0 90Z"
            fill="#e9aa2c"
          />
          <path
            d="M0 65 C170 35 330 90 490 90 L0 90Z"
            fill="#102d5a"
          />
          <path
            d="M970 90 C1140 65 1280 15 1440 42 L1440 90Z"
            fill="#e9aa2c"
          />
          <path
            d="M1010 90 C1170 72 1330 53 1440 72 L1440 90Z"
            fill="#102d5a"
          />
        </svg>
      </div>
    </section>
  );
}
