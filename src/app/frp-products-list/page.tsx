import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  PRODUCT_CATALOG,
  TOTAL_CATEGORIES_COUNT,
  TOTAL_PRODUCTS_COUNT,
} from "@/data/productsData";
import {
  CompleteProductsListClient,
  CompleteCategoryGroup,
} from "@/components/products/CompleteProductsListClient";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

// 150-160 characters description computed dynamically
const pageDescription = `Browse the complete list of ${TOTAL_PRODUCTS_COUNT} FRP products by Samarth Corporation across ${TOTAL_CATEGORIES_COUNT} divisions: tanks, gratings, covers, doors, defence, boats & pools.`;

export const metadata: Metadata = {
  title: "Complete FRP Products List India | Samarth Corporation",
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/frp-products-list`,
  },
  openGraph: {
    title: "Complete FRP Products List India | Samarth Corporation",
    description: pageDescription,
    url: `${SITE_URL}/frp-products-list`,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete FRP Products List India | Samarth Corporation",
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SHORT_TITLE_MAP: Record<string, string> = {
  "industrial-projects": "Industrial Plants",
  "manhole-drain-cable-covers": "Manhole & Drain Covers",
  "gratings-walkways-platforms": "Gratings & Walkways",
  "tanks-piping-chemical-storage": "Tanks & Chemical Piping",
  "doors-windows-panels": "Doors & Panels",
  "electrical-enclosures-control-boxes": "Electrical Enclosures",
  "handrails-ladders-safety": "Handrails & Ladders",
  "cable-management-systems": "Cable Trays",
  "civic-furniture-public-infra": "Civic Infrastructure",
  "signage": "Signage",
  "defence-equipment-protective-gear": "Defence Equipment",
  "frp-boats": "FRP Boats",
  "frp-swimming-pools": "FRP Swimming Pools",
};

export default function CompleteProductListPage() {
  let runningSerial = 1;

  // Build clean, structured category groups with running serial numbers
  const formattedCategories: CompleteCategoryGroup[] = PRODUCT_CATALOG.map((cat) => {
    const categoryHref = cat.customHref || `/products/${cat.slug}`;

    const products = cat.products.map((p) => {
      const serialStr = String(runningSerial++).padStart(3, "0");
      // Category 01-11 deep-link to product anchor on category page; boats/pools link to their pages
      const productHref = cat.customHref ? cat.customHref : `${categoryHref}#${p.slug}`;

      return {
        name: p.name,
        slug: p.slug,
        href: productHref,
        serial: serialStr,
      };
    });

    return {
      id: cat.id,
      slug: cat.slug,
      categoryNumber: cat.categoryNumber,
      categoryTitle: cat.categoryTitle,
      shortTitle: SHORT_TITLE_MAP[cat.id] || cat.categoryTitle,
      href: categoryHref,
      products,
    };
  });

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Product List", path: "/frp-products-list" },
  ];

  // CollectionPage Schema with ItemList of the 13 categories (name + URL)
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/frp-products-list#collection`,
    url: `${SITE_URL}/frp-products-list`,
    name: "Complete FRP Product List | Samarth Corporation",
    description: pageDescription,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Samarth Corporation FRP Product Divisions",
      numberOfItems: formattedCategories.length,
      itemListElement: formattedCategories.map((cat, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: cat.categoryTitle,
        url: `${SITE_URL}${cat.href}`,
      })),
    },
  };

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      <JsonLd id="product-list-breadcrumb" data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd id="product-list-collection" data={collectionPageSchema} />

      {/* ═══ 1. COMPACT PAGE HEADER HERO (print:hidden) ═══ */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden pt-32 pb-14 sm:pt-36 sm:pb-16 border-b border-gray-800 print:hidden">
        {/* Real Industrial Header Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />
        {/* Clean Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628]/75" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="type-eyebrow text-white text-[11px]">
                MANUFACTURING DIRECTORY &bull; {TOTAL_CATEGORIES_COUNT} DIVISIONS
              </span>
            </div>

            {/* Exactly One H1 on the Page */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              Complete FRP Product List
            </h1>

            {/* Supporting Line with Dynamic Counts */}
            <p className="mt-3.5 text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              Every product Samarth Corporation manufactures and supplies:{" "}
              <strong className="text-white font-bold">{TOTAL_PRODUCTS_COUNT} products</strong> across{" "}
              <strong className="text-[#FF6B00] font-bold">{TOTAL_CATEGORIES_COUNT} divisions</strong>.
            </p>
          </div>
        </div>

        {/* Slanted Breadcrumb Bar Pinned to Bottom-Right */}
        <div className="absolute bottom-0 right-0 z-20">
          <div
            className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2 px-6 sm:px-10 flex items-center gap-2 shadow-md rounded-tl-lg"
            style={{
              clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <span className="text-[#0A1628]">Product List</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. COMPLETE PRODUCT DIRECTORY CLIENT SHELL ═══ */}
      <CompleteProductsListClient
        categories={formattedCategories}
        totalCategories={TOTAL_CATEGORIES_COUNT}
        totalProducts={TOTAL_PRODUCTS_COUNT}
      />

      {/* ═══ 3. GLOBAL FINAL CTA (print:hidden) ═══ */}
      <div className="print:hidden">
        <FinalCTA />
      </div>
    </div>
  );
}
