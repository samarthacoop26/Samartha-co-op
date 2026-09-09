import React from "react";
import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { AlertCircle, FileCheck, Layers, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Website & Product Disclaimer | ${CONTACT_CONFIG.companyName}`,
  description:
    `Official product, engineering, and website disclaimer for ${CONTACT_CONFIG.companyName} (${CONTACT_CONFIG.registeredName}).`,
};

export default function DisclaimerPage() {
  const sections: LegalSection[] = [
    {
      id: "general-information",
      number: "01",
      title: "General Informational Nature",
      content: (
        <>
          <p>
            The content, technical guides, product classifications, and load tables presented on this website are provided by <strong>{CONTACT_CONFIG.registeredName}</strong> (brand: <strong>{CONTACT_CONFIG.companyName}</strong>) solely for general informational and educational purposes.
          </p>
          <p>
            The information does not constitute formal structural design calculations, professional engineering advice, or site-specific construction directives. Project engineers, contractors, and procurement officers are strongly advised to perform site-specific evaluations or consult our senior technical staff before final material specification.
          </p>
        </>
      ),
    },
    {
      id: "product-specifications-images",
      number: "02",
      title: "Product Specifications & Visual Representations",
      content: (
        <>
          <p>
            All 3D models, component photographs, surface finishes (e.g., anti-skid chequered patterns, grit coatings), dimensions, and color pigments depicted across this website are representative illustrations.
          </p>
          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-700 space-y-1.5">
            <p><strong>Manufacturing Variations:</strong> Due to inherent composite manufacturing processes, compression molding tolerances, UV-protective resin pigmentation, and continuous product improvements, actual delivered units may exhibit slight variations in tone, surface texture, or weight.</p>
            <p>Exact structural dimensions, mechanical load capabilities, resin composition (orthophthalic, isophthalic, vinyl ester), and fabrication tolerances are strictly governed by the approved technical data sheet (TDS) and commercial offer provided for each specific order.</p>
          </div>
        </>
      ),
    },
    {
      id: "no-binding-offer",
      number: "03",
      title: "No Binding Offer or Commercial Contract",
      content: (
        <>
          <p>
            Nothing contained on this website constitutes a binding commercial offer for sale or a legally enforceable commitment to supply.
          </p>
          <p>
            Product availability, manufacturing lead times, minimum order quantities (MOQs), delivery schedules, and raw material pricing are subject to confirmation at the time of formal quotation issuance by <strong>{CONTACT_CONFIG.registeredName}</strong>.
          </p>
        </>
      ),
    },
    {
      id: "certifications-standards",
      number: "04",
      title: "Third-Party Certifications & Standards",
      content: (
        <>
          <p>
            References to enterprise credentials and standards (including <strong>MSME / Udyam registration</strong>, <strong>GST compliance</strong>, <strong>IS 1726</strong>, <strong>EN 124</strong> load classes A15 through F900, and ASTM standard testing protocols) reflect registrations and standard testing protocols active at the time of publication.
          </p>
          <p>
            Certified copies of third-party laboratory test reports (e.g., NABL-accredited load testing certificates, raw material test certificates, or batch test reports) can be furnished upon request during tender submission or project dispatch.
          </p>
        </>
      ),
    },
    {
      id: "external-links",
      number: "05",
      title: "External Links & Third-Party References",
      content: (
        <>
          <p>
            Any hyperlinks to external websites or references to third-party standards bodies are provided strictly for user convenience. <strong>{CONTACT_CONFIG.registeredName}</strong> does not endorse, verify, or assume responsibility for the accuracy or reliability of content on external websites.
          </p>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      number: "06",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            Under no circumstances shall <strong>{CONTACT_CONFIG.registeredName}</strong>, its directors, or its technical teams be held liable for any loss, damage, project delay, or structural failure arising directly or indirectly from the use of, or reliance on, preliminary information published on this website without obtaining prior written engineering sign-off.
          </p>
        </>
      ),
    },
    {
      id: "engineering-consultation",
      number: "07",
      title: "Direct Engineering Consultation",
      content: (
        <>
          <p>
            To obtain project-specific recommendations, composite chemical resistance matrices, customized trench cover spans, or factory load-testing verification, please reach out to our senior technical team:
          </p>
          <div className="mt-4 p-4 bg-orange-50/70 border border-orange-200/90 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-[#0A1628]">Need Customized Engineering Support?</h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Submit your BOQ or drawing for an engineered composite recommendation.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#FF6B00] hover:bg-[#e66000] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Submit Project BOQ</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageShell
      title="Website & Product Disclaimer"
      subtitle="Important notices regarding technical specifications, product imagery, structural load ratings, and commercial proposals for Samarth FRP Solutions."
      lastUpdated="September 2026"
      readTime="3 min read"
      badge="Legal Notice & Disclaimers"
      sections={sections}
    />
  );
}
