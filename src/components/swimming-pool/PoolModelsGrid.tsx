"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export interface PoolModel {
  id: string;
  category: string;
  name: string;
  tagline?: string;
  description: string;
  image: string;
  images?: string[];
  specs: {
    dimensions: string;
    depth: string;
    capacity: string;
    bathers: string;
    shellThickness: string;
    installType: string;
  };
  features: string[];
  idealFor: string[];
  popular?: boolean;
}

export const POOL_MODELS: PoolModel[] = [
  {
    id: "plunge-terrace-pool",
    category: "plunge",
    name: "FRP Swimming Pools",
    description:
      "Engineered with ultra-lightweight structural sandwich composite layers specifically designed for rooftop, terrace, and compact courtyard installations with zero structural overload and 100% leak guarantee.",
    image: "/images/products/frp_swimming1.jpg",
    images: [
      "/images/products/frp_swimming1.jpg",
      "/images/products/frp_swimming2.jpg",
      "/images/products/frp_swimming3.webp",
    ],
    specs: {
      dimensions: "3.6m x 2.4m (12ft x 8ft)",
      depth: "1.2m – 1.35m (4ft – 4.5ft Flat Depth)",
      capacity: "9,500 Litres (2,500 Gallons)",
      bathers: "4 to 6 Persons",
      shellThickness: "8mm – 10mm Multi-Axial Composite",
      installType: "Rooftop / Terrace / Above Ground / Inground",
    },
    features: [
      "Lightweight Monocoque Shell (Low Dead-Weight for Slabs)",
      "Integrated Wide Corner Steps & Rest Ledge",
      "Full Double-Sealed In-Ground / Free-Standing Skimmer Box",
      "Dual IP68 Multicolour RGB Underwater LED Lights",
      "Non-Porous Mirror Gelcoat in Azure Blue or Mediterranean Cyan",
    ],
    idealFor: [
      "Penthouse & High-Rise Terrace Gardens",
      "Compact City Villa Courtyards & Backyards",
      "Boutique Hotel Suite Private Plunge Pools",
    ],
    popular: true,
  },
];

function PoolProductCard({
  pool,
  onQuote,
}: {
  pool: PoolModel;
  onQuote: (pool: PoolModel) => void;
}) {
  const images =
    pool.images && pool.images.length > 0 ? pool.images : [pool.image];
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic image rotation
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Image Column (5 cols) */}
        <div
          className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full bg-slate-950 overflow-hidden group/img"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Crossfading Images */}
          {images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`${pool.name} - View ${idx + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className={`object-cover transition-all duration-700 ease-in-out group-hover/img:scale-105 ${
                activeIdx === idx
                  ? "opacity-100 scale-100"
                  : "opacity-0 pointer-events-none"
              }`}
              priority={idx === 0}
            />
          ))}

          {/* Subtle Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Photo Counter Badge */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20 z-10 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>
              {activeIdx + 1} / {images.length}
            </span>
          </div>

          {/* Left/Right Arrow Navigation & Subtle Indicator Dots */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#FF6B00] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 sm:opacity-0 sm:group-hover/img:opacity-100 hover:scale-110 shadow-md z-10 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#FF6B00] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 sm:opacity-0 sm:group-hover/img:opacity-100 hover:scale-110 shadow-md z-10 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicator Dots Overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeIdx === idx
                        ? "w-5 h-1.5 bg-[#FF6B00]"
                        : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Column (7 cols) */}
        <div className="lg:col-span-7 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white space-y-5">
          <div>
            <h3 className="type-h3 text-xl sm:text-2xl font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors mb-2">
              {pool.name}
            </h3>

            <p className="type-body text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              {pool.description}
            </p>

            {/* Recommended Deployments */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="type-eyebrow text-[10px] text-gray-500 mr-1">
                Ideal Placement:
              </span>
              {pool.idealFor.map((ideal, iIdx) => (
                <span
                  key={iIdx}
                  className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded-md font-medium"
                >
                  {ideal}
                </span>
              ))}
            </div>
          </div>

          {/* Card Action Footer */}
          <div className="pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => onQuote(pool)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn py-3 px-4 rounded-xl transition-colors duration-200 cursor-pointer group/btn shadow-xs"
            >
              <span>Get Pool Sizing &amp; Pricing</span>
              <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PoolModelsGrid() {
  const { openQuoteModal } = useQuoteModal();

  const handleRequestQuote = (pool: PoolModel) => {
    openQuoteModal({
      productName: pool.name,
      title: `RFQ: ${pool.name}`,
      message: `I would like to receive pricing, dimensions, and installation guidance for the ${pool.name}.`,
    });
  };

  return (
    <section
      id="pool-models"
      className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
              <span>Precision Monolithic Shells</span>
            </div>
            <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
              FRP Swimming Pools
            </h2>
            <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2 max-w-3xl">
              Engineered for seamless inground, rooftop, and above-ground
              placement. Every shell is factory molded in one solid piece with
              built-in stairs, safety ledges, and pre-fitted plumbing nozzles.
            </p>
          </div>
        </div>

        {/* Pool Cards Grid */}
        <div className="space-y-8 mt-6">
          {POOL_MODELS.map((pool) => (
            <PoolProductCard
              key={pool.id}
              pool={pool}
              onQuote={handleRequestQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
