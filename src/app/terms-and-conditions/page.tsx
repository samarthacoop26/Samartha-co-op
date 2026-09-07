import React from "react";
import type { Metadata } from "next";
import { LegalPageShell, LegalSection } from "@/components/legal/LegalPageShell";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { CheckCircle2, AlertTriangle, Scale, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Samarth FRP Solutions",
  description:
    "Terms and Conditions governing the use of Samarth FRP Solutions website, quotations, BOQ submissions, and composite engineering product inquiries.",
};

export default function TermsAndConditionsPage() {
  const sections: LegalSection[] = [
    {
      id: "acceptance-of-terms",
      number: "01",
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            By accessing, browsing, or utilizing this website (operated by <strong>{CONTACT_CONFIG.registeredName}</strong> under the brand <strong>{CONTACT_CONFIG.companyName}</strong>), you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions.
          </p>
          <p>
            If you do not agree with any portion of these terms, please discontinue use of this website immediately.
          </p>
        </>
      ),
    },
    {
      id: "about-company",
      number: "02",
      title: `About ${CONTACT_CONFIG.companyName}`,
      content: (
        <>
          <p>
            <strong>{CONTACT_CONFIG.registeredName}</strong> is an Indian manufacturing and engineering enterprise engaged in the design, fabrication, supply, installation consultation, and maintenance of high-performance <strong>Fiberglass Reinforced Plastic (FRP / GRP)</strong> products.
          </p>
          <p>
            Our core composite solutions cater to industrial, infrastructure, municipal, smart city, road development, defence, aviation, railway, and commercial sectors across India and global export markets.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      number: "03",
      title: "Use of Website Content & Intellectual Property",
      content: (
        <>
          <p>
            All content published on this website—including but not limited to technical articles, load rating tables, product photographs, CAD illustrations, logos, trademarks, and downloadable brochures—is the exclusive intellectual property of <strong>{CONTACT_CONFIG.registeredName}</strong>, unless expressly credited otherwise.
          </p>
          <p>
            You may view, download, or print informational pages solely for your internal project evaluation or procurement purposes. You may not reproduce, modify, republish, distribute, or publicly display any content for commercial gain without prior written authorization from our corporate management.
          </p>
        </>
      ),
    },
    {
      id: "product-specifications",
      number: "04",
      title: "Product Specifications & Engineering Tolerances",
      content: (
        <>
          <p>
            Product specifications, load classes (such as A15, B125, C250, D400, E600, F900 under EN 124 / IS 1726), standard dimensions, raw material resin formulations, and color finishes displayed on this website are indicative and subject to continuous engineering enhancement.
          </p>
          <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-700">
            <strong>Important Engineering Note:</strong> Because field conditions (chemical exposure, thermal variation, dynamic vehicular axle loads, span deflections) vary by project, final product sizing, resin choice (isophthalic, vinyl ester, or epoxy), and reinforcement schedules must be confirmed in writing with our technical engineering department prior to procurement.
          </div>
        </>
      ),
    },
    {
      id: "quotations-inquiries",
      number: "05",
      title: "Quotations, Inquiries & Non-Binding Nature",
      content: (
        <>
          <p>
            The submission of a Request for Quote (RFQ), tender specification, Bill of Quantities (BOQ), or general query via our forms or direct communication does not create a binding purchase order or sales agreement.
          </p>
          <p>
            All commercial terms—including product unit pricing, GST, packing, freight/transportation, testing charges, delivery lead time, and warranty parameters—will be formally issued in writing through a stamped Commercial Quotation or Proforma Invoice by our sales desk.
          </p>
        </>
      ),
    },
    {
      id: "no-warranty-accuracy",
      number: "06",
      title: "No Warranty on Website Accuracy",
      content: (
        <>
          <p>
            While we endeavor to keep all information, test standards, and catalog data accurate and up to date, <strong>{CONTACT_CONFIG.registeredName}</strong> makes no express or implied warranties regarding the absolute completeness, accuracy, or timeliness of any content on this website.
          </p>
          <p>
            Content is provided on an &quot;as is&quot; and &quot;as available&quot; basis for general engineering information.
          </p>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      number: "07",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable Indian law, <strong>{CONTACT_CONFIG.registeredName}</strong> and its directors, officers, employees, and authorized agents shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600 my-2">
            <li>The use or inability to use this website or downloadable assets;</li>
            <li>Reliance on preliminary product dimensions without formal technical confirmation;</li>
            <li>Temporary server downtime, network interruptions, or transmission errors.</li>
          </ul>
        </>
      ),
    },
    {
      id: "third-party-links",
      number: "08",
      title: "Third-Party Links & External Platforms",
      content: (
        <>
          <p>
            This website may contain links to external third-party resources (such as Google Maps, BIS/ISO standardization portals, or logistics tracking tools). We do not control or endorse the content, policies, or practices of third-party platforms and accept no liability for interactions on external websites.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      number: "09",
      title: "Governing Law & Legal Jurisdiction",
      content: (
        <>
          <p>
            These Terms & Conditions, together with all matters arising from website usage and commercial transactions, shall be governed by and construed exclusively in accordance with the laws of the <strong>Republic of India</strong>.
          </p>
          <div className="p-3 bg-white border border-gray-200 rounded-lg text-xs sm:text-sm">
            <span className="font-bold text-gray-900 block mb-0.5">Jurisdiction:</span>
            Any legal dispute, suit, or proceeding arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Pune, Maharashtra, India</strong>.
          </div>
        </>
      ),
    },
    {
      id: "modifications-to-terms",
      number: "10",
      title: "Modifications to Terms",
      content: (
        <>
          <p>
            We reserve the right to modify or replace these Terms & Conditions at our discretion at any time. Changes become effective immediately upon posting to this website. Your ongoing access to the site constitutes full acceptance of any revised terms.
          </p>
        </>
      ),
    },
    {
      id: "contact-information",
      number: "11",
      title: "Contact & Legal Inquiries",
      content: (
        <>
          <p>
            For legal notices, terms clarification, or official correspondence, please contact our administrative office:
          </p>
          <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-1.5 text-xs sm:text-sm">
            <p><strong>Legal Entity:</strong> {CONTACT_CONFIG.registeredName}</p>
            <p><strong>Corporate Brand:</strong> {CONTACT_CONFIG.companyName}</p>
            <p><strong>Email:</strong> <a href={`mailto:${CONTACT_CONFIG.departments.sales.email}`} className="text-[#FF6B00]">{CONTACT_CONFIG.departments.sales.email}</a></p>
            <p><strong>Office Phone:</strong> <a href={`tel:${CONTACT_CONFIG.departments.sales.phone}`} className="text-gray-800">{CONTACT_CONFIG.departments.sales.phoneDisplay}</a></p>
            <p><strong>Corporate Office:</strong> {CONTACT_CONFIG.locations[0].addressLine1}, {CONTACT_CONFIG.locations[0].cityStateZip}</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPageShell
      title="Terms & Conditions"
      subtitle="Standard terms and conditions governing the access, browsing, and technical quotation requests for composite products from Samarth FRP Solutions."
      lastUpdated="September 2026"
      readTime="5 min read"
      badge="Commercial & Website Terms"
      sections={sections}
    />
  );
}
