"use client";

import React from "react";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { Award, Building2, CheckCircle2, ShieldCheck } from "lucide-react";

export function CompanyIntroSection() {
  const stats = [
    {
      value: "25+",
      label: "Years of Experience",
      subtext: "Engineering composite innovation",
      icon: Award,
    },
    {
      value: "500+",
      label: "Projects Completed",
      subtext: "Supplied across India",
      icon: CheckCircle2,
    },
    {
      value: "45k+",
      label: "Sq. Ft. Plant",
      subtext: "Chakan manufacturing works",
      icon: Building2,
    },
    {
      value: "60-Ton",
      label: "Peak Load Tested",
      subtext: "BS EN 124 UTM verified",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span className="text-xs font-bold tracking-wider text-[#FF6B00] uppercase">
              Company Introduction
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1628] tracking-tight leading-tight">
            Engineering Composite Solutions for India&apos;s Most Demanding Sectors
          </h2>
        </div>

        {/* 2-Column Content + Stat Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Focused Introduction */}
          <div className="lg:col-span-7 space-y-4 text-gray-700 text-base sm:text-[16px] leading-relaxed">
            <p>
              <strong className="text-[#0A1628] font-bold">
                {CONTACT_CONFIG.companyName}
              </strong>{" "}
              ({CONTACT_CONFIG.registeredName}) is a trusted engineering and industrial
              solutions provider specializing in the manufacturing, supply, installation, and
              maintenance of high-performance FRP (Fiberglass Reinforced Plastic) products for
              industrial, infrastructure, government, defence, railway, municipal, and commercial sectors.
            </p>

            <p>
              We deliver durable, corrosion-resistant, and maintenance-free composite solutions
              engineered to perform in the most demanding environments — backed by a team that
              combines engineering expertise with advanced manufacturing capability to meet
              national and international quality standards.
            </p>
          </div>

          {/* Right: Minimalist 2x2 Stat Matrix */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFAFC] border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:border-[#FF6B00]/60 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] tracking-tight">
                      {stat.value}
                    </span>
                    <Icon className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                      {stat.label}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
