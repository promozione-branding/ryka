"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import MenuPopup from "@/components/MenuPopup";

const solutionHrefs = [
  "/public-restroom-partitions",
  "/luxe-partition-systems",
  "/kids-restrooms-partitions",
  "/urinals-partitions",
  "/colors-finished",
];

const underline =
  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#FFA21A]";

export default function HomeHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
  const solutionsActive =
    pathname === "/products" ||
    solutionHrefs.some((href) => pathname.startsWith(href));
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

  // Hide the header on admin routes (must come after all hooks)
  if (isAdmin) return null;

  // Text color: white only on home page (when not scrolled), otherwise black
  const textColor = isHome && !scrolled ? "text-white" : "text-[#1a1a1a]";
  const hoverColor = "hover:text-[#FFA21A]";

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-300 ${
          isHome && !scrolled
            ? "bg-black border-b border-white/10"
            : "bg-[#FDF8F0]/55 shadow-sm border-b border-black/5"
        }`}
      >
        <div className="mx-auto flex h-[90px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* LOGO */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={isHome && !scrolled ? "/logo-10 (2).webp" : "/logo_transp.webp"}
              alt="RYKA Restroom Cubicles"
              width={220}
              height={70}
              priority
              className="h-[58px] w-auto object-contain sm:h-[64px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            <Link
              href="/"
              className={`relative py-2 text-[13px] font-semibold uppercase tracking-[0.12em] ${textColor} transition-colors ${hoverColor} ${
                isHome ? underline : ""
              }`}
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <div
                className={`relative flex items-center gap-1.5 py-2 ${
                  solutionsActive ? underline : ""
                }`}
              >
                <Link
                  href="/products"
                  onClick={() => setSolutionsOpen(false)}
                  className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${textColor} transition-colors ${hoverColor}`}
                >
                  Solutions
                </Link>

                <button
                  type="button"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  aria-label="Toggle solutions menu"
                  aria-expanded={solutionsOpen}
                  className={`${textColor} transition-colors ${hoverColor}`}
                >
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      solutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {solutionsOpen && (
                <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-xl border border-black/10 bg-white py-2 shadow-xl">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block px-5 py-2.5 text-sm text-[#1a1a1a] transition-colors hover:bg-[#FFF5E6] hover:text-[#FFA21A]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${textColor} transition-colors ${hoverColor}`}
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${textColor} transition-colors ${hoverColor}`}
            >
              Blogs
            </Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 sm:gap-12">
            <Link
              href="/"
              className="hidden sm:block"
              aria-label="Team Interior Solutions"
            >
              <Image
                src="/logoes.webp"
                alt="Team Interior Solutions"
                width={56}
                height={56}
                className="h-18 w-18 rounded-full object-contain sm:h-[52px] sm:w-[52px]"
              />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={`flex items-center justify-center ${textColor} transition-colors ${hoverColor}`}
            >
              <Menu size={28} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MENU */}
      <MenuPopup open={menuOpen} onClose={closeMenu} />
    </>
  );
}