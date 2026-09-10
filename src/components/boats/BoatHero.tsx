"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function BoatHero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/products/frp-boat-hero.jpg')",
        }}
      />
      {/* Dark Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow Pill Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/50 backdrop-blur-md border border-white/20 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="type-eyebrow text-white">
                Category 12 &bull; Naval &amp; Marine (IRS/ISO)
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white">
              <Layers className="w-3.5 h-3.5 text-[#FF8C33]" />
              <span className="type-spec text-[11px] text-white">Flood Rescue &amp; Marine Craft</span>
            </div>
          </div>

          {/* H1 Title */}
          <h1 className="type-h1 text-white drop-shadow-md">
            FRP Boats &amp; Marine Vessels
          </h1>

          {/* In-depth Category Description */}
          <p className="mt-4 type-subheading text-gray-200 drop-shadow-sm">
            Unsinkable composite flood rescue boats, coastal patrol craft, tourist ferries, speedboats, and commercial fishing vessels manufactured to strict IRS and ISO 12217 marine safety standards for government tenders and private operations across India.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() =>
                openQuoteModal({
                  title: "Quote Request: FRP Boats & Marine Vessels",
                  message:
                    "I need specifications, hull design, outboard engine options, seating capacity, and pricing for FRP Boats.",
                })
              }
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn px-6 py-3.5 rounded-xl shadow-md hover:shadow-orange-500/25 transition-all cursor-pointer group"
            >
              <span>Request Category Pricing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Slanted Breadcrumb Bar Pinned to Bottom-Right */}
      <div className="absolute bottom-0 right-0 z-20">
        <div
          className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2 px-6 sm:px-10 flex items-center gap-2 shadow-md rounded-tl-lg"
          style={{
            clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="opacity-60">/</span>
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-[#0A1628]">FRP Boats &amp; Marine Craft</span>
        </div>
      </div>
    </section>
  );
}
