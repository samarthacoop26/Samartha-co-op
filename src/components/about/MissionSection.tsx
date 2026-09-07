"use client";

import React from "react";
import { Compass, Eye } from "lucide-react";

export function MissionSection() {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="relative bg-[#0A1628] rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full mb-5 backdrop-blur-sm">
              <Eye className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="text-[11px] font-bold tracking-widest text-white uppercase">
                Our Vision
              </span>
            </div>

            <blockquote className="text-lg sm:text-xl lg:text-2xl font-semibold text-white leading-relaxed tracking-tight">
              &ldquo;To redefine industrial excellence by becoming the preferred choice for PP & FRP Engineering Solutions, driven by innovation, uncompromising quality, advanced engineering, and a commitment to delivering world-class products, maintenance services, and turnkey projects.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
