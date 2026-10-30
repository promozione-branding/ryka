
"use client";

import {
  ClipboardList,
  Boxes,
  Award,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Site Assessment & Planning",
    icon: ClipboardList,
    description:
      "At Ryka Restroom Cubicles, we start with a detailed site visit to understand your space, design needs, and timeline. As a leading toilet cubicle distributor, this step helps us plan your toilet cubicle partition setup perfectly.",
  },
  {
    number: "02",
    title: "Design & Material Finalization",
    icon: Boxes,
    description:
      "As expert restroom partition manufacturers, we design layouts that fit your space and style. We also help you choose the right materials for strong, long-lasting restroom cubicles.",
  },
  {
    number: "03",
    title: "Manufacturing & Quality Control",
    icon: Award,
    description:
      "At Ryka Restroom Cubicles, we manufacture every toilet cubicle partition using modern machines and follow strict quality checks to ensure durability, precision, and consistency.",
  },
  {
    number: "04",
    title: "Installation & Handover",
    icon: Wrench,
    description:
      "The Ryka Restroom Cubicles team ensures smooth on-site installation of your toilet cubicle partitions, followed by a final check to guarantee complete satisfaction.",
  },
];

export default function DesigningProcess() {
  return (
    <section
      className="relative w-full overflow-visible bg-[#171717] py-16 md:py-15"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,15,15,0.91),rgba(15,15,15,0.91)),url('/Footer-3-Bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 items-start">

          {/* LEFT SIDE - STICKY CONTENT */}
          <div className="lg:sticky lg:top-20 h-fit">

            <span className="text-[#b49a63] text-[11px] md:text-xs font-semibold tracking-[1px] uppercase">
              RYKA RESTROOM CUBICLES DESIGN APPROACH
            </span>

            <h2 className="mt-1 text-white text-3xl sm:text-4xl font-bold leading-tight">
              Our Designing Process
            </h2>

            <p className="mt-3 text-white text-[13px] md:text-[14px] leading-[1.9] font-medium max-w-[550px]">
              At Ryka Restroom Cubicles, we make restroom design easy. As a
              trusted toilet cubicle distributor, restroom partition
              manufacturer, and public restroom partitions manufacturer,
              we handle everything from planning to installation. Using
              quality materials and toilet cubicle partition supplier
              systems, we create clean, strong, and stylish cubicles that last.
            </p>

            {/* IMAGE COLLAGE */}
            <div className="mt-6 grid grid-cols-1 gap-[2px] overflow-hidden rounded-lg">

              <div className="relative  overflow-hidden">
                <img
                  src="/design-process-1.webp"
                  alt="Restroom cubicle planning"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>


            </div>

            {/* CONTACT BUTTON */}
            <a
              href="/contact-us/"
              className="group relative mt-5 inline-flex items-center justify-center gap-3 bg-white text-black px-9 py-4 text-[11px] font-semibold tracking-[1px] transition-all duration-300 hover:bg-[#1684b5] hover:text-white"
            >
              CONTACT NOW

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

              <span className="absolute -bottom-1 -right-2 h-5 w-px bg-white" />
            </a>

          </div>

          {/* RIGHT SIDE - STACKING PROCESS CARDS */}
          <div className="relative flex flex-col gap-5 lg:gap-0">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  style={{
                    zIndex: index + 1,
                  }}
                  className={`
                    relative
                    lg:sticky
                    lg:top-[90px]
                    flex
                    min-h-[190px]
                    flex-col sm:flex-row
                    gap-4
                    border border-[#dedede]
                    bg-white
                    p-4 sm:p-5
                    shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                    transition-transform duration-500
                    hover:-translate-y-1
                    ${index !== 0 ? "lg:-mt-[1px]" : ""}
                  `}
                >

                  {/* ICON BOX */}
                  <div className="flex h-[110px] w-full sm:h-[110px] sm:w-[110px] shrink-0 items-center justify-center bg-[#187eaf]">

                    <Icon
                      size={48}
                      strokeWidth={2.2}
                      className="text-white"
                    />

                  </div>

                  {/* CARD CONTENT */}
                  <div className="flex flex-1 flex-col justify-center">

                    <div className="flex items-center gap-2">

                      <span className="text-[#1684b5] text-[12px] font-bold">
                        {step.number}
                      </span>

                      <h3 className="text-[17px] sm:text-[18px] font-bold text-black leading-snug">
                        {step.title}
                      </h3>

                    </div>

                    <p className="mt-1 text-[12px] sm:text-[13px] text-black leading-[1.9]">
                      {step.description}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
