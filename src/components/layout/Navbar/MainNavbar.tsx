"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown, Building2, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-transparent">
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
          <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] ml-[36px] font-semibold mt-0.5">
            FRP Solutions
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              onFocus={() => setAboutDropdownOpen(true)}
              className={`flex items-center gap-1.5 font-medium transition-colors text-sm tracking-wide ${
                aboutDropdownOpen ? "text-[#FF6B00]" : "text-slate-200 hover:text-[#FF6B00]"
              }`}
              aria-expanded={aboutDropdownOpen}
              aria-haspopup="true"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  aboutDropdownOpen ? "rotate-180 text-[#FF6B00]" : "text-slate-400"
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
                  className="absolute left-0 top-full pt-3 z-50 w-64"
                >
                  <div className="bg-[#0A1628] border border-slate-700/80 rounded-lg shadow-2xl overflow-hidden py-1.5 backdrop-blur-md">
                    <Link
                      href="/#why-us"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="group flex items-start gap-3 px-4 py-3 hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="p-2 rounded bg-slate-800/80 border border-slate-700 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#FF6B00] transition-colors">
                          Company Profile
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          Engineering legacy & manufacturing expertise
                        </p>
                      </div>
                    </Link>

                    <div className="h-px bg-slate-700/50 mx-3 my-1" />

                    <Link
                      href="/#certifications"
                      onClick={() => setAboutDropdownOpen(false)}
                      className="group flex items-start gap-3 px-4 py-3 hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="p-2 rounded bg-slate-800/80 border border-slate-700 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#FF6B00] transition-colors">
                          Certificates
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                          ISO 9001:2015 & industrial compliance
                        </p>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#products"
            className="text-slate-200 font-medium hover:text-[#FF6B00] transition-colors text-sm tracking-wide"
          >
            Products
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-slate-700/60 px-6 py-5 space-y-3.5 shadow-xl">
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
                  href="/#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-[#FF6B00] text-sm font-medium py-1 transition-colors"
                >
                  <Building2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Company Profile</span>
                </Link>
                <Link
                  href="/#certifications"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-[#FF6B00] text-sm font-medium py-1 transition-colors"
                >
                  <Award className="w-4 h-4 text-[#FF6B00]" />
                  <span>Certificates</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors"
          >
            Products
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
