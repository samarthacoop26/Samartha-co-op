import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyIntroSection } from "@/components/about/CompanyIntroSection";
import { WhatWeManufactureSection } from "@/components/about/WhatWeManufactureSection";
import { MaterialsAndFullCycleSection } from "@/components/about/MaterialsAndFullCycleSection";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { MissionSection } from "@/components/about/MissionSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export const metadata: Metadata = {
  title: `About Us | ${CONTACT_CONFIG.companyName} | ${CONTACT_CONFIG.registeredName}`,
  description:
    "Learn about Samarth FRP Solutions (Samarth Composites Private Limited) — India's trusted manufacturer of industrial FRP gratings, manhole covers, tanks, and custom composite solutions for infrastructure, defence, and railways.",
  openGraph: {
    title: `About Us | ${CONTACT_CONFIG.companyName}`,
    description:
      "Engineering high-performance FRP & composite solutions for India's municipal, defence, railway, and heavy industrial sectors.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* ═══ 1. HERO HEADER & BREADCRUMB ═══ */}
      <AboutHero />

      {/* ═══ 2. SECTION 1: COMPANY INTRODUCTION & STATS ═══ */}
      <CompanyIntroSection />

      {/* ═══ 3. SECTION 2: OUR EXPERTISE - WHAT WE MANUFACTURE ═══ */}
      <WhatWeManufactureSection />

      {/* ═══ 4. SECTION 3 & 4: MATERIALS & MANUFACTURING + FULL-CYCLE SUPPORT ═══ */}
      <MaterialsAndFullCycleSection />

      {/* ═══ 5. SECTION 5: INDUSTRIES WE SERVE (UNIFIED FROM HOME) ═══ */}
      <IndustriesServed />

      {/* ═══ 6. SECTION 6: OUR MISSION ═══ */}
      <MissionSection />

      {/* ═══ 7. GLOBAL UNIFIED FINAL CTA ═══ */}
      <FinalCTA />
    </div>
  );
}
