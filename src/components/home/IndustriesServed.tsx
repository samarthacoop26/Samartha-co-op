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
    <section className="relative w-full bg-[#f4f6f9] border-y border-gray-200/90 py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Label */}
        <div className="flex items-center justify-between gap-4 mb-3.5 pb-2 border-b border-gray-200/60">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#FF6B00] shrink-0" />
            <span className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">
              Industries Served
            </span>
          </div>
          <span className="text-[11px] font-medium text-gray-400 hidden sm:inline-block tracking-normal">
            B2B & Public Infrastructure Engineering Solutions
          </span>
        </div>

        {/* 5-Item Segmented Strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-white/70 backdrop-blur-sm border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 shadow-xs"
        >
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isLastOnMobileOdd =
              index === industries.length - 1 ? "sm:col-span-2 lg:col-span-1" : "";

            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-center px-4 py-4 sm:py-5 transition-all duration-200 cursor-default bg-transparent hover:bg-white ${isLastOnMobileOdd}`}
              >
                {/* Sharp Top Indicator on Hover (Orange Structural Accent) */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#FF6B00] transition-colors duration-200" />

                {/* Primary Content: Icon + Label */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-gray-100/90 group-hover:bg-[#0A1628] flex items-center justify-center text-gray-600 group-hover:text-[#FF6B00] transition-colors duration-200 shrink-0 border border-gray-200/70 group-hover:border-[#0A1628]">
                    <Icon className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-[12.5px] font-bold text-[#0A1628] uppercase tracking-wide leading-tight group-hover:text-[#0A1628] transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-gray-500 font-normal leading-tight mt-0.5 sm:hidden line-clamp-1">
                      {item.subtext}
                    </span>
                  </div>
                </div>

                {/* Desktop Subtext Reveal on Hover */}
                <div className="hidden sm:block overflow-hidden transition-all duration-200 max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2">
                  <p className="text-[11px] text-gray-500 leading-snug font-normal pl-11">
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
