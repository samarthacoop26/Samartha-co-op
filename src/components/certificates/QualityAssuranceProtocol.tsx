"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Layers,
  Gauge,
  FlaskConical,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  DownloadCloud,
} from "lucide-react";

export function QualityAssuranceProtocol() {
  const steps = [
    {
      step: "01",
      icon: <FlaskConical className="w-6 h-6 text-[#FF6B00]" />,
      title: "Raw Material & Resin Matrix Validation",
      standards: "IS 6746 / ASTM D638",
      description:
        "Every production run begins with batch-level testing of Unsaturated Isophthalic / Vinyl Ester resins and E-Glass direct roving for tensile elongation, moisture content, and gel time consistency.",
    },
    {
      step: "02",
      icon: <Layers className="w-6 h-6 text-[#FF6B00]" />,
      title: "Polymer Cross-Linking & Barcol Hardness",
      standards: "ASTM D2583 / ASTM D790",
      description:
        "Post-cure Barcol hardness testing (minimum 40–50 rating) guarantees complete molecular cross-linking, eliminating surface tackiness, brittleness, and micro-void formations.",
    },
    {
      step: "03",
      icon: <Gauge className="w-6 h-6 text-[#FF6B00]" />,
      title: "BS EN 124 Proof & Deflection Load Test",
      standards: "BS EN 124 / IS 1726 (A15 to F900)",
      description:
        "Computer-controlled hydraulic press test applying up to 600 kN (60 Tonnes) load across composite manhole covers and gratings with calibrated deflection gauge verification.",
    },
    {
      step: "04",
      icon: <ShieldAlert className="w-6 h-6 text-[#FF6B00]" />,
      title: "Chemical Immersion & Dielectric Breakdown",
      standards: "ASTM D543 / IEC 60243",
      description:
        "Continuous 72-hour immersion testing in 20% H2SO4, caustic solutions, and chlorine vapor combined with high-voltage non-conductivity testing for electrical substation safety.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-3 text-[11px] font-bold tracking-widest text-[#FF6B00] uppercase">
            <span>Rigorous Quality Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            4-Stage In-House Quality & Structural Inspection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Every FRP fabrication dispatched from our manufacturing plant is backed by traceable Material Test Certificates (MTC) and third-party laboratory load reports.
          </p>
        </div>

        {/* 4 Protocol Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 hover:border-[#FF6B00]/60 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-[#FF6B00]/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-[#FF6B00] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="inline-block px-2 py-0.5 rounded bg-slate-900 text-[#FF6B00] text-[10px] font-mono font-bold mb-2">
                  {item.standards}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Zero-Defect Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action for Tender Engineers */}
        <div className="mt-14 bg-gradient-to-r from-slate-800 to-[#0A1628] border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need Batch Test Certificates or Vendor Registration Pack?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our technical engineering department provides comprehensive tender compliance documents, NABL load reports, and formal vendor pre-qualification packages.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-orange-500/20"
            >
              <span>Contact Quality Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
