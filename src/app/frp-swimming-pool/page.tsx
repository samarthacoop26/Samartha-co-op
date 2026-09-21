import React from "react";
import type { Metadata } from "next";
import { PoolHero } from "@/components/swimming-pool/PoolHero";
import { CategoryNavStrip } from "@/components/products/CategoryNavStrip";
import { PoolModelsGrid } from "@/components/swimming-pool/PoolModelsGrid";
import { PoolVsConcreteTable } from "@/components/swimming-pool/PoolVsConcreteTable";
import { PoolFAQ } from "@/components/swimming-pool/PoolFAQ";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { SITE_URL, getBreadcrumbSchema, getFaqSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FRP Swimming Pool Manufacturer India | Prefab Monolithic",
  description:
    "Factory-built one-piece monolithic FRP swimming pools, rooftop plunge pools & lap pools with 15-year warranty and 3–7 day installation across India by Samarth.",
  alternates: {
    canonical: `${SITE_URL}/frp-swimming-pool`,
  },
  openGraph: {
    title: "FRP Swimming Pool Manufacturer India | Prefab Monolithic",
    description:
      "Factory-built one-piece monolithic FRP swimming pools, rooftop plunge pools & lap pools with 15-year warranty and 3–7 day installation across India by Samarth.",
    url: `${SITE_URL}/frp-swimming-pool`,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
    images: [
      {
        url: "/images/products/frp-swimming-pool-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FRP Swimming Pool Manufacturer India - Samarth Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRP Swimming Pool Manufacturer India | Prefab Monolithic",
    description:
      "Factory-built one-piece monolithic FRP swimming pools, rooftop plunge pools & lap pools with 15-year warranty and 3–7 day installation across India by Samarth.",
    images: ["/images/products/frp-swimming-pool-hero.jpg"],
  },
};

const poolFaqs = [
  {
    question: "Can an FRP pool be installed on a rooftop or terrace?",
    answer:
      "Yes. FRP pools are much lighter than concrete pools, making them safe and suitable for rooftops, terraces, and backyards with even weight distribution.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Usually just 3 to 7 days. Because the pool shell is pre-built and tested at our factory, it arrives ready to be placed, plumbed, and filled with water.",
  },
  {
    question: "Is maintenance easier than a traditional concrete pool?",
    answer:
      "Yes. The smooth, non-porous gelcoat surface prevents algae growth and needs far fewer chemicals, making daily upkeep simple and affordable.",
  },
  {
    question: "Will the pool crack if the ground or soil shifts?",
    answer:
      "No. FRP composite is strong yet flexible, so it easily withstands minor soil settlement and ground movement without cracking or leaking.",
  },
  {
    question: "What filtration and accessories are included?",
    answer:
      "Every setup includes a filtration pump, sand filter, skimmer box, return nozzles, and waterproof LED lighting.",
  },
  {
    question: "What is the lifespan and warranty?",
    answer:
      "Our FRP pools have a lifespan of 30+ years and come with a 15-year structural warranty against cracks and leaks.",
  },
];

const poolProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/frp-swimming-pool#product`,
  name: "FRP Swimming Pools & Prefab Monolithic Plunge Pools",
  description:
    "Factory-manufactured one-piece monolithic fiberglass swimming pools, rooftop plunge pools, and luxury whirlpool spas engineered with non-porous ISO-NPG gelcoats and 15-year structural warranty.",
  category: "Swimming Pools & Water Infrastructure",
  image: `${SITE_URL}/images/products/frp-swimming-pool-hero.jpg`,
  url: `${SITE_URL}/frp-swimming-pool`,
  brand: {
    "@type": "Brand",
    name: CONTACT_CONFIG.companyName,
  },
  manufacturer: {
    "@id": `${SITE_URL}/#organization`,
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    price: "0",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/frp-swimming-pool`,
    seller: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
};

export default function FRPSwimmingPoolPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Products Catalog", path: "/products" },
    { name: "FRP Swimming Pools", path: "/frp-swimming-pool" },
  ];

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      <JsonLd id="pool-product-schema" data={poolProductSchema} />
      <JsonLd id="pool-breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd id="pool-faq-schema" data={getFaqSchema(poolFaqs)} />

      {/* 1. HERO SECTION WITH VILLA VISUALS & METRICS */}
      <PoolHero />

      {/* 2. CATEGORY NAV STRIP */}
      <CategoryNavStrip currentCategorySlug="frp-swimming-pools" />

      {/* 3. POOL MODELS & SIZES INTERACTIVE CATALOG (6 CATEGORIES) */}
      <PoolModelsGrid />

      {/* 4. FRP VS CONCRETE COMPARISON MATRIX */}
      <PoolVsConcreteTable />

      {/* 5. TECHNICAL FAQS */}
      <PoolFAQ />

      {/* 6. REUSED CERTIFICATIONS STRIP */}
      <CertificationsSection />

      {/* 7. REUSED GLOBAL FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
