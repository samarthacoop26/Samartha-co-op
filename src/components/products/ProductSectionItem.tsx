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
      className="group scroll-mt-28 bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/70 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* ═══ LEFT SIDE: PRODUCT IMAGE & ENGINEERING BADGES (5 cols on desktop) ═══ */}
        <div className="lg:col-span-5 relative min-h-[200px] sm:min-h-[230px] lg:min-h-full bg-gray-100 overflow-hidden flex flex-col justify-between p-3 sm:p-3.5">
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black/75 backdrop-blur-md border border-white/20 rounded-full text-[11px] font-bold text-white shadow-xs max-w-[70%] sm:max-w-[75%]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
              <span className="truncate">
                {index !== undefined
                  ? `Product ${String(index + 1).padStart(2, "0")} • ${product.name}`
                  : product.name}
              </span>
            </span>

            {index !== undefined && totalProducts !== undefined && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-gray-900 shadow-xs shrink-0">
                <Layers className="w-2.5 h-2.5 text-[#FF6B00]" />
                <span>
                  {String(index + 1).padStart(2, "0")} / {String(totalProducts).padStart(2, "0")}
                </span>
              </span>
            )}
          </div>

          {/* Bottom Floating Technical Details on Image */}
          <div className="relative z-10 space-y-1 mt-auto pt-4">
            <div className="flex flex-wrap items-center gap-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded-md text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                IS / ASTM Compliant
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-md rounded-md text-[10px] font-semibold text-orange-200 border border-orange-500/30">
                <Ruler className="w-3 h-3 text-[#FF6B00]" />
                Custom CAD &amp; Sizing
              </span>
            </div>

            <p className="text-[10px] text-gray-200/90 font-medium">
              Precision Compression / Contact Molded &bull; Direct Factory Supply
            </p>
          </div>
        </div>

        {/* ═══ RIGHT SIDE: HEADING, SUBHEADING, DESCRIPTION & SPECS (7 cols on desktop) ═══ */}
        <div className="lg:col-span-7 p-3.5 sm:p-4 lg:py-3.5 lg:px-5 flex flex-col justify-between bg-white">
          <div>
            {/* Meta Category Pill */}
            <div className="flex items-center gap-2 mb-1">
              <span className="type-eyebrow text-[#FF6B00] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100 text-[10px] font-bold">
                {categoryName || product.categoryName}
              </span>
            </div>

            {/* 1. HEADING: Product Name */}
            <h3 className="type-h3 text-base sm:text-lg lg:text-xl font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors duration-200 leading-tight mb-0.5">
              {product.name}
            </h3>

            {/* 2. SUBHEADING: Domain & Engineering Subtitle */}
            <h4 className="type-subheading text-xs font-semibold text-gray-600 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FF6B00] shrink-0" />
              <span>{subheading}</span>
            </h4>

            {/* 3. IN-DEPTH DESCRIPTION */}
            <p className="type-body text-xs text-gray-600 mb-2.5 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* 4. KEY SPECIFICATIONS & FEATURES (Compact 2-Column Grid) */}
            <div className="bg-slate-50/90 rounded-xl p-2.5 sm:p-3 border border-slate-200/80 mb-2.5">
              <span className="type-eyebrow text-slate-600 font-bold block mb-1.5 text-[10.5px] uppercase tracking-wider">
                Key Engineering Specifications &amp; Features:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5">
                {product.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="type-spec leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ 5. INTERACTIVE ACTION BUTTONS ═══ */}
          <div className="pt-2 border-t border-gray-100">
            {/* Primary Quote Button */}
            <button
              type="button"
              onClick={handleRequestQuote}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs group/btn"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
