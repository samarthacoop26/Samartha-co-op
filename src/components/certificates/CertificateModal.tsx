"use client";

import React, { useEffect } from "react";
import { CertificateItem } from "@/data/certificatesData";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { X, Printer, Download, ShieldCheck } from "lucide-react";

interface CertificateModalProps {
  item: CertificateItem | null;
  onClose: () => void;
}

export function CertificateModal({ item, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-200"
      >
        {/* ── Modal Header ── */}
        <div className="bg-[#0A1628] text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
          <div>
            <h3 className="type-h3 text-base text-white leading-tight">
              {item.title}
            </h3>
            <p className="type-spec text-xs text-gray-400 mt-0.5 font-mono-accent">
              Ref: {item.registrationOrRefNo}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              title="Print Certificate"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Realistic Certificate Sheet Content ── */}
        <div className="p-6 sm:p-10 bg-[#fafafa] overflow-y-auto max-h-[75vh]">
          <div className="bg-white border border-gray-300 shadow-sm p-6 sm:p-8 rounded-2xl relative text-slate-900">
            {/* Guilloche inner border */}
            <div className="absolute inset-3 border border-slate-300 rounded-xl pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 text-center border-b border-gray-200 pb-4 mb-6">
              <h2 className="type-h2 text-lg sm:text-xl uppercase text-slate-900 tracking-tight">
                {item.documentContent.header}
              </h2>
              <p className="type-eyebrow text-xs text-[#FF6B00] mt-1">
                {item.documentContent.subHeader}
              </p>
              <div className="mt-2 type-spec text-[11px] text-slate-500 flex items-center justify-center gap-4 font-mono-accent">
                <span>Date: {item.issueDate}</span>
                <span>•</span>
                <span>Ref: {item.registrationOrRefNo}</span>
              </div>
            </div>

            {/* Body */}
            <div className="relative z-10 space-y-4 type-body text-xs sm:text-sm text-slate-700 leading-relaxed">
              {item.documentContent.toWhom && (
                <div className="text-center font-bold text-xs uppercase tracking-widest text-slate-500 mb-2">
                  {item.documentContent.toWhom}
                </div>
              )}

              {item.documentContent.bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-justify leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <p>
                  <strong className="text-slate-900">Standard / Scope:</strong>{" "}
                  {item.standardOrScope}
                </p>
                <p>
                  <strong className="text-slate-900">Issuing Organization:</strong>{" "}
                  {item.issuingBodyOrClient}
                </p>
              </div>
            </div>

            {/* Footer / Signature */}
            <div className="relative z-10 mt-8 pt-4 border-t border-gray-200 flex items-end justify-between">
              <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Copy</span>
              </div>

              <div className="text-right">
                <p className="font-serif italic font-bold text-sm text-slate-900 underline decoration-slate-300">
                  {item.documentContent.signatory.name}
                </p>
                <p className="type-eyebrow text-[10px] text-slate-700">
                  {item.documentContent.signatory.designation}
                </p>
                <p className="type-footer text-[9px] text-slate-500">
                  {item.documentContent.signatory.organization}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Modal Footer ── */}
        <div className="bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between">
          <span className="type-footer text-xs text-gray-500">
            {CONTACT_CONFIG.companyName}
          </span>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
