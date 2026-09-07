"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  badge: string;
}

const features: FeatureItem[] = [
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Certified Load & Safety Compliance",
    description:
      "Rigorous destructive and non-destructive batch testing on in-house UTM machines in compliance with IS 6746, ASTM D638, and BS EN 124 standards.",
    badge: "Tested up to 60-Ton Load",
  },
  {
    id: "longevity",
    icon: CheckCircle2,
    title: "Zero Maintenance & Lifetime Savings",
    description:
      "Completely immune to rust, rot, and electrochemical corrosion with zero scrap theft value—eliminating repainting costs and structural replacements.",
    badge: "30+ Years Design Life",
  },
  {
    id: "expertise",
    icon: Award,
    title: "25+ Years Composite Expertise",
    description:
      "Decades of specialized engineering experience developing high-performance FRP solutions for defence, railways, civic bodies, and major industrial plants.",
    badge: "500+ Completed Projects",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full bg-white py-20 md:py-24 lg:py-28 border-b border-gray-200/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/60 rounded-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="text-xs font-bold tracking-wider text-[#FF6B00] uppercase">
                WHY CHOOSE SAMARTH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A1628] tracking-tight leading-[1.2]">
              Why Leading Enterprises Rely on Our FRP Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
              From heavy civic infrastructure to corrosive industrial corridors, we manufacture composite products engineered to outperform and outlast conventional steel and concrete.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A1628] hover:text-[#FF6B00] transition-colors group"
            >
              <span>Learn More About Our Capabilities</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Core Value Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group flex flex-col justify-between bg-[#FAFAFC] hover:bg-white rounded p-7 sm:p-8 border border-gray-200/90 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(10,22,40,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-12 h-12 rounded bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100/80 px-2.5 py-1 rounded-sm">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] tracking-tight group-hover:text-[#FF6B00] transition-colors duration-300 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Bar on Hover */}
                <div className="w-full h-1 bg-gray-100 rounded-full mt-6 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full bg-[#FF6B00] transition-all duration-500 ease-out" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Capability Stats Banner */}
        <div className="mt-12 sm:mt-16 bg-[#0A1628] rounded p-8 sm:p-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y-0 divide-x-0 md:divide-x divide-white/10 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] tracking-tight">
                500+
              </span>
              <span className="text-sm text-gray-300 mt-1 font-medium">
                Industrial Projects
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                60-Ton
              </span>
              <span className="text-sm text-gray-300 mt-1 font-medium">
                Tested Load Capacity
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] tracking-tight">
                30+ Yrs
              </span>
              <span className="text-sm text-gray-300 mt-1 font-medium">
                Design Service Life
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                100%
              </span>
              <span className="text-sm text-gray-300 mt-1 font-medium">
                Batch Quality Tested
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
