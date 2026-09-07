"use client";

import React, { useState } from "react";
import { CERTIFICATES_DATA, CertificateItem } from "@/data/certificatesData";
import { CertificateHero } from "@/components/certificates/CertificateHero";
import { CertificateCard } from "@/components/certificates/CertificateCard";
import { CertificateModal } from "@/components/certificates/CertificateModal";

import { FinalCTA } from "@/components/home/FinalCTA";

export default function CertificatesPage() {
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  const isoCertificates = CERTIFICATES_DATA.filter((c) => c.category === "iso");
  const clientCertificates = CERTIFICATES_DATA.filter((c) => c.category === "client");

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans min-h-screen">
      {/* ═══ 1. INDUSTRIAL HERO (MATCHING CONTACT PAGE HERO) ═══ */}
      <CertificateHero />

      {/* ═══ 2. MINIMAL CERTIFICATES GRID ═══ */}
      <main className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12 sm:space-y-16">
          {/* Top Row: ISO Certifications (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {isoCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                item={cert}
                onSelect={(item) => setActiveModalCert(item)}
              />
            ))}
          </div>

          {/* Bottom Row: Client Appreciation Letters (4 Columns) */}
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
      </main>

      {/* ═══ 3. GLOBAL UNIFIED FINAL CTA ═══ */}
      <FinalCTA />

      {/* ═══ 4. MINIMAL LIGHTBOX MODAL ═══ */}
      <CertificateModal
        item={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </div>
  );
}
