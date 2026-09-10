"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LifeBuoy,
  Shield,
  Users,
  Compass,
  Fish,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Ruler,
  Weight,
  Layers,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export interface BoatModel {
  id: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: {
    length: string;
    beam: string;
    draft: string;
    capacity: string;
    engineHP: string;
    speed: string;
    weight: string;
    hullType: string;
  };
  features: string[];
  recommendedUse: string[];
  popular?: boolean;
}

export const BOAT_FLEET: BoatModel[] = [
  {
    id: "disaster-rescue-boat",
    category: "rescue",
    name: "NDRF / SDRF Flood Rescue & Disaster Boat",
    tagline: "Heavy-Duty Flood Relief & Life-Saving Monocoque Craft",
    description:
      "Engineered specifically for disaster management authorities, fire brigades, and municipal flood relief operations. Built with high-buoyancy PU foam sandwich chambers that keep the boat fully floating and operational even if swamped with water.",
    image: "/images/products/frp-boat-factory.jpg",
    specs: {
      length: "4.5m – 6.5m (15ft – 21ft)",
      beam: "1.8m – 2.2m (6ft – 7.2ft)",
      draft: "0.25m – 0.35m (Shallow Water)",
      capacity: "6 to 12 Persons / 950 kg",
      engineHP: "25 HP to 60 HP Outboard (OBM)",
      speed: "18 – 28 Knots",
      weight: "220 kg – 380 kg (Bare Hull)",
      hullType: "Modified V-Hull with Lifting Strakes",
    },
    features: [
      "100% Unsinkable with Closed-Cell Polyurethane Foam Flotation",
      "Heavy Duty Heavy-Wall Gunwale Rubber D-Fender Guard",
      "Non-Skid Diamond Pattern Cockpit Self-Draining Floor",
      "316 Stainless Steel Bow & Stern Towing Eyes with Rigging Cleats",
      "Built-in Storage Lockers for Life Jackets, Oars & First Aid Kits",
      "Marine Grade ISO-NPG High-Visibility Safety Orange Livery",
    ],
    recommendedUse: [
      "National & State Disaster Response (NDRF / SDRF)",
      "Municipal Corporation Flood Management",
      "Fire & Emergency Rescue Services",
      "Dam, Barrage & Reservoir Inspection",
    ],
    popular: true,
  },
  {
    id: "patrol-surveillance-craft",
    category: "patrol",
    name: "Coastal Patrol & Marine Police Speedboat",
    tagline: "High-Speed Deep-Vee Tactical Interception Vessel",
    description:
      "High-speed tactical interceptor and security patrol craft designed for coastal security agencies, port trusts, and marine police. Features deep-vee deadrise for high-speed rough sea handling, optional ballistic shielding, and ergonomic enclosed or semi-enclosed wheelhouses.",
    image: "/images/products/frp-boat-hero.jpg",
    specs: {
      length: "7.5m – 11.5m (25ft – 38ft)",
      beam: "2.6m – 3.2m (8.5ft – 10.5ft)",
      draft: "0.55m – 0.85m",
      capacity: "6 to 10 Armed Crew / Personnel",
      engineHP: "Twin 150 HP to 300 HP Outboard / Inboard",
      speed: "35 – 45+ Knots",
      weight: "1,450 kg – 2,800 kg",
      hullType: "Deep-Vee 22° Deadrise with Multi-Strakes",
    },
    features: [
      "Heavy Composite Stringer Grid for High-Impact Wave Slamming",
      "Enclosed Wheelhouse with Toughened Marine Glass Windshields",
      "Dual Heavy-Duty Transom Engine Mountings with Tie-Bars",
      "Radar Arch with Mounts for Marine Radar, GPS & VHF Antennas",
      "Shock-Absorbing Helm Seats & Integrated Navigational Console",
      "High Capacity 300L–600L Aluminum/FRP Fuel Tank",
    ],
    recommendedUse: [
      "Marine Police & Coastal Border Security",
      "Major Port Trust Security & Pilot Boarding",
      "Fisheries Department Anti-Poaching Patrol",
      "Offshore Industrial Facility Security",
    ],
    popular: true,
  },
  {
    id: "passenger-tourism-ferry",
    category: "passenger",
    name: "Commercial Passenger Ferry & Tourist Water Taxi",
    tagline: "High-Stability Covered Passenger Boat for Lakes & Coastal Rivers",
    description:
      "Spacious, fuel-efficient composite passenger craft tailored for ecotourism resorts, inland waterways authorities, lake tourism boards, and water transport operators. Designed with cathedral/semi-displacement hulls for maximum lateral stability and comfort.",
    image: "/images/about/plant-facility.jpg",
    specs: {
      length: "6.0m – 13.0m (20ft – 42ft)",
      beam: "2.3m – 3.6m (7.5ft – 12ft)",
      draft: "0.35m – 0.60m",
      capacity: "10 to 35 Seated Passengers",
      engineHP: "40 HP to 150 HP (Single/Twin OBM)",
      speed: "12 – 22 Knots",
      weight: "650 kg – 2,200 kg",
      hullType: "High-Stability Semi-Cathedral / Tri-Hull",
    },
    features: [
      "Rigid FRP Hardtop Roof Canopy with Stainless Steel Uprights",
      "Comfortable UV-Resistant Ergonomic Marine Seating Benches",
      "Non-Slip Water-Repellent Cockpit Decking with Scupper Drains",
      "Full Passenger Handrail Perimeter in Grade 316 Stainless Steel",
      "Under-Seat Lifejacket Stowage Compartments with Marine Locks",
      "LED Deck Illumination & Integrated PA Audio System Provision",
    ],
    recommendedUse: [
      "State Tourism Development Corporations (STDC)",
      "Luxury Island & Lake Eco-Resorts",
      "River Safari, Mangrove Tours & Dolphin Sightseeing",
      "Inter-Island Passenger Transit & Water Taxis",
    ],
  },
  {
    id: "sports-motorboat",
    category: "sports",
    name: "Luxury FRP Speedboat & Offshore Sports Motorboat",
    tagline: "Aerodynamic Planing Hull for Private Recreation & Watersports",
    description:
      "Sleek and sporty high-performance speedboats crafted for watersports enthusiasts, yacht clubs, hotel water-skiing operations, and private recreation. Features precision hydro-dynamic strakes for immediate planing, rapid throttle response, and luxury cockpit styling.",
    image: "/images/products/frp-boat-hero.jpg",
    specs: {
      length: "5.0m – 8.5m (16.5ft – 28ft)",
      beam: "2.1m – 2.5m (6.8ft – 8.2ft)",
      draft: "0.30m – 0.45m",
      capacity: "4 to 8 Persons",
      engineHP: "60 HP to 200 HP Outboard",
      speed: "30 – 42 Knots",
      weight: "480 kg – 950 kg",
      hullType: "High-Performance Monohull Planing V",
    },
    features: [
      "Center Console or Dual-Console Ergonomic Steering Cockpit",
      "Custom Metallic/Pearl Marine Gelcoat Dual-Tone Graphics",
      "Water-Ski & Wakeboard Stainless Steel Towing Pylon",
      "Marine Bluetooth Sound System with Waterproof Speakers",
      "Retractable Bimini Sunshade & Fold-Down Stern Swim Ladder",
      "Hydraulic Steering System with Tilt Marine Steering Wheel",
    ],
    recommendedUse: [
      "Private Villa & Waterfront Homeowners",
      "Watersports Clubs (Wakeboarding, Water-Skiing, Tube Towing)",
      "Luxury Resort Guest Recreation Fleet",
      "Marina & Yacht Club Day Cruising",
    ],
  },
  {
    id: "fishing-trawler",
    category: "fishing",
    name: "FRP Commercial Fishing Boat & Trawler",
    tagline: "Insulated Fish Holds & Low-Resistance Heavy Seakeeping Hull",
    description:
      "Sturdy commercial composite fishing craft designed to replace traditional timber boats. Completely eliminates shipworm (Teredo) rot and dry rot decay, while cutting fuel consumption by 25% thanks to lower hull friction and optimized hydrodynamics.",
    image: "/images/about/defence-railway.jpg",
    specs: {
      length: "7.0m – 11.0m (23ft – 36ft)",
      beam: "2.4m – 3.4m (8ft – 11ft)",
      draft: "0.50m – 0.90m",
      capacity: "4 to 8 Crew + 3 to 6 Tons Catch",
      engineHP: "Inboard Diesel (20 HP – 110 HP) / OBM",
      speed: "8 – 16 Knots",
      weight: "1,100 kg – 2,500 kg",
      hullType: "Displacement / Semi-Displacement Heavy Keel",
    },
    features: [
      "PU Foam Insulated High-Density Fish Hold (Retains Ice for 48+ Hrs)",
      "Reinforced Gunwales with Net Roller Mountings & Heavy D-Fenders",
      "Stainless Steel 316 Rudder, Propeller Shaft & Stern Tube Assembly",
      "Heavy Laminated Keel Skeg for Beach Landing & Grounding Protection",
      "Battery Charger & Navigation Lights with Solar Panel Mount",
      "Anti-Fouling Bottom Paint System for Extended In-Water Mooring",
    ],
    recommendedUse: [
      "Coastal & Deep-Sea Marine Fisheries",
      "Aquaculture & Fish Farming Feed Workboats",
      "Estuary & Backwater Gillnet & Trawl Operations",
      "Harbor Support & Mooring Line Handling",
    ],
  },
  {
    id: "pedal-rowboat-kayak",
    category: "recreation",
    name: "Amusement Park Pedal Boats, Safari Rowboats & Kayaks",
    tagline: "Zero-Maintenance Recreational Watercraft for Theme Parks & Boating Lakes",
    description:
      "Durable, colorful, and fun-filled FRP pedal craft and rowboats designed for municipal boating clubs, amusement parks, dams, and hotel lakes. Molded in high-impact composite with UV-stabilized pigments and stainless steel paddle mechanisms.",
    image: "/images/about/stockist-materials.jpg",
    specs: {
      length: "2.8m – 4.2m (9ft – 14ft)",
      beam: "1.4m – 1.8m (4.5ft – 6ft)",
      draft: "0.15m – 0.25m",
      capacity: "2-Seater / 4-Seater / 6-Seater",
      engineHP: "Human Pedal / Electric Trolling Motor Option",
      speed: "3 – 6 Knots",
      weight: "85 kg – 180 kg",
      hullType: "Catamaran Twin-Pontoon High Stability",
    },
    features: [
      "Twin Catamaran Pontoon Design for Virtual Anti-Capsize Stability",
      "Grade 304 Stainless Steel Crankshaft, Rudder & Propulsion Paddles",
      "Vibrant UV-Resistant Color Pigments (No Fading in Intense Sun)",
      "Built-in Canopy Frame & Cup Holders for Leisure Cruising",
      "Ergonomic Backrests with Self-Bailing Footwell Drainage",
      "Custom Themed Shapes (Swan, Pelican, Classic Sports Car, Speedster)",
    ],
    recommendedUse: [
      "Municipal & City Boating Lakes & Water Bodies",
      "Amusement Parks, Water Parks & Adventure Resorts",
      "Forest Safari & Eco-Tourism Lakes",
      "Commercial Boat Rental Operations",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Marine Vessels", icon: Compass },
  { id: "rescue", label: "Flood & Disaster Rescue", icon: LifeBuoy },
  { id: "patrol", label: "Patrol & Speedboats", icon: Shield },
  { id: "passenger", label: "Passenger & Tourism", icon: Users },
  { id: "sports", label: "Sports & Motorboats", icon: Sparkles },
  { id: "fishing", label: "Commercial Fishing", icon: Fish },
  { id: "recreation", label: "Pedal Boats & Kayaks", icon: Layers },
];

export function BoatFleetCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { openQuoteModal } = useQuoteModal();

  const filteredBoats =
    selectedCategory === "all"
      ? BOAT_FLEET
      : BOAT_FLEET.filter((b) => b.category === selectedCategory);

  const handleRequestQuote = (boat: BoatModel) => {
    openQuoteModal({
      productName: boat.name,
      title: `RFQ: ${boat.name}`,
      message: `I would like to request technical drawings, engine compatibility options, pricing, and manufacturing lead time for ${boat.name} (${boat.specs.length}, Capacity: ${boat.specs.capacity}).`,
    });
  };

  return (
    <section id="fleet-catalog" className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
              <span>Complete Naval Fleet Range</span>
            </div>
            <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
              FRP Boats &amp; Vessels Catalog ({BOAT_FLEET.length} Classes)
            </h2>
            <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2 max-w-3xl">
              From high-buoyancy disaster flood relief craft to high-speed coastal interceptors and commercial tourism ferries, all hulls are precision molded to rigorous IRS and ISO marine standards.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-mono-accent text-gray-600 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Custom Marine CAD &amp; Outboard Rigging Available</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-[#0A1628] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#FF6B00]" : "text-gray-500"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Boat Cards Grid */}
        <div className="space-y-8 mt-2">
          {filteredBoats.map((boat, idx) => (
            <div
              key={boat.id}
              className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#FF6B00]/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Image & Key Badges (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-slate-900 overflow-hidden flex flex-col justify-between p-4">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />

                  {/* Top Floating Tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                      <span>Class {String(idx + 1).padStart(2, "0")}</span>
                    </span>

                    {boat.popular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FF6B00] text-white text-[11px] font-bold rounded-full shadow-xs">
                        High Demand
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="relative z-10 space-y-2 pt-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-xs font-mono-accent text-emerald-300 border border-emerald-500/30">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        {boat.specs.capacity}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-xs font-mono-accent text-orange-200 border border-orange-500/30">
                        <Gauge className="w-3.5 h-3.5 text-[#FF6B00]" />
                        {boat.specs.speed}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-snug">
                      Lloyds/IRS Approved Marine Resin &bull; Monolithic Monocoque Hull
                    </p>
                  </div>
                </div>

                {/* Content & Specs (7 cols) */}
                <div className="lg:col-span-7 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white space-y-5">
                  <div>
                    {/* Eyebrow & Name */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="type-eyebrow text-[#FF6B00] bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-100 text-[11px]">
                        {boat.tagline}
                      </span>
                    </div>

                    <h3 className="type-h3 text-xl sm:text-2xl font-bold text-[#0A1628] group-hover:text-[#FF6B00] transition-colors mb-2">
                      {boat.name}
                    </h3>

                    <p className="type-body text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {boat.description}
                    </p>

                    {/* Technical Specs 4-Box Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 mb-4">
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Ruler className="w-3 h-3 text-gray-400" />
                          Length (LOA)
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {boat.specs.length}
                        </span>
                      </div>
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Compass className="w-3 h-3 text-gray-400" />
                          Beam (Width)
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {boat.specs.beam}
                        </span>
                      </div>
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Gauge className="w-3 h-3 text-gray-400" />
                          Engine Power
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {boat.specs.engineHP}
                        </span>
                      </div>
                      <div>
                        <span className="type-eyebrow text-[10px] text-gray-500 block flex items-center gap-1">
                          <Weight className="w-3 h-3 text-gray-400" />
                          Hull Weight
                        </span>
                        <span className="type-spec text-xs font-bold text-gray-900 block mt-0.5">
                          {boat.specs.weight}
                        </span>
                      </div>
                    </div>

                    {/* Key Engineering Features */}
                    <div className="space-y-1.5 mb-4">
                      <span className="type-eyebrow text-gray-500 block text-[11px]">
                        Standard Naval Outfitting &amp; Structural Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {boat.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-1.5 text-xs text-gray-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="type-spec leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Deployments */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="type-eyebrow text-[10px] text-gray-500 mr-1">Best Suited For:</span>
                      {boat.recommendedUse.map((use, uIdx) => (
                        <span
                          key={uIdx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded-md font-medium"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-gray-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      <span>IRS / ISO Hull Survey Ready &bull; Pan-India Transport</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRequestQuote(boat)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A1628] hover:bg-[#FF6B00] text-white type-btn text-xs py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-xs group/btn"
                    >
                      <span>Request Quote &amp; CAD Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
