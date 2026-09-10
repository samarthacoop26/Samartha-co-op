import React from "react";
import type { Metadata } from "next";
import { BoatHero } from "@/components/boats/BoatHero";
import { BoatFleetCatalog } from "@/components/boats/BoatFleetCatalog";
import { BoatHullEngineering } from "@/components/boats/BoatHullEngineering";
import { BoatVsWoodAluTable } from "@/components/boats/BoatVsWoodAluTable";
import { BoatEnginesRigging } from "@/components/boats/BoatEnginesRigging";
import { BoatApplicationsGrid } from "@/components/boats/BoatApplicationsGrid";
import { BoatEstimatorWidget } from "@/components/boats/BoatEstimatorWidget";
import { BoatFAQ } from "@/components/boats/BoatFAQ";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: `FRP Boats, Patrol Craft & Rescue Vessels | ${CONTACT_CONFIG.companyName}`,
  description:
    "Manufacturer of unsinkable FRP flood rescue boats, coastal patrol craft, tourist passenger ferries, speedboats, and commercial fishing vessels across India. Built to IRS & ISO 12217 marine standards.",
  openGraph: {
    title: `FRP Marine Craft & Boats Manufacturing | ${CONTACT_CONFIG.companyName}`,
    description:
      "Heavy-duty composite marine vessels engineered with positive buoyancy PU foam cores, marine-grade ISO-NPG resins, and turnkey engine rigging.",
    type: "website",
    images: [
      {
        url: "/images/products/frp-boat-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FRP Boats & Patrol Vessels - Samarth Corporation",
      },
    ],
  },
};

export default function FRPBoatsPage() {
  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* 1. HERO SECTION WITH HIGH-IMPACT VISUALS & METRICS */}
      <BoatHero />

      {/* 2. FLEET SHOWCASE & INTERACTIVE CATALOG (6 CATEGORIES) */}
      <BoatFleetCatalog />

      {/* 3. 7-LAYER NAVAL COMPOSITE HULL ENGINEERING BREAKDOWN */}
      <BoatHullEngineering />

      {/* 4. FRP VS WOOD & ALUMINUM COMPARISON MATRIX */}
      <BoatVsWoodAluTable />

      {/* 5. ENGINES, HYDRAULIC STEERING & MARINE RIGGING */}
      <BoatEnginesRigging />

      {/* 6. OPERATIONAL APPLICATIONS & INDUSTRY SECTORS */}
      <BoatApplicationsGrid />

      {/* 7. INTERACTIVE VESSEL ESTIMATOR / QUOTE CONFIGURATOR */}
      <BoatEstimatorWidget />

      {/* 8. NAVAL TECHNICAL FAQS */}
      <BoatFAQ />

      {/* 9. REUSED CERTIFICATIONS STRIP */}
      <CertificationsSection />

      {/* 10. REUSED GLOBAL FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
