import React from "react";
import type { Metadata } from "next";
import { Download, FileText, ExternalLink, Eye } from "lucide-react";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: `Corporate Product Brochure (PDF) | ${CONTACT_CONFIG.companyName}`,
  description:
    "Download or view the official Samarth Corporation technical brochure covering our full range of PP & FRP tanks, gratings, scrubbers, piping systems, and customized composite engineering products.",
  openGraph: {
    title: `Product Brochure & Catalog | ${CONTACT_CONFIG.companyName}`,
    description:
      "Explore comprehensive technical specifications, corrosion-resistance matrices, and industrial fabrication scope in our official corporate brochure.",
    type: "website",
  },
};

export default function BrochurePage() {
  return (
    <div className="w-full bg-[#0A1628] text-white font-sans min-h-screen">
      {/* ═══ 1. HERO HEADER ═══ */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-slate-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-[#0A1628]/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-[#FF8C33] mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="type-eyebrow">Official Corporate Document &bull; 2026 Edition</span>
            </div>

            <h1 className="type-h1 text-white">
              Corporate &amp; Product Brochure
            </h1>

            <p className="mt-4 type-subheading text-gray-300">
              Access the complete technical catalog and capability overview of {CONTACT_CONFIG.companyName}. Includes dimensional specifications, chemical resistance standards, composite formulations, and factory credentials.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/samarth-brochure.pdf"
                download="Samarth_Corporation_Brochure.pdf"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn px-7 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all font-bold group cursor-pointer"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD PDF (1.3 MB)</span>
              </a>

              <a
                href="/samarth-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 type-btn px-6 py-3.5 rounded-xl transition-all font-semibold group cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                <span>OPEN FULLSCREEN TAB</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. EMBEDDED IN-DEPTH PDF VIEWER SECTION ═══ */}
      <section className="py-12 sm:py-16 bg-[#0E1B2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Bar for Viewer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Samarth Corporation — Product Brochure</div>
                <div className="text-slate-400 text-xs font-mono-accent">Format: PDF &bull; Size: ~1.35 MB &bull; High Resolution</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="/samarth-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Open in Tab</span>
              </a>
              <a
                href="/samarth-brochure.pdf"
                download="Samarth_Corporation_Brochure.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#e66000] text-white text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* PDF Viewer Container */}
          <div className="w-full bg-slate-950 border-x border-b border-slate-800 rounded-b-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-[750px] sm:h-[900px] bg-slate-900">
              <object
                data="/samarth-brochure.pdf"
                type="application/pdf"
                className="w-full h-full"
              >
                {/* Fallback for browsers that don't support inline PDF objects */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-900 text-slate-300">
                  <FileText className="w-16 h-16 text-[#FF6B00] mb-4 opacity-80" />
                  <h3 className="text-xl font-bold text-white mb-2">Brochure PDF Preview</h3>
                  <p className="max-w-md text-sm text-slate-400 mb-6">
                    Your browser does not support direct inline PDF preview. You can download the file or open it directly in a new tab.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/samarth-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF6B00] hover:bg-[#e66000] text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open PDF in New Tab</span>
                    </a>
                    <a
                      href="/samarth-brochure.pdf"
                      download="Samarth_Corporation_Brochure.pdf"
                      className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2 border border-slate-700"
                    >
                      <Download className="w-4 h-4 text-[#FF6B00]" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ 3. FINAL CTA ═══ */}
      <FinalCTA />
    </div>
  );
}
