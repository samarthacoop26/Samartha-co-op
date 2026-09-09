"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Ruler,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  ProductItem,
  getProductImageUrl,
  getProductSubheading,
} from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ProductSectionItemProps {
  product: ProductItem;
  categoryNumber?: string;
  categoryName?: string;
  categorySlug?: string;
  index?: number;
  totalProducts?: number;
}

export function ProductSectionItem({
  product,
  categoryName,
  categorySlug,
  index,
  totalProducts,
}: ProductSectionItemProps) {
  const { openQuoteModal } = useQuoteModal();
  const [imageError, setImageError] = useState(false);

  const imageUrl = getProductImageUrl(product, categorySlug);
  const subheading = getProductSubheading(product);

  const handleRequestQuote = () => {
    openQuoteModal({
      productName: product.name,
      title: `RFQ: ${product.name}`,
      message: `I would like to request technical specifications, CAD drawings, pricing, and manufacturing lead time for ${product.name} under ${categoryName || product.categoryName}.`,
    });
  };

  return (
    <section
      id={product.slug}
      className="group scroll-mt-28 bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/60 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* ═══ LEFT SIDE: PRODUCT IMAGE & ENGINEERING BADGES (5 cols on desktop) ═══ */}
        <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-gray-100 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
          {/* Main Product Image with subtle hover zoom */}
          <Image
            src={imageError ? "/images/about/plant-facility.jpg" : imageUrl}
            alt={`${product.name} - Samarth Corporation`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={() => setImageError(true)}
            priority={index !== undefined && index < 2}
          />

          {/* Soft gradient overlay for contrast with badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45 pointer-events-none" />

          {/* Top Floating Badges */}
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white shadow-xs max-w-[70%] sm:max-w-[75%]">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
              <span className="truncate">
                {index !== undefined
                  ? `Product ${String(index + 1).padStart(2, "0")} • ${product.name}`
                  : product.name}
              </span>
            </span>

            {index !== undefined && totalProducts !== undefined && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[11px] font-bold text-gray-900 shadow-xs shrink-0">
                <Layers className="w-3 h-3 text-[#FF6B00]" />
                <span>
                  {String(index + 1).padStart(2, "0")} / {String(totalProducts).padStart(2, "0")}
                </span>
              </span>
            )}
          </div>

          {/* Bottom Floating Technical Details on Image */}
          <div className="relative z-10 space-y-1.5 mt-auto pt-6">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded-md text-[10px] sm:text-[11px] font-semibold text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                IS / ASTM Compliant
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded-md text-[10px] sm:text-[11px] font-semibold text-orange-200 border border-orange-500/30">
                <Ruler className="w-3 h-3 text-[#FF6B00]" />
                Custom CAD &amp; Sizing
              </span>
            </div>

            <p className="text-[10px] sm:text-[11px] text-gray-200/90 font-medium">
              Precision Compression / Contact Molded &bull; Direct Factory Supply
            </p>
          </div>
        </div>

        {/* ═══ RIGHT SIDE: HEADING, SUBHEADING, DESCRIPTION & SPECS (7 cols on desktop) ═══ */}
        <div className="lg:col-span-7 p-4 sm:p-5 lg:py-5 lg:px-6 flex flex-col justify-between bg-white">
          <div>
            {/* Meta Category Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FF6B00] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-100">
                {categoryName || product.categoryName}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-500">
                &bull; ISO 9001:2015 Assured
              </span>
            </div>

            {/* 1. HEADING: Product Name */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1628] tracking-tight group-hover:text-[#FF6B00] transition-colors duration-200 mb-0.5">
              {product.name}
            </h3>

            {/* 2. SUBHEADING: Domain & Engineering Subtitle */}
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
              <span>{subheading}</span>
            </h4>

            {/* 3. IN-DEPTH DESCRIPTION */}
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-3">
              {product.shortDescription}
            </p>

            {/* 4. KEY SPECIFICATIONS & FEATURES (2-Column Grid) */}
            <div className="bg-gray-50/80 rounded-xl p-3 sm:p-3.5 border border-gray-200/70 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 block mb-2">
                Key Engineering Specifications &amp; Features:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                {product.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-1.5 text-xs text-gray-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. RESIN MATRIX & QUALITY STANDARDS QUICK STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 text-xs">
              <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-gray-500 font-medium block">Resin Matrix</span>
                <span className="text-xs text-gray-900 font-bold truncate block">Isophthalic / Vinyl Ester</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] text-gray-500 font-medium block">Testing Scope</span>
                <span className="text-xs text-gray-900 font-bold truncate block">Hydro / UTM / Barcol</span>
              </div>
              <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs col-span-2 sm:col-span-1">
                <span className="text-[10px] text-gray-500 font-medium block">Lead Time</span>
                <span className="text-xs text-gray-900 font-bold truncate block">Fast Factory Turnaround</span>
              </div>
            </div>
          </div>

          {/* ═══ 6. INTERACTIVE ACTION BUTTONS ═══ */}
          <div className="pt-3 border-t border-gray-100">
            {/* Primary RFQ Button */}
            <button
              type="button"
              onClick={handleRequestQuote}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-2.5 px-4 rounded-lg transition-all duration-200 cursor-pointer shadow-xs group/btn"
            >
              <span>Request Quote / RFQ</span>
              <ArrowRight className="w-4 h-4 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
