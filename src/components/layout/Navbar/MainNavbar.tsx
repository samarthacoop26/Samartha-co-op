"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

export function MainNavbar() {
  return (
    <div className="flex items-center justify-between py-3 md:py-4 px-6 md:px-12 bg-[#0A1628]">
      {/* Logo */}
      <Link href="/" className="flex flex-col">
        <div className="flex items-center gap-3">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L0 28H6L12 14L18 28H24L12 0Z" fill="#FF6B00" />
            <path d="M6 28H10L14 18H10L6 28Z" fill="white" />
          </svg>
          <span className="text-white text-2xl font-bold tracking-wide">Samarth</span>
        </div>
        <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] ml-[36px] font-semibold mt-1">
          FRP Solutions
        </span>
      </Link>

      {/* Nav Links */}
      <nav className="hidden lg:flex items-center gap-8">
        <Link href="/" className="flex items-center gap-1 text-white font-medium hover:text-[#FF6B00] transition-colors">
          Home
        </Link>
        <Link href="/#products" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
          Products
        </Link>
        <Link href="/#industries" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
          Industries
        </Link>
        <Link href="/#why-us" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
          Why Choose Us
        </Link>
        <Link href="/#certifications" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
          Certifications
        </Link>
        <Link href="/contact" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
          Contact
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-7 py-3 font-bold text-sm uppercase tracking-widest rounded transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(255,107,0,0.5)] group"
        >
          <span>GET A QUOTE</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-[#FF6B00] transition-colors lg:hidden"
          aria-label="Contact Us"
        >
          <Menu className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
