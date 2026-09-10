"use client";

import React from "react";
import {
  Gauge,
  Zap,
  Navigation,
  LifeBuoy,
  Sliders,
  Anchor,
  CheckCircle2,
} from "lucide-react";

export function BoatEnginesRigging() {
  const riggingCategories = [
    {
      title: "Marine Propulsion & Outboard Motors (OBM)",
      icon: Gauge,
      description:
        "Factory authorized transom rigging and calibration for top global marine engine manufacturers.",
      items: [
        "Yamaha, Mercury, Suzuki & Honda 4-Stroke Marine OBMs (9.9 HP to 300 HP)",
        "Single, Twin & Triple Engine Multi-Linkage Transom Configurations",
        "Heavy-duty Inboard Marine Diesel Engines with Propeller Shaft & Stern Tube",
        "Electric Trolling Motors & Solar Battery Hybrid Auxiliary Drives",
      ],
    },
    {
      title: "Steering, Throttle & Hydrofoil Controls",
      icon: Sliders,
      description:
        "Precision naval helm control systems engineered for effortless high-speed maneuverability.",
      items: [
        "SeaStar / BayStar Hydraulic Marine Steering Systems with Helm Pump",
        "Heavy-duty Teleflex Mechanical Rotary Steering Systems for Small Craft",
        "Fly-By-Wire Digital Electronic Throttle & Shift (DTS) Controls",
        "Trim Tabs with Automatic Gyroscopic Roll Stabilization",
      ],
    },
    {
      title: "Navigational Electronics & Communication",
      icon: Navigation,
      description:
        "Military and commercial grade marine electronics and GPS chartplotter packages.",
      items: [
        "Garmin / Lowrance / Simrad GPS Chartplotters & Fishfinders",
        "Marine Radar Arches with Doppler 36-NM Radar Scanners",
        "IP67 Waterproof Marine VHF Transceiver Radios with Distress DSC",
        "LED Navigational Lights (Port, Starboard, Stern & 360° Anchor Mast Light)",
      ],
    },
    {
      title: "Marine Electricals, Bilge & Fuel Systems",
      icon: Zap,
      description:
        "Tinned marine-grade wiring harnesses with explosion-proof isolation switches.",
      items: [
        "Dual Marine Battery Banks with Automatic Charging Relays (ACR)",
        "Rule Heavy-Duty Automatic Submersible Bilge Pumps with Float Switches",
        "Heavy-Wall Marine Aluminum/FRP Fuel Tanks with Anti-Slosh Baffles",
        "Marine Grade Waterproof 12V / 24V Switch Panels with Circuit Breakers",
      ],
    },
    {
      title: "Deck Hardware & 316 Stainless Steel Outfitting",
      icon: Anchor,
      description:
        "Corrosion-proof marine grade stainless steel fittings with heavy backing plates.",
      items: [
        "Stainless Steel 316 Bow Pulpit Handrails & Stern Boarding Grab Rails",
        "Fold-Down Telescopic Swim Ladders & Ski Towing Pylons",
        "Heavy Cast Mooring Cleats, Fairleads & Anchor Roller Assemblies",
        "Retractable Sunbrella Bimini Tops & Heavy Duty T-Top Hardtops",
      ],
    },
    {
      title: "SOLAS / MMD Safety & Lifesaving Equipment",
      icon: LifeBuoy,
      description:
        "Certified lifesaving appliances and disaster rescue emergency gear.",
      items: [
        "IRS/MMD Approved Lifebuoy Rings with 30m Floating Lifelines",
        "ISO 12402 Marine Lifejackets with Whistles & SOLAS Reflective Strips",
        "Marine Grade ABC Powder Fire Extinguishers with Quick-Release Mounts",
        "Telescopic Aluminum Rescue Oars, Boat Hooks & First Aid Kits",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-[#FF6B00] text-xs font-bold font-mono-accent uppercase tracking-wider mb-3">
            <span>Turnkey Outfitting &amp; Marine Rigging</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            Propulsion, Navigational Electronics &amp; Marine Hardware
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-3">
            We deliver complete, fully rigged watercraft ready for sea trials. From high-thrust outboard motors to hydraulic steering, radar navigation, and SOLAS safety gear.
          </p>
        </div>

        {/* Rigging Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riggingCategories.map((rig, idx) => {
            const Icon = rig.icon;
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
                    {rig.title}
                  </h3>

                  <p className="type-body text-xs text-gray-600 mb-4 leading-relaxed">
                    {rig.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {rig.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2 text-xs text-gray-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="type-spec leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-mono-accent text-gray-500">
                  <span>Factory Installed</span>
                  <span className="text-emerald-700 font-bold">Tested &amp; Calibrated</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
