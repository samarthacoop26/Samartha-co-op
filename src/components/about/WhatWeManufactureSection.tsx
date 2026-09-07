"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  Disc,
  Boxes,
  DoorClosed,
  Workflow,
  ShieldAlert,
  Wrench,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface ProductItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  caption: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "gratings",
    number: "01",
    title: "FRP Gratings, Walkways & Industrial Platforms",
    subtitle: "Moulded and pultruded anti-skid gratings for chemical, marine, and industrial platforms.",
    icon: Grid,
    image: "/images/about/gratings-walkway.jpg",
    caption: "Heavy-duty moulded & pultruded walkway gratings with permanent quartz-grit anti-skid surface.",
  },
  {
    id: "manhole-covers",
    number: "02",
    title: "FRP Manhole, Drain & Cable Trench Covers",
    subtitle: "Heavy-duty load-rated covers conforming to BS EN 124 (A15 to F900) with zero scrap theft value.",
    icon: Disc,
    image: "/images/about/manhole-covers.jpg",
    caption: "Proof-load tested manhole covers from 1.5T to 90T with zero scrap theft value.",
  },
  {
    id: "chemical-tanks",
    number: "03",
    title: "FRP Tanks, Pipelines & Chemical Storage Systems",
    subtitle: "Corrosion-proof chemical vessels, scrubbers, chimneys, and underground storage tanks.",
    icon: Boxes,
    image: "/images/about/chemical-tanks.jpg",
    caption: "Custom filament-wound & contact-moulded tanks for severe acids, alkalis, and effluent.",
  },
  {
    id: "doors-enclosures",
    number: "04",
    title: "FRP Doors, Windows & Electrical Enclosures",
    subtitle: "Weatherproof industrial doors and IP65/IP67 rated fire-retardant electrical junction boxes.",
    icon: DoorClosed,
    image: "/images/about/plant-facility.jpg",
    caption: "IP65/IP67 weatherproof electrical enclosures & chemical-resistant cleanroom doors.",
  },
  {
    id: "handrails-ladders",
    number: "05",
    title: "FRP Handrails, Ladders & Safety Structures",
    subtitle: "Electrically insulated safety cage ladders, staircase treads, and OSHA-compliant guardrails.",
    icon: Workflow,
    image: "/images/about/gratings-walkway.jpg",
    caption: "OSHA-compliant safety cage ladders, guardrails, and staircase modules.",
  },
  {
    id: "defence-railway",
    number: "06",
    title: "FRP Components for Defence & Railway Applications",
    subtitle: "Specialized radar enclosures, modular shelters, train coach doors, and cable conduit channels.",
    icon: ShieldAlert,
    image: "/images/about/defence-railway.jpg",
    caption: "Specialized composite fairings, radar-transparent structures, and railway coach interiors.",
  },
  {
    id: "custom-fabrication",
    number: "07",
    title: "Custom FRP Fabrication to Client Specification",
    subtitle: "Tailored composite manufacturing executed strictly from client CAD drawings and resin formulas.",
    icon: Wrench,
    image: "/images/about/utm-testing.jpg",
    caption: "Precision manufacturing executed strictly from client 2D/3D CAD drawings.",
  },
];

export function WhatWeManufactureSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProduct = PRODUCTS[activeIndex];

  return (
    <section className="relative w-full bg-[#FAFAFC] py-16 sm:py-20 lg:py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span className="text-xs font-bold tracking-wider text-[#FF6B00] uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1628] tracking-tight">
            What We Manufacture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            We specialize in the design, engineering, and manufacturing of high-performance composite products engineered to outlast traditional steel, concrete, and cast iron.
          </p>
        </div>

        {/* 2-Column Split: Left Sticky Visual + Right Minimal List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ═══ LEFT COLUMN: Sticky Visual Showcase ═══ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              {/* Main Image Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#0A1628] overflow-hidden group">
                <Image
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  <span>Item {activeProduct.number} of {String(PRODUCTS.length).padStart(2, "0")}</span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF8C33] block mb-1">
                    Featured Capability
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-gray-200 leading-snug line-clamp-2">
                    {activeProduct.caption}
                  </p>
                </div>
              </div>

              {/* Technical Highlights Bar */}
              <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-gray-100 flex flex-col gap-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A1628]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>In-House UTM Load & Batch Tested Quality</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A1628]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                  <span>Custom Tooling, Resins & CAD/CAM Specifications</span>
                </div>

                <div className="pt-2 border-t border-gray-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">
                    Need technical engineering data?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#0A1628] transition-colors"
                  >
                    <span>Request Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ RIGHT COLUMN: Minimalist List (Heading & Subheading Only) ═══ */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200/80">
            {PRODUCTS.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative py-4 sm:py-5 px-4 sm:px-5 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-xs border border-gray-200/90 ring-1 ring-[#FF6B00]/20"
                      : "hover:bg-white/80 border border-transparent"
                  }`}
                >
                  {/* Left Active Accent Indicator */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all duration-300 ${
                      isActive ? "bg-[#FF6B00]" : "bg-transparent group-hover:bg-gray-300"
                    }`}
                  />

                  <div className="flex items-start gap-4">
                    {/* Number & Icon */}
                    <div className="shrink-0 flex flex-col items-center gap-1 mt-0.5">
                      <span className="text-[11px] font-mono font-extrabold text-gray-400 group-hover:text-[#FF6B00] transition-colors">
                        {item.number}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#0A1628] text-white"
                            : "bg-gray-100 text-[#0A1628] group-hover:bg-[#0A1628] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Content: Heading & Subheading only */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive
                              ? "text-[#0A1628]"
                              : "text-gray-800 group-hover:text-[#0A1628]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <ArrowRight
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isActive
                              ? "text-[#FF6B00] translate-x-1"
                              : "text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5"
                          }`}
                        />
                      </div>

                      <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                        {item.subtitle}
                      </p>
                    </div>
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
