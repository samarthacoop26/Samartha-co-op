"use client";

import React from "react";
import Image from "next/image";
import {
  Waves,
  Ruler,
  ArrowRight,
  Layers,
  Shield,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export interface PoolModel {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
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
    name: "Urban Plunge & Terrace Rooftop Pool",
    tagline: "Compact Footprint for Villas, Penthouses & Rooftops",
    description:
      "Engineered with ultra-lightweight structural sandwich composite layers specifically designed for rooftop, terrace, and compact courtyard installations with zero structural overload and 100% leak guarantee.",
    image: "/images/products/frp-luxury-pool.jpg",
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

export function PoolModelsGrid() {
  const { openQuoteModal } = useQuoteModal();

  const handleRequestQuote = (pool: PoolModel) => {
    openQuoteModal({
      productName: pool.name,
      title: `RFQ: ${pool.name}`,
      message: `I would like to receive pricing, CAD dimensions, filtration package details, and installation guidance for the ${pool.name} (${pool.specs.dimensions}, ${pool.specs.installType}).`,
    });
  };

  return (
    <section id="pool-models" className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
              <span>Precision Monolithic Shells</span>
            </div>
            <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
              FRP Swimming Pools
            </h2>
            <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2 max-w-3xl">
              Engineered for seamless inground, rooftop, and above-ground placement. Every shell is factory molded in one solid piece with built-in stairs, safety ledges, and pre-fitted plumbing nozzles.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono-accent text-gray-600 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Turnkey Delivery with Filtration Plant Included</span>
          </div>
        </div>

        {/* Pool Cards Grid */}
        <div className="space-y-8 mt-6">
          {POOL_MODELS.map((pool, idx) => (
            <div
              key={pool.id}
              className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image & Key Badges (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-slate-900 overflow-hidden flex flex-col justify-between p-4">
                  <Image
                    src={pool.image}
                    alt={pool.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

                  {/* Top Floating Tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                      <span>Model {String(idx + 1).padStart(2, "0")}</span>
                    </span>

                    {pool.popular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FF6B00] text-white text-[11px] font-bold rounded-full shadow-xs">
                        Popular Choice
                      </span>
                    )}
                  </div>
                </div>

                {/* Content & Specs (7 cols) */}
                <div className="lg:col-span-7 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white space-y-5">
                  <div>
                    {/* Eyebrow & Name */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="type-eyebrow text-[#FF6B00] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-100 text-[11px]">
                        {pool.tagline}
                      </span>
                    </div>

                    <h3 className="type-h3 text-xl sm:text-2xl font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors mb-2">
                      {pool.name}
                    </h3>

                    <p className="type-body text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {pool.description}
                    </p>

                    {/* Technical Specs 4-Box Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 mb-4">
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Ruler className="w-3 h-3 text-gray-400" />
                          Dimensions
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {pool.specs.dimensions}
                        </span>
                      </div>
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Waves className="w-3 h-3 text-gray-400" />
                          Water Depth
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {pool.specs.depth}
                        </span>
                      </div>
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Layers className="w-3 h-3 text-gray-400" />
                          Shell Build
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {pool.specs.shellThickness}
                        </span>
                      </div>
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Shield className="w-3 h-3 text-gray-400" />
                          Installation
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {pool.specs.installType.split("/")[0]}
                        </span>
                      </div>
                    </div>

                    {/* Recommended Deployments */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="type-eyebrow text-[10px] text-gray-500 mr-1">Ideal Placement:</span>
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

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => handleRequestQuote(pool)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn text-xs py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-xs group/btn"
                    >
                      <span>Get Pool Sizing &amp; Pricing</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
