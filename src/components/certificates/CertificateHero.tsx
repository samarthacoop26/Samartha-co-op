"use client";

import Link from "next/link";

export function CertificateHero() {
  return (
    <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact-hero.jpg')",
        }}
      />
      {/* Subtle Dark Industrial Overlay with High Image Visibility */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-transparent to-[#0A1628]/70" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full mb-3 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
          <span className="text-[11px] font-bold tracking-widest text-white uppercase drop-shadow-sm">
            Quality & Accreditations
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Certificates
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          ISO certified quality management systems and performance appreciation certificates from our valued industrial clients.
        </p>
      </div>

      {/* Slanted Breadcrumb Bar Pinned to Bottom-Right */}
      <div className="absolute bottom-0 right-0 z-20">
        <div
          className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2.5 px-8 sm:px-12 flex items-center gap-2 shadow-lg"
          style={{
            clipPath: "polygon(28px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Link
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-[#0A1628]">Certificates</span>
        </div>
      </div>
    </section>
  );
}
