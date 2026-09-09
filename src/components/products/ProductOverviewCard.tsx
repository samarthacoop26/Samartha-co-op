"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers } from "lucide-react";
import { ProductCategoryDetail, getCategoryImageUrl } from "@/data/productsData";

interface ProductOverviewCardProps {
  category: ProductCategoryDetail;
}

export function ProductOverviewCard({ category }: ProductOverviewCardProps) {
  const imageUrl = getCategoryImageUrl(category.id);

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-[#FF6B00] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Category Image Header */}
      <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={category.categoryTitle}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Number Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <span className="type-eyebrow text-white text-[11px]">
            Category {category.categoryNumber}
          </span>
        </div>

        {/* Product Count Pill */}
        <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full type-spec text-[11px] text-gray-800 shadow-xs">
          <Layers className="w-3.5 h-3.5 text-[#FF6B00]" />
          <span>{category.products.length} Products</span>
        </div>

        {/* Category Title overlay at bottom of image */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="type-h3 text-white drop-shadow-md">
            {category.categoryTitle}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between bg-white">
        <div>
          {/* In-depth Short Description */}
          <p className="type-body text-gray-600 mb-4">
            {category.shortDescription}
          </p>

          {/* Included Products Preview Chips */}
          <div className="pt-3 border-t border-gray-100 mb-5">
            <span className="type-eyebrow text-gray-500 block mb-2 text-[11px]">
              Key Products Included:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.products.slice(0, 5).map((prod) => (
                <span
                  key={prod.id}
                  className="text-xs bg-gray-50 text-gray-700 px-2.5 py-1 rounded-lg font-medium border border-gray-200"
                >
                  {prod.name}
                </span>
              ))}
              {category.products.length > 5 && (
                <span className="text-xs bg-orange-50 text-[#FF6B00] px-2 py-1 rounded-lg font-semibold border border-orange-100">
                  +{category.products.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            href={`/products/${category.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn py-3 px-4 rounded-xl transition-colors duration-200 text-center"
          >
            <span>View All {category.products.length} Products</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
