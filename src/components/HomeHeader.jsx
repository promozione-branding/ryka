
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";

export default function HomeHeader() {
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
     { name: "luxe Partition Systems", href: "/luxe-partition-systems" },
    { name: "Kids Restroom Partitions", href: "/kids-restroom-partitions" },
    { name: "Urinal Partitions", href: "/urinal-partitions" },
    { name: "Colors & Finished", href: "/colors-finished" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-[9999] w-full text-white transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex h-[65px] lg:h-[75px] items-center px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center gap-5">
          <Image
            src="/logo-10 (2).webp"
            alt="RYKA Restroom Cubicles"
            width={270}
            height={90}
            priority
            className="w-[135px] sm:w-[160px] lg:w-[200px] h-auto object-contain mt-7 mb-3"
          />

          <span className="hidden lg:block h-10 w-px bg-white/40" />
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
              <div className="absolute left-0 top-full mt-5 w-64 overflow-hidden rounded-xl border border-white/15 bg-[#101820]/95 py-2 shadow-2xl backdrop-blur-xl">
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
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/30 backdrop-blur-sm hover:bg-[#FFA21A] hover:border-[#FFA21A] transition-all"
          >
            <Search size={26} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-white hover:text-[#FFA21A] transition-colors"
          >
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute right-0 top-full w-full sm:w-[350px] border border-white/10 bg-black/95 px-7 py-6 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm uppercase"
            >
              Home
            </Link>

            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex justify-between border-b border-white/10 py-4 text-sm uppercase"
            >
              Solutions
              <ChevronDown
                size={17}
                className={solutionsOpen ? "rotate-180" : ""}
              />
            </button>

            {solutionsOpen &&
              solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-3 pl-4 text-sm text-white/70 hover:text-[#FFA21A]"
                >
                  {item.name}
                </Link>
              ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-4 text-sm uppercase"
            >
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
