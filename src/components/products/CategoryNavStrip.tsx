"use client";

import React from "react";
import Link from "next/link";
import { ALL_PRODUCT_CATEGORIES } from "@/data/productsNavData";
import { ChevronRight, Grid } from "lucide-react";

interface CategoryNavStripProps {
  currentCategorySlug: string;
}

export function CategoryNavStrip({ currentCategorySlug }: CategoryNavStripProps) {
  return (
    <nav aria-label="Product Categories Navigation" className="w-full bg-white border-b border-gray-200 py-2.5 sticky top-[68px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Label / All Categories Link */}
          <Link
            href="/products"
            className="shrink-0 hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#FF6B00] pr-3 border-r border-gray-200 transition-colors"
          >
            <Grid className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>All Categories</span>
          </Link>

          {/* Horizontal Scrollable Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 w-full">
            {ALL_PRODUCT_CATEGORIES.map((cat) => {
              const isActive = cat.id === currentCategorySlug;
              return (
                <Link
                  key={cat.id}
                  href={`/products/${cat.id}`}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all duration-150 border ${
                    isActive
                      ? "bg-[#0A1628] text-white border-[#0A1628] font-bold shadow-xs"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border-gray-200 font-medium"
                  }`}
                >
                  <span className={`text-[11px] font-bold ${isActive ? "text-[#FF8C33]" : "text-gray-400"}`}>
                    {cat.categoryNumber}.
                  </span>
                  <span className="whitespace-nowrap">{cat.categoryTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
