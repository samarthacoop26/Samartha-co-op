"use client";

import React, { useState } from "react";
import { CERTIFICATES_DATA, CertificateItem } from "@/data/certificatesData";
import { CertificateHero } from "@/components/certificates/CertificateHero";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { CertificateModal } from "@/components/certificates/CertificateModal";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function CertificatesPage() {
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  const statutoryCertificates = CERTIFICATES_DATA.filter((c) => c.category === "statutory");
  const clientCertificates = CERTIFICATES_DATA.filter((c) => c.category === "client");

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* ═══ 1. INDUSTRIAL HERO ═══ */}
      <CertificateHero />

      {/* ═══ 2. CERTIFICATES GRID ═══ */}
      <main className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-14 sm:space-y-16">
          
          {/* Section 1: Statutory & Enterprise Registrations (MSME & GST) */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 rounded-full mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                <span className="type-eyebrow text-[#0A1628]">
                  OFFICIAL GOVERNMENT ACCREDITATIONS
                </span>
              </div>
              <h2 className="type-h2 text-2xl sm:text-3xl text-[#0A1628]">
                Statutory &amp; Enterprise Registrations
              </h2>
              <p className="mt-2 type-subheading text-slate-600 text-sm">
                Official Ministry of MSME Udyam registration and GSTIN enterprise credentials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-8">
              {statutoryCertificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  item={cert}
                  onSelect={(item) => setActiveModalCert(item)}
                />
              ))}
            </div>
          </div>

          {/* Section 2: Client Appreciation Letters */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8 pt-6 border-t border-slate-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-300 rounded-full mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                <span className="type-eyebrow text-[#0A1628]">
                  INDUSTRIAL CLIENT COMMENDATIONS
                </span>
              </div>
              <h2 className="type-h2 text-2xl sm:text-3xl text-[#0A1628]">
                Client Appreciation &amp; Performance Letters
              </h2>
              <p className="mt-2 type-subheading text-slate-600 text-sm">
                Performance verification and satisfactory equipment supply certificates from our industrial clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clientCertificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  item={cert}
                  onSelect={(item) => setActiveModalCert(item)}
                />
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* ═══ 3. GLOBAL UNIFIED FINAL CTA ═══ */}
      <FinalCTA />

      {/* ═══ 4. LIGHTBOX MODAL ═══ */}
      <CertificateModal
        item={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </div>
  );
}
