import React from "react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  PRODUCT_CATALOG,
  getCategoryBySlug,
} from "@/data/productsData";
import { ProductCategoryHero } from "@/components/products/ProductCategoryHero";
import { CategoryNavStrip } from "@/components/products/CategoryNavStrip";
import { ProductSectionItem } from "@/components/products/ProductSectionItem";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { Info } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all 10 categories + aliases
export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  PRODUCT_CATALOG.forEach((cat) => {
    slugs.push({ slug: cat.slug });
    cat.aliases.forEach((alias) => {
      slugs.push({ slug: alias });
    });
  });
  return slugs;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: `Product Category | ${CONTACT_CONFIG.companyName}`,
      description: "FRP & PP composite manufacturing solutions by Samarth Corporation.",
    };
  }

  return {
    title: `${category.categoryTitle} | FRP Products | ${CONTACT_CONFIG.companyName}`,
    description: `${category.heroDescription} Verified manufacturing and direct supply across India by Samarth Corporation.`,
    openGraph: {
      title: `${category.categoryTitle} | ${CONTACT_CONFIG.companyName}`,
      description: category.shortDescription,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  if (category.customHref) {
    redirect(category.customHref);
  }

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* ═══ 1. CATEGORY HEADER (H1, BREADCRUMB, SUMMARY) ═══ */}
      <ProductCategoryHero
        categoryNumber={category.categoryNumber}
        categoryTitle={category.categoryTitle}
        shortDescription={category.shortDescription}
        heroDescription={category.heroDescription}
        badge={category.badge}
        productCount={category.products.length}
        categorySlug={category.id}
      />

      {/* ═══ 2. QUICK CATEGORY SWITCHER STRIP ═══ */}
      <CategoryNavStrip currentCategorySlug={category.id} />

      {/* ═══ 3. IN-DEPTH PRODUCT SHOWCASE SECTIONS (ONE AFTER ANOTHER) ═══ */}
      <main className="py-8 sm:py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Subheader & Note */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block mb-1">
                Category {category.categoryNumber} &bull; Detailed Technical Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] tracking-tight">
                All Products in this Category ({category.products.length})
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-700 bg-white p-3 rounded-lg border border-gray-200 shadow-xs">
              <Info className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>
                All items custom fabricated to IS/BS/ASTM codes &amp; client CAD specs.
              </span>
            </div>
          </div>

          {/* Sequential In-Depth Product Sections (One after another with Left Image & Right Specs) */}
          <div className="space-y-4 sm:space-y-5">
            {category.products.map((product, index) => (
              <ProductSectionItem
                key={product.id}
                product={product}
                categoryNumber={category.categoryNumber}
                categoryName={category.categoryTitle}
                categorySlug={category.id}
                index={index}
                totalProducts={category.products.length}
              />
            ))}
          </div>

          {/* In-depth Technical Standards & Resins Guide for this category */}
          <div className="mt-10 bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-[#0A1628] mb-2">
              Technical Specifications &amp; Fabrication Scope
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              Every item in {category.categoryTitle} is custom engineered using precision compression molding, contact molding, or filament winding processes to ensure maximum structural integrity and corrosion resistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-gray-500 block uppercase mb-1">Resin Matrix</span>
                <p className="text-xs font-semibold text-gray-800">Isophthalic / Vinyl Ester / Bisphenol</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-gray-500 block uppercase mb-1">Standard Compliance</span>
                <p className="text-xs font-semibold text-gray-800">IS 12709, IS 14402, BS 4994, ASTM</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-gray-500 block uppercase mb-1">Quality Reports</span>
                <p className="text-xs font-semibold text-gray-800">Batch test certificates &amp; hydro test reports</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <span className="text-xs font-bold text-gray-500 block uppercase mb-1">Customization</span>
                <p className="text-xs font-semibold text-gray-800">Custom drawings, CAD, and sizes</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ═══ 4. CERTIFICATIONS STRIP (REUSED) ═══ */}
      <CertificationsSection />

      {/* ═══ 5. GLOBAL UNIFIED FINAL CTA (REUSED) ═══ */}
      <FinalCTA />
    </div>
  );
}
