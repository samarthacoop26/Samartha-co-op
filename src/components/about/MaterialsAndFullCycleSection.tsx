"use client";

import React from "react";
import {
  Layers,
  Cpu,
  Sparkles,
  Cog,
  Wrench,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

export function MaterialsAndFullCycleSection() {
  const inHouseCapabilities = [
    {
      icon: Layers,
      title: "Custom Mold Design & Fabrication",
      desc: "In-house compression moulds tailored to exact client dimensions.",
    },
    {
      icon: Cpu,
      title: "Precision Tooling for Matched Specs",
      desc: "Laminate scheduling matching load rating and chemical exposure.",
    },
    {
      icon: Sparkles,
      title: "Quality Testing & Batch Inspection",
      desc: "In-house UTM proof-load verification and Barcol hardness testing.",
    },
  ];

  const fullCycleServices = [
    {
      icon: Cog,
      title: "Turnkey Project Execution",
      desc: "End-to-end management from structural sizing to commissioning.",
    },
    {
      icon: Wrench,
      title: "Industrial Maintenance & Shutdowns",
      desc: "Rapid on-site plant shutdown, scrubber replacement, and installation.",
    },
    {
      icon: RotateCcw,
      title: "Repair, Refurbishment & Relining",
      desc: "Full-scale relining and structural reinforcement of composite assets.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Section 3: Materials & Manufacturing Standards */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                <span className="text-xs font-bold tracking-wider text-[#FF6B00] uppercase">
                  Materials & Engineering
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] tracking-tight">
                Materials & Manufacturing Standards
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Our FRP products are engineered using high-grade resin systems and reinforcement materials selected for performance in demanding conditions — including corrosive, high-load, and outdoor exposure environments.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                In-House Capability:
              </span>
              {inHouseCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAFAFC] border border-gray-200 rounded-lg flex items-start gap-3.5"
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

          {/* Section 4: Full-Cycle Project Support */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded mb-3">
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                  Beyond Manufacturing
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] tracking-tight">
                Full-Cycle Project Support
              </h2>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Beyond manufacturing, we undertake complete industrial maintenance, shutdown projects, fabrication, installation, repair, refurbishment, and turnkey project execution across multiple industries — giving clients a single point of accountability from specification to installation.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                Turnkey Execution Scope:
              </span>
              {fullCycleServices.map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAFAFC] border border-gray-200 rounded-lg flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded bg-white text-slate-800 flex items-center justify-center shrink-0 border border-gray-200 mt-0.5">
                      <Icon className="w-4 h-4" />
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
