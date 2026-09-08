"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Layers, ArrowRight, ShieldCheck, Factory, Ruler } from "lucide-react";
import { PRODUCT_CATALOG } from "@/data/productsData";
import { ProductOverviewCard } from "@/components/products/ProductOverviewCard";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function ProductsCatalogClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const { openQuoteModal } = useQuoteModal();

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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs">
          {/* Search Input */}
          <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by product name (e.g. gratings, tanks, covers, kiosks)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all"
            />
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>
              Showing {filteredCategories.length} of {PRODUCT_CATALOG.length} Divisions
            </span>
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
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200 p-8">
          <Layers className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-800">No matching products found</h3>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Try searching for another term like &quot;gratings&quot;, &quot;tanks&quot;, &quot;covers&quot;, or &quot;enclosures&quot;.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:underline"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {/* ═══ IN-DEPTH TECHNICAL RESIN & COMPOSITE STANDARDS GUIDE ═══ */}
      <div className="mt-16 bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mb-1">
            Manufacturing Quality Standards
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628]">
            Engineering Resins &amp; Compliance Specifications
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            All composite and thermoplastic products are fabricated according to strict Indian and International standards with full batch traceability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
            <h4 className="text-sm font-bold text-gray-900 mb-1">Resin Formulations</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Isophthalic polyester, vinyl ester (Derakane / Hetron equivalent), bisphenol, and epoxy resin matrices tailored to chemical exposure.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
            <h4 className="text-sm font-bold text-gray-900 mb-1">Standards Compliance</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Manufactured adhering to IS 12709, IS 14402, BS 4994, ASTM D3299, and ASTM D4097 engineering codes.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
            <h4 className="text-sm font-bold text-gray-900 mb-1">Quality Inspection &amp; Testing</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Hydrostatic pressure tests, Barcol hardness inspection, UTM tensile tests, and raw resin batch analysis certificates with every order.
            </p>
          </div>
        </div>
      </div>

      {/* ═══ CUSTOM CAD & FABRICATION CALLOUT ═══ */}
      <div className="mt-8 p-6 sm:p-8 bg-[#0A1628] rounded-xl text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1.5">
            <Factory className="w-4 h-4" />
            <span>Custom Engineering &bull; In-House Tooling</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Need Custom Sizing, Resins, or CAD Drawings?
          </h3>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            Our MIDC Taloja plant fabricates custom PP/FRP equipment, ducting, tanks, and structural shapes to client CAD drawings and project requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() =>
              openQuoteModal({
                title: "Custom CAD / Drawing RFQ",
                message: "I would like to submit custom drawings and dimensions for fabrication quote.",
              })
            }
            className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
          >
            <Ruler className="w-4 h-4" />
            <span>Submit Custom CAD Specs</span>
          </button>
        </div>
      </div>
    </div>
  );
}
