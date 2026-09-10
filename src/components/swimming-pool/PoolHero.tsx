"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function PoolHero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/products/frp-swimming-pool-hero.jpg')",
        }}
      />
      {/* Dark Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">

          {/* H1 Title */}
          <h1 className="type-h1 text-white drop-shadow-md">
            FRP Swimming Pools
          </h1>

          {/* In-depth Category Description */}
          <p className="mt-4 type-subheading text-gray-200 drop-shadow-sm">
            Factory-manufactured one-piece monolithic fiberglass swimming pools, rooftop plunge pools, and luxury whirlpool spas engineered with non-porous ISO-NPG gelcoats and lifetime structural leak resistance for villas, resorts, and farmhouses across India.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() =>
                openQuoteModal({
                  title: "Quote Request: FRP Swimming Pools",
                  message:
                    "I need specifications, dimensions, feasibility, filtration packages, and pricing for FRP Swimming Pools.",
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
          <span className="text-[#0A1628]">FRP Swimming Pools</span>
        </div>
      </div>
    </section>
  );
}
