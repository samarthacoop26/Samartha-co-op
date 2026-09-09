"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

interface FeatureItem {
  id: string;
  number: string;
  navTitle: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  keyPoints: string[];
  tags: string[];
}

const features: FeatureItem[] = [
  {
    id: "compliance",
    number: "01",
    navTitle: "CERTIFIED LOAD & SAFETY COMPLIANCE",
    icon: ShieldCheck,
    title: "Certified Load & Safety Compliance",
    badge: "Tested up to 60-Ton Load",
    description:
      "Rigorous destructive and non-destructive batch testing on in-house UTM machines in compliance with IS 6746, ASTM D638, and BS EN 124 standards.",
    keyPoints: [
      "Tested to 60-Ton (E600/F900) load rating with zero brittle fracture risk",
      "70% lighter than cast iron for ergonomic single-worker installation",
      "Anti-skid chequered traction surface meets international safety friction norms",
    ],
    tags: ["BS EN 124 / IS 1726", "60-Ton UTM Verified", "Zero Shatter"],
  },
  {
    id: "longevity",
    number: "02",
    navTitle: "ZERO MAINTENANCE & LIFETIME SAVINGS",
    icon: CheckCircle2,
    title: "Zero Maintenance & Lifetime Savings",
    badge: "30+ Years Design Life",
    description:
      "Completely immune to rust, rot, and electrochemical corrosion with zero scrap theft value—eliminating repainting costs and structural replacements.",
    keyPoints: [
      "100% immune to H₂S sewer gas, chemical effluents, and coastal marine salinity",
      "Zero scrap resale value permanently eliminates open manhole theft liabilities",
      "Integral UV-stabilized polymer matrix requires zero recoating or painting",
    ],
    tags: ["ASTM D543 / IS 6746", "0% Scrap Resale Value", "30+ Yrs Service Life"],
  },
  {
    id: "expertise",
    number: "03",
    navTitle: "25+ YEARS COMPOSITE EXPERTISE",
    icon: Award,
    title: "25+ Years Composite Expertise",
    badge: "500+ Completed Projects",
    description:
      "Decades of specialized engineering experience developing high-performance FRP solutions for defence, railways, civic bodies, and major industrial plants.",
    keyPoints: [
      "Approved vendor for Indian Railways, CPWD, smart city municipal corporations, and EPCs",
      "In-house CAD/CAM tooling and precision compression moulding for custom dimensions",
      "Traceable Material Test Certificates (MTC) supplied with every dispatched consignment",
    ],
    tags: ["MSME & GST Registered", "500+ Sites Supplied", "100% Batch Certified"],
  },
];

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeFeature = features[activeIndex];
  const Icon = activeFeature.icon;

  // Calculate smooth connecting line width based on active tab
  const activeLineWidth =
    activeIndex === 0 ? "33%" : activeIndex === 1 ? "66%" : "100%";

  return (
    <section
      id="why-us"
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-gray-200/80 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/60 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="type-eyebrow text-[#FF6B00]">
                WHY CHOOSE SAMARTH
              </span>
            </div>
            <h2 className="type-h2 text-[#0A1628]">
              Why Leading Enterprises Rely on Our FRP Solutions
            </h2>
            <p className="mt-4 type-subheading text-gray-600">
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

        {/* ------------------------------------------------------------- */}
        {/* INTERCONNECTED HORIZONTAL PIPELINE BAR WITH SMOOTH ANIMATED LINE */}
        {/* ------------------------------------------------------------- */}
        <div className="relative w-full mb-8 sm:mb-10">
          {/* Base Gray Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200/90 -translate-y-1/2 z-0" />

          {/* Smooth Animated Active Orange Connecting Line */}
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-[#FF6B00] -translate-y-1/2 z-0"
            initial={false}
            animate={{ width: activeLineWidth }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Connected Rectangular Blocks Grid */}
          <div
            role="tablist"
            aria-label="Why Choose Us Navigation"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative z-10"
          >
            {features.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={feature.id}
                  type="button"
                  role="tab"
                  id={`tab-${feature.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${feature.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full px-6 py-5 sm:py-6 text-center cursor-pointer select-none outline-none border rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-[0_8px_24px_-4px_rgba(255,107,0,0.35)]"
                      : "bg-[#F1F4F8] hover:bg-[#E8EDF3] border-gray-200/80 hover:border-gray-300 text-[#0A1628]"
                  }`}
                >
                  <span
                    className={`block font-bold text-xs sm:text-[13px] lg:text-[14px] uppercase tracking-wider leading-snug transition-colors ${
                      isActive ? "text-white" : "text-[#0A1628]"
                    }`}
                  >
                    {feature.navTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PREMIUM MINIMALIST SINGLE ACTIVE CARD WITH SMOOTH LINE ANIMATION */}
        {/* ------------------------------------------------------------- */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              id={`panel-${activeFeature.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeFeature.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#FAFAFC] hover:bg-white rounded-2xl p-7 sm:p-9 md:p-10 border border-gray-200/90 shadow-[0_8px_30px_-6px_rgba(10,22,40,0.05)] transition-colors duration-300"
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6B00]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="type-spec text-gray-600 bg-gray-100/90 px-3 py-1.5 rounded-lg border border-gray-200/60">
                    {activeFeature.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="type-h3 text-[#0A1628] mb-3">
                  {activeFeature.title}
                </h3>

                {/* Description */}
                <p className="type-body text-gray-600">
                  {activeFeature.description}
                </p>

                {/* Concise Key Highlights List */}
                <div className="mt-6 pt-5 border-t border-gray-200/70">
                  <ul className="space-y-2.5">
                    {activeFeature.keyPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700"
                      >
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span className="leading-snug type-body">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Minimalist Tags Strip */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
                  {activeFeature.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="type-spec bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Smooth Animated Bottom Accent Line (Slow & Luxurious) */}
              <div className="w-full h-1 bg-gray-100 rounded-full mt-8 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full h-full bg-[#FF6B00] origin-left"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
