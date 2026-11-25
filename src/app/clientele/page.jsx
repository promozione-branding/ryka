"use client";

import { clients } from "@/lib/clientele";

const getLogoUrl = (client) => {
  return `/clientele/${client.image}`;
};

export default function Clientele() {
  return (
    <main className="w-full bg-[#D8F3F9] min-h-screen">
      <section className="px-5 pt-18 pb-5 md:pt-20 md:pb-14 text-center mt-10">
        <span className="text-sm tracking-[4px] uppercase text-[#b49a55] font-semibold">
          Trusted Partnerships
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-[#171717] mt-3">
          Our Prestigious Client
        </h1>

        <span className="block w-16 h-[2px] bg-[#c6a95e] mx-auto mt-5" />
      </section>

      {/* Client Logos */}
      <section className="max-w-[1350px] mx-auto px-5 md:px-8 pb-10 md:pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-sm
               min-h-[145px] md:min-h-[165px] flex items-center justify-center p-2 
               md:p-3 transition-all duration-300 hover:shadow-lg hover:border-[#c6a95e]/50 
               hover:-translate-y-1"
            >
              <img
                src={getLogoUrl(client)}
                alt={client.name}
                loading="lazy"
                className="w-full h-[85px] md:h-[100px] object-contain transition-transform 
                duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}