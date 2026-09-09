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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

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
  sealType: "msme" | "gst";
}

const certificationsData: Certification[] = [
  {
    id: "msme-udyam",
    name: "MSME / Udyam Registered",
    shortCode: "UDYAM",
    description: "Government-Recognized Manufacturing Unit",
    regNumber: "UDYAM-MH-33-0265642",
    issuingAuthority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    standard: "Micro, Small and Medium Enterprises Development Act",
    validThrough: "Permanent Registration",
    status: "Government Registered",
    scope:
      "Manufacturing of PP & FRP tanks, scrubbers, blowers, M.S. lining, thermoplastic pipelines, and advanced composite polymer goods.",
    sealType: "msme",
  },
  {
    id: "gst-registered",
    name: "GST Registered",
    shortCode: "GSTIN",
    description: "Fully Compliant Taxpayer Entity",
    regNumber: "27AEVFS9451A1ZK",
    issuingAuthority: "Goods and Services Tax Network (GSTN), Ministry of Finance, Govt of India",
    standard: "Central Goods and Services Tax Act",
    validThrough: "Active Taxpayer Status (Reg: 18-Nov-2022)",
    status: "Active & Verified",
    scope:
      "Registered tax-compliant commercial entity authorized for inter-state and intra-state commercial supply to PSUs, defence organizations, and private contractors.",
    sealType: "gst",
  },
];

// High-fidelity vector seal marks designed with official guilloche borders and sharp geometry
function OfficialSeal({ type }: { type: Certification["sealType"] }) {
  switch (type) {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 rounded-full mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
            <span className="type-eyebrow text-[#0A1628]">
              STATUTORY &amp; COMPLIANCE
            </span>
          </div>

          <h2 className="type-h2 text-[#0A1628]">
            Government Registrations &amp; Accreditations
          </h2>

          <p className="mt-3 type-subheading text-slate-600">
            Official statutory enterprise registrations, MSME certification, and GST tax compliance records for commercial vendor audit verification and industrial tender qualification.
          </p>
        </div>

        {/* 2 Centered Certification Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-8"
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group flex flex-col justify-between bg-white hover:bg-white rounded-2xl border border-slate-200 hover:border-[#0A1628] shadow-[0_2px_8px_-2px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_24px_-6px_rgba(10,22,40,0.14)] transition-all duration-200 p-7 text-center cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#FF6B00] transition-colors duration-200" />

              {/* Top Seal Emblem Container */}
              <div className="flex flex-col items-center">
                <div className="p-2 mb-4 group-hover:scale-105 transition-transform duration-200">
                  <OfficialSeal type={cert.sealType} />
                </div>

                {/* Certification Title */}
                <h3 className="type-h3 text-lg text-[#0A1628] group-hover:text-[#FF6B00] leading-snug mb-1.5 transition-colors">
                  {cert.name}
                </h3>

                {/* Muted Official Description */}
                <p className="type-body text-xs text-slate-600 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Verification Trigger Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 w-full flex items-center justify-between">
                <span className="type-spec text-[11px] text-slate-500 font-mono-accent">
                  {cert.shortCode}: {cert.regNumber}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Verify Record</span>
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Audit Note & Link for Procurement Officers */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0A1628] shrink-0" />
            <span className="type-footer">
              <strong>Procurement Verification Note:</strong> Official MSME Udyam certificates, GST registrations, and client appreciation records are available for tender audit packages.
            </span>
          </div>
          <Link
            href="/certificates"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#e66000] shrink-0 transition-colors"
          >
            <span>View All Records &amp; Letters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
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
              className="relative w-full max-w-2xl bg-white border border-slate-300 shadow-2xl rounded-2xl overflow-hidden z-10 my-8"
            >
              {/* Formal Document Header Bar */}
              <div className="bg-[#0A1628] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#FF6B00]">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#FF6B00]" />
                  <div>
                    <span className="type-eyebrow text-slate-300 block">
                      OFFICIAL VERIFICATION RECORD
                    </span>
                    <h4 className="type-h3 text-white tracking-tight leading-none mt-0.5">
                      {selectedCert.name}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Details Content (Formal Sheet) */}
              <div className="p-6 sm:p-8 space-y-6 bg-white text-slate-800 text-sm">
                
                {/* Official Status & Registration Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <span className="type-eyebrow text-slate-500 block mb-0.5">
                      Registration / License No.
                    </span>
                    <span className="type-spec font-bold text-[#0A1628]">
                      {selectedCert.regNumber}
                    </span>
                  </div>

                  <div>
                    <span className="type-eyebrow text-slate-500 block mb-0.5">
                      Verification Status
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {selectedCert.status}
                    </span>
                  </div>
                </div>

                {/* Structured Fields */}
                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <span className="type-eyebrow text-slate-500 block mb-1">
                      Issuing Body / Accredited Authority
                    </span>
                    <p className="type-body text-slate-800 font-semibold">
                      {selectedCert.issuingAuthority}
                    </p>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <span className="type-eyebrow text-slate-500 block mb-1">
                      Governing Standard / Statute
                    </span>
                    <p className="type-body text-slate-800 font-semibold">
                      {selectedCert.standard}
                    </p>
                  </div>

                  <div className="border-b border-slate-100 pb-3">
                    <span className="type-eyebrow text-slate-500 block mb-1">
                      Certified Manufacturing &amp; Supply Scope
                    </span>
                    <p className="type-body text-slate-600">
                      {selectedCert.scope}
                    </p>
                  </div>

                  <div>
                    <span className="type-eyebrow text-slate-500 block mb-1">
                      Validity Period / Standing
                    </span>
                    <p className="type-spec text-slate-800 font-semibold">
                      {selectedCert.validThrough}
                    </p>
                  </div>
                </div>

                {/* Watermark / Digital Security Mark */}
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                    <span className="type-footer">Digitally verified registration record. Valid for tender eligibility submissions.</span>
                  </div>
                  <span className="type-eyebrow text-amber-800 shrink-0 hidden sm:inline-block">
                    CONFIRMED
                  </span>
                </div>
              </div>

              {/* Formal Actions Footer */}
              <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="type-spec text-slate-500">
                  Doc Ref: {selectedCert.regNumber}
                </span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 type-btn rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Record</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      alert(`Verified registration details for ${selectedCert.name} (${selectedCert.regNumber})`);
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0A1628] text-white type-btn rounded-xl hover:bg-[#FF6B00] transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Summary</span>
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
