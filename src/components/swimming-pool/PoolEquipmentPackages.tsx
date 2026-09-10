"use client";

import React from "react";
import {
  Waves,
  Sparkles,
  Flame,
  CheckCircle2,
  Droplets,
  Sliders,
  ShieldCheck,
} from "lucide-react";

export function PoolEquipmentPackages() {
  const equipmentCategories = [
    {
      title: "Pre-Plumbed Filtration Skid & Pumps",
      icon: Waves,
      description:
        "High-rate sand and glass bead composite filters paired with heavy-duty self-priming recirculation pumps.",
      items: [
        "Heavy-Duty Top-Mount / Side-Mount Sand Filter with 6-Way Multiport Valve",
        "High-Head Self-Priming Pool Pump with Removable Debris Leaf Basket",
        "High-Efficiency Recirculation (Complete Pool Turnover in 4–6 Hours)",
        "Pre-assembled on vibration-dampened composite skid for plug-and-play installation",
      ],
    },
    {
      title: "Underwater IP68 LED Chromotherapy",
      icon: Sparkles,
      description:
        "Submerged high-lumen multi-colour RGB lighting with remote synchronization.",
      items: [
        "Flat Slimline Resin-Filled IP68 Waterproof LED Lights (Zero Water Ingress)",
        "16 Dynamic Color Changing Programs & Warm White Illumination",
        "Wireless RF Remote Controller and Smart Mobile App Sync",
        "Safe 12V AC Low Voltage with Step-Down Waterproof Transformer",
      ],
    },
    {
      title: "Eco-Friendly Salt Chlorinators & UV Ozonizers",
      icon: Droplets,
      description:
        "Natural skin-friendly water sanitization systems eliminating chemical chlorine odor.",
      items: [
        "Automated Electrolytic Salt Chlorinator with Self-Cleaning Titanium Plates",
        "Inline UV-C & Ozone Sterilizer destroying 99.9% of bacteria and viruses",
        "Silky soft, eye-friendly saltwater (No red eyes, itchy skin, or bleached hair)",
        "Automated Digital pH and ORP Chemical Dosing Pump Systems",
      ],
    },
    {
      title: "Thermostatic Inverter Pool Heat Pumps",
      icon: Flame,
      description:
        "Year-round temperature control for winter and all-season swimming comfort.",
      items: [
        "Titanium Heat Exchanger Heat Pump with COP up to 6.5 (High Energy Savings)",
        "Heating & Cooling Dual-Mode Operation (Maintains 28°C–32°C year-round)",
        "Whisper-Quiet Inverter Compressor with Eco Night Mode",
        "Wi-Fi Smart Cloud Control via Smartphone App",
      ],
    },
    {
      title: "Counter-Current Swim Turbines & Spa Jets",
      icon: Sliders,
      description:
        "Transform any compact pool into an endless lap fitness training pool.",
      items: [
        "High-Volume Counter-Current Swim Jet Nozzle with Air Regulation",
        "Adjustable Water Flow Velocity for Gentle Strolling to Athletic Swimming",
        "Pneumatic Air Switch Button Mounted Right on Pool Shell Wall",
        "Integrated 6–12 Hydrotherapy Back & Foot Massage Jets",
      ],
    },
    {
      title: "Skimmers, Inlets, Main Drains & Accessories",
      icon: ShieldCheck,
      description:
        "Commercial ABS fittings, automatic vacuum cleaners, and stainless steel access ladders.",
      items: [
        "Heavy-Duty UV-Resistant ABS Wide-Mouth Surface Skimmer Boxes",
        "Dual Anti-Vortex Safety Main Drains & Directional Eyeball Inlets",
        "Grade 304 / 316 Stainless Steel Easy-Entry Pool Handrails & Ladders",
        "Automatic Robotic Pool Cleaners & Telescopic Maintenance Kits",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-[#FF6B00] text-xs font-bold font-mono-accent uppercase tracking-wider mb-3">
            <span>Turnkey Plant &amp; Hydraulics</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            Complete Filtration &amp; Pool Equipment Suite
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-3">
            Every Samarth Corporation FRP pool is delivered with a pre-engineered hydraulic filtration plant, underwater lighting, and water sanitation package.
          </p>
        </div>

        {/* Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentCategories.map((eq, idx) => {
            const Icon = eq.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200 hover:border-[#FF6B00]/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A1628] text-white flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="type-h3 text-base sm:text-lg font-bold text-[#0A1628] mb-1.5">
                    {eq.title}
                  </h3>

                  <p className="type-body text-xs text-gray-600 mb-4 leading-relaxed">
                    {eq.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {eq.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 text-xs text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="type-spec leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono-accent text-gray-500">
                  <span>Pre-Plumbed &amp; Tested</span>
                  <span className="text-emerald-700 font-bold">100% Commissioning Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
