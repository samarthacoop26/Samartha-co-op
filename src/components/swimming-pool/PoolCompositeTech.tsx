"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Droplets,
  Layers,
  Box,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Anchor,
} from "lucide-react";

export function PoolCompositeTech() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const poolLayers = [
    {
      title: "Layer 1: UV-Stabilized ISO-NPG High Gloss Gelcoat",
      thickness: "600 – 800 Microns",
      function: "Skin Contact & Algae Barrier",
      description:
        "Marine grade ISO-NPG (Isophthalic Neopentyl Glycol) gelcoat providing a silky-smooth, zero-porosity surface. Completely prevents algae spores from embedding and eliminates skin scrapes.",
      benefits: [
        "100% Non-porous: Algae cannot root; cuts chlorine cleaning needs by 70%",
        "Resistant to pool chemicals, salt chlorinators, and intense UV sunlight",
        "Silky smooth texture comfortable on bare feet with zero sharp tile edges",
      ],
      icon: Sparkles,
    },
    {
      title: "Layer 2: Pure Vinyl Ester Chemical Barrier Resin",
      thickness: "1.5 mm – 2.0 mm",
      function: "100% Osmosis & Blister Prevention",
      description:
        "High-density vinyl ester corrosion barrier that blocks water molecules from penetrating into the structural laminate, permanently preventing osmotic blistering and delamination.",
      benefits: [
        "Permanent chemical seal against heated water and salt ions",
        "High elongation at break prevents micro-fractures under water pressure",
        "Guarantees the 15-year structural shell warranty",
      ],
      icon: Droplets,
    },
    {
      title: "Layer 3: Multi-Axial E-Glass Core Mat Reinforcement",
      thickness: "3.0 mm – 4.5 mm",
      function: "Hydrostatic Load Distribution",
      description:
        "Bi-directional and continuous strand E-glass matrix delivering exceptional tensile strength across both pool walls and floor to evenly distribute water weight.",
      benefits: [
        "Monolithic one-piece seamless shell with zero expansion joints",
        "Absorbs heavy hydrostatic water pressure without bowing or bulging",
        "Lightweight structure suitable for rooftop and high-rise terraces",
      ],
      icon: Layers,
    },
    {
      title: "Layer 4: Reinforced Structural Perimeter Box Stiffeners",
      thickness: "High-Moment Hollow Box Ribs",
      function: "Perimeter Beam & Coping Strength",
      description:
        "External composite hollow box-rib stiffeners running horizontally and vertically along the outer shell walls, providing rigid structural containment against backfill soil and ground pressure.",
      benefits: [
        "Eliminates wall deflection when pool is emptied or refilled",
        "Integrated coping beam provides firm support for stone pavers and decking",
        "Engineered for crane rigging and lifting into position without flexing",
      ],
      icon: Box,
    },
    {
      title: "Layer 5: Closed-Cell Polyurethane Foam Thermal Insulation",
      thickness: "20 mm – 30 mm Thermal Core",
      function: "Water Heat Retention & Acoustic Barrier",
      description:
        "High-density closed-cell polyurethane foam sprayed on the exterior shell underside. Acts as a high-R thermal blanket that keeps pool water warmer for longer and reduces heating power bills.",
      benefits: [
        "Retains ambient water temperature up to 35% longer than bare concrete",
        "Significantly slashes electricity bills when using pool heat pumps",
        "Provides cushioned ground bedding and acoustic vibration dampening",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Layer 6: Heavy Woven Roving Structural Backbone",
      thickness: "4.0 mm – 6.0 mm",
      function: "Ground Movement & Seismic Elasticity",
      description:
        "Heavy-gauge E-glass woven roving (WR 600/800 gsm) that gives the shell natural flexural elasticity, allowing the pool to expand and contract during seasonal temperature swings without cracking.",
      benefits: [
        "Accommodates expansive black cotton soil shifts and ground settlements",
        "Unlike concrete, will never develop hairline water leakage cracks",
        "Engineered for seismic zone resilience",
      ],
      icon: Anchor,
    },
    {
      title: "Layer 7: External Heavy Duty Moisture & Soil Protective Topcoat",
      thickness: "400 – 600 Microns",
      function: "Groundwater & Soil Acidity Seal",
      description:
        "High-integrity external barrier coat sealing the outer fiberglass shell from subterranean groundwater chemicals, soil salts, termite acids, and dampness.",
      benefits: [
        "Protects the outer composite laminate from underground moisture",
        "Resistant to acidic/alkaline soils and groundwater minerals",
        "Ensures 30+ years of uninterrupted underground service life",
      ],
      icon: Flame,
    },
  ];

  const active = poolLayers[activeLayer];
  const ActiveIcon = active.icon;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-[#FF6B00] text-xs font-bold font-mono-accent uppercase tracking-wider mb-3">
            <span>Advanced Composite Engineering</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            7-Layer Composite Shell Cross-Section Breakdown
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-3">
            Why Samarth Corporation FRP pools never crack, blister, or leak: Every shell is precision laminated using vinyl ester barrier coats, multi-axial reinforcements, perimeter box stiffeners, and closed-cell thermal insulation.
          </p>
        </div>

        {/* Interactive Layer Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Layer Selector Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="type-eyebrow text-gray-400 block px-2 pb-1 text-xs">
              Click a structural layer to view engineering details:
            </span>

            {poolLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveLayer(index)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#0A1628] text-white shadow-lg border border-[#0A1628]"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200/80"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-[#FF6B00] text-white" : "bg-white text-gray-700 shadow-2xs"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono-accent font-bold ${isSelected ? "text-[#FF8C33]" : "text-gray-500"}`}>
                          0{index + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold truncate">
                          {layer.function}
                        </span>
                      </div>
                      <span className={`text-[11px] block truncate mt-0.5 ${isSelected ? "text-slate-300" : "text-gray-500"}`}>
                        {layer.thickness}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono-accent font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      isSelected ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    View
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Layer Detailed Viewport (7 cols) */}
          <div className="lg:col-span-7 bg-[#0A1628] text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              
              {/* Layer Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shadow-md">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="type-eyebrow text-[#FF8C33] text-[11px] block">
                      Layer 0{activeLayer + 1} of 07 &bull; {active.function}
                    </span>
                    <h3 className="type-h3 text-lg sm:text-xl font-bold text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 bg-white/10 text-slate-200 text-xs font-mono-accent rounded-lg border border-white/15">
                  {active.thickness}
                </span>
              </div>

              {/* Description */}
              <p className="type-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                {active.description}
              </p>

              {/* Engineering Benefits List */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-2.5">
                <span className="type-eyebrow text-slate-400 block text-[11px] uppercase tracking-wider font-bold">
                  Hydraulic &amp; Structural Performance Advantages:
                </span>
                <div className="space-y-2">
                  {active.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="type-spec leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Standards Compliance Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="type-eyebrow text-slate-400 text-[10px] block">Gelcoat Finish</span>
                  <span className="type-spec text-xs font-bold text-white mt-0.5 block">ISO-NPG Marine</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="type-eyebrow text-slate-400 text-[10px] block">Osmosis Protection</span>
                  <span className="type-spec text-xs font-bold text-white mt-0.5 block">100% Vinyl Ester</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <span className="type-eyebrow text-slate-400 text-[10px] block">Installation Time</span>
                  <span className="type-spec text-xs font-bold text-emerald-400 mt-0.5 block">3 to 7 Days</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
