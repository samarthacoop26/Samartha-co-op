import React from "react";
import type { Metadata } from "next";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Statutory Certifications & MSME Reg | Samarth Corporation",
  description:
    "Verify official credentials of Samarth Corporation: MSME UDYAM-MH-33-0265642, GSTIN 27AEVFS9451A1ZK, and verified industrial client appreciation letters.",
  alternates: {
    canonical: `${SITE_URL}/certificates`,
  },
  openGraph: {
    title: "Statutory Certifications & MSME Reg | Samarth Corporation",
    description:
      "Verify official credentials of Samarth Corporation: MSME UDYAM-MH-33-0265642, GSTIN 27AEVFS9451A1ZK, and verified industrial client appreciation letters.",
    url: `${SITE_URL}/certificates`,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
    images: [
      {
        url: "/images/about/plant-facility.jpg",
        width: 1200,
        height: 630,
        alt: "Samarth Corporation Official Certifications and Accreditations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Statutory Certifications & MSME Reg | Samarth Corporation",
    description:
      "Verify official credentials of Samarth Corporation: MSME UDYAM-MH-33-0265642, GSTIN 27AEVFS9451A1ZK, and verified industrial client appreciation letters.",
    images: ["/images/about/plant-facility.jpg"],
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Certificates & Accreditations", path: "/certificates" },
  ];

  return (
    <>
      <JsonLd id="certificates-breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbs)} />
      {children}
    </>
  );
}
