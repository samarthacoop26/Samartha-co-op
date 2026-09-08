"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Building2,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import {
  ALL_PRODUCT_CATEGORIES,
  PRODUCT_CATEGORIES_DATA,
} from "@/data/productsNavData";

export function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const aboutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // About Dropdown Mouse Handlers
  const handleAboutMouseEnter = () => {
    if (aboutTimerRef.current) {
      clearTimeout(aboutTimerRef.current);
      aboutTimerRef.current = null;
    }
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimerRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 180);
  };

  // Products Dropdown Mouse Handlers
  const handleProductsMouseEnter = () => {
    if (productsTimerRef.current) {
      clearTimeout(productsTimerRef.current);
      productsTimerRef.current = null;
    }
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsTimerRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAboutDropdownOpen(false);
        setProductsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current);
      if (productsTimerRef.current) clearTimeout(productsTimerRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-transparent relative">
      <div className="flex items-center justify-between py-3.5 md:py-4 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:scale-105"
            >
              <path d="M12 0L0 28H6L12 14L18 28H24L12 0Z" fill="#FF6B00" />
              <path d="M6 28H10L14 18H10L6 28Z" fill="white" />
            </svg>
            <span className="text-white text-2xl font-bold tracking-wide">
              Samarth
            </span>
          </div>
          <span className="text-slate-400 text-[10px] uppercase tracking-[0.18em] ml-[36px] font-semibold mt-0.5">
            Corporation • PP &amp; FRP
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <Link
            href="/"
            className="text-slate-200 font-medium hover:text-[#FF6B00] transition-colors text-sm tracking-wide"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button
              type="button"
              onClick={() => {
                setAboutDropdownOpen(!aboutDropdownOpen);
                setProductsDropdownOpen(false);
              }}
              onFocus={() => {
                setAboutDropdownOpen(true);
                setProductsDropdownOpen(false);
              }}
              className={`flex items-center gap-1.5 font-medium transition-colors text-sm tracking-wide py-2 ${
                aboutDropdownOpen
                  ? "text-[#FF6B00]"
                  : "text-slate-200 hover:text-[#FF6B00]"
              }`}
              aria-expanded={aboutDropdownOpen}
              aria-haspopup="true"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  aboutDropdownOpen
                    ? "rotate-180 text-[#FF6B00]"
                    : "text-slate-400"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.995 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.995 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full pt-3 z-50 min-w-[340px]"
                >
                  <div className="relative bg-white border border-gray-200/90 rounded-2xl shadow-[0_20px_50px_-12px_rgba(16,24,40,0.12),0_1px_3px_0_rgba(16,24,40,0.05)] overflow-hidden p-3 flex flex-col">
                    {/* Top Micro-Accent Line */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-90 z-10" />

                    {/* Section Header */}
                    <div className="px-3 pt-2 pb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Company
                    </div>

                    <div className="space-y-1">
                      {/* Item 1: Company Profile */}
                      <Link
                        href="/about"
                        onClick={() => setAboutDropdownOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-gray-50 transition-all duration-150"
                      >
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Building2 className="w-5 h-5 text-[#FF6B00]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-snug">
                            Company Profile
                          </div>
                          <div className="text-xs text-gray-500 font-normal leading-relaxed mt-0.5">
                            Mission, infrastructure &amp; 20+ years of FRP legacy.
                          </div>
                        </div>
                      </Link>

                      {/* Item 2: Certificates & Quality */}
                      <Link
                        href="/certificates"
                        onClick={() => setAboutDropdownOpen(false)}
                        className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-gray-50 transition-all duration-150"
                      >
                        <div className="shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                          <Award className="w-5 h-5 text-[#FF6B00]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#FF6B00] transition-colors leading-snug">
                              Certificates &amp; Quality
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold leading-none border bg-emerald-50 text-emerald-700 border-emerald-200/70">
                              ISO 9001
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 font-normal leading-relaxed mt-0.5">
                            Government compliance &amp; third-party lab test reports.
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Mega Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={handleProductsMouseEnter}
            onMouseLeave={handleProductsMouseLeave}
          >
            <button
              type="button"
              onClick={() => {
                setProductsDropdownOpen(!productsDropdownOpen);
                setAboutDropdownOpen(false);
              }}
              onFocus={() => {
                setProductsDropdownOpen(true);
                setAboutDropdownOpen(false);
              }}
              className={`flex items-center gap-1.5 font-medium transition-colors text-sm tracking-wide py-2 ${
                productsDropdownOpen
                  ? "text-[#FF6B00]"
                  : "text-slate-200 hover:text-[#FF6B00]"
              }`}
              aria-expanded={productsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  productsDropdownOpen
                    ? "rotate-180 text-[#FF6B00]"
                    : "text-slate-400"
                }`}
              />
            </button>
          </div>

          <Link
            href="/certificates"
            className="text-slate-200 font-medium hover:text-[#FF6B00] transition-colors text-sm tracking-wide"
          >
            Certifications
          </Link>

          <Link
            href="/contact"
            className="text-slate-200 font-medium hover:text-[#FF6B00] transition-colors text-sm tracking-wide"
          >
            Contact Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-6 py-2.5 font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(255,107,0,0.5)] group"
          >
            <span>GET A QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#FF6B00] transition-colors lg:hidden p-1.5 rounded focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Products Mega Menu - Centered across the navbar */}
      <ProductsMegaMenu
        isOpen={productsDropdownOpen}
        onClose={() => setProductsDropdownOpen(false)}
        onMouseEnter={handleProductsMouseEnter}
        onMouseLeave={handleProductsMouseLeave}
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-slate-700/60 px-5 py-5 space-y-3.5 shadow-2xl max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white font-medium text-base hover:text-[#FF6B00] transition-colors"
          >
            Home
          </Link>

          {/* Mobile About Expandable */}
          <div>
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex items-center justify-between text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors py-1"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileAboutOpen ? "rotate-180 text-[#FF6B00]" : "text-slate-400"
                }`}
              />
            </button>

            {mobileAboutOpen && (
              <div className="pl-4 mt-2 space-y-2.5 border-l-2 border-slate-700/80 my-1">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-[#FF6B00] text-sm font-medium py-1 transition-colors"
                >
                  <Building2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Company Profile</span>
                </Link>
                <Link
                  href="/certificates"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-[#FF6B00] text-sm font-medium py-1 transition-colors"
                >
                  <Award className="w-4 h-4 text-[#FF6B00]" />
                  <span>Certificates</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Products Expandable (Grouped) */}
          <div>
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors py-1"
            >
              <div className="flex items-center gap-2">
                <span>Products &amp; Solutions</span>
                <span className="bg-[#FF6B00]/20 text-[#FF6B00] text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                  {PRODUCT_CATEGORIES_DATA.length}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileProductsOpen ? "rotate-180 text-[#FF6B00]" : "text-slate-400"
                }`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="pl-3 mt-3 space-y-4 border-l border-slate-700/80 my-1 max-h-[50vh] overflow-y-auto">
                {ALL_PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#FF6B00]">
                      <span className="font-mono">{cat.categoryNumber}.</span>
                      <span>{cat.categoryTitle}</span>
                    </div>
                    <div className="space-y-1 pl-2">
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href="/about#what-we-manufacture"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-0.5 text-xs text-slate-300 hover:text-[#FF6B00] transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors"
          >
            Certifications
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors"
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-slate-700/60">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white py-3 font-bold text-xs uppercase tracking-widest rounded transition-colors"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
