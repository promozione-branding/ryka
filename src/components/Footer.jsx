"use client";

import { usePathname } from "next/navigation";

const pages = [
  "Blogs",
  "About Us",
  "Why-Choose-Us",
  "Our Clientele",
  "Careers",
  "Gallery",
];

const categories = [
  "Public Restroom Partitions",
  "Luxe Partition Systems",
  "Kids Restroom Partitions",
  "Urinal Partitions",
  "Color & Finished",
];

export default function Footer() {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

  // Hide the footer on admin routes
  if (isAdmin) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden">

      {/* Background Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
        <div className="text-center opacity-[0.19] whitespace-nowrap">
          <h1 className="text-[130px] sm:text-[190px] lg:text-[290px] font-black leading-[0.8] tracking-[-12px]">
            RYKA
          </h1>
          <p className="text-[32px] sm:text-[45px] lg:text-[65px] font-semibold tracking-[3px]">
            RESTROOM CUBICLES
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-[1450px] mx-auto px-6 md:px-12 pt-12 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* About */}
          <div className="max-w-[380px]">
            <img src="/logo-10 (2).webp" alt="" />
            <p className="text-[15px] leading-[29px] text-white">
              Ryka Restroom Cubicles are an amazing mix of
              restroom visual appeal & equally essential.
              Team Interior Solutions offers guaranteed customer
              satisfaction.
            </p>
          </div>

          {/* Pages */}
          <div className="md:pl-10">
            <h3 className="text-[17px] font-bold mb-7">
              Pages
            </h3>

            <ul className="space-y-[9px]">
              {pages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.toLowerCase()}
                    className="text-[14px] text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:text-right">
            <h3 className="text-[17px] font-bold mb-7">
              Our Categories
            </h3>

            <ul className="space-y-[9px]">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[14px] text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-white/20">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">

          <p className="text-[13px] text-white">
            Copyright © 2025 Ryka Restroom Cubicles. All Rights Reserved.
          </p>

          <p className="text-[13px] text-white">
            Website Designed By{" "}
            <a
              href="https://inquirybazaar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              Inquiry Bazaar Pvt. Ltd.
            </a>
            {"  "}
            <a href="#" className="underline hover:text-gray-400">
              B2B Marketplace
            </a>
          </p>

        </div>
      </div>

      {/* Back To Top - Text Only */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed right-5 bottom-0 z-50 w-[39px] h-[41px] bg-[#999999] text-white flex items-center justify-center hover:bg-white hover:text-black transition-all text-xl"
      >
        ↑
      </button>

    </footer>
  );
}