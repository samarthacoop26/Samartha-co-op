"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, Clock, FileText, Copy, Check, ShieldCheck, MapPin } from "lucide-react";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export function ConsolidatedContactInfo() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const { sales, quotations } = CONTACT_CONFIG.departments;

  return (
    <div className="bg-white rounded-xl border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-7 sm:p-9 lg:p-10">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#0A1628] tracking-tight">
          Direct Key Contacts & Inquiries
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Reach our leadership and technical engineering desk directly for instant assistance.
        </p>
      </div>

      {/* Main Grid: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pb-8 border-b border-gray-200">
        
        {/* Contact 1: Vishal Gadade */}
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-2">
            <h3 className="text-lg font-bold text-[#0A1628]">
              Vishal Gadade
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Sales, Technical Feasibility, PP/FRP Lining & Turnkey Projects
            </p>
          </div>

          <div className="space-y-3 pt-1">
            {/* Phone */}
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-[#FF6B00]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Direct Mobile</span>
                  <a href={`tel:${sales.phone}`} className="text-sm font-semibold text-gray-900 hover:text-[#FF6B00] transition-colors">
                    {sales.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(sales.phoneDisplay, "sales-phone")}
                className="text-xs text-gray-400 hover:text-gray-700 p-1.5 transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedKey === "sales-phone" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center text-green-600">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">WhatsApp Chat</span>
                  <a 
                    href={`https://wa.me/${sales.whatsapp}?text=${encodeURIComponent("Hi Vishal Sir, I would like to inquire about PP/FRP products and quotation.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors"
                  >
                    {sales.whatsappDisplay}
                  </a>
                </div>
              </div>
              <a 
                href={`https://wa.me/${sales.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-green-600 hover:underline px-2 py-1"
              >
                Chat &rarr;
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Official Email</span>
                  <a href={`mailto:${sales.email}`} className="text-sm font-semibold text-gray-900 hover:text-[#FF6B00] transition-colors">
                    {sales.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(sales.email, "sales-email")}
                className="text-xs text-gray-400 hover:text-gray-700 p-1.5 transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedKey === "sales-email" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Contact 2: Ramesh Gadade */}
        <div className="space-y-4">
          <div className="border-b border-gray-100 pb-2">
            <h3 className="text-lg font-bold text-[#0A1628]">
              Ramesh Gadade
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Commercial Quotations, Erection Works & General Inquiries
            </p>
          </div>

          <div className="space-y-3 pt-1">
            {/* Phone */}
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-[#FF6B00]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Direct Mobile</span>
                  <a href={`tel:${quotations.phone}`} className="text-sm font-semibold text-gray-900 hover:text-[#FF6B00] transition-colors">
                    {quotations.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(quotations.phoneDisplay, "ramesh-phone")}
                className="text-xs text-gray-400 hover:text-gray-700 p-1.5 transition-colors cursor-pointer"
                title="Copy phone"
              >
                {copiedKey === "ramesh-phone" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between py-2 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-purple-50 flex items-center justify-center text-purple-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Formal Quotations & BOQs</span>
                  <a href={`mailto:${quotations.email}`} className="text-sm font-semibold text-gray-900 hover:text-[#FF6B00] transition-colors">
                    {quotations.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(quotations.email, "quote-email")}
                className="text-xs text-gray-400 hover:text-gray-700 p-1.5 transition-colors cursor-pointer"
                title="Copy email"
              >
                {copiedKey === "quote-email" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Working Hours */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Operating Hours</span>
                  <span className="text-xs font-semibold text-gray-800">
                    {CONTACT_CONFIG.workingHours.days}: {CONTACT_CONFIG.workingHours.timing}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row: Statutory Registrations Grid */}
      <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div className="bg-[#FAFAFC] border border-gray-200 rounded-lg p-3">
          <span className="text-[10px] font-bold text-gray-500 uppercase block">GSTIN</span>
          <span className="font-bold font-mono text-[#0A1628] block mt-0.5">{CONTACT_CONFIG.gstin}</span>
        </div>
        <div className="bg-[#FAFAFC] border border-gray-200 rounded-lg p-3">
          <span className="text-[10px] font-bold text-gray-500 uppercase block">PAN</span>
          <span className="font-bold font-mono text-[#0A1628] block mt-0.5">{CONTACT_CONFIG.pan}</span>
        </div>
        <div className="bg-[#FAFAFC] border border-gray-200 rounded-lg p-3">
          <span className="text-[10px] font-bold text-gray-500 uppercase block">UDYAM (MSME)</span>
          <span className="font-bold font-mono text-[#0A1628] block mt-0.5">{CONTACT_CONFIG.msmeRegNo}</span>
        </div>
        <div className="bg-[#FAFAFC] border border-gray-200 rounded-lg p-3">
          <span className="text-[10px] font-bold text-gray-500 uppercase block">ESIC / PF</span>
          <span className="font-bold font-mono text-[#0A1628] block mt-0.5">{CONTACT_CONFIG.pfRegNo}</span>
        </div>
      </div>

    </div>
  );
}
