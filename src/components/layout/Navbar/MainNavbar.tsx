"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import {
  ALL_PRODUCT_CATEGORIES,
  PRODUCT_CATEGORIES_DATA,
} from "@/data/productsNavData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function MainNavbar() {
  const { openQuoteModal } = useQuoteModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const productsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Products Dropdown Mouse Handlers
  const handleProductsMouseEnter = () => {
    if (productsTimerRef.current) {
      clearTimeout(productsTimerRef.current);
      productsTimerRef.current = null;
    }
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
        setProductsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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

          <Link
            href="/about"
            className="text-slate-200 font-medium hover:text-[#FF6B00] transition-colors text-sm tracking-wide"
          >
            About Us
          </Link>

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
              }}
              onFocus={() => {
                setProductsDropdownOpen(true);
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
            href="/contact"
            className="text-slate-200 font-medium hover:text-[#FF6B00] transition-colors text-sm tracking-wide"
          >
            Contact Us
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-6 py-2.5 type-btn text-xs rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(255,107,0,0.5)] group cursor-pointer"
          >
            <span>GET A QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#FF6B00] transition-colors lg:hidden p-2 rounded-lg focus:outline-none"
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

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors"
          >
            About Us
          </Link>

          {/* Mobile Products Expandable (Grouped) */}
          <div>
            <button
              type="button"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors py-1"
            >
              <div className="flex items-center gap-2">
                <span>Products &amp; Solutions</span>
                <span className="bg-[#FF6B00]/20 text-[#FF6B00] text-[10px] px-2 py-0.5 rounded-full font-mono-accent font-bold">
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
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 bg-[#FF6B00]/15 border border-[#FF6B00]/40 text-white type-btn text-xs rounded-xl transition-colors"
                >
                  <span>Explore All 10 Categories</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00]" />
                </Link>

                {ALL_PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-1.5">
                    <Link
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#FF6B00] hover:underline"
                    >
                      <span className="font-mono-accent">{cat.categoryNumber}.</span>
                      <span>{cat.categoryTitle}</span>
                    </Link>
                    <div className="space-y-1 pl-2">
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={cat.href}
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
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-medium text-base hover:text-[#FF6B00] transition-colors"
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-slate-700/60">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white py-3.5 type-btn text-xs rounded-xl transition-colors cursor-pointer"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
