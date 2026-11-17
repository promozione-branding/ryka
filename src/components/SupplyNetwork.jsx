
"use client";

import { motion } from "framer-motion";
import { MapPin, Globe2, ArrowUpRight } from "lucide-react";
import cities from "@/lib/city";

export default function SupplyNetwork() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-6 sm:py-12">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-[#F2E8FF]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-[#FFF0E4]/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-center"
        >
          

          <h2 className="text-3xl font-black tracking-tight text-[#33203F] sm:text-4xl md:text-5xl lg:text-[54px]">
            Our Supply{" "}
            <span className="text-[#026eb8]">Network</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-5 h-1 rounded-full bg-[#026eb8]"
          />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777187] sm:text-base">
            Connecting customers and delivering quality products
            across cities, regions and communities.
          </p>
        </motion.div>

        {/* City Network */}
        <div className="relative rounded-[25px] border border-[#EFE7F5] bg-[#FFFDFF] px-4 py-8 shadow-[0_12px_40px_rgba(66,34,91,0.045)] sm:px-8 sm:py-5 lg:px-12">

  

          <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3 sm:gap-x-2.5 sm:gap-y-4">

            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.015, 0.5),
                }}
                className="group flex items-center gap-1.5 sm:gap-2.5"
              >
                <motion.span
                  whileHover={{
                    y: -3,
                    color: "#026eb8",
                  }}
                  transition={{ duration: 0.2 }}
                  className="cursor-default whitespace-nowrap text-[13px] font-medium text-[#40374A] transition-colors sm:text-[15px] md:text-base lg:text-[17px]"
                >
                  {city}
                </motion.span>

                {index !== cities.length - 1 && (
                  <span className="select-none text-[#C9B8D5]">
                    ·
                  </span>
                )}
              </motion.div>
            ))}

          </div>

          {/* Bottom Accent */}
          <div className="mx-auto mt-9 h-px max-w-[500px] bg-gradient-to-r from-transparent via-[#E4D5EF] to-transparent" />

          {/* Location Count */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#82748F]">
            <MapPin size={17} className="text-[#026eb8]" />
            <span>
              Expanding our reach across{" "}
              <span className="font-black text-[#026eb8]">
                {cities.length}+ locations
              </span>
            </span>
          </div>
        </div>

        {/* Bottom Message */}
     

      </div>
    </section>
  );
}
