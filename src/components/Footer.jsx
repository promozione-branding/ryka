"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const pages = [
  { name: "Blogs", href: "/blogs" },
  { name: "About Us", href: "/about-us" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Our Clientele", href: "/clientele" },
  { name: "Careers", href: "/careers" },
  { name: "Gallery", href: "/gallery" },
];

const categories = [
  { name: "Public Restroom Partitions", href: "/public-restroom-partitions" },
  { name: "Luxe Partition Systems", href: "/luxe-partition-systems" },
  { name: "Kids Restroom Partitions", href: "/kids-restrooms-partitions" },
  { name: "Urinal Partitions", href: "/urinals-partitions" },
  { name: "Color & Finished", href: "/colors-finished" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socials = [
  { name: "Facebook", href: "https://facebook.com/your-page", Icon: FaFacebookF },
  { name: "Instagram", href: "https://instagram.com/your-page", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/your-page", Icon: FaLinkedinIn },
  { name: "YouTube", href: "https://youtube.com/@your-page", Icon: FaYoutube },
  { name: "X", href: "https://x.com/your-page", Icon: FaXTwitter },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* About */}
          <div className="max-w-[380px]">
            <img src="/logo-10 (2).webp" alt="Ryka Restroom Cubicles" />
            <p className="text-[15px] leading-[29px] text-white">
              Ryka Restroom Cubicles are an amazing mix of
              restroom visual appeal & equally essential.
              Team Interior Solutions offers guaranteed customer
              satisfaction.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white text-[16px] hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[17px] font-bold mb-7">
              Pages
            </h3>

            <ul className="space-y-[9px]">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-[14px] text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-[17px] font-bold mb-7">
              Our Categories
            </h3>

            <ul className="space-y-[9px]">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-[14px] text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[17px] font-bold mb-7">
              Legal
            </h3>

            <ul className="space-y-[9px]">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-white hover:text-gray-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
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