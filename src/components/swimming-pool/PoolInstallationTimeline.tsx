"use client";

import React from "react";
import {
  Compass,
  Shovel,
  Truck,
  Wrench,
  Droplet,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function PoolInstallationTimeline() {
  const steps = [
    {
      step: "01",
      title: "Site Survey & Laser Excavation",
      duration: "Day 1",
      icon: Compass,
      description:
        "Our civil team marks the exact pool profile and excavates the pit with laser level precision, maintaining an exact 150mm perimeter clearance for backfill.",
    },
    {
      step: "02",
      title: "Sand Bed & Structural Compaction",
      duration: "Day 1–2",
      icon: Shovel,
      description:
        "A 100mm–150mm bed of compacted river sand or crushed stone aggregate is screeded and laser-leveled to create a firm, flat foundation for the shell.",
    },
    {
      step: "03",
      title: "Crane Rigging & Shell Lowering",
      duration: "Day 2–3",
      icon: Truck,
      description:
        "The factory-finished monolithic FRP pool shell is lifted by hydraulic crane and lowered directly into the excavated pit, verified with digital spirit levels.",
    },
    {
      step: "04",
      title: "Plumbing & Electrical Hookup",
      duration: "Day 3–4",
      icon: Wrench,
      description:
        "High-pressure Schedule 40 PVC pipelines are connected from skimmers, main drains, and LED lights to the pre-assembled filtration plant room.",
    },
    {
      step: "05",
      title: "Simultaneous Filling & Pea Gravel Backfill",
      duration: "Day 4–5",
      icon: Droplet,
      description:
        "Water is filled into the pool while pea gravel or dry cement-sand mix is backfilled evenly around the outer walls to equalize hydrostatic and soil pressure.",
    },
    {
      step: "06",
      title: "Coping Stone Decking & Commissioning",
      duration: "Day 6–7",
      icon: Sparkles,
      description:
        "Perimeter coping stone pavers or wooden decking are laid, water chemistry is balanced, filtration is commissioned, and the pool is handed over for swimming!",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
            <span>Fast-Track Execution</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            6-Stage Turnkey Installation in 3 to 7 Days
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2">
            Unlike concrete pools that take 3 to 4 months of messy on-site civil work, our pre-molded composite pools are installed, plumbed, and ready to swim in just a few days.
          </p>
        </div>

        {/* 6-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:border-[#FF6B00]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-accent text-2xl font-bold text-[#FF6B00]">
                      {step.step}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono-accent font-bold rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#0A1628] text-white flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="type-h3 text-base sm:text-lg font-bold text-[#0A1628] mb-2">
                    {step.title}
                  </h3>

                  <p className="type-body text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-emerald-700 font-mono-accent font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Assurance Checkpoint</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
