"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Waves,
  Ruler,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Shield,
  Droplets,
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
    image: "/images/products/frp-swimming-pool-hero.jpg",
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
  {
    id: "family-leisure-pool",
    category: "family",
    name: "Classic Family Leisure & Patio Pool",
    tagline: "Integrated Shallow Sunshelf & Full-Width Entry Steps",
    description:
      "The perfect backyard family retreat featuring an integrated shallow tanning splash ledge for children, deep swim zone, and continuous safety rest ledges along the full perimeter.",
    image: "/images/products/frp-swimming-pool-hero.jpg",
    specs: {
      dimensions: "6.7m x 3.3m (22ft x 11ft)",
      depth: "1.0m to 1.6m (3.3ft to 5.2ft Gradual Slope)",
      capacity: "24,000 Litres (6,340 Gallons)",
      bathers: "8 to 12 Persons",
      shellThickness: "10mm – 12mm Reinforced Ribbed",
      installType: "Inground / Semi-Inground with Coping Stone",
    },
    features: [
      "Built-in Sunshelf Splash Deck for Toddlers & Loungers",
      "Perimeter Safety Rest Foot Ledge (Child & Senior Friendly)",
      "Gradual Gentle Slope from Shallow to Deep End",
      "Smooth Non-Skid Diamond Surface on Steps & Seating",
      "High-Rate Sand Filter with 1.0 HP Recirculation Pump",
    ],
    idealFor: [
      "Independent Villa & Bungalow Backyards",
      "Farmhouses & Weekend Country Homes",
      "Residential Gated Community Clubhouses",
    ],
    popular: true,
  },
  {
    id: "luxury-lap-pool",
    category: "lap",
    name: "Dual-Lane Lap & Fitness Training Pool",
    tagline: "Unobstructed Linear Swimming Corridor for Daily Workouts",
    description:
      "Designed for fitness swimming and aquatic exercise with clean straight walls, side-entry corner steps, and optional counter-current swim turbine jets that allow endless swimming workouts.",
    image: "/images/products/frp-pool-manufacturing.jpg",
    specs: {
      dimensions: "10.5m x 3.0m (35ft x 10ft)",
      depth: "1.4m Flat Depth (4.6ft Uniform)",
      capacity: "38,000 Litres (10,000 Gallons)",
      bathers: "6 to 10 Fitness Swimmers",
      shellThickness: "12mm – 14mm Heavy-Duty Box Ribs",
      installType: "Inground / Elevated Decking",
    },
    features: [
      "Continuous Unobstructed 35ft Swimming Line",
      "Counter-Current Jet System Ready (Endless Swim)",
      "Compact Corner Entry Stairs to Preserve Lap Width",
      "Triple High-Lumen Underwater LED Night Lights",
      "Heavy Composite Perimeter Stiffener Box-Beams",
    ],
    idealFor: [
      "Sports Enthusiasts & Home Gym Pavilions",
      "Narrow Side-Yard Villa Architecture",
      "Health Resorts & Wellness Retreats",
    ],
  },
  {
    id: "resort-infinity-pool",
    category: "infinity",
    name: "Resort Infinity Edge & Overflow Pool",
    tagline: "Vanishing Horizon Edge & Acrylic Glass-Wall Integration",
    description:
      "Ultra-luxury composite pool shell engineered with a precision-leveled infinity spillway trough, creating a mesmerizing seamless horizon water effect looking out over gardens, lakes, or valleys.",
    image: "/images/products/frp-swimming-pool-hero.jpg",
    specs: {
      dimensions: "9.0m x 4.0m (30ft x 13ft) + Balance Tank",
      depth: "1.2m to 1.65m (4ft to 5.4ft)",
      capacity: "42,000 Litres (11,100 Gallons)",
      bathers: "12 to 18 Persons",
      shellThickness: "12mm – 15mm Multi-Layered Vinyl Ester",
      installType: "Hillside Sloped Ground / Elevated Scenic Deck",
    },
    features: [
      "Precision Molded Weir Overflow Edge with Catch Basin",
      "Integrated FRP Balancing Surge Tank & Dual Return Inlets",
      "Optional Clear Acrylic / Toughened Glass Viewport Panel",
      "Hydrotherapy Bench Seating with 8 High-Pressure Jets",
      "Eco-Smart Saltwater Chlorination & Automated Dosing",
    ],
    idealFor: [
      "Hilltop & Lakeside Luxury Resorts",
      "Architectural Showpiece Designer Villas",
      "High-End Commercial Farmhouses & Homestays",
    ],
    popular: true,
  },
  {
    id: "modular-container-pool",
    category: "container",
    name: "Plug & Play Containerized Modular Pool",
    tagline: "Above-Ground Self-Supporting Steel Frame + FRP Liner",
    description:
      "A complete factory-finished portable swimming pool housed in a fortified structural steel ISO frame with external timber cladding, integrated mechanical plant room, and zero deep digging required.",
    image: "/images/about/tray-custom-fabrication.jpg",
    specs: {
      dimensions: "6.0m x 2.4m or 12.0m x 2.4m (20ft / 40ft)",
      depth: "1.3m (4.3ft Uniform)",
      capacity: "16,000 to 32,000 Litres",
      bathers: "6 to 10 Persons",
      shellThickness: "Heavy Composite Shell in Heavy Steel Skeleton",
      installType: "100% Above Ground / Portable / Movable",
    },
    features: [
      "Zero Excavation Required – Simply Place on Flat Concrete Bed",
      "Built-in Plant Room with Filter, Pump & Electricals Pre-Wired",
      "Exterior WPC Wooden Decking & Fold-Up Child Safety Stairs",
      "Can be Relocated / Moved to a New Property with Flatbed Crane",
      "Plug & Play 3-Pin / Single Phase Electrical Connection",
    ],
    idealFor: [
      "Rented Properties & Temporary Lease Sites",
      "Eco-Camping Glamping Resorts & Farm Sites",
      "Properties with Rocky or High-Water-Table Ground",
    ],
  },
  {
    id: "jacuzzi-hydrotherapy-spa",
    category: "spa",
    name: "Hydrotherapy Whirlpool Jacuzzi Spa",
    tagline: "Ergonomic Contoured Seating & High-Pressure Massage Jets",
    description:
      "Commercial-grade heated composite whirlpool spa featuring anatomically contoured lounger seats, air and water hydrotherapy massage jets, and digital temperature thermostatic heating.",
    image: "/images/about/stockist-materials.jpg",
    specs: {
      dimensions: "2.3m x 2.3m (7.5ft x 7.5ft)",
      depth: "0.95m (3.1ft)",
      capacity: "1,800 Litres (475 Gallons)",
      bathers: "4 to 6 Persons",
      shellThickness: "8mm – 10mm Polyurethane Insulated",
      installType: "Indoor / Outdoor / Rooftop / Poolside",
    },
    features: [
      "18 to 28 Targeted Hydro-Massage & Air Booster Jets",
      "Integrated Inline 3kW / 6kW Fast Electric Heating System",
      "Full Closed-Cell Foam Thermal Insulation Jacket",
      "Submerged Chromotherapy Mood Lighting System",
      "Ozone Water Purification Unit for Chemical-Free Water",
    ],
    idealFor: [
      "Villa Master Balconies & Spa Rooms",
      "Resort Suites & Wellness Spas",
      "Poolside Integrated Hot-Tub Attachment",
    ],
  },
];

const POOL_CATEGORIES = [
  { id: "all", label: "All Pool Models", icon: Waves },
  { id: "plunge", label: "Plunge & Rooftop", icon: Sparkles },
  { id: "family", label: "Family Leisure", icon: Users },
  { id: "lap", label: "Lap & Fitness", icon: Ruler },
  { id: "infinity", label: "Resort Infinity", icon: Droplets },
  { id: "container", label: "Modular Container", icon: Layers },
  { id: "spa", label: "Jacuzzi Spas", icon: Shield },
];

export function PoolModelsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { openQuoteModal } = useQuoteModal();

  const filteredPools =
    selectedCategory === "all"
      ? POOL_MODELS
      : POOL_MODELS.filter((p) => p.category === selectedCategory);

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
              FRP Swimming Pool Models &amp; Sizes
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

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {POOL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-[#0A1628] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#FF6B00]" : "text-gray-500"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Pool Cards Grid */}
        <div className="space-y-8 mt-2">
          {filteredPools.map((pool, idx) => (
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

                  {/* Bottom Image Stats */}
                  <div className="relative z-10 space-y-2 pt-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-xs font-mono-accent text-emerald-300 border border-emerald-500/30">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        {pool.specs.bathers}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-xs font-mono-accent text-cyan-200 border border-cyan-500/30">
                        <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                        {pool.specs.capacity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-snug">
                      100% Monolithic Shell &bull; Marine ISO-NPG Gelcoat &bull; 15-Yr Shell Warranty
                    </p>
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

                    {/* Key Engineering Features */}
                    <div className="space-y-1.5 mb-4">
                      <span className="type-eyebrow text-gray-500 block text-[11px]">
                        Standard Composite Inclusions &amp; Built-In Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {pool.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5 text-xs text-gray-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="type-spec leading-snug">{feat}</span>
                          </div>
                        ))}
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
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      <span>IS / ASTM Composite Standards &bull; Pan-India Crane Rigging</span>
                    </div>

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
