"use client";

import React, { useState } from "react";
import {
  Waves,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function PoolEstimatorWidget() {
  const { openQuoteModal } = useQuoteModal();

  const [poolType, setPoolType] = useState<string>("Classic Family Leisure & Patio Pool");
  const [sizeClass, setSizeClass] = useState<string>("22ft x 11ft (6.7m x 3.3m)");
  const [installSite, setInstallSite] = useState<string>("Backyard / Garden In-Ground");
  const [accessories, setAccessories] = useState<string[]>([
    "IP68 Underwater LED Chroma-Lights",
    "Turnkey Sand Filtration Plant & Pump",
  ]);

  const toggleAccessory = (item: string) => {
    if (accessories.includes(item)) {
      setAccessories(accessories.filter((a) => a !== item));
    } else {
      setAccessories([...accessories, item]);
    }
  };

  const handleRequestQuote = () => {
    const configSummary = `Pool Model: ${poolType}\nDimensions: ${sizeClass}\nInstallation Site: ${installSite}\nSelected Package Accessories: ${
      accessories.length > 0 ? accessories.join(", ") : "Standard Shell & Filtration"
    }`;

    openQuoteModal({
      productName: `Custom ${poolType}`,
      title: `Custom Pool Estimate: ${poolType}`,
      message: `I would like to receive an official turnkey quote, CAD drawing layout, and installation schedule for the following pool configuration:\n\n${configSummary}\n\nPlease include plant room requirements, civil foundation guidelines, and delivery timeline.`,
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="bg-[#0A1628] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono-accent text-[#FF8C33] border border-white/15">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Pool Estimator</span>
              </div>

              <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Configure Your Dream Composite Swimming Pool
              </h2>

              <p className="type-subheading text-slate-300 text-xs sm:text-sm leading-relaxed">
                Select your preferred pool category, size dimensions, installation environment, and optional luxury upgrades. Our composite pool engineers will prepare a customized 3D layout, plumbing schematic, and quote.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Monolithic Zero-Leak Shell Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Turnkey Filtration Plant &amp; Underwater LEDs Included</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pan-India Factory Dispatch &amp; Crane Rigging Support</span>
                </div>
              </div>
            </div>

            {/* Right Configurator Form (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-700/80 space-y-5">
              
              {/* 1. Pool Type */}
              <div>
                <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                  1. Select Pool Design &amp; Model:
                </label>
                <select
                  value={poolType}
                  onChange={(e) => setPoolType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                >
                  <option value="Classic Family Leisure & Patio Pool">Classic Family Leisure &amp; Patio Pool (with Sunshelf)</option>
                  <option value="Urban Plunge & Terrace Rooftop Pool">Urban Plunge &amp; Terrace Rooftop Pool (Compact &amp; Light)</option>
                  <option value="Dual-Lane Lap & Fitness Training Pool">Dual-Lane Lap &amp; Fitness Training Pool (35ft Linear)</option>
                  <option value="Resort Infinity Edge & Overflow Pool">Resort Infinity Edge &amp; Overflow Pool (with Surge Tank)</option>
                  <option value="Plug & Play Containerized Modular Pool">Plug &amp; Play Containerized Modular Above-Ground Pool</option>
                  <option value="Hydrotherapy Whirlpool Jacuzzi Spa">Hydrotherapy Whirlpool Jacuzzi Spa (Contoured Loungers)</option>
                </select>
              </div>

              {/* 2. Dimensions & Install Site */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                    2. Pool Size / Dimension:
                  </label>
                  <select
                    value={sizeClass}
                    onChange={(e) => setSizeClass(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                  >
                    <option value="12ft x 8ft (3.6m x 2.4m) – Plunge">12ft x 8ft (Compact Plunge / Terrace)</option>
                    <option value="18ft x 9ft (5.5m x 2.7m) – Medium">18ft x 9ft (Medium Villa Courtyard)</option>
                    <option value="22ft x 11ft (6.7m x 3.3m) – Standard">22ft x 11ft (Standard Family Size)</option>
                    <option value="28ft x 12ft (8.5m x 3.6m) – Large">28ft x 12ft (Large Family / Resort)</option>
                    <option value="35ft x 10ft (10.5m x 3.0m) – Lap Pool">35ft x 10ft (Fitness Lap Pool)</option>
                    <option value="40ft+ Custom Resort Dimension">40ft+ Custom Commercial Spec</option>
                  </select>
                </div>

                <div>
                  <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                    3. Installation Environment:
                  </label>
                  <select
                    value={installSite}
                    onChange={(e) => setInstallSite(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                  >
                    <option value="Backyard / Garden In-Ground">Backyard / Garden In-Ground</option>
                    <option value="Rooftop / Terrace Slab (Engineered Light)">Rooftop / Terrace Slab (Engineered Light)</option>
                    <option value="Semi-Inground with Elevated Deck">Semi-Inground with Elevated Wooden Deck</option>
                    <option value="100% Above-Ground Steel Container Frame">100% Above-Ground Container Frame</option>
                    <option value="Indoor Wellness / Basement Pavilion">Indoor Wellness Pavilion</option>
                  </select>
                </div>
              </div>

              {/* 3. Optional Upgrades */}
              <div>
                <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                  4. Optional Luxury &amp; Equipment Upgrades:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "IP68 Underwater LED Chroma-Lights",
                    "Turnkey Sand Filtration Plant & Pump",
                    "Eco Saltwater Chlorinator & Ozonizer",
                    "All-Season Inverter Pool Heat Pump",
                    "Endless Swim Counter-Current Jet",
                    "8-Nozzle Hydrotherapy Back Massage",
                    "Grade 316 Stainless Steel Entry Ladder",
                    "Automatic Retractable Pool Safety Cover",
                  ].map((item) => {
                    const isChecked = accessories.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleAccessory(item)}
                        className={`flex items-center gap-2 p-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                          isChecked
                            ? "bg-[#FF6B00]/20 border border-[#FF6B00] text-white"
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                            isChecked
                              ? "bg-[#FF6B00] border-[#FF6B00] text-white"
                              : "border-slate-600"
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span className="truncate">{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white py-4 px-6 rounded-xl type-btn text-xs font-bold transition-all shadow-lg transform hover:-translate-y-0.5 cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>REQUEST OFFICIAL QUOTE FOR THIS CONFIGURATION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
