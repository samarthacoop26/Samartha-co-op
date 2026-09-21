import React from "react";
import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { CheckCircle2 } from "lucide-react";

import { SITE_URL } from "@/lib/seoData";

export const metadata: Metadata = {
  title: "Privacy Policy | DPDP Act Compliance | Samarth Corp",
  description:
    "Privacy Policy for Samarth Corporation under the Indian DPDP Act 2023, governing inquiry data, engineering drawings, and quotation confidentiality.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  const sections: LegalSection[] = [
    {
      id: "introduction",
      number: "01",
      title: "Introduction",
      content: (
        <>
          <p>
            <strong>{CONTACT_CONFIG.registeredName}</strong> (referred to as &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operating under the trade name <strong>{CONTACT_CONFIG.companyName}</strong>, is committed to safeguarding your privacy and personal data.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, communicate with our engineering or sales teams, submit a Request for Quotation (RFQ), or upload project specifications and drawings.
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      number: "02",
      title: "Information We Collect",
      content: (
        <>
          <p>We collect only the information necessary to provide you with engineering consultations, technical proposals, and commercial quotations:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-3.5">
              <span className="type-eyebrow block text-xs mb-1 text-[#FF6B00]">
                Contact Details
              </span>
              <p className="text-xs text-gray-600">
                Provided via our RFQ form, Contact form, email, or WhatsApp: name, company name, designation, phone number, email address, and project location.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg p-3.5">
              <span className="type-eyebrow block text-xs mb-1 text-[#FF6B00]">
                Project Files
              </span>
              <p className="text-xs text-gray-600">
                Files you submit for estimation: Bill of Quantities (BOQs), CAD drawings, tender specifications, and custom structural requirements.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg p-3.5">
              <span className="type-eyebrow block text-xs mb-1 text-[#FF6B00]">
                Technical Usage Data
              </span>
              <p className="text-xs text-gray-600">
                Automatically gathered for site reliability: IP address, browser type, device details, pages viewed, and session duration.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "how-we-use-information",
      number: "03",
      title: "How We Use Your Information",
      content: (
        <>
          <p>The information we collect is utilized strictly for legitimate business and engineering operations:</p>
          <ul className="space-y-2.5 my-3">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Quotation & Technical Feasibility:</strong> To evaluate your BOQ, compute load ratings, recommend composite profiles, and provide formal commercial proposals.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Project Documentation & Logistics:</strong> To generate GST-compliant invoices, technical compliance sheets, dispatch schedules, and test certificates.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Client Communication:</strong> To respond promptly to technical queries and provide delivery or production updates.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <span><strong>Service Optimization:</strong> To monitor website functionality, streamline navigation, and prevent fraudulent inquiries.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      number: "04",
      title: "Data Sharing & Confidentiality",
      content: (
        <>
          <div className="p-3.5 bg-orange-50/70 border border-orange-200/80 rounded-lg mb-3">
            <p className="font-semibold text-[#0A1628] text-xs sm:text-sm">
              We do not sell, rent, trade, or commercially exploit your personal or business data under any circumstances.
            </p>
          </div>
          <p>We may share your data only with the following trusted parties under strict confidentiality protocols:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600 mt-2">
            <li><strong>Internal Engineering & Sales Teams:</strong> To calculate estimates and coordinate manufacturing dispatches.</li>
            <li><strong>Infrastructure & Service Providers:</strong> Trusted partners who support our web hosting, secure email communication, and analytics—all governed by data non-disclosure agreements.</li>
            <li><strong>Statutory Authorities:</strong> Government bodies or law enforcement agencies only where required by applicable laws of the Republic of India.</li>
          </ul>
        </>
      ),
    },
    {
      id: "data-storage-security",
      number: "05",
      title: "Data Storage & Security",
      content: (
        <>
          <p>
            We implement industry-standard administrative, physical, and technical safeguards (including SSL 256-bit encryption for all web transmissions) to protect your drawings, inquiries, and personal details against unauthorized access, loss, alteration, or disclosure.
          </p>
          <p>
            Your information is stored in secure server environments and retained only for as long as necessary to fulfill the business, tax, and legal record-keeping requirements under Indian law.
          </p>
        </>
      ),
    },
    {
      id: "your-rights-dpdp",
      number: "06",
      title: "Your Rights (DPDP Act, 2023 - India)",
      content: (
        <>
          <p>
            In compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India, you hold the following rights regarding your personal data:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <span className="font-bold text-xs text-gray-900 block mb-1">Right to Access</span>
              <p className="text-xs text-gray-600">Request a summary of personal information we maintain regarding your inquiries.</p>
            </div>
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <span className="font-bold text-xs text-gray-900 block mb-1">Right to Correction / Erasure</span>
              <p className="text-xs text-gray-600">Request update of inaccurate details or deletion of obsolete contact records.</p>
            </div>
            <div className="p-3 bg-white border border-gray-200 rounded-lg">
              <span className="font-bold text-xs text-gray-900 block mb-1">Right to Withdraw Consent</span>
              <p className="text-xs text-gray-600">Opt out of future non-transactional communications at any time.</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            To exercise any of these rights, please email our grievance desk at{" "}
            <a href={`mailto:${CONTACT_CONFIG.departments.quotations.email}`} className="text-[#FF6B00] font-semibold underline">
              {CONTACT_CONFIG.departments.quotations.email}
            </a>.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      number: "07",
      title: "Cookies & Website Analytics",
      content: (
        <>
          <p>
            Our website uses minimal, functional cookies and aggregate analytics tools (such as Google Analytics 4) to understand visitor traffic, improve page loading speed, and optimize product accessibility.
          </p>
          <p>
            These cookies do not track your personal identity or sensitive data. You can choose to disable cookies through your web browser settings without losing access to general content on our site.
          </p>
        </>
      ),
    },
    {
      id: "policy-updates",
      number: "08",
      title: "Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may periodically revise this Privacy Policy to reflect updates in our business practices, manufacturing operations, or applicable regulatory standards.
          </p>
          <p>
            Any modifications will be posted directly to this page with an updated &quot;Last Updated&quot; date at the top. Continued use of our website after changes indicates acceptance of the updated terms.
          </p>
        </>
      ),
    },
    {
      id: "contact-grievance",
      number: "09",
      title: "Contact Us & Grievance Redressal",
      content: (
        <>
          <p>
            If you have questions, feedback, or concerns regarding this Privacy Policy or our data handling practices, please contact us:
          </p>
          <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-1.5 text-xs sm:text-sm">
            <p><strong>Entity:</strong> {CONTACT_CONFIG.registeredName}</p>
            <p><strong>Attn:</strong> Privacy & Compliance Desk</p>
            <p><strong>Email:</strong> <a href={`mailto:${CONTACT_CONFIG.departments.sales.email}`} className="text-[#FF6B00]">{CONTACT_CONFIG.departments.sales.email}</a></p>
            <p><strong>Phone:</strong> <a href={`tel:${CONTACT_CONFIG.departments.sales.phone}`} className="text-gray-800">{CONTACT_CONFIG.departments.sales.phoneDisplay}</a></p>
            <p><strong>Office:</strong> {CONTACT_CONFIG.locations[0].addressLine1}, {CONTACT_CONFIG.locations[0].cityStateZip}</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="Learn how Samarth FRP Solutions collects, handles, and protects your project data and personal information in accordance with Indian regulations."
      lastUpdated="September 2026"
      readTime="4 min read"
      badge="Data Protection & Privacy"
      sections={sections}
    />
  );
}
