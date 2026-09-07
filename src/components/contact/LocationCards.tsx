"use client";

import { useState } from "react";
import { MapPin, ExternalLink, Copy, Check, Building, Factory } from "lucide-react";
import { CONTACT_CONFIG, LocationInfo } from "@/data/contactConfig";

export function LocationCards() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (loc: LocationInfo) => {
    const fullText = `${loc.name}, ${loc.addressLine1}, ${loc.addressLine2}, ${loc.cityStateZip}, ${loc.country}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(loc.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#0A1628] tracking-tight">
          Our Facilities & Locations
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Registered office and manufacturing plant locations with interactive map directions.
        </p>
      </div>

      {/* Grid of Location Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {CONTACT_CONFIG.locations.map((loc) => {
          return (
            <div
              key={loc.id}
              className="bg-white rounded border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between"
            >
              {/* Card Details */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-orange-50 text-[#FF6B00] flex items-center justify-center">
                      {loc.type === "office" ? <Building className="w-5 h-5" /> : <Factory className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B00]">
                        {loc.badge}
                      </span>
                      <h3 className="text-lg font-bold text-[#0A1628]">
                        {loc.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Address block */}
                <div className="text-sm text-gray-600 space-y-0.5 pl-0.5">
                  <p className="font-semibold text-gray-900">{loc.addressLine1}</p>
                  <p>{loc.addressLine2}</p>
                  <p>{loc.cityStateZip}, {loc.country}</p>
                </div>

                {/* Operating hours & Action buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs border-t border-gray-100">
                  <span className="text-gray-500">
                    Hours: <strong className="text-gray-700 font-semibold">{loc.operatingHours}</strong>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyAddress(loc)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium transition-colors cursor-pointer"
                    >
                      {copiedId === loc.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          <span className="text-green-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-gray-400" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={loc.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#FF6B00] hover:bg-[#e66000] text-white font-semibold transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-56 sm:h-64 bg-gray-100 border-t border-gray-200">
                <iframe
                  title={`Google Map for ${loc.name}`}
                  src={loc.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
