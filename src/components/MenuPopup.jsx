
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Solutions", href: "/restroom-cubicles" },
  { name: "Blog", href: "/blog" },
  { name: "Contacts", href: "/contact" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Latest Creations", href: "/latest-creations" },
  { name: "Clientele", href: "/clientele" },
  { name: "Careers", href: "/careers" },
];

const solutions = [
  { name: "Public Restroom Partitions", href: "/public-restroom-partitions" },
  { name: "Luxe Partition Systems", href: "/luxe-partition-systems" },
  { name: "Kids Restroom Partitions", href: "/kids-restroom-partitions" },
  { name: "Urinal Partitions", href: "/urinal-partitions" },
  { name: "Color & Finished", href: "/color-finished" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
];

export default function Menupopup({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-black/90 p-2 sm:p-3 transition-all duration-500 ${
        open
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative h-full w-full overflow-y-auto bg-white text-black transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-5"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-5 right-5 md:top-7 md:right-7 z-20 hover:text-[#1680b8] transition-colors"
        >
          <X size={25} strokeWidth={1.8} />
        </button>

        <div className="max-w-[1140px] mx-auto px-6 md:px-10 pt-8 md:pt-7 pb-10">

          {/* Logo */}
          <div className="flex justify-center mb-9">
            <Link href="/" onClick={onClose}>
              <Image
                src="/logo-10 (2).webp"
                alt="RYKA Restroom Cubicles"
                width={270}
                height={120}
                priority
                className="w-[200px] md:w-[255px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 max-w-[1000px] mx-auto">

            {/* Main Links */}
            <nav className="flex flex-col gap-5 md:gap-[21px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="w-fit text-[15px] md:text-base text-black hover:text-[#1680b8] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Solution Links */}
            <nav className="flex flex-col gap-5 md:gap-[21px]">
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="w-fit text-[15px] md:text-base text-black hover:text-[#1680b8] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

          </div>

          {/* Contact Footer */}
          <div className="mt-12 md:mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-7 max-w-[1000px] mx-auto">

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 text-[13px] text-black">

              <a
                href="mailto:rykarestroomcubicle@gmail.com"
                className="flex items-center gap-2 hover:text-[#1680b8]"
              >
                <Mail size={15} />
                rykarestroomcubicle@gmail.com
              </a>

              <span className="hidden sm:block font-bold">|</span>

              <div className="flex items-center gap-2 flex-wrap">
                <Phone size={15} />
                <a href="tel:+919873516255" className="hover:text-[#1680b8]">
                  91-9873516255
                </a>
                <span>|</span>
                <a href="tel:+919667233007" className="hover:text-[#1680b8]">
                  91-9667233007
                </a>
                <span>|</span>
                <a href="tel:01145118057" className="hover:text-[#1680b8]">
                  011-4511-8057
                </a>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-[30px] h-[30px] rounded-full border border-black/70 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
