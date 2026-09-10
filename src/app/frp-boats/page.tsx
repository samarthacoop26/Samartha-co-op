import React from "react";
import type { Metadata } from "next";
import { BoatHero } from "@/components/boats/BoatHero";
import { BoatFleetCatalog } from "@/components/boats/BoatFleetCatalog";
import { BoatVsWoodAluTable } from "@/components/boats/BoatVsWoodAluTable";
import { BoatFAQ } from "@/components/boats/BoatFAQ";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: `FRP Boats | ${CONTACT_CONFIG.companyName}`,
  description:
    "Manufacturer of unsinkable FRP flood rescue boats, passenger ferries, speedboats, and recreational boats across India.",
  openGraph: {
    title: `FRP Boats | ${CONTACT_CONFIG.companyName}`,
    description:
      "Heavy-duty composite fiberglass boats engineered with positive buoyancy PU foam cores, durable gelcoat finish, and turnkey engine rigging.",
    type: "website",
    images: [
      {
        url: "/images/products/frp-boat-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FRP Boats - Samarth Corporation",
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

      {/* 3. FRP VS WOOD & ALUMINUM COMPARISON MATRIX */}
      <BoatVsWoodAluTable />

      {/* 4. NAVAL TECHNICAL FAQS */}
      <BoatFAQ />

      {/* 5. REUSED CERTIFICATIONS STRIP */}
      <CertificationsSection />

      {/* 6. REUSED GLOBAL FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
