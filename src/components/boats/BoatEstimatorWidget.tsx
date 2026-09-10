"use client";

import React, { useState } from "react";
import {
  Compass,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export function BoatEstimatorWidget() {
  const { openQuoteModal } = useQuoteModal();

  const [vesselType, setVesselType] = useState<string>("Flood Relief & Rescue Craft");
  const [lengthClass, setLengthClass] = useState<string>("16ft – 21ft (4.8m – 6.4m)");
  const [engineClass, setEngineClass] = useState<string>("40 HP – 60 HP Outboard (OBM)");
  const [seatingCapacity, setSeatingCapacity] = useState<string>("6 to 10 Persons");
  const [accessories, setAccessories] = useState<string[]>([
    "Heavy-Duty Rubber D-Fender Rub Rail",
    "Positive Buoyancy PU Foam Core",
  ]);

  const toggleAccessory = (item: string) => {
    if (accessories.includes(item)) {
      setAccessories(accessories.filter((a) => a !== item));
    } else {
      setAccessories([...accessories, item]);
    }
  };

  const handleRequestQuote = () => {
    const configSummary = `Vessel Type: ${vesselType}\nLength: ${lengthClass}\nEngine: ${engineClass}\nCapacity: ${seatingCapacity}\nSelected Rigging Options: ${
      accessories.length > 0 ? accessories.join(", ") : "Standard Hull Rigging"
    }`;

    openQuoteModal({
      productName: `Custom ${vesselType}`,
      title: `Custom Naval Quote: ${vesselType}`,
      message: `I would like to receive an official technical proposal, CAD drawing, and pricing for the following boat configuration:\n\n${configSummary}\n\nPlease include estimated delivery timeline and sea-trial testing details.`,
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="bg-[#0A1628] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-mono-accent text-[#FF8C33] border border-white/15">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Vessel Configurator</span>
              </div>

              <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Configure Your Custom FRP Marine Vessel
              </h2>

              <p className="type-subheading text-slate-300 text-xs sm:text-sm leading-relaxed">
                Select your operational vessel class, hull dimensions, propulsion category, and outfitting options. Our naval composite engineers will generate a customized technical proposal and CAD layout within 24 hours.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IRS / ISO 12217 Naval Stability Compliant</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sea Trials &amp; Factory Inspection Included</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Custom Trailer Delivery Across All Indian Ports &amp; States</span>
                </div>
              </div>
            </div>

            {/* Right Configurator Form (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-700/80 space-y-5">
              
              {/* 1. Vessel Type */}
              <div>
                <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                  1. Select Vessel Category:
                </label>
                <select
                  value={vesselType}
                  onChange={(e) => setVesselType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                >
                  <option value="Flood Relief & Rescue Craft">Flood Relief &amp; Disaster Rescue Boat (NDRF/SDRF)</option>
                  <option value="Coastal Patrol Speedboat">Coastal Patrol &amp; Marine Police Speedboat</option>
                  <option value="Passenger Ferry / Water Taxi">Passenger Ferry &amp; Tourist Water Taxi (10–35 Seats)</option>
                  <option value="Luxury Sports Motorboat">Luxury Sports Speedboat &amp; Wakeboard Craft</option>
                  <option value="Commercial Fishing Trawler">Commercial Fishing Boat with Insulated Holds</option>
                  <option value="Recreational Pedal Boat / Kayak">Amusement Park Pedal Boat / Safari Rowboat</option>
                </select>
              </div>

              {/* 2. Hull Length & Capacity (2 Cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                    2. Hull Length (LOA):
                  </label>
                  <select
                    value={lengthClass}
                    onChange={(e) => setLengthClass(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                  >
                    <option value="12ft – 15ft (3.6m – 4.5m)">12ft – 15ft (Compact Rescue / Angling)</option>
                    <option value="16ft – 21ft (4.8m – 6.4m)">16ft – 21ft (Standard Patrol / Rescue)</option>
                    <option value="22ft – 28ft (6.7m – 8.5m)">22ft – 28ft (Twin Engine / High Speed)</option>
                    <option value="30ft – 42ft (9.0m – 13.0m)">30ft – 42ft (Passenger Ferry / Heavy Patrol)</option>
                  </select>
                </div>

                <div>
                  <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                    3. Propulsion / Engine Range:
                  </label>
                  <select
                    value={engineClass}
                    onChange={(e) => setEngineClass(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                  >
                    <option value="25 HP – 40 HP Outboard (OBM)">25 HP – 40 HP Single Outboard</option>
                    <option value="40 HP – 90 HP Outboard (OBM)">40 HP – 90 HP Single Outboard</option>
                    <option value="Twin 115 HP – 150 HP Outboards">Twin 115 HP – 150 HP Dual Outboards</option>
                    <option value="Twin 200 HP – 300 HP Outboards">Twin 200 HP – 300 HP High-Speed Outboards</option>
                    <option value="Inboard Marine Diesel (45 HP – 120 HP)">Inboard Marine Diesel Shaft Drive</option>
                    <option value="Electric Trolling Motor / Human Pedal">Electric Eco-Drive / Human Pedal</option>
                  </select>
                </div>
              </div>

              {/* 3. Optional Marine Accessories & Rigging */}
              <div>
                <label className="type-eyebrow text-slate-300 block mb-2 text-xs">
                  4. Optional Marine Rigging &amp; Gear:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Heavy-Duty Rubber D-Fender Rub Rail",
                    "Positive Buoyancy PU Foam Core",
                    "Hydraulic Marine Steering & Helm",
                    "Garmin GPS Chartplotter & Sounder",
                    "Rigid FRP Hardtop / Canopy Roof",
                    "Marine Grade 316 Stainless Railings",
                    "Custom High-Visibility Livery Paint",
                    "Road Transport Boat Trailer with Winch",
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
