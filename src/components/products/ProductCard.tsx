"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { ProductItem } from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ProductCardProps {
  product: ProductItem;
  categoryNumber?: string;
}

export function ProductCard({ product, categoryNumber }: ProductCardProps) {
  const { openQuoteModal } = useQuoteModal();

  const handleEnquire = () => {
    openQuoteModal({
      productName: product.name,
      title: `RFQ: ${product.name}`,
      message: `I would like to request technical specifications, pricing, and manufacturing lead time for ${product.name} under ${product.categoryName}.`,
    });
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-gray-200 hover:border-[#FF6B00] shadow-xs hover:shadow-md transition-all duration-200 p-6 justify-between">
      <div>
        {/* Top Meta Line */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            {categoryNumber ? `Category ${categoryNumber}` : "FRP Product"}
          </span>
          <span className="text-[11px] font-medium text-gray-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            IS / ASTM Norms
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-xl font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors duration-150 leading-snug mb-3">
          {product.name}
        </h3>

        {/* In-depth Product Description */}
        <p className="text-sm text-gray-600 font-normal leading-relaxed mb-5">
          {product.shortDescription}
        </p>

        {/* Key Features / Specifications */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-gray-500 block mb-2.5">
            Key Specifications &amp; Features:
          </span>
          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={handleEnquire}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-lg transition-colors duration-200 cursor-pointer group/btn shadow-xs"
        >
          <span>Request Quote / RFQ</span>
          <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
}
