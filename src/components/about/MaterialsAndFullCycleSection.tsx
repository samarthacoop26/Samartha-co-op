"use client";

import React from "react";
import {
  Layers,
  Shield,
  Pipette,
  Workflow,
  Wrench,
  PackageCheck,
} from "lucide-react";

export function MaterialsAndFullCycleSection() {
  const inHouseCapabilities = [
    {
      icon: Shield,
      title: "M.S. FRP Lining & Protective Coating",
      desc: "High-build Isophthalic and Vinyl Ester lining on mild steel tanks, reaction vessels, and concrete pits.",
    },
    {
      icon: Layers,
      title: "PP & FRP Dual-Laminate Tanks & Ducting",
      desc: "Corrosion-proof chemical storage tanks, packed scrubbers, blowers, and acid fume exhaust systems.",
    },
    {
      icon: Pipette,
      title: "Thermoplastic Pipeline & ETP Erection",
      desc: "Specialized PPRC, PPH, HDPE, and PVDF pipeline project execution, butt-fusion welding, and effluent piping.",
    },
  ];

  const fullCycleServices = [
    {
      icon: Workflow,
      title: "Turnkey Project Works & Site Erection",
      desc: "End-to-end execution of scrubber blowers, ducting lines, and industrial plant process systems.",
    },
    {
      icon: Wrench,
      title: "Industrial Maintenance & Tank Welding",
      desc: "HDPE Sintex tank extrusion welding, nozzle modifications, and rapid plant shutdown maintenance.",
    },
    {
      icon: PackageCheck,
      title: "Stockist Supply & Raw Materials",
      desc: "Extensive inventory of HDPE/PP/PVDF pipes, fittings, PPGL/PVC sheets, valves, and FRP resins.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Section 1: Materials & Engineering Standards */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                <span className="text-xs font-bold tracking-wider text-[#FF6B00] uppercase">
                  Materials & Engineering
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] tracking-tight">
                PP, FRP & Thermoplastic Standards
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                We engineer systems using premium-grade Polypropylene (PP), PPH, PPRC, HDPE, PVDF, and Isophthalic / Vinyl Ester resin matrices designed for severe chemical resistance and zero degradation in acidic and alkaline environments.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                Manufacturing & Lining Capabilities:
              </span>
              {inHouseCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAFAFC] border border-gray-200 rounded-lg flex items-start gap-3.5 hover:border-[#FF6B00]/60 transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-white text-[#FF6B00] flex items-center justify-center shrink-0 border border-gray-200 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A1628]">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Turnkey Erection & Full-Cycle Project Support */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                  Turnkey Execution
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] tracking-tight">
                Site Erection & Industrial Maintenance
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Beyond manufacturing, our teams undertake complete site erection, ETP pipeline project work, Sintex tank welding, industrial plant shutdowns, and stockist raw material supply across Maharashtra MIDCs and pan-India.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                Turnkey & Maintenance Scope:
              </span>
              {fullCycleServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAFAFC] border border-gray-200 rounded-lg flex items-start gap-3.5 hover:border-[#0A1628] transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-white text-slate-800 flex items-center justify-center shrink-0 border border-gray-200 mt-0.5">
                      <Icon className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A1628]">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
