"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

  if (isAdmin) return null;

  return (
    <div className="fixed bottom-14 right-3 z-[9998] flex flex-col items-center gap-3 sm:bottom-12 sm:right-3">
      <a
        href="tel:+919667233007"
        aria-label="Call us"
        title="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#169bc8] text-white shadow-[0_6px_20px_rgba(22,155,200,0.38)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#087eaa]"
      >
        <Phone className="h-7 w-7" aria-hidden="true" />
      </a>

      <a
        href="https://wa.me/919873516255"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.38)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5b] hover:shadow-[0_8px_24px_rgba(37,211,102,0.48)]"
      >
        <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
      </a>
    </div>
  );
}
