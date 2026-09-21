import React from "react";
import type { Metadata } from "next";
import { BoatHero } from "@/components/boats/BoatHero";
import { CategoryNavStrip } from "@/components/products/CategoryNavStrip";
import { BoatFleetCatalog } from "@/components/boats/BoatFleetCatalog";
import { BoatVsWoodAluTable } from "@/components/boats/BoatVsWoodAluTable";
import { BoatFAQ } from "@/components/boats/BoatFAQ";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { SITE_URL, getBreadcrumbSchema, getFaqSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FRP Boat Manufacturer India | Rescue, Patrol & Passenger",
  description:
    "Samarth Corporation manufactures unsinkable FRP flood rescue boats, coastal patrol vessels, and passenger ferries with closed-cell PU foam flotation in India.",
  alternates: {
    canonical: `${SITE_URL}/frp-boats`,
  },
  openGraph: {
    title: "FRP Boat Manufacturer India | Rescue, Patrol & Passenger",
    description:
      "Samarth Corporation manufactures unsinkable FRP flood rescue boats, coastal patrol vessels, and passenger ferries with closed-cell PU foam flotation in India.",
    url: `${SITE_URL}/frp-boats`,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
    images: [
      {
        url: "/images/products/frp-boat-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FRP Boat Manufacturer India - Samarth Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FRP Boat Manufacturer India | Rescue, Patrol & Passenger",
    description:
      "Samarth Corporation manufactures unsinkable FRP flood rescue boats, coastal patrol vessels, and passenger ferries with closed-cell PU foam flotation in India.",
    images: ["/images/products/frp-boat-hero.jpg"],
  },
};

const boatFaqs = [
  {
    question: "Are these FRP boats unsinkable?",
    answer:
      "Yes. The hulls are built with high-density polyurethane foam flotation chambers, so the boat stays safely afloat and upright even if flooded with water.",
  },
  {
    question: "Can you supply the boat with outboard engines?",
    answer:
      "Yes. We deliver turnkey boats fitted with your choice of outboard motors (Yamaha, Mercury, Suzuki, etc.) along with steering controls.",
  },
  {
    question: "Can we customize the color, seating, and canopy?",
    answer:
      "Yes. We offer custom hull colors, agency logos, flexible seating arrangements, and hardtop or folding canopy options.",
  },
  {
    question: "How are the boats transported and delivered across India?",
    answer:
      "We deliver boats safely on dedicated road trailers or flatbed trucks directly to your port, lake, dam, or facility anywhere across India.",
  },
  {
    question: "Do you support government tenders and certifications?",
    answer:
      "Yes. Our boats comply with IRS and ISO marine standards, and we provide third-party inspections and sea-trial certificates for tenders.",
  },
  {
    question: "What is the lifespan and warranty?",
    answer:
      "FRP boats do not rust, rot, or corrode and last 30+ years. We provide a 5-year structural hull warranty along with standard engine warranties.",
  },
];

const boatProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${SITE_URL}/frp-boats#product`,
  name: "FRP Boats & Commercial Marine Vessels",
  description:
    "High-strength, unsinkable fiberglass boats built for rescue operations, patrolling, passenger transport, and recreation with positive buoyancy PU foam cores.",
  category: "Commercial Boats & Marine Craft",
  image: `${SITE_URL}/images/products/frp-boat-hero.jpg`,
  url: `${SITE_URL}/frp-boats`,
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
    url: `${SITE_URL}/frp-boats`,
    seller: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
};

export default function FRPBoatsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Products Catalog", path: "/products" },
    { name: "FRP Boats", path: "/frp-boats" },
  ];

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      <JsonLd id="boat-product-schema" data={boatProductSchema} />
      <JsonLd id="boat-breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbs)} />
      <JsonLd id="boat-faq-schema" data={getFaqSchema(boatFaqs)} />

      {/* 1. HERO SECTION WITH HIGH-IMPACT VISUALS & METRICS */}
      <BoatHero />

      {/* 2. CATEGORY NAV STRIP */}
      <CategoryNavStrip currentCategorySlug="frp-boats" />

      {/* 3. FLEET SHOWCASE & INTERACTIVE CATALOG (6 CATEGORIES) */}
      <BoatFleetCatalog />

      {/* 4. FRP VS WOOD & ALUMINUM COMPARISON MATRIX */}
      <BoatVsWoodAluTable />

      {/* 5. NAVAL TECHNICAL FAQS */}
      <BoatFAQ />

      {/* 6. REUSED CERTIFICATIONS STRIP */}
      <CertificationsSection />

      {/* 7. REUSED GLOBAL FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
