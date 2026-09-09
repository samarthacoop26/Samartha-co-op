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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                <span className="type-eyebrow text-[#FF6B00]">
                  Materials &amp; Engineering
                </span>
              </div>
              <h2 className="type-h2 text-[#0A1628]">
                PP, FRP &amp; Thermoplastic Standards
              </h2>
              <p className="mt-3 type-body text-gray-600">
                We engineer systems using premium-grade Polypropylene (PP), PPH, PPRC, HDPE, PVDF, and Isophthalic / Vinyl Ester resin matrices designed for severe chemical resistance and zero degradation in acidic and alkaline environments.
              </p>
            </div>

            <div className="space-y-3">
              <span className="type-eyebrow text-gray-900 block">
                Manufacturing &amp; Lining Capabilities:
              </span>
              {inHouseCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAFAFC] border border-gray-200 rounded-xl flex items-start gap-3.5 hover:border-[#FF6B00]/60 transition-colors shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-[#FF6B00] flex items-center justify-center shrink-0 border border-gray-200 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="type-h3 text-sm font-bold text-[#0A1628]">
                        {cap.title}
                      </h3>
                      <p className="type-body text-xs text-gray-500 mt-0.5">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="type-eyebrow text-slate-800">
                  Turnkey Execution
                </span>
              </div>
              <h2 className="type-h2 text-[#0A1628]">
                Site Erection &amp; Industrial Maintenance
              </h2>
              <p className="mt-3 type-body text-gray-600">
                Beyond manufacturing, our teams undertake complete site erection, ETP pipeline project work, Sintex tank welding, industrial plant shutdowns, and stockist raw material supply across Maharashtra MIDCs and pan-India.
              </p>
            </div>

            <div className="space-y-3">
              <span className="type-eyebrow text-gray-900 block">
                Turnkey &amp; Maintenance Scope:
              </span>
              {fullCycleServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAFAFC] border border-gray-200 rounded-xl flex items-start gap-3.5 hover:border-[#0A1628] transition-colors shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-slate-800 flex items-center justify-center shrink-0 border border-gray-200 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <h3 className="type-h3 text-sm font-bold text-[#0A1628]">
                        {srv.title}
                      </h3>
                      <p className="type-body text-xs text-gray-500 mt-0.5">
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
