"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getCategoryImageUrl } from "@/data/productsData";
import { trackCtaClick } from "@/lib/analytics";

interface ProductCategoryHeroProps {
  categoryNumber: string;
  categoryTitle: string;
  shortDescription: string;
  heroDescription?: string;
  badge?: string;
  productCount: number;
  categorySlug?: string;
}

export function ProductCategoryHero({
  categoryNumber,
  categoryTitle,
  shortDescription,
  heroDescription,
  badge,
  productCount,
  categorySlug,
}: ProductCategoryHeroProps) {
  const { openQuoteModal } = useQuoteModal();
  const bgImage = categorySlug ? getCategoryImageUrl(categorySlug) : "/images/contact-hero.jpg";

  return (
    <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bgImage}')`,
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
                Category {categoryNumber} &bull; {badge || "Industrial Composites"}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-white">
              <Layers className="w-3.5 h-3.5 text-[#FF8C33]" />
              <span className="type-spec text-[11px] text-white">{productCount} Products</span>
            </div>
          </div>

          {/* H1 Title */}
          <h1 className="type-h1 text-white drop-shadow-md">
            {categoryTitle}
          </h1>

          {/* In-depth Category Description */}
          <p className="mt-4 type-subheading text-gray-200 drop-shadow-sm">
            {heroDescription || shortDescription}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => {
                trackCtaClick(
                  `Request Category Pricing: ${categoryTitle}`,
                  "ProductCategoryHero"
                );
                openQuoteModal({
                  title: `Quote Request: ${categoryTitle}`,
                  message: `I need technical sizing, specifications, and pricing for ${categoryTitle} products.`,
                });
              }}
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
          className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2 px-6 sm:px-10 flex items-center gap-2 shadow-md"
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
          <span className="text-[#0A1628] truncate max-w-[180px] sm:max-w-none">
            {categoryTitle}
          </span>
        </div>
      </div>
    </section>
  );
}
