import React from "react";
import type { Metadata } from "next";
import { PoolHero } from "@/components/swimming-pool/PoolHero";
import { PoolModelsGrid } from "@/components/swimming-pool/PoolModelsGrid";
import { PoolVsConcreteTable } from "@/components/swimming-pool/PoolVsConcreteTable";
import { PoolInstallationTimeline } from "@/components/swimming-pool/PoolInstallationTimeline";
import { PoolFAQ } from "@/components/swimming-pool/PoolFAQ";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: `FRP Swimming Pools, Rooftop & Plunge Pools | ${CONTACT_CONFIG.companyName}`,
  description:
    "Manufacturer of one-piece monolithic FRP composite swimming pools, rooftop plunge pools, lap pools, and container pools. 100% leak-proof, silky smooth ISO-NPG gelcoat, 3–7 days turnkey installation across India.",
  openGraph: {
    title: `FRP Swimming Pools & Plunge Pools | ${CONTACT_CONFIG.companyName}`,
    description:
      "Prefabricated composite swimming pools with 15-year shell warranty, pre-plumbed filtration plants, underwater LED lighting, and fast-track installation.",
    type: "website",
    images: [
      {
        url: "/images/products/frp-swimming-pool-hero.jpg",
        width: 1200,
        height: 630,
        alt: "FRP Swimming Pools - Samarth Corporation",
      },
    ],
  },
};

export default function FRPSwimmingPoolPage() {
  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* 1. HERO SECTION WITH VILLA VISUALS & METRICS */}
      <PoolHero />

      {/* 2. POOL MODELS & SIZES INTERACTIVE CATALOG (6 CATEGORIES) */}
      <PoolModelsGrid />

      {/* 3. FRP VS CONCRETE COMPARISON MATRIX */}
      <PoolVsConcreteTable />

      {/* 4. 6-STAGE TURNKEY INSTALLATION TIMELINE */}
      <PoolInstallationTimeline />

      {/* 5. TECHNICAL FAQS */}
      <PoolFAQ />

      {/* 6. REUSED CERTIFICATIONS STRIP */}
      <CertificationsSection />

      {/* 7. REUSED GLOBAL FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
