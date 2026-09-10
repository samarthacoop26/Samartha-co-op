"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  ShieldCheck,
  ArrowRight,
  Phone,
  Compass,
  Award,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export function BoatHero() {
  const { openQuoteModal } = useQuoteModal();

  const handleOpenRFQ = () => {
    openQuoteModal({
      productName: "FRP Marine Craft & Boats",
      title: "RFQ: Custom FRP Boat / Marine Vessel Fabrication",
      message:
        "I would like to inquire about specifications, hull design, seating capacity, outboard engine options, pricing, and manufacturing delivery timelines for FRP Boats.",
    });
  };

  return (
    <section className="relative w-full bg-[#0A1628] text-white overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-gray-800">
      {/* Background Graphic & Ambient Lighting */}
      <div className="absolute inset-0 bg-radial-at-t from-slate-900/60 via-[#0A1628] to-[#060D17] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Value Props, CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="type-eyebrow text-white text-[11px] sm:text-xs tracking-wider">
                Naval Composite Engineering &bull; IRS &amp; ISO 12217 Standards
              </span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="type-h1 text-white tracking-tight leading-tight">
              FRP Boats, Patrol Craft &amp; Commercial Marine Vessels
            </h1>

            {/* Subtitle */}
            <p className="type-subheading text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Precision molded, unsinkable fiberglass composite hulls engineered for disaster rescue, coastal security, tourist transport, commercial fishing, and high-speed watersports. Built with marine-grade ISO-NPG resins for 30+ years of zero-rot seaworthiness.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="type-eyebrow text-slate-400 block text-[10px]">Buoyancy</span>
                <span className="type-spec text-sm sm:text-base font-bold text-emerald-400">100% Unsinkable</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="type-eyebrow text-slate-400 block text-[10px]">Hull Speed</span>
                <span className="type-spec text-sm sm:text-base font-bold text-[#FF6B00]">Up to 45 Knots</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="type-eyebrow text-slate-400 block text-[10px]">Rot / Rust</span>
                <span className="type-spec text-sm sm:text-base font-bold text-white">0% Corrosion</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="type-eyebrow text-slate-400 block text-[10px]">Design Life</span>
                <span className="type-spec text-sm sm:text-base font-bold text-slate-200">30+ Years</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleOpenRFQ}
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-6 py-3.5 rounded-xl type-btn text-xs font-bold transition-all transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(255,107,0,0.5)] cursor-pointer group"
              >
                <span>REQUEST NAVAL QUOTE / CAD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#fleet-catalog"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-3.5 rounded-xl type-btn text-xs font-semibold transition-colors"
              >
                <Compass className="w-4 h-4 text-[#FF6B00]" />
                <span>EXPLORE FLEET MODELS</span>
              </a>

              <a
                href={`tel:${CONTACT_CONFIG.departments.sales.phone}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-[#FF6B00] px-3 py-2 text-xs font-mono-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>{CONTACT_CONFIG.departments.sales.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-slate-900 group">
              
              {/* Main Boat Action Image */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/products/frp-boat-hero.jpg"
                  alt="High Speed FRP Composite Coastal Patrol and Speed Boat"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-black/30" />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                  <Anchor className="w-3 h-3 text-[#FF6B00]" />
                  <span>Heavy Duty Deep-Vee Monocoque</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/90 backdrop-blur-md text-slate-950 font-bold text-[11px] rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Positive Flotation
                </span>
              </div>

              {/* Bottom In-Image Spec Card */}
              <div className="p-4 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-accent text-[#FF8C33] font-bold uppercase tracking-wider">
                    Naval Fabrication Scope
                  </span>
                  <span className="text-slate-400 font-mono-accent text-[11px]">Length: 12ft – 42ft</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Precision contact molding &amp; vacuum infusion with Lloyds/IRS approved marine resins, PU foam-filled double bottoms, and 316 stainless steel rigging.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <Award className="w-3 h-3" />
                    Sea-Trial Tested
                  </span>
                  <span>&bull;</span>
                  <span>Pan-India Trailer Dispatch</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Slanted Breadcrumb Bar Pinned to Bottom-Right */}
      <div className="absolute bottom-0 right-0 z-20">
        <div
          className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2 px-6 sm:px-10 flex items-center gap-2 shadow-md rounded-tl-lg"
          style={{
            clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="opacity-60">/</span>
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-[#0A1628]">FRP Boats &amp; Marine Craft</span>
        </div>
      </div>
    </section>
  );
}
