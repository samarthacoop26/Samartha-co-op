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
  concrete: ComparisonItem;
  vinyl: ComparisonItem;
}

export function PoolVsConcreteTable() {
  const comparisonData: ComparisonRow[] = [
    {
      metric: "Installation & Commissioning Timeline",
      frp: { text: "3 to 7 Days (Pre-molded shell lowered and plumbed)", good: true },
      concrete: { text: "60 to 90 Days (Curing, waterproofing, tiling, testing)", good: false },
      vinyl: { text: "20 to 30 Days (Steel frame & liner installation)", good: "warning" },
    },
    {
      metric: "Structural Leakage & Cracking Risk",
      frp: { text: "0% Leakage Risk (1-Piece seamless monolithic structure)", good: true },
      concrete: { text: "High Risk (Soil shifts cause hairline cracks & joint leaks)", good: false },
      vinyl: { text: "Moderate (Liner tears, punctures & seam separations)", good: "warning" },
    },
    {
      metric: "Chemical & Chlorine Demand",
      frp: { text: "70% Lower (Non-porous gelcoat prevents algae embedding)", good: true },
      concrete: { text: "High Chemical Demand (Porous plaster & grout harbour algae)", good: false },
      vinyl: { text: "Moderate (Non-porous, but liner bleaches with chlorine)", good: "warning" },
    },
    {
      metric: "Skin Comfort & Surface Smoothness",
      frp: { text: "Silky Smooth Gelcoat (Zero abrasive cuts, child friendly)", good: true },
      concrete: { text: "Rough Plaster & Sharp Tile Edges (Abrasive on toes & knees)", good: false },
      vinyl: { text: "Smooth surface, but wrinkles & folds develop over time", good: "warning" },
    },
    {
      metric: "Seismic & Expansive Soil Flexibility",
      frp: { text: "High Elasticity (Flexes with soil settlement without cracking)", good: true },
      concrete: { text: "Rigid & Brittle (Cracks severely in black cotton soil)", good: false },
      vinyl: { text: "Moderate flexibility in ground shifts", good: "warning" },
    },
    {
      metric: "Rooftop & Terrace Weight Load Feasibility",
      frp: { text: "Ultra-Lightweight (Minimal dead-load on building columns)", good: true },
      concrete: { text: "Extremely Heavy (Heavy dead load limits rooftop feasibility)", good: false },
      vinyl: { text: "Moderate weight, but complex plumbing on slabs", good: "warning" },
    },
    {
      metric: "10-Year Lifecycle Maintenance Cost",
      frp: { text: "Near-Zero (No re-plastering, re-grouting, or liner swaps)", good: true },
      concrete: { text: "High (Acid washing, re-grouting every 3–5 yrs, re-tiling)", good: false },
      vinyl: { text: "High (Liner replacement required every 5–8 years)", good: "warning" },
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
            <span>Engineering Benchmark</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            FRP Swimming Pool vs. RCC Concrete &amp; Vinyl Pools
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2">
            Compare structural durability, maintenance costs, and installation timelines to see why modern architects and villa owners prefer composite pools.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent w-1/4">
                    Performance Metric
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent bg-[#FF6B00] text-white w-1/3">
                    Samarth FRP Monolithic Pool
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent text-slate-300 w-1/5">
                    Traditional RCC Concrete Pool
                  </th>
                  <th className="py-4 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider font-mono-accent text-slate-300 w-1/5">
                    Vinyl Liner Pool
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

                    {/* Concrete Column */}
                    <td className="py-4 px-5 text-gray-600">
                      <div className="flex items-start gap-2">
                        {row.concrete.good === false ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.concrete.text}</span>
                      </div>
                    </td>

                    {/* Vinyl Column */}
                    <td className="py-4 px-5 text-gray-600">
                      <div className="flex items-start gap-2">
                        {row.vinyl.good === false ? (
                          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        <span>{row.vinyl.text}</span>
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
              <span>Includes Turnkey Hydraulic Plumbing, Filtration Plant, and Chemical Startup.</span>
            </span>
            <span className="text-[#FF8C33] font-bold">15-Year Structural Shell Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
}
