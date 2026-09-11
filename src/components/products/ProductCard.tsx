"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory } from "lucide-react";
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
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-[#FF6B00] shadow-xs hover:shadow-lg transition-all duration-300 p-5 sm:p-6 justify-between overflow-hidden">
      <div>
        {/* Product Image Section */}
        {product.image || (product.images && product.images.length > 0) ? (
          <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-4 bg-gray-100 border border-gray-100">
            <Image
              src={product.image || product.images![0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-slate-900/5 flex items-center justify-center border border-gray-100">
            <Factory className="w-10 h-10 text-gray-300" />
          </div>
        )}

        {/* Top Meta Line */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 type-eyebrow text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            {categoryNumber ? `Category ${categoryNumber}` : "FRP Product"}
          </span>
          <span className="type-spec text-[11px] font-medium text-gray-600 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            IS / ASTM Norms
          </span>
        </div>

        {/* Product Title */}
        <h3 className="type-h3 text-[#0A1628] group-hover:text-[#FF6B00] transition-colors duration-150 mb-3">
          {product.name}
        </h3>

        {/* In-depth Product Description */}
        <p className="type-body text-gray-600 mb-5">
          {product.shortDescription}
        </p>

        {/* Key Features / Specifications */}
        <div className="mb-6">
          <span className="type-eyebrow text-gray-500 block mb-2.5 text-[11px]">
            Key Specifications &amp; Features:
          </span>
          <ul className="space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="type-spec leading-snug">{feature}</span>
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
          className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn py-3 px-4 rounded-xl transition-colors duration-200 cursor-pointer group/btn shadow-xs"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
        </button>
      </div>
    </div>
  );
}
