"use client";

import React, { useState, useMemo } from "react";
import { Search, Layers, Download } from "lucide-react";
import { PRODUCT_CATALOG } from "@/data/productsData";
import { ProductOverviewCard } from "@/components/products/ProductOverviewCard";

export function ProductsCatalogClient() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories and products by search query
  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return PRODUCT_CATALOG;

    return PRODUCT_CATALOG.filter((cat) => {
      const matchTitle = cat.categoryTitle.toLowerCase().includes(q);
      const matchDesc = cat.shortDescription.toLowerCase().includes(q);
      const matchBadge = cat.badge.toLowerCase().includes(q);
      const matchProduct = cat.products.some(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
      return matchTitle || matchDesc || matchBadge || matchProduct;
    });
  }, [searchQuery]);

  return (
    <div>
      {/* ═══ SEARCH & FILTER BAR ═══ */}
      <div className="mb-10 sm:mb-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/90 shadow-xs">
          {/* Search Input */}
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by product name (e.g. gratings, tanks, covers, kiosks)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-between md:justify-end">
            {/* Quick Counter */}
            <div className="flex items-center gap-2 type-spec text-xs font-semibold text-gray-600 font-mono-accent">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>
                {filteredCategories.length} / {PRODUCT_CATALOG.length} Divisions
              </span>
            </div>

            {/* Direct Brochure Download CTA */}
            <a
              href="/samarth-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-50 border border-orange-200 hover:bg-[#FF6B00] text-[#FF6B00] hover:text-white text-xs font-bold transition-all group"
              title="Download full Samarth Corporation Technical Catalog Brochure (PDF)"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Catalog PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══ CATEGORIES GRID ═══ */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category) => (
            <ProductOverviewCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-xs">
          <Layers className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="type-h3 text-lg text-gray-800">No matching products found</h3>
          <p className="type-body text-sm text-gray-500 mt-1 mb-4">
            Try searching for another term like &quot;gratings&quot;, &quot;tanks&quot;, &quot;covers&quot;, or &quot;enclosures&quot;.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:underline cursor-pointer"
          >
            Clear Search Filter
          </button>
        </div>
      )}
    </div>
  );
}
