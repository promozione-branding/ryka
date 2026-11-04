"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search } from "lucide-react";
import MenuPopup from "@/components/MenuPopup";

export default function HomeHeader() {
  const isHome = usePathname() === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    { name: "Public Restroom Partitions", href: "/public-restroom-partitions" },
    { name: "Luxe Partition Systems", href: "/luxe-partition-systems" },
    { name: "Kids Restroom Partitions", href: "/kids-restrooms-partitions" },
    { name: "Urinal Partitions", href: "/urinals-partitions" },
    { name: "Colors & Finished", href: "/colors-finished" },
  ];

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-300 ${
        isHome ? "text-white" : "text-black"
      } ${
        scrolled
          ? isHome
            ? "bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10 h-24"
            : "bg-white/90 backdrop-blur-xl shadow-lg border-b border-black/10 h-24"
          : "bg-white/20 backdrop-blur-xl shadow-lg border-b border-black/10 h-24"
      }`}
    >
      <div className="flex h-[65px] lg:h-[75px] items-center px-5 sm:px-8 lg:px-12">
 
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center gap-5">
          <Image
            src={isHome ? "/logo-10 (2).webp" : "/logo_transp.webp"}
            alt="RYKA Restroom Cubicles"
            width={270}
            height={90}
            priority
            className="w-[135px] sm:w-[160px] lg:w-[200px] h-auto object-contain mt-7 mb-3"
          />

          <span
            className={`hidden lg:block h-10 w-px ${
              isHome ? "bg-white/40" : "bg-black/20"
            }`}
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-12 ml-16">

          <Link
            href="/"
            className="relative py-3 text-sm font-semibold uppercase tracking-wide after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#FFA21A]"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:text-[#FFA21A] transition-colors"
            >
              Solutions
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-full mt-5 w-64 overflow-hidden rounded-xl border border-white/15 bg-[#101820]/95 py-2 text-white shadow-2xl backdrop-blur-xl">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="block px-5 py-3 text-sm hover:bg-white/10 hover:text-[#FFA21A] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact-us"
            className="text-sm font-semibold uppercase tracking-wide hover:text-[#FFA21A] transition-colors"
          >
            Contacts
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex items-center gap-5 lg:gap-7">

          <Link
            href="/search"
            aria-label="Search"
            className={`flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm hover:bg-[#FFA21A] hover:border-[#FFA21A] hover:text-white transition-all ${
              isHome
                ? "border-white/50 bg-black/30"
                : "border-[#1680b8]/60 bg-white/60 text-[#1680b8]"
            }`}
          >
            <Search size={26} />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className={`hover:text-[#FFA21A] transition-colors ${
              isHome ? "text-white" : "text-[#1680b8]"
            }`}
          >
            <Menu size={34} />
          </button>
        </div>
      </div>
    </header>

    {/* FULL-SCREEN MENU (outside <header> so the header's backdrop-blur
        doesn't turn it into the containing block for the fixed layer) */}
    <MenuPopup open={menuOpen} onClose={closeMenu} />
    </>
  );
}