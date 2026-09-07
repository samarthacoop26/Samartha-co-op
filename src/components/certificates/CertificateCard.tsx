"use client";

import React from "react";
import { CertificateItem } from "@/data/certificatesData";
import { Eye } from "lucide-react";

interface CertificateCardProps {
  item: CertificateItem;
  onSelect: (item: CertificateItem) => void;
}

export function CertificateCard({ item, onSelect }: CertificateCardProps) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-none border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
    >
      {/* ── Certificate Preview Sheet ── */}
      <div className="relative aspect-[1/1.28] w-full bg-[#fdfdfd] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none border-b border-gray-100">
        {/* Subtle Paper Border */}
        <div className="absolute inset-2.5 border border-slate-200/90 pointer-events-none" />

        {/* ── Document Header ── */}
        <div className="relative z-10 text-center pt-1">
          {item.category === "iso" ? (
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                  {item.issuingBodyOrClient}
                </span>
              </div>
              <p className="text-[8px] font-mono text-slate-500">
                Reg: {item.registrationOrRefNo}
              </p>
            </div>
          ) : (
            <div className="space-y-1 border-b border-slate-200 pb-2">
              <p className="text-[9.5px] font-black uppercase text-slate-900 tracking-tight line-clamp-1">
                {item.issuingBodyOrClient}
              </p>
              <div className="flex items-center justify-between text-[7.5px] font-mono text-slate-500 px-1">
                <span>Ref: {item.registrationOrRefNo.substring(0, 16)}</span>
                <span>Date: {item.issueDate}</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Document Body Preview ── */}
        <div className="relative z-10 my-auto py-2 px-1 text-center">
          {item.category === "iso" ? (
            <div className="space-y-2">
              <div className="inline-block px-2.5 py-0.5 bg-slate-100 rounded border border-slate-200">
                <p className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
              <p className="text-[8px] text-slate-600 font-medium leading-relaxed line-clamp-3 italic">
                &ldquo;{item.documentContent.bodyParagraphs[0]}&rdquo;
              </p>
            </div>
          ) : (
            <div className="space-y-1.5 text-left">
              <p className="text-[7.5px] font-bold text-slate-500 uppercase tracking-widest">
                {item.documentContent.toWhom || "To Whomsoever It May Concern"}
              </p>
              <p className="text-[8px] text-slate-700 font-medium leading-relaxed line-clamp-4">
                {item.documentContent.bodyParagraphs[0]}
              </p>
            </div>
          )}
        </div>

        {/* ── Document Footer / Signature ── */}
        <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-100">
          <div className="text-left">
            <div className="w-6 h-6 rounded-full border border-dashed border-emerald-600 flex items-center justify-center text-[6px] font-bold text-emerald-700 uppercase">
              SEAL
            </div>
          </div>

          <div className="text-right">
            <span className="font-serif italic text-[8.5px] text-slate-800 font-semibold block underline decoration-slate-300">
              {item.documentContent.signatory.name}
            </span>
            <p className="text-[6.5px] text-slate-500 uppercase leading-none">
              Authorized Signatory
            </p>
          </div>
        </div>

        {/* ── Minimal Hover Overlay ── */}
        <div className="absolute inset-0 bg-[#0A1628]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-1.5 z-20 text-white">
          <div className="w-8 h-8 rounded-full bg-[#FF6B00] flex items-center justify-center shadow">
            <Eye className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider">
            View Certificate
          </span>
        </div>
      </div>

      {/* ── Signature Yellow Label Banner (Faithful to Reference Screenshot) ── */}
      <div className="w-full bg-[#FFC107] group-hover:bg-[#FFB800] text-[#0A1628] py-3.5 px-3 text-center transition-colors flex items-center justify-center min-h-[50px]">
        <h3 className="text-xs sm:text-sm font-bold text-[#0A1628] line-clamp-2 leading-tight">
          {item.label}
        </h3>
      </div>
    </div>
  );
}
