
"use client";

const clients = [
  { name: "Delhi Metro", image: "1-6.webp" },
  { name: "Indian Railways", image: "brand-11.webp" },
  { name: "Airports Authority of India", image: "brand-9.webp" },
  { name: "Indian Oil", image: "brand-7.webp" },
  { name: "CPWD", image: "brand-2.webp" },
  { name: "Central Vigilance Commission", image: "brands-2.webp" },
  { name: "Delhi PWD", image: "brand-3.webp" },
  { name: "M3M", image: "brand-31.webp" },
  { name: "Nirala Estate", image: "brand-32.webp" },
  { name: "CRC", image: "crc-1.webp" },
  { name: "Vatika", image: "brand-30.webp" },
  { name: "Skootr", image: "skooter.webp", folder: "2025/07" },
  { name: "Supertech", image: "brand-29.webp" },
  { name: "Ganga Realty", image: "ganga.webp" },
  { name: "Emaar MGF", image: "mgf.webp" },
  { name: "Ansal API", image: "brand-20.webp" },
  { name: "Gurjar Properties", image: "brand-38.webp" },
  { name: "Tata Realty", image: "brand-34.webp" },
  { name: "TDI", image: "tdi.webp", folder: "2025/07" },
  { name: "DPS", image: "brand-14.webp" },
  { name: "K R Mangalam University", image: "brand-12.webp" },
  { name: "Rishihood University", image: "Rishihood-1.webp" },
  { name: "Ashoka University", image: "Ashoka.webp", folder: "2025/07" },
  { name: "Bharati Vidyapeeth", image: "bharti.webp", folder: "2025/07" },
  { name: "Summer Fields School", image: "Summer.webp", folder: "2025/07" },
  { name: "Vasant Valley School", image: "vasant-valley.webp", folder: "2025/07" },
  { name: "Apollo International School", image: "Apollo.webp", folder: "2025/07" },
  { name: "Him Academy", image: "Him.webp", folder: "2025/07" },
  { name: "Army Public School", image: "0oaXAG-j_400x400.jpg", folder: "2025/07" },
  { name: "DAV College", image: "dav-college.webp", folder: "2025/07" },
  { name: "Rich Harvest School", image: "Rich-Harvest.webp" },
  { name: "Shri Ram Global School", image: "brand-19.webp" },
  { name: "Toyota", image: "logo-7.webp" },
  { name: "Maruti Suzuki", image: "logo-3.webp" },
  { name: "Honda", image: "logo-5.webp" },
  { name: "Yamaha", image: "yamaha.webp", folder: "2025/07" },
  { name: "Mercedes Benz", image: "Mercedes.webp" },
  { name: "FCC Technology", image: "fcc.webp", folder: "2025/07" },
  { name: "Samsung", image: "logo-6.webp" },
  { name: "Daikin", image: "Daikin.webp" },
  { name: "IndiGo", image: "brand-40.webp" },
  { name: "Zudio", image: "Zudio.webp" },
  { name: "Airtel", image: "logo-4.webp" },
  { name: "Lenskart", image: "lenskart.webp", folder: "2025/07" },
  { name: "Policy Bazaar", image: "brand-43-1.webp" },
  { name: "ABP News", image: "abp-news.webp", folder: "2025/07" },
  { name: "Siemens", image: "Siemens.webp" },
  { name: "Bikanervala", image: "brand-52.webp" },
  { name: "Skyline Airlines", image: "skyline.webp", folder: "2025/07" },
  { name: "Whirlpool", image: "brand-10.webp" },
  { name: "M2K", image: "m2k.webp" },
  { name: "Maxxis", image: "Maxxis.webp", folder: "2025/07" },
  { name: "Allcargo Logistics", image: "All-cargo.webp", folder: "2025/07" },
  { name: "Uno Minda", image: "brands.webp", folder: "2025/07" },
  { name: "SMCC", image: "smcc.webp", folder: "2025/07" },
  { name: "YKK", image: "Ykk.webp", folder: "2025/07" },
  { name: "Mitsubishi", image: "Mistsubishi.webp", folder: "2025/07" },
  { name: "Kidzania", image: "Kidzania.webp" },
  { name: "Jurassic Park", image: "Jurassic-Park.webp" },
  { name: "Crystal World", image: "crystal-World.webp", folder: "2025/07" },
  { name: "Getwell", image: "brand-47.webp" },
  { name: "GSK", image: "brand-48.webp" },
  { name: "Motherhood Hospital", image: "motherhood.webp", folder: "2025/07" },
  { name: "Vedantaa Hospital", image: "vedanta.webp", folder: "2025/07" },
  { name: "Tarak Hospital", image: "Tarak-hospital.webp", folder: "2025/07" },
];

const getLogoUrl = (client) => {
  const folder = client.folder || "2025/06";

  return `https://teaminteriorsolutions.com/wp-content/uploads/${folder}/${client.image}`;
};

export default function Clientele() {
  return (
    <main className="w-full bg-[#D8F3F9] min-h-screen">

      {/* Heading Section */}
      <section className="px-5 pt-16 pb-10 md:pt-20 md:pb-14 text-center">
        <span className="text-sm tracking-[4px] uppercase text-[#b49a55] font-semibold">
          Trusted Partnerships
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-[#171717] mt-3">
          Our Prestigious Client
        </h1>

        <span className="block w-16 h-[2px] bg-[#c6a95e] mx-auto mt-5" />
      </section>

      {/* Client Logos */}
      <section className="max-w-[1350px] mx-auto px-5 md:px-8 pb-20">

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
