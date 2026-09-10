"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryNavStripProps {
  currentCategorySlug?: string;
  className?: string;
}

interface NavItem {
  id: string;
  name: string;
  href: string;
}

// 2-Row Balanced Structure
const ROW_1_CATEGORIES: NavItem[] = [
  {
    id: "all",
    name: "All Categories",
    href: "/products",
  },
  {
    id: "industrial-projects",
    name: "Industrial Projects",
    href: "/products/industrial-projects",
  },
  {
    id: "manhole-drain-cable-covers",
    name: "Manhole & Drain Covers",
    href: "/products/manhole-drain-cable-covers",
  },
  {
    id: "gratings-walkways-platforms",
    name: "Gratings & Walkways",
    href: "/products/gratings-walkways-platforms",
  },
  {
    id: "tanks-piping-chemical-storage",
    name: "Tanks & Chemical Piping",
    href: "/products/tanks-piping-chemical-storage",
  },
  {
    id: "doors-windows-panels",
    name: "Doors, Windows & Panels",
    href: "/products/doors-windows-panels",
  },
];

const ROW_2_CATEGORIES: NavItem[] = [
  {
    id: "electrical-enclosures-control-boxes",
    name: "Electrical Enclosures",
    href: "/products/electrical-enclosures-control-boxes",
  },
  {
    id: "handrails-ladders-safety",
    name: "Handrails & Safety Ladders",
    href: "/products/handrails-ladders-safety",
  },
  {
    id: "cable-management-systems",
    name: "Cable Management Trays",
    href: "/products/cable-management-systems",
  },
  {
    id: "civic-furniture-public-infra",
    name: "Civic Infrastructure",
    href: "/products/civic-furniture-public-infra",
  },
  {
    id: "signage",
    name: "Industrial Signage",
    href: "/products/signage",
  },
  {
    id: "defence-equipment-protective-gear",
    name: "Defence Equipment",
    href: "/products/defence-equipment-protective-gear",
  },
];

export function CategoryNavStrip({ currentCategorySlug, className = "" }: CategoryNavStripProps) {
  const isAllActive = !currentCategorySlug || currentCategorySlug === "all";

  const renderPill = (item: NavItem) => {
    const isActive = item.id === "all" ? isAllActive : item.id === currentCategorySlug;

    return (
      <Link
        key={item.id}
        href={item.href}
        className={`relative inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none group border ${
          isActive
            ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/30 ring-2 ring-[#FF6B00]/20 scale-[1.02]"
            : "bg-[#F1F4F8] border-transparent text-[#0A1628] hover:bg-orange-50 hover:text-[#FF6B00] hover:border-orange-200 hover:shadow-xs active:scale-95"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="tracking-tight">{item.name}</span>
      </Link>
    );
  };

  return (
    <nav
      aria-label="Product Category Navigation"
      className={`w-full bg-white border-b border-gray-100 py-6 sm:py-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══ 2-ROW PYRAMID CONTAINER ═══ */}
        <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3">
          
          {/* Tier 1: Row 1 (Top 6 Pills) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
            {ROW_1_CATEGORIES.map(renderPill)}
          </div>

          {/* Tier 2: Row 2 (Bottom 5 Pills - Centered to form Pyramid) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
            {ROW_2_CATEGORIES.map(renderPill)}
          </div>

        </div>

      </div>
    </nav>
  );
}
