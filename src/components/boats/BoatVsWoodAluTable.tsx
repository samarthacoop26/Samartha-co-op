"use client";

import React from "react";
import { Check, X, AlertCircle } from "lucide-react";

interface ComparisonItem {
  text: string;
  good: boolean | "warning";
}

interface ComparisonRow {
  metric: string;
  frp: ComparisonItem;
  wood: ComparisonItem;
  alu: ComparisonItem;
}

export function BoatVsWoodAluTable() {
  const comparisonData: ComparisonRow[] = [
    {
      metric: "Resistance to Rot, Rust & Marine Borers",
      frp: { text: "100% Rot-Proof (Zero shipworm, fungal rot, or rust decay)", good: true },
      wood: { text: "High rot risk; requires caulking & copper painting annually", good: false },
      alu: { text: "Subject to galvanic corrosion & weld pitting in saltwater", good: "warning" },
    },
    {
      metric: "Structural Unsinkability & Buoyancy",
      frp: { text: "Positive Flotation (Built-in closed-cell PU foam core)", good: true },
      wood: { text: "Sinks when fully swamped unless external bladders added", good: false },
      alu: { text: "Rapid sinking hazard if pierced unless fitted with air boxes", good: "warning" },
    },
    {
      metric: "Hull Maintenance & Slipway Costs",
      frp: { text: "Ultra-Low (Soap wash, gelcoat buffing, zero caulking)", good: true },
      wood: { text: "Extremely High (Planking replacement, pitch, caulking)", good: false },
      alu: { text: "Moderate (Sacrificial zinc anodes, weld crack repair)", good: "warning" },
    },
    {
      metric: "Hydrodynamic Efficiency & Fuel Consumption",
      frp: { text: "25% Lower Fuel Burn (Sleek mirror gelcoat, light monocoque)", good: true },
      wood: { text: "High drag due to rough timber surface & heavy waterlogged weight", good: false },
      alu: { text: "Good fuel economy, but rougher ride and high hull drumming", good: "warning" },
    },
    {
      metric: "Impact Absorption & Field Repairability",
      frp: { text: "High elasticity; localized field repairs take under 2 hours", good: true },
      wood: { text: "Planks split easily; requires master carpentry replacement", good: false },
      alu: { text: "Dents and cracks require specialized TIG/MIG welding gear", good: "warning" },
    },
    {
      metric: "Design Life & Commercial Resale Value",
      frp: { text: "30+ Years with High Resale Value (Retains structural stiffness)", good: true },
      wood: { text: "7–12 Years lifespan in tropical waters before timber rot sets in", good: false },
      alu: { text: "15–20 Years (Electrolysis & metal fatigue limit life)", good: "warning" },
    },
    {
      metric: "Acoustic Insulation & Passenger Comfort",
      frp: { text: "Quiet, wave-dampening ride (PU sandwich absorbs wave slap)", good: true },
      wood: { text: "Moderate sound deadening, but creaks heavily in rough seas", good: "warning" },
      alu: { text: "Very noisy (Metallic wave slap resonance vibrates whole cabin)", good: false },
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
            <span>Material Performance Matrix</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            FRP Composite vs. Wooden &amp; Aluminum Vessels
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2">
            A comprehensive naval engineering comparison highlighting why government agencies, commercial operators, and resort fleets are upgrading to composite monocoque hulls.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent w-1/4">
                    Naval Engineering Parameter
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent bg-[#FF6B00] text-white w-1/3">
                    Samarth FRP Composite Boat
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent text-slate-300 w-1/5">
                    Traditional Wooden Boat
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent text-slate-300 w-1/5">
                    Aluminum / Steel Boat
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {comparisonData.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    
                    {/* Metric Name */}
                    <td className="py-4 px-5 font-semibold text-[#0A1628]">
                      {row.metric}
                    </td>

                    {/* FRP Column (Highlighted) */}
                    <td className="py-4 px-5 bg-orange-50/50 border-x border-orange-200/60 font-medium text-gray-900">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.frp.text}</span>
                      </div>
                    </td>

                    {/* Wood Column */}
                    <td className="py-4 px-5 text-gray-600">
                      <div className="flex items-start gap-2">
                        {row.wood.good === false ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.wood.text}</span>
                      </div>
                    </td>

                    {/* Alu Column */}
                    <td className="py-4 px-5 text-gray-600">
                      <div className="flex items-start gap-2">
                        {row.alu.good === false ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.alu.text}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Footnote Bar */}
          <div className="p-4 bg-slate-900 text-slate-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-accent">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All Samarth Corporation boats are supplied with Factory Hull Quality Assurance certificates.</span>
            </span>
            <span className="text-[#FF8C33] font-bold">Standard 5-Year Structural Hull Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
