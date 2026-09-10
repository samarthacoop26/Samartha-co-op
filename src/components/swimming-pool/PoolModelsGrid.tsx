"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export interface PoolModel {
  id: string;
  category: string;
  name: string;
  tagline?: string;
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
    name: "FRP Swimming Pool - Urban Plunge & Terrace Rooftop Pool",
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
      message: `I would like to receive pricing, dimensions, and installation guidance for the ${pool.name}.`,
    });
  };

  return (
    <section id="pool-models" className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200 scroll-mt-20">
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
              Engineered for seamless inground, rooftop, and above-ground placement. Every shell is factory molded in one solid piece with built-in stairs, safety ledges, and pre-fitted plumbing nozzles.
            </p>
          </div>
        </div>

        {/* Pool Cards Grid */}
        <div className="space-y-8 mt-6">
          {POOL_MODELS.map((pool) => (
            <div
              key={pool.id}
              className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image Column */}
                <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-slate-900 overflow-hidden">
                  <Image
                    src={pool.image}
                    alt={pool.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
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

                  {/* Card Action Footer */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => handleRequestQuote(pool)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn py-3 px-4 rounded-xl transition-colors duration-200 cursor-pointer group/btn shadow-xs"
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
