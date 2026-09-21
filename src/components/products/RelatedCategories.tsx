import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCT_CATALOG, getCategoryImageUrl } from "@/data/productsData";

interface RelatedCategoriesProps {
  currentCategorySlug: string;
}

const RELATED_CATEGORIES_MAP: Record<string, string[]> = {
  "industrial-projects": [
    "tanks-piping-chemical-storage",
    "gratings-walkways-platforms",
    "manhole-drain-cable-covers",
  ],
  "manhole-drain-cable-covers": [
    "gratings-walkways-platforms",
    "civic-furniture-public-infra",
    "cable-management-systems",
  ],
  "gratings-walkways-platforms": [
    "manhole-drain-cable-covers",
    "handrails-ladders-safety",
    "industrial-projects",
  ],
  "tanks-piping-chemical-storage": [
    "industrial-projects",
    "gratings-walkways-platforms",
    "cable-management-systems",
  ],
  "doors-windows-panels": [
    "civic-furniture-public-infra",
    "electrical-enclosures-control-boxes",
    "defence-equipment-protective-gear",
  ],
  "electrical-enclosures-control-boxes": [
    "cable-management-systems",
    "doors-windows-panels",
    "industrial-projects",
  ],
  "handrails-ladders-safety": [
    "gratings-walkways-platforms",
    "industrial-projects",
    "civic-furniture-public-infra",
  ],
  "cable-management-systems": [
    "electrical-enclosures-control-boxes",
    "manhole-drain-cable-covers",
    "tanks-piping-chemical-storage",
  ],
  "civic-furniture-public-infra": [
    "manhole-drain-cable-covers",
    "doors-windows-panels",
    "signage",
  ],
  "signage": [
    "civic-furniture-public-infra",
    "handrails-ladders-safety",
    "doors-windows-panels",
  ],
  "defence-equipment-protective-gear": [
    "doors-windows-panels",
    "electrical-enclosures-control-boxes",
    "frp-boats",
  ],
};

export function RelatedCategories({ currentCategorySlug }: RelatedCategoriesProps) {
  const relatedSlugs = RELATED_CATEGORIES_MAP[currentCategorySlug] || [
    "gratings-walkways-platforms",
    "manhole-drain-cable-covers",
    "tanks-piping-chemical-storage",
  ];

  const relatedCategories = relatedSlugs
    .map((slug) => {
      if (slug === "frp-boats") {
        return {
          id: "frp-boats",
          slug: "frp-boats",
          categoryTitle: "FRP Boats",
          shortDescription:
            "Unsinkable commercial flood rescue boats, passenger ferries, and patrolling vessels.",
          customHref: "/frp-boats",
          categoryNumber: "12",
        };
      }
      return PRODUCT_CATALOG.find(
        (c) => c.slug === slug || c.id === slug || c.aliases.includes(slug)
      );
    })
    .filter(Boolean);

  if (relatedCategories.length === 0) return null;

  return (
    <section className="mt-12 pt-10 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-orange-50 border border-orange-200 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            <span className="type-eyebrow text-[#FF6B00] text-[11px]">
              ENGINEERING CROSS-REFERENCE
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0A1628] tracking-tight">
            Related Product Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Commonly procured alongside this category for industrial, municipal, and infrastructure projects.
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1628] hover:text-[#FF6B00] transition-colors shrink-0 group"
        >
          <span>All 13 Divisions</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {relatedCategories.map((cat) => {
          if (!cat) return null;
          const href = cat.customHref || `/products/${cat.slug}`;
          const imageUrl = getCategoryImageUrl(cat.id);

          return (
            <Link
              key={cat.id}
              href={href}
              className="group flex flex-col bg-white rounded-xl border border-gray-200 hover:border-[#FF6B00] shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`${cat.categoryTitle} — Samarth Corporation FRP manufacturing`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20">
                  Cat {cat.categoryNumber}
                </span>
                <span className="absolute bottom-2.5 left-3 right-3 text-white text-sm font-bold truncate drop-shadow-sm group-hover:text-orange-200 transition-colors">
                  {cat.categoryTitle}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                  {cat.shortDescription}
                </p>
                <div className="flex items-center justify-between text-xs font-semibold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors pt-2 border-t border-gray-100">
                  <span>Explore Category</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
