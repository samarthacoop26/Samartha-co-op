"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import {
  ProductItem,
  getProductImageUrl,
  getProductSubheading,
} from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { trackProductQuoteClick, trackProductGallerySwitch } from "@/lib/analytics";

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
  const imageUrl = getProductImageUrl(product, categorySlug);
  const subheading = getProductSubheading(product);

  const images =
    product.images && product.images.length > 0 ? product.images : [imageUrl];
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic image rotation for multi-image products
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = activeIdx === 0 ? images.length - 1 : activeIdx - 1;
    setActiveIdx(nextIdx);
    trackProductGallerySwitch(product.name, nextIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = activeIdx === images.length - 1 ? 0 : activeIdx + 1;
    setActiveIdx(nextIdx);
    trackProductGallerySwitch(product.name, nextIdx);
  };

  const handleRequestQuote = () => {
    trackProductQuoteClick({
      id: product.id,
      name: product.name,
      categoryName: categoryName || product.categoryName,
      source: "product_section",
    });

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
        <div
          className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-[390px] bg-slate-950 overflow-hidden flex flex-col justify-between p-3 sm:p-3.5 group/img"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Blurred Background Layer */}
          {images.map((img, idx) => (
            <Image
              key={`bg-${img}-${idx}`}
              src={img}
              alt=""
              fill
              unoptimized
              aria-hidden="true"
              className={`object-cover blur-2xl opacity-25 scale-110 transition-opacity duration-700 pointer-events-none ${
                activeIdx === idx ? "opacity-25" : "opacity-0"
              }`}
            />
          ))}

          {/* Soft gradient overlay for contrast with badges and controls */}
          <div
            className={`absolute inset-0 pointer-events-none z-[3] transition-colors duration-500 ${
              images[activeIdx]?.toLowerCase().includes("cable_duct") || images[activeIdx]?.toLowerCase().includes("cable_cover1") || images[activeIdx]?.toLowerCase().includes("elec") || images[activeIdx]?.toLowerCase().includes("frp_box") || images[activeIdx]?.toLowerCase().includes("junc") || images[activeIdx]?.toLowerCase().includes("frp_light1") || images[activeIdx]?.toLowerCase().includes("frp_light2") || images[activeIdx]?.toLowerCase().includes("terminal") || images[activeIdx]?.toLowerCase().includes("battery") || images[activeIdx]?.toLowerCase().includes("frp_tanks.jpeg") || images[activeIdx]?.toLowerCase().includes("insul") || images[activeIdx]?.toLowerCase().includes("enclos") || images[activeIdx]?.toLowerCase().includes("frp_pub") || images[activeIdx]?.toLowerCase().includes("frp_pump.jpg") || images[activeIdx]?.toLowerCase().includes("frp_cabi") || images[activeIdx]?.toLowerCase().includes("frp_equi3") || images[activeIdx]?.toLowerCase().includes("frp_equi4") || images[activeIdx]?.toLowerCase().includes("frp_equi5") || images[activeIdx]?.toLowerCase().includes("frp_gun") || images[activeIdx]?.toLowerCase().includes("frp_shel2") || images[activeIdx]?.toLowerCase().includes("frp_prot.") || images[activeIdx]?.toLowerCase().includes("frp_prot2") || images[activeIdx]?.toLowerCase().includes("frp_prot3") || images[activeIdx]?.toLowerCase().includes("frp_helmet") || images[activeIdx]?.toLowerCase().includes("frp_uav.") || images[activeIdx]?.toLowerCase().includes("frp_drone") || images[activeIdx]?.toLowerCase().includes("frp_ca1") || images[activeIdx]?.toLowerCase().includes("frp_grenade") || images[activeIdx]?.toLowerCase().includes("frp_ammo")
                ? "bg-gradient-to-t from-black/60 via-transparent to-black/40"
                : "bg-gradient-to-t from-black/85 via-black/10 to-black/75"
            }`}
          />

          {/* Main Focused Product Image - Adaptive Cover for Site Photos & Contain with Studio Background for Products */}
          <div className="absolute inset-0 z-[2] overflow-hidden">
            {images.map((img, idx) => {
              const isStudioProduct = img.toLowerCase().includes("cable_duct") || img.toLowerCase().includes("cable_cover1") || img.toLowerCase().includes("elec") || img.toLowerCase().includes("frp_box") || img.toLowerCase().includes("junc") || img.toLowerCase().includes("frp_light1") || img.toLowerCase().includes("frp_light2") || img.toLowerCase().includes("terminal") || img.toLowerCase().includes("battery") || img.toLowerCase().includes("frp_tanks.jpeg") || img.toLowerCase().includes("insul") || img.toLowerCase().includes("enclos") || img.toLowerCase().includes("frp_pub") || img.toLowerCase().includes("frp_pump.jpg") || img.toLowerCase().includes("frp_cabi") || img.toLowerCase().includes("frp_equi3") || img.toLowerCase().includes("frp_equi4") || img.toLowerCase().includes("frp_equi5") || img.toLowerCase().includes("frp_gun") || img.toLowerCase().includes("frp_shel2") || img.toLowerCase().includes("frp_prot.") || img.toLowerCase().includes("frp_prot2") || img.toLowerCase().includes("frp_prot3") || img.toLowerCase().includes("frp_helmet") || img.toLowerCase().includes("frp_uav.") || img.toLowerCase().includes("frp_drone") || img.toLowerCase().includes("frp_ca1") || img.toLowerCase().includes("frp_grenade") || img.toLowerCase().includes("frp_ammo");
              return (
                <Image
                  key={`main-${img}-${idx}`}
                  src={img}
                  alt={`${product.name} - View ${idx + 1}`}
                  fill
                  unoptimized
                  className={`transition-all duration-700 ease-in-out group-hover/img:scale-105 ${
                    isStudioProduct
                      ? "object-contain p-6 bg-white"
                      : "object-cover object-center"
                  } ${
                    activeIdx === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  priority={index !== undefined && index < 2}
                />
              );
            })}
          </div>

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

            {images.length > 1 ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-black/75 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white shadow-xs shrink-0">
                <Camera className="w-3 h-3 text-[#FF6B00]" />
                <span>
                  {activeIdx + 1} / {images.length}
                </span>
              </span>
            ) : (
              index !== undefined &&
              totalProducts !== undefined && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-gray-900 shadow-xs shrink-0">
                  <Layers className="w-2.5 h-2.5 text-[#FF6B00]" />
                  <span>
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(totalProducts).padStart(2, "0")}
                  </span>
                </span>
              )
            )}
          </div>

          {/* Left/Right Arrow Navigation & Mini Thumbnail Switcher (if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-[#FF6B00] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-85 sm:opacity-0 sm:group-hover/img:opacity-100 hover:scale-110 shadow-md z-10 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/65 hover:bg-[#FF6B00] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-85 sm:opacity-0 sm:group-hover/img:opacity-100 hover:scale-110 shadow-md z-10 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Clickable Mini Thumbnails Row */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/15 shadow-md max-w-[90%] overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={`thumb-${img}-${idx}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx(idx);
                      trackProductGallerySwitch(product.name, idx);
                    }}
                    aria-label={`Switch to image ${idx + 1}`}
                    className={`relative w-8 h-8 rounded-md overflow-hidden border transition-all duration-200 cursor-pointer shrink-0 ${
                      activeIdx === idx
                        ? "border-[#FF6B00] ring-2 ring-[#FF6B00]/70 scale-105"
                        : "border-white/30 opacity-60 hover:opacity-100 hover:border-white"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
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
