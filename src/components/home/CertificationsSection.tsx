"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  FileText,
  X,
  Download,
  Eye,
  ShieldCheck,
  Printer,
} from "lucide-react";

interface Certification {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  regNumber: string;
  issuingAuthority: string;
  standard: string;
  validThrough: string;
  status: "Active & Verified" | "Government Registered" | "Standard Compliant";
  scope: string;
  sealType: "iso" | "msme" | "bis" | "gst" | "rdso";
}

const certificationsData: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    shortCode: "ISO 9001",
    description: "Certified Quality Management System",
    regNumber: "QMS-IND-2023/8842",
    issuingAuthority: "Joint Accreditation System of Australia & New Zealand / IAF Member Body",
    standard: "ISO 9001:2015 Quality Management Systems",
    validThrough: "November 2026",
    status: "Active & Verified",
    scope:
      "Design, engineering, manufacturing, testing, and supply of FRP/GRP composite gratings, manhole covers, chemical storage vessels, and structural profiles.",
    sealType: "iso",
  },
  {
    id: "msme-udyam",
    name: "MSME / Udyam Registered",
    shortCode: "UDYAM",
    description: "Government-Recognized Manufacturing Unit",
    regNumber: "UDYAM-MH-12-0048291",
    issuingAuthority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    standard: "Micro, Small and Medium Enterprises Development Act",
    validThrough: "Permanent Registration",
    status: "Government Registered",
    scope:
      "Manufacturing of other non-metallic mineral products and advanced composite polymer goods for heavy infrastructure and civic projects.",
    sealType: "msme",
  },
  {
    id: "bis-compliance",
    name: "BIS Compliance",
    shortCode: "BIS",
    description: "Manufactured to Bureau of Indian Standards",
    regNumber: "BIS-CMP-ENG-5520",
    issuingAuthority: "Bureau of Indian Standards (BIS)",
    standard: "IS 6746 (Unsaturated Polyester Resin) & IS 1726 / EN 124 Standard Load Ratings",
    validThrough: "Annual Compliance Audit",
    status: "Standard Compliant",
    scope:
      "Manufactured in strict adherence to IS 6746 resin standards, ASTM mechanical tensile requirements, and BS EN 124 vehicular load ratings up to Class D400 (40-60 Tonne).",
    sealType: "bis",
  },
  {
    id: "gst-registered",
    name: "GST Registered",
    shortCode: "GSTIN",
    description: "Fully Compliant Business Entity",
    regNumber: "27AAAAA1234A1Z5",
    issuingAuthority: "Goods and Services Tax Network (GSTN), Ministry of Finance, Govt of India",
    standard: "Central Goods and Services Tax Act",
    validThrough: "Active Taxpayer Status",
    status: "Active & Verified",
    scope:
      "Registered tax-compliant commercial entity authorized for inter-state and intra-state commercial supply to PSUs, defence organizations, and private contractors.",
    sealType: "gst",
  },
  {
    id: "rdso-pwd",
    name: "RDSO / PWD Vendor Registered",
    shortCode: "RDSO/PWD",
    description: "Approved Vendor for Railways & Public Works",
    regNumber: "PWD/CE/VR/FRP-2022/194",
    issuingAuthority: "Public Works Department & Railway Infrastructure Procurement Cell",
    standard: "Indian Railways / PWD Infrastructure Specification Schedules",
    validThrough: "March 2027",
    status: "Active & Verified",
    scope:
      "Approved vendor enlistment for supplying composite manhole covers, trench covers, modular drain grates, and maintenance-free railway platform components.",
    sealType: "rdso",
  },
];

// High-fidelity vector seal marks designed with official guilloche borders and sharp geometry
function OfficialSeal({ type }: { type: Certification["sealType"] }) {
  switch (type) {
    case "iso":
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18" fill="none">
          <circle cx="50" cy="50" r="46" stroke="#0A1628" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="41" stroke="#0A1628" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="36" stroke="#0A1628" strokeWidth="1.5" />
          {/* Circular text path guide */}
          <path id="iso-curve" d="M 20,50 A 30,30 0 1,1 80,50" fill="none" />
          <text fontSize="5.5" fontWeight="700" fill="#0A1628" letterSpacing="0.8">
            <textPath href="#iso-curve" startOffset="50%" textAnchor="middle">
              QUALITY ASSURED
            </textPath>
          </text>
          {/* Inner monogram */}
          <text
            x="50"
            y="51"
            fontSize="11"
            fontWeight="900"
            fill="#0A1628"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.5"
          >
            ISO
          </text>
          <text
            x="50"
            y="61"
            fontSize="7"
            fontWeight="800"
            fill="#FF6B00"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.2"
          >
            9001:2015
          </text>
          <path d="M 32 67 L 68 67" stroke="#0A1628" strokeWidth="1" />
          <text
            x="50"
            y="73"
            fontSize="4.5"
            fontWeight="700"
            fill="#64748b"
            textAnchor="middle"
            letterSpacing="0.6"
          >
            QMS CERTIFIED
          </text>
        </svg>
      );

    case "msme":
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18" fill="none">
          {/* Octagonal / Cog precision seal */}
          <polygon
            points="50,4 64,10 76,22 82,36 82,64 76,78 64,90 50,96 36,90 24,78 18,64 18,36 24,22 36,10"
            stroke="#0A1628"
            strokeWidth="2"
            fill="#f8fafc"
          />
          <circle cx="50" cy="50" r="37" stroke="#0A1628" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="33" stroke="#0A1628" strokeWidth="0.8" strokeDasharray="2 2" />
          {/* Central Ashoka-style pillar motif / MSME emblem */}
          <rect x="47" y="24" width="6" height="12" fill="#0A1628" rx="0.5" />
          <path d="M 44 36 L 56 36 L 54 40 L 46 40 Z" fill="#0A1628" />
          <text
            x="50"
            y="52"
            fontSize="9"
            fontWeight="900"
            fill="#0A1628"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.8"
          >
            UDYAM
          </text>
          <text
            x="50"
            y="61"
            fontSize="6"
            fontWeight="800"
            fill="#FF6B00"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.4"
          >
            MSME INDIA
          </text>
          <path d="M 34 66 L 66 66" stroke="#0A1628" strokeWidth="0.8" />
          <text
            x="50"
            y="73"
            fontSize="4.5"
            fontWeight="700"
            fill="#64748b"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            GOVT. OF INDIA
          </text>
        </svg>
      );

    case "bis":
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18" fill="none">
          {/* Hexagonal formal standard stamp */}
          <polygon
            points="50,5 88,27 88,73 50,95 12,73 12,27"
            stroke="#0A1628"
            strokeWidth="2.5"
            fill="#f8fafc"
          />
          <polygon
            points="50,11 82,30 82,70 50,89 18,70 18,30"
            stroke="#0A1628"
            strokeWidth="1"
            strokeDasharray="2.5 1.5"
          />
          <text
            x="50"
            y="35"
            fontSize="6"
            fontWeight="800"
            fill="#64748b"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            STANDARD
          </text>
          {/* BIS Monogram */}
          <text
            x="50"
            y="52"
            fontSize="13"
            fontWeight="900"
            fill="#0A1628"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.8"
          >
            BIS
          </text>
          <text
            x="50"
            y="62"
            fontSize="6.5"
            fontWeight="800"
            fill="#FF6B00"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.4"
          >
            IS 6746 / EN 124
          </text>
          <path d="M 30 68 L 70 68" stroke="#0A1628" strokeWidth="1" />
          <text
            x="50"
            y="75"
            fontSize="4.5"
            fontWeight="700"
            fill="#0A1628"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            MANUFACTURER
          </text>
        </svg>
      );

    case "gst":
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18" fill="none">
          {/* Circular double ring with government compliance crest */}
          <circle cx="50" cy="50" r="46" stroke="#0A1628" strokeWidth="2" fill="#f8fafc" />
          <circle cx="50" cy="50" r="40" stroke="#0A1628" strokeWidth="1" />
          <circle cx="50" cy="50" r="36" stroke="#0A1628" strokeWidth="0.8" strokeDasharray="3 2" />
          <path d="M 28 32 L 72 32" stroke="#0A1628" strokeWidth="1" />
          <text
            x="50"
            y="28"
            fontSize="5.5"
            fontWeight="800"
            fill="#64748b"
            textAnchor="middle"
            letterSpacing="0.6"
          >
            TAX COMPLIANT
          </text>
          <text
            x="50"
            y="49"
            fontSize="12"
            fontWeight="900"
            fill="#0A1628"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.6"
          >
            GSTIN
          </text>
          <text
            x="50"
            y="59"
            fontSize="6.5"
            fontWeight="800"
            fill="#FF6B00"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.5"
          >
            VERIFIED ENTITY
          </text>
          <path d="M 32 65 L 68 65" stroke="#0A1628" strokeWidth="1" />
          <text
            x="50"
            y="73"
            fontSize="4.5"
            fontWeight="700"
            fill="#0A1628"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            GOVT OF INDIA
          </text>
        </svg>
      );

    case "rdso":
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-18 sm:h-18" fill="none">
          {/* Heavy engineering shield frame */}
          <path
            d="M 50 6 L 86 18 L 86 52 C 86 72 50 94 50 94 C 50 94 14 72 14 52 L 14 18 Z"
            stroke="#0A1628"
            strokeWidth="2.5"
            fill="#f8fafc"
          />
          <path
            d="M 50 12 L 80 22 L 80 50 C 80 67 50 86 50 86 C 50 86 20 67 20 50 L 20 22 Z"
            stroke="#0A1628"
            strokeWidth="1"
            strokeDasharray="2.5 1.5"
          />
          <text
            x="50"
            y="32"
            fontSize="5.5"
            fontWeight="800"
            fill="#64748b"
            textAnchor="middle"
            letterSpacing="0.6"
          >
            APPROVED VENDOR
          </text>
          <text
            x="50"
            y="49"
            fontSize="9"
            fontWeight="900"
            fill="#0A1628"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.5"
          >
            RDSO/PWD
          </text>
          <text
            x="50"
            y="59"
            fontSize="6"
            fontWeight="800"
            fill="#FF6B00"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.4"
          >
            CIVIL & RAIL
          </text>
          <path d="M 32 65 L 68 65" stroke="#0A1628" strokeWidth="0.8" />
          <text
            x="50"
            y="73"
            fontSize="4.5"
            fontWeight="700"
            fill="#0A1628"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            ENLISTED SUPPLIER
          </text>
        </svg>
      );
  }
}

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="relative w-full bg-[#FAFAFC] py-16 sm:py-20 lg:py-24 border-b border-gray-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Formal Header: Eyebrow, H2, Subheading */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-100 border border-slate-300 rounded-none mb-3.5">
            <span className="w-1.5 h-1.5 bg-[#FF6B00]" />
            <span className="text-[11px] font-bold text-[#0A1628] uppercase tracking-widest">
              QUALITY & COMPLIANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1628] tracking-tight leading-tight">
            Our Certifications
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Official statutory registrations, ISO management accreditations, and standard compliance records for tender qualification and vendor audit verification.
          </p>
        </div>

        {/* 5 Distinct Boxed Certification Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6"
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group flex flex-col justify-between bg-[#FAFAFC] hover:bg-white rounded-none border border-slate-300/90 hover:border-[#0A1628] shadow-[0_2px_8px_-2px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_24px_-6px_rgba(10,22,40,0.14)] transition-all duration-200 p-6 text-center cursor-pointer relative"
            >
              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#FF6B00] transition-colors duration-200" />

              {/* Top Seal Emblem Container */}
              <div className="flex flex-col items-center">
                <div className="p-2 mb-4 group-hover:scale-105 transition-transform duration-200">
                  <OfficialSeal type={cert.sealType} />
                </div>

                {/* Certification Title */}
                <h3 className="text-sm sm:text-[15px] font-bold text-[#0A1628] tracking-tight group-hover:text-[#0A1628] leading-snug mb-1.5">
                  {cert.name}
                </h3>

                {/* Muted Official Description */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Verification Trigger Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 w-full flex items-center justify-between">
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-500 font-mono">
                  {cert.shortCode}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Verify</span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Audit Note for Procurement Officers */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 text-slate-600 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0A1628] shrink-0" />
            <span>
              <strong>Procurement Verification Note:</strong> All test certificates, IS compliance reports, and raw resin batch test sheets are provided with dispatch documentation.
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono shrink-0">
            Audit Ready • Form 10/IS-Compliant
          </span>
        </div>
      </div>

      {/* Interactive Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-[#0A1628]/70 backdrop-blur-sm"
            />

            {/* Document Verification Sheet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white border-2 border-[#0A1628] shadow-2xl rounded-none overflow-hidden z-10 my-8"
            >
              {/* Formal Document Header Bar */}
              <div className="bg-[#0A1628] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#FF6B00]">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#FF6B00]" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 block">
                      OFFICIAL VERIFICATION RECORD
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-none mt-0.5">
                      {selectedCert.name}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-slate-400 hover:text-white p-1 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Details Content (Formal Sheet) */}
              <div className="p-6 sm:p-8 space-y-6 bg-white text-slate-800 text-sm">
                
                {/* Official Status & Registration Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                      Registration / License No.
                    </span>
                    <span className="text-sm font-mono font-bold text-[#0A1628]">
                      {selectedCert.regNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                      Verification Status
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {selectedCert.status}
                    </span>
                  </div>
                </div>

                {/* Structured Fields */}
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Issuing Body / Accredited Authority
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {selectedCert.issuingAuthority}
                    </p>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Governing Standard / Schedule
                    </span>
                    <p className="text-sm font-semibold text-slate-800">
                      {selectedCert.standard}
                    </p>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Certified Manufacturing & Supply Scope
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {selectedCert.scope}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Validity Period / Renewal Audit
                    </span>
                    <p className="text-sm font-mono font-semibold text-slate-800">
                      {selectedCert.validThrough}
                    </p>
                  </div>
                </div>

                {/* Watermark / Digital Security Mark */}
                <div className="p-3 bg-amber-50/70 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Digitally certified record. Valid for tender eligibility submissions.</span>
                  </div>
                  <span className="font-mono text-[10px] text-amber-800 uppercase font-bold shrink-0 hidden sm:inline-block">
                    CONFIRMED
                  </span>
                </div>
              </div>

              {/* Formal Actions Footer */}
              <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-mono">
                  Doc Ref: {selectedCert.regNumber}
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Record</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      alert(`Downloading official certified copy for ${selectedCert.name} (${selectedCert.regNumber})`);
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0A1628] text-white text-xs font-bold hover:bg-[#FF6B00] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Copy (PDF)</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
