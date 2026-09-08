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
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import {
  INDUSTRIAL_PRODUCT_COLUMNS,
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
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full pt-2 z-50 min-w-[260px]"
                >
                  <div className="relative bg-[#0A1628]/98 border border-slate-700/80 rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden p-2 backdrop-blur-xl">
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-80" />
                    
                    <Link
                      href="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all duration-150"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/70 group-hover:border-[#FF6B00]/40 group-hover:bg-[#FF6B00]/10 flex items-center justify-center text-slate-300 group-hover:text-[#FF6B00] transition-all duration-200 shrink-0 mt-0.5 shadow-sm">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-slate-100 group-hover:text-[#FF6B00] transition-colors leading-tight">
                          Company Profile
                        </div>
                        <div className="text-[11.5px] text-slate-400 leading-snug mt-0.5">
                          Mission, infrastructure &amp; 20+ years of FRP legacy
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/certificates"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all duration-150"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/70 group-hover:border-[#FF6B00]/40 group-hover:bg-[#FF6B00]/10 flex items-center justify-center text-slate-300 group-hover:text-[#FF6B00] transition-all duration-200 shrink-0 mt-0.5 shadow-sm">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-slate-100 group-hover:text-[#FF6B00] transition-colors leading-tight">
                          Certificates &amp; Quality
                        </div>
                        <div className="text-[11.5px] text-slate-400 leading-snug mt-0.5">
                          ISO 9001:2015 &amp; government compliance documents
                        </div>
                      </div>
                    </Link>
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
              <div className="pl-3 mt-3 space-y-4 border-l border-slate-700/80 my-1">
                {INDUSTRIAL_PRODUCT_COLUMNS.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-1.5">
                    <div className="text-[10px] uppercase tracking-wider font-bold text-[#FF6B00]">
                      {col.categoryTitle}
                    </div>
                    <div className="space-y-1 pl-2">
                      {col.items.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-sm text-slate-300 hover:text-[#FF6B00] transition-colors"
                        >
                          {item.title}
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
