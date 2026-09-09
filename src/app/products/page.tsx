import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { TOTAL_CATEGORIES_COUNT, TOTAL_PRODUCTS_COUNT } from "@/data/productsData";
import { ProductsCatalogClient } from "@/components/products/ProductsCatalogClient";
import { CategoryNavStrip } from "@/components/products/CategoryNavStrip";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: `FRP & Composite Products Catalog | ${CONTACT_CONFIG.companyName}`,
  description:
    "Explore Samarth Corporation's complete range of FRP & PP products across 10 industrial divisions — gratings, manhole covers, chemical storage tanks, electrical enclosures, safety structures, defence gear, and civic infrastructure.",
  openGraph: {
    title: `FRP Products Catalog | ${CONTACT_CONFIG.companyName}`,
    description:
      "Direct factory supply of high-performance FRP & PP products for government, defence, railway, municipal, and industrial projects across India.",
    type: "website",
  },
};

export default function ProductsOverviewPage() {
  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* ═══ 1. INDUSTRIAL PRODUCTS OVERVIEW HERO ═══ */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
        {/* Real Industrial Header Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />
        {/* Clean Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full mb-3.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="text-[11px] font-bold tracking-wider text-white uppercase">
                Complete Manufacturing Scope &bull; 10 Divisions
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
              FRP &amp; Composite Products Catalog
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-200 font-normal leading-relaxed">
              Explore our complete range of Fiberglass Reinforced Plastic (FRP) and Polypropylene (PP) solutions engineered for defence, municipal infrastructure, chemical processing, and industrial applications across India.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20">
              <div className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                <span className="text-xs text-gray-300 block uppercase font-medium">Divisions</span>
                <span className="text-xl font-bold text-[#FF6B00]">{TOTAL_CATEGORIES_COUNT} Categories</span>
              </div>
              <div className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                <span className="text-xs text-gray-300 block uppercase font-medium">Product Range</span>
                <span className="text-xl font-bold text-white">{TOTAL_PRODUCTS_COUNT}+ Items</span>
              </div>
              <div className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                <span className="text-xs text-gray-300 block uppercase font-medium">Quality</span>
                <span className="text-xl font-bold text-emerald-400">ISO 9001:2015</span>
              </div>
              <div className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                <span className="text-xs text-gray-300 block uppercase font-medium">Supply Scope</span>
                <span className="text-xl font-bold text-gray-100">Pan-India &amp; Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slanted Breadcrumb Bar Pinned to Bottom-Right */}
        <div className="absolute bottom-0 right-0 z-20">
          <div
            className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2 px-6 sm:px-10 flex items-center gap-2 shadow-md"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <span className="text-[#0A1628]">Products Catalog</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. QUICK CATEGORY SWITCHER TABS ═══ */}
      <CategoryNavStrip />

      {/* ═══ 3. ALL 10 CATEGORIES DIRECTORY & SEARCH ═══ */}
      <main className="py-14 sm:py-18 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsCatalogClient />
        </div>
      </main>

      {/* ═══ 3. CERTIFICATIONS STRIP ═══ */}
      <CertificationsSection />

      {/* ═══ 4. GLOBAL FINAL CTA ═══ */}
      <FinalCTA />
    </div>
  );
}
