import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight, Layers, PhoneCall, HelpCircle } from "lucide-react";
import { NotFoundIllustration } from "@/components/common/NotFoundIllustration";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Samarth Corporation",
  description:
    "The requested URL was not found on this server. Return to home or explore our industrial FRP engineering projects, chemical tanks, and turnkey solutions.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A1628]">
      {/* Background Decorative Grid and Gradients */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#FF6B00]/10 via-[#0047AB]/5 to-transparent blur-3xl rounded-full pointer-events-none -z-0" 
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Status Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#13233D] border border-slate-700/80 shadow-inner mb-4 sm:mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]" />
          </span>
          <span className="text-slate-300 font-mono-accent text-xs font-semibold tracking-wider uppercase">
            Error 404 • Connection Severed
          </span>
        </div>

        {/* Bespoke Illustration matching reference image with Samarth brand colors */}
        <div className="w-full max-w-[620px] sm:max-w-[680px] mb-4 sm:mb-6 transition-transform duration-300 hover:scale-[1.01]">
          <NotFoundIllustration />
        </div>

        {/* Primary Typography from Reference Image */}
        <div className="space-y-2.5 max-w-2xl px-2">
          <h1 className="text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
            The requested URL was not found on this server.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
            You can try the following links.
          </p>
        </div>

        {/* Primary Requested Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md">
          {/* 1. Home Button */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF6B00] hover:bg-[#e66000] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-[0_4px_24px_-4px_rgba(255,107,0,0.5)] transition-all duration-300 ease-out transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            id="notfound-home-btn"
          >
            <Home className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Home</span>
          </Link>

          {/* 2. Explore Projects Button */}
          <Link
            href="/products/industrial-projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D1C33]/90 hover:bg-[#13284A] text-slate-100 hover:text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-slate-700 hover:border-[#FF6B00]/70 shadow-lg hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
            id="notfound-projects-btn"
          >
            <Layers className="w-4 h-4 text-[#FF6B00] transition-transform duration-300 group-hover:rotate-12" />
            <span>Explore Projects</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Senior Engineering Polish: Quick Directory & Direct Help */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 w-full max-w-2xl">
          <p className="text-slate-400 font-mono-accent text-[11px] sm:text-xs tracking-wider uppercase mb-3">
            Popular Directories & Quick Access
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs">
            <Link
              href="/products"
              className="px-3 py-1.5 rounded-lg bg-[#0F1D32] hover:bg-[#152744] text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/frp-swimming-pool"
              className="px-3 py-1.5 rounded-lg bg-[#0F1D32] hover:bg-[#152744] text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500 transition-colors"
            >
              FRP Swimming Pools
            </Link>
            <Link
              href="/about"
              className="px-3 py-1.5 rounded-lg bg-[#0F1D32] hover:bg-[#152744] text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500 transition-colors"
            >
              About Samarth
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-lg bg-[#0F1D32] hover:bg-[#152744] text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-500 transition-colors"
            >
              Contact Support
            </Link>
          </div>

          {/* Quick Technical Help line */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Need direct technical assistance?</span>
            <a
              href="tel:+919967360909"
              className="text-[#FF6B00] hover:underline font-medium inline-flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>+91 99673 60909</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
