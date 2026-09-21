import React from "react";
import type { Metadata } from "next";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seoData";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Samarth Corporation | Request FRP Quotation India",
  description:
    "Contact Samarth Corporation for FRP product quotes, technical sizing & BOQs. Facilities in Dombivli & MIDC Taloja serving pan-India industrial clients.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Samarth Corporation | Request FRP Quotation India",
    description:
      "Contact Samarth Corporation for FRP product quotes, technical sizing & BOQs. Facilities in Dombivli & MIDC Taloja serving pan-India industrial clients.",
    url: `${SITE_URL}/contact`,
    type: "website",
    locale: "en_IN",
    siteName: "Samarth Corporation",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Samarth Corporation - Dombivli & Taloja Offices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Samarth Corporation | Request FRP Quotation India",
    description:
      "Contact Samarth Corporation for FRP product quotes, technical sizing & BOQs. Facilities in Dombivli & MIDC Taloja serving pan-India industrial clients.",
    images: ["/images/contact-hero.jpg"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact Samarth Corporation | Request FRP Quotation India",
  description:
    "Contact Samarth Corporation for FRP product quotes, technical sizing & BOQs. Facilities in Dombivli & MIDC Taloja serving pan-India industrial clients.",
  mainEntity: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <JsonLd id="contact-page-schema" data={contactPageSchema} />
      <JsonLd id="contact-breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbs)} />
      {children}
    </>
  );
}
