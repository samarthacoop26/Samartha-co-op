"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export interface BoatModel {
  id: string;
  category: string;
  name: string;
  tagline?: string;
  description: string;
  image: string;
  specs: {
    length: string;
    beam: string;
    draft: string;
    capacity: string;
    engineHP: string;
    speed: string;
    weight: string;
    hullType: string;
  };
  features: string[];
  recommendedUse: string[];
  popular?: boolean;
}

export const BOAT_FLEET: BoatModel[] = [
  {
    id: "disaster-rescue-boat",
    category: "rescue",
    name: "FRP Boats",
    description:
      "Durable, unsinkable fiberglass boats designed for rescue operations, patrolling, passenger transport, and recreation. Built for high stability, safety, and long-lasting performance with zero corrosion.",
    image: "/images/products/frp_boat.jpg",
    specs: {
      length: "4.5m – 6.5m (15ft – 21ft)",
      beam: "1.8m – 2.2m (6ft – 7.2ft)",
      draft: "0.25m – 0.35m (Shallow Water)",
      capacity: "6 to 12 Persons / 950 kg",
      engineHP: "25 HP to 60 HP Outboard (OBM)",
      speed: "18 – 28 Knots",
      weight: "220 kg – 380 kg (Bare Hull)",
      hullType: "Modified V-Hull with Lifting Strakes",
    },
    features: [
      "100% Unsinkable with Closed-Cell Polyurethane Foam Flotation",
      "Heavy Duty Heavy-Wall Gunwale Rubber D-Fender Guard",
      "Non-Skid Diamond Pattern Cockpit Self-Draining Floor",
      "316 Stainless Steel Bow & Stern Towing Eyes with Rigging Cleats",
      "Built-in Storage Lockers for Life Jackets, Oars & First Aid Kits",
      "Marine Grade ISO-NPG High-Visibility Safety Orange Livery",
    ],
    recommendedUse: [
      "Flood & Emergency Rescue",
      "River & Lake Patrolling",
      "Passenger & Tourism Transport",
      "Water Sports & Recreation",
    ],
    popular: true,
  },
];

export function BoatFleetCatalog() {
  const { openQuoteModal } = useQuoteModal();

  const handleRequestQuote = (boat: BoatModel) => {
    openQuoteModal({
      productName: boat.name,
      title: `RFQ: ${boat.name}`,
      message: `I would like to request technical drawings, engine compatibility options, pricing, and manufacturing lead time for ${boat.name}.`,
    });
  };

  return (
    <section id="fleet-catalog" className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
              <span>Heavy-Duty Composite Boats</span>
            </div>
            <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
              FRP Boats
            </h2>
            <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2 max-w-3xl">
              High-strength, unsinkable fiberglass boats built for rescue operations, patrolling, passenger transport, and recreation with long-lasting durability.
            </p>
          </div>
        </div>

        {/* Boat Cards Grid */}
        <div className="space-y-8 mt-6">
          {BOAT_FLEET.map((boat) => (
            <div
              key={boat.id}
              className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image Column (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-slate-900 overflow-hidden">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Column (7 cols) */}
                <div className="lg:col-span-7 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white space-y-5">
                  <div>
                    <h3 className="type-h3 text-xl sm:text-2xl font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors mb-2">
                      {boat.name}
                    </h3>

                    <p className="type-body text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {boat.description}
                    </p>

                    {/* Recommended Deployments */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="type-eyebrow text-[10px] text-gray-500 mr-1">Best Suited For:</span>
                      {boat.recommendedUse.map((use, uIdx) => (
                        <span
                          key={uIdx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded-md font-medium"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => handleRequestQuote(boat)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn py-3 px-4 rounded-xl transition-colors duration-200 cursor-pointer group/btn shadow-xs"
                    >
                      <span>Request Quote &amp; CAD Specs</span>
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
