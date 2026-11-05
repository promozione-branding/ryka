
"use client";

import FlowerBackdrop from "@/components/FlowerBackdrop";
import {
  UsersRound,
  UserRoundCheck,
  Wrench,
  Users,
  CheckCheck,
} from "lucide-react";

const feature = [
  {
    icon: UsersRound,
    title: "Dedicated Team",
    description:
      "We pride that we have strong team members who are able to do any task. Our team members have too much experience to work.",
  },
  {
    icon: UserRoundCheck,
    title: "100% Client Orientation",
    description:
      "We improve our clients operational processes and capacity. However, our work is clearly incomplete without good results.",
  },
  {
    icon: Wrench,
    title: "Superior Customer Service",
    description:
      "We are always there for our customers. We give them peace of mind. They know they can count on us and our staff.",
  },
  {
    icon: Users,
    title: "Professional workers",
    description:
      "We improve our clients operational processes and capacity. However, our work is clearly incomplete without good results.",
  },
];

const leftAdvantages = [
  "Compact laminates that are anti-virus and anti-bacterial.",
  "Clean and simple to keep up",
  "A noise-cancelling device to prevent annoying noises",
  "created to offer improved performance and durability.",
  "Outstanding resilience to high temperatures, moisture, and humidity.",
];

const rightAdvantages = [
  "High resistance to abrasion and wear",
  "reduces the total building load",
  "Installation without water",
  "Design and space flexibility",
];

const features = [
  [
    {
      icon: "✅",
      title: "Saves Space",
      description:
        "Our compact toilet partitions are just 12mm to 18mm thick — much slimmer than traditional 150mm brick walls, giving you more usable area.",
    },
    {
      icon: "🏗️",
      title: "Lightweight Solution",
      description:
        "These systems put less load on your building compared to heavy brickwork.",
    },
  ],
  [
    {
      icon: "⚡",
      title: "Quick Installation",
      description:
        "Fast-track your project — install up to 4 cubicles in a single day!",
    },
    {
      icon: "✨",
      title: "Clean and Tidy",
      description:
        "With no wet work involved, keeping your restroom neat becomes effortless.",
    },
    {
      icon: "🌬️",
      title: "Better Ventilation",
      description:
        "Smart designs allow for proper air circulation, improving comfort and hygiene.",
    },
  ],
  [
    {
      icon: "🧹",
      title: "Easy to Clean Floors",
      description:
        "The design avoids hard-to-reach corners, making dusting and mopping a breeze.",
    },
    {
      icon: "🎨",
      title: "Stylish Options",
      description:
        "Pick from a vibrant range of colors and patterns to match your interior style.",
    },
  ],
];
export default function WhyChooseUs() {
  return (
    <>
    <section className="relative overflow-hidden bg-[#dfc98d] px-5 md:px-[5.5%] py-16 md:py-12 min-h-[650px]">

<FlowerBackdrop/>
      <div className="relative z-10 max-w-[1250px] mx-auto pt-22">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-11">
          <h2 className="text-[42px] md:text-[72px] leading-tight font-bold text-[#171717]">
            Why Choose Us
          </h2>

          <span className="block w-[60px] h-px bg-black mx-auto mt-2" />

          <p className="text-black text-sm md:text-base mt-2">
            We deliver durable, hygienic, and stylish restroom cubicle
            solutions tailored for high-traffic commercial spaces.
          </p>
        </div>

        {/* Cards */}/
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4">

          {feature.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative min-h-[340px] bg-[#f7f7f7] px-6 py-8 flex justify-center text-center cursor-pointer transition-all duration-500 hover:bg-[#191919] hover:-translate-y-1"
              >

                {/* Background pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.12] bg-[linear-gradient(125deg,transparent_48%,#777_49%,transparent_50%),linear-gradient(35deg,transparent_48%,#777_49%,transparent_50%)] bg-[length:95px_95px]" />

                {/* Content */}
                <div className="relative z-10 max-w-[230px]">

                  <Icon
                    size={40}
                    strokeWidth={2.8}
                    className="mx-auto mb-6 text-[#171717] transition-colors duration-500 group-hover:text-white"
                  />

                  <h3 className="text-[21px] leading-snug font-normal text-black mb-5 transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-[1.8] text-[#777] transition-colors duration-500 group-hover:text-[#bdbdbd]">
                    {item.description}
                  </p>

                </div>

                {/* Bottom animated line */}
                <span className="absolute -bottom-[10px] left-0 w-full h-px bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

              </div>
            );
          })}

        </div>
      </div>

    </section>

    
{/* //   New section */}

  <div className="w-full my-4 max-w-[1057px] ml-auto bg-[#17191d] bg-[url('/images/dark-texture.webp')] bg-cover bg-center rounded-tl-[70px] rounded-bl-[70px] rounded-tr-none rounded-br-none px-6 py-10 sm:px-10 md:px-12 lg:px-16 md:py-8">

        {/* Heading */}
        <div className="text-center mb-7 md:mb-8">
          <h2 className="text-white text-3xl sm:text-4xl md:text-[46px] font-semibold leading-tight">
            Ryka Restroom Advantages
          </h2>

          <span className="block w-[60px] h-px bg-white/60 mx-auto mt-4" />
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">

          {/* Left Column */}
          <div>
            {leftAdvantages.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 py-2.5 border-b border-white/10 last:border-b-0"
              >
                <CheckCheck
                  size={16}
                  className="text-[#00a9e0] shrink-0 mt-0.5"
                  strokeWidth={3}
                />

                <p className="text-white text-sm md:text-[14px] leading-6">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="md:border-l md:border-black md:pl-3 lg:pl-7">
            {rightAdvantages.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 py-2.5 border-b border-white/10 last:border-b-0"
              >
                <CheckCheck
                  size={16}
                  className="text-[#00a9e0] shrink-0 mt-0.5"
                  strokeWidth={3}
                />

                <p className="text-white text-sm md:text-[14px] leading-6">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>


      <section className="w-full bg-[#f7f7f7] py-3">

      <div className="w-full md:w-[75%] bg-[#dfc98d] rounded-tr-[70px] rounded-br-[70px] px-5 sm:px-8 md:px-10 lg:px-10 py-8 md:py-6">

        {/* Main Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-[36px] font-semibold text-black leading-tight">
            Systems That Are Wet and Dry
          </h2>

          <span className="block w-[55px] h-px bg-black/70 mx-auto mt-4" />
        </div>

        {/* Introduction */}
        <div className="space-y-4 text-[13px] md:text-[13.5px] leading-[1.8] text-black">

          <p>
            One common method of restroom setup is the wet restroom system.
            Brick walls, tiles, and the necessary hardware make up its
            construction. The fact that the doors and partition walls of a
            wet restroom are situated on the floor is one of its main
            disadvantages. This increases the likelihood of water, dust,
            grime, and stain deposits, which can result in an unpleasant odor.
            Conversely, a dry restroom has a contemporary design,
          </p>

          <p>
            and the whole arrangement makes a lot of sense. Compared to
            150mm brick walls, this system's primary benefit is space
            economy, as it uses doors and partitions that are 12 or 18 mm
            thick. To prevent dust, grime, and a strong odor, a space is
            usually kept between the ground and the barrier.
          </p>

        </div>

        {/* Second Heading */}
        <div className="text-center mt-5 mb-5">
          <h2 className="text-2xl md:text-[36px] font-semibold text-black leading-tight">
            What Makes a Dry Toilet System Better?
          </h2>

          <span className="block w-[55px] h-px bg-black/70 mx-auto mt-4" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">

          {features.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-5">

              {column.map((item, index) => (
                <div key={index}>

                  <h3 className="flex items-center gap-1.5 text-[13px] md:text-[13.5px] font-bold text-black mb-1">
                    <span>{item.icon}</span>
                    {item.title}
                  </h3>

                  <p className="text-[13px] md:text-[13.5px] leading-[1.8] text-black">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>
          ))}

        </div>

      </div>
    </section>

    </>
  );
}
