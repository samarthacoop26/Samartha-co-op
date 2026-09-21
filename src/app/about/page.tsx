import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyIntroSection } from "@/components/about/CompanyIntroSection";
import { WhatWeManufactureSection } from "@/components/about/WhatWeManufactureSection";
import { MaterialsAndFullCycleSection } from "@/components/about/MaterialsAndFullCycleSection";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { MissionSection } from "@/components/about/MissionSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Samarth Corporation | 25+ Yrs FRP Manufacturer India",
  description:
    "With 25+ years of expertise, Samarth Corporation is a govt-approved FRP manufacturer in Dombivli & Taloja serving chemical, pharma, defence & railway sectors.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Samarth Corporation | 25+ Yrs FRP Manufacturer India",
    description:
      "With 25+ years of expertise, Samarth Corporation is a govt-approved FRP manufacturer in Dombivli & Taloja serving chemical, pharma, defence & railway sectors.",
    url: `${SITE_URL}/about`,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
    images: [
      {
        url: "/images/about/plant-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Samarth Corporation - 25+ Years of FRP Manufacturing Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samarth Corporation | 25+ Yrs FRP Manufacturer India",
    description:
      "With 25+ years of expertise, Samarth Corporation is a govt-approved FRP manufacturer in Dombivli & Taloja serving chemical, pharma, defence & railway sectors.",
    images: ["/images/about/plant-facility.jpg"],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      <JsonLd id="about-breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbs)} />

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
