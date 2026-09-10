"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Layers,
  Sparkles,
  Droplets,
  Anchor,
  CheckCircle2,
  Box,
  Flame,
} from "lucide-react";

export function BoatHullEngineering() {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const hullLayers = [
    {
      title: "Layer 1: UV & Saltwater Resistant ISO-NPG Marine Gelcoat",
      thickness: "600 – 800 Microns",
      function: "Outer Hydrodynamic Barrier",
      description:
        "High-performance marine isophthalic-neopentyl glycol (ISO-NPG) gelcoat that provides high gloss, scratch resistance, UV color stability, and zero water absorption in saltwater environments.",
      benefits: [
        "Eliminates yellowing and chalking under tropical UV exposure",
        "Hydrodynamically smooth mirror finish for minimal drag resistance",
        "Available in high-visibility orange, navy blue, white & camouflage",
      ],
      icon: Sparkles,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Layer 2: Pure Vinyl Ester Resin Osmosis & Chemical Barrier",
      thickness: "1.5 mm – 2.0 mm",
      function: "Osmotic Blister Prevention",
      description:
        "A 100% vinyl ester resin skin coat with surface tissue that forms an impenetrable chemical barrier, permanently safeguarding the structural laminate against osmotic blistering and water vapor migration.",
      benefits: [
        "100% Osmosis-Proof lifetime hull integrity guarantee",
        "Higher elongation at break to resist micro-cracking from wave impact",
        "Resistant to fuel spillage, bilge oils, and industrial contaminants",
      ],
      icon: Droplets,
      color: "from-teal-600 to-emerald-500",
    },
    {
      title: "Layer 3: Biaxial & Multi-Axial E-Glass Structural CSM",
      thickness: "3.0 mm – 5.0 mm",
      function: "Tensile & Impact Load Absorption",
      description:
        "Multi-layered E-glass Chopped Strand Mat (CSM 450/600 gsm) bonded with marine-grade polyester resin to deliver uniform multi-directional tensile and shear strength across the entire hull shell.",
      benefits: [
        "High strength-to-weight ratio for superior fuel efficiency",
        "Absorbs high-energy wave slamming without permanent deformation",
        "Continuous seamless monolithic shell with zero welded seams",
      ],
      icon: Layers,
      color: "from-indigo-600 to-blue-500",
    },
    {
      title: "Layer 4: Heavy Woven Roving Backbone & Keel Doublers",
      thickness: "4.0 mm – 8.0 mm",
      function: "Longitudinal & Keel Rigidity",
      description:
        "Heavy-gauge E-glass Woven Roving (WR 600/800 gsm) laid along the keel line, chines, and stem post to create a fortified backbone capable of withstanding rocky beachings and high-speed wave impacts.",
      benefits: [
        "Fortified keel skeg protects hull during shallow-water grounding",
        "Exceptional flexural modulus preventing hull twisting in rough seas",
        "Engineered to withstand heavy engine thrust and torque loads",
      ],
      icon: Anchor,
      color: "from-orange-600 to-amber-500",
    },
    {
      title: "Layer 5: Longitudinal & Transverse Top-Hat Stringer Grid",
      thickness: "High-Section Composite Beams",
      function: "Monocoque Structural Framework",
      description:
        "Hollow or foam-cored top-hat section composite stringers and bulkheads glassed directly into the hull bottom, creating an ultra-rigid internal skeleton that distributes engine and wave loads.",
      benefits: [
        "Prevents hull bottom panting and flex under heavy throttle",
        "Integral bulkheads create watertight collision compartments",
        "Secure anchoring points for fuel tanks, consoles, and seating",
      ],
      icon: Box,
      color: "from-slate-700 to-slate-900",
    },
    {
      title: "Layer 6: Closed-Cell High-Density Polyurethane Buoyancy Cells",
      thickness: "Full Double-Bottom Sandwich",
      function: "100% Positive Flotation (Unsinkable)",
      description:
        "Underfloor cavities and gunwales are injected with high-density, closed-cell PU flotation foam. Even if the vessel is completely swamped or breached, the boat retains positive buoyancy and remains upright.",
      benefits: [
        "Compliant with international and national lifesaving craft rules",
        "Closed-cell foam will never absorb water or rot over time",
        "Provides acoustic deadening for a quiet, smooth ride on water",
      ],
      icon: ShieldCheck,
      color: "from-emerald-600 to-green-500",
    },
    {
      title: "Layer 7: Heavy-Duty Transom Reinforcement & Gunwale Fender",
      thickness: "25 mm – 50 mm Composite / Marine Plywood Core",
      function: "Engine Torque & Dock Impact Protection",
      description:
        "High-density marine structural core encapsulated in thick composite laminate to support heavy multi-outboard motors, flanked by a perimeter heavy-duty EPDM/PVC D-fender rub rail.",
      benefits: [
        "Handles single and twin outboard engines up to 600 HP",
        "Rubber D-fender protects hull during jetty and pier docking",
        "Stainless steel 316 backing plates for towing and lifting eyes",
      ],
      icon: Flame,
      color: "from-red-600 to-orange-500",
    },
  ];

  const active = hullLayers[activeLayer];
  const ActiveIcon = active.icon;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-[#FF6B00] text-xs font-bold font-mono-accent uppercase tracking-wider mb-3">
            <span>Naval Composite Architecture</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            7-Layer Monocoque Marine Hull Construction
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-3">
            Why Samarth Corporation FRP boats outlast traditional wooden and metal boats: Each hull is precision laminated using multi-axial glass reinforcements, vinyl ester barrier resins, and unsinkable positive buoyancy foam cells.
          </p>
        </div>

        {/* Interactive Layer Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Layer Selector Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <span className="type-eyebrow text-gray-400 block px-2 pb-1 text-xs">
              Click a structural layer to view engineering details:
            </span>

            {hullLayers.map((layer, index) => {
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
            {/* Ambient Background Glow */}
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
                  Naval Performance &amp; Durability Advantages:
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
                  <span className="type-eyebrow text-slate-400 text-[10px] block">Marine Resin</span>
                  <span className="type-spec text-xs font-bold text-white mt-0.5 block">ISO-NPG / Vinyl Ester</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="type-eyebrow text-slate-400 text-[10px] block">Laminate Code</span>
                  <span className="type-spec text-xs font-bold text-white mt-0.5 block">ISO 12217 / IRS Rule</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <span className="type-eyebrow text-slate-400 text-[10px] block">Lifespan</span>
                  <span className="type-spec text-xs font-bold text-emerald-400 mt-0.5 block">30+ Years Zero Rot</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
