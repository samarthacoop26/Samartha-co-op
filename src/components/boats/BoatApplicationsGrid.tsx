"use client";

import React from "react";
import {
  ShieldAlert,
  Building2,
  Palmtree,
  Fish,
  Anchor,
  Sparkles,
} from "lucide-react";

export function BoatApplicationsGrid() {
  const applications = [
    {
      title: "Disaster Management & Flood Relief (NDRF / SDRF)",
      icon: ShieldAlert,
      tag: "Disaster Response",
      description:
        "High-buoyancy flood rescue craft deployed by state disaster response forces, civil defence, and fire brigades for emergency evacuation during monsoon floods and dam inundations.",
    },
    {
      title: "Marine Police, Port Trusts & Coastal Surveillance",
      icon: Anchor,
      tag: "Security & Patrol",
      description:
        "High-speed tactical interceptors, harbor master boarding craft, and anti-smuggling patrol boats with deep-vee hull geometry for all-weather rough sea operations.",
    },
    {
      title: "Lake Tourism, River Safari & Eco-Resorts",
      icon: Palmtree,
      tag: "Tourism & Hospitality",
      description:
        "Stable, silent, and covered passenger ferries, wildlife safari catamarans, and luxury water taxis operated by State Tourism Boards (STDC) and premium island resorts.",
    },
    {
      title: "Commercial Marine Fisheries & Mariculture",
      icon: Fish,
      tag: "Commercial Fisheries",
      description:
        "Long-range fishing trawlers, gillnet workboats, and sea-cage aquaculture support vessels featuring insulated fiberglass ice holds and low fuel burn.",
    },
    {
      title: "Municipal Boating Parks & Theme Resorts",
      icon: Building2,
      tag: "Civic & Amusement",
      description:
        "High-durability pedal craft, safari rowboats, and water-park themed boats delivering safe, zero-maintenance family entertainment across civic water bodies.",
    },
    {
      title: "Private Waterfront Villas & Watersports Clubs",
      icon: Sparkles,
      tag: "Recreation & Sports",
      description:
        "Luxury center-console speedboats, wakeboarding craft, and weekend cruising motorboats with customized gelcoat colors, plush marine leather, and sound systems.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#FF6B00] rounded-lg text-xs font-bold font-mono-accent uppercase tracking-wider mb-2">
            <span>Operational Deployments</span>
          </div>
          <h2 className="type-h2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] tracking-tight">
            Industries &amp; Government Sectors Served
          </h2>
          <p className="type-subheading text-gray-600 text-sm sm:text-base mt-2">
            Supplying standard and custom composite marine craft across government tenders, defence departments, municipal corporations, and private commercial enterprises across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-[#FF6B00]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center border border-orange-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="type-eyebrow text-[10px] text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="type-h3 text-base sm:text-lg font-bold text-[#0A1628] mb-2">
                    {app.title}
                  </h3>

                  <p className="type-body text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-mono-accent text-[#FF6B00] font-bold flex items-center gap-1">
                  <span>Custom Fabrication to Tender Specs &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
