"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const solutions = [
    { name: "Restroom Cubicles", href: "/restroom-cubicles" },
    { name: "Toilet Partitions", href: "/toilet-partitions" },
    { name: "Compact Laminate", href: "/compact-laminate" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full bg-transparent">
      <div className="relative flex h-[90px] w-full items-center justify-between border-b border-white/20 px-4 md:px-6">

        {/* LEFT: LOGO */}
        <Link
          href="/"
          aria-label="RYKA Restroom Cubicles home"
          className="relative z-10 flex h-full shrink-0 items-center"
        >
          <Image
            src="/logo-10 (2).webp"
            alt="RYKA Restroom Cubicles"
            width={200}
            height={82}
            priority
            className="h-auto w-[175px] object-contain md:w-[200px]"
          />
        </Link>

        {/* CENTER: DESKTOP NAVIGATION */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[16px] font-medium uppercase text-white md:flex">
          <Link
            href="/"
            className="transition-opacity hover:opacity-70"
          >
            Home
          </Link>

          {/* SOLUTIONS DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              aria-expanded={solutionsOpen}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-full mt-5 min-w-[230px] border border-white/15 bg-black/90 py-2 text-sm normal-case shadow-xl backdrop-blur-md">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSolutionsOpen(false)}
                    className="block px-5 py-3 text-white transition-colors hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="transition-opacity hover:opacity-70"
          >
            Contacts
          </Link>
        </nav>

        {/* RIGHT: ICON + HAMBURGER */}
        <div className="relative z-10 ml-auto flex items-center gap-6">
          <Link
            href="/"
            aria-label="RYKA website"
            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white"
          >
            <Image
              src="/logoes.webp"
              alt="RYKA icon"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="text-white transition-opacity hover:opacity-70"
          >
            {menuOpen ? (
              <X size={30} strokeWidth={2.5} />
            ) : (
              <Menu size={30} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* HAMBURGER MENU PANEL */}
      {menuOpen && (
        <div className="absolute right-0 top-full w-full border-t border-white/15 bg-black/90 px-6 py-5 text-white shadow-xl backdrop-blur-md md:w-[320px]">
          <nav className="flex flex-col text-sm uppercase">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4"
            >
              Home
            </Link>

            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center justify-between border-b border-white/10 py-4 text-left"
            >
              Solutions
              <ChevronDown
                size={16}
                className={solutionsOpen ? "rotate-180" : ""}
              />
            </button>

            {solutionsOpen &&
              solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setSolutionsOpen(false);
                  }}
                  className="py-3 pl-4 text-white/75 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-4"
            >
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}