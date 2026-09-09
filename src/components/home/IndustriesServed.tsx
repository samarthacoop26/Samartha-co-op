"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  Shield,
  TrainFront,
  Factory,
  Building2,
  type LucideIcon,
} from "lucide-react";

interface IndustryItem {
  id: string;
  icon: LucideIcon;
  label: string;
  subtext: string;
}

const industries: IndustryItem[] = [
  {
    id: "govt-municipal",
    icon: Landmark,
    label: "Government & Municipal",
    subtext: "Manhole covers, trench gratings & drainage systems",
  },
  {
    id: "defence",
    icon: Shield,
    label: "Defence",
    subtext: "Radar housings, specialized enclosures & structural profiles",
  },
  {
    id: "railway",
    icon: TrainFront,
    label: "Railway",
    subtext: "Coach doors, cable trays & platform gratings",
  },
  {
    id: "industrial",
    icon: Factory,
    label: "Industrial",
    subtext: "Chemical tanks, walkway platforms & anti-corrosive piping",
  },
  {
    id: "commercial",
    icon: Building2,
    label: "Commercial",
    subtext: "Architectural facades, louvers & structural enclosures",
  },
];

export function IndustriesServed() {
  return (
    <section className="relative w-full bg-[#f4f6f9] border-y border-gray-200/90 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Label */}
        <div className="flex items-center justify-between gap-4 mb-3.5 pb-2 border-b border-gray-200/60">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
            <span className="type-eyebrow text-gray-500">
              Industries Served
            </span>
          </div>
          <span className="type-footer text-gray-400 hidden sm:inline-block">
            B2B &amp; Public Infrastructure Engineering Solutions
          </span>
        </div>

        {/* 5-Item Segmented Strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-white/80 backdrop-blur-sm border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 rounded-2xl overflow-hidden shadow-xs"
        >
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isLastOnMobileOdd =
              index === industries.length - 1 ? "sm:col-span-2 lg:col-span-1" : "";

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-center px-4 py-5 sm:py-6 transition-all duration-300 cursor-default bg-transparent hover:bg-white min-h-[92px] ${isLastOnMobileOdd}`}
              >
                {/* Sharp Top Indicator on Hover (Orange Structural Accent) */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent group-hover:bg-[#FF6B00] transition-colors duration-200" />

                {/* Primary Content: Icon + Label */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100/90 group-hover:bg-[#0A1628] flex items-center justify-center text-gray-700 group-hover:text-[#FF6B00] transition-all duration-300 shrink-0 border border-gray-200/70 group-hover:border-[#0A1628] shadow-2xs group-hover:scale-105">
                    <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[13px] font-bold text-[#0A1628] uppercase tracking-wide leading-tight group-hover:text-[#FF6B00] transition-colors">
                      {item.label}
                    </span>
                    <span className="type-footer text-[11px] text-gray-500 font-normal leading-tight mt-1 sm:hidden">
                      {item.subtext}
                    </span>
                  </div>
                </div>

                {/* Desktop Subtext Reveal on Hover with ample height so Defence and Industrial are completely visible */}
                <div className="hidden sm:block overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100 group-hover:mt-2.5">
                  <p className="type-footer text-[11.5px] text-gray-500 leading-relaxed pl-[3.35rem]">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
