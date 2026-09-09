"use client";

import React from "react";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { Award, Building2, CheckCircle2, ShieldCheck } from "lucide-react";

export function CompanyIntroSection() {
  const stats = [
    {
      value: "PP & FRP",
      label: "Engineering Specialists",
      subtext: "Tanks, blowers, scrubbers & lining",
      icon: Award,
    },
    {
      value: "Turnkey",
      label: "Erection & Projects",
      subtext: "ETP pipelines & maintenance",
      icon: CheckCircle2,
    },
    {
      value: "MIDC",
      label: "Taloja Works",
      subtext: "Dedicated fabrication facility",
      icon: Building2,
    },
    {
      value: "100%",
      label: "Compliance & Safety",
      subtext: "GST, UDYAM, ESIC & PF registered",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 lg:py-20 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/80 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span className="type-eyebrow text-[#FF6B00]">
              About Us
            </span>
          </div>
          <h2 className="type-h2 text-[#0A1628]">
            Trusted PP &amp; FRP Engineering Solutions, Manufacturing &amp; Turnkey Projects
          </h2>
        </div>

        {/* 2-Column Content + Stat Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Focused Introduction */}
          <div className="lg:col-span-7 space-y-4 type-body text-gray-700">
            <p>
              <strong className="text-[#0A1628] font-bold">
                {CONTACT_CONFIG.companyName}
              </strong>{" "}
              is a trusted PP &amp; FRP Engineering Solutions company specializing in the manufacturing,
              supply, installation, industrial maintenance, and turnkey project execution of
              high-performance PP and FRP systems.
            </p>

            <p>
              Our expertise extends across the{" "}
              <strong className="text-[#0A1628] font-semibold">
                Defence, Railways, Chemical, Pharmaceutical, Power, Water Treatment, Infrastructure, and Government sectors
              </strong>
              , delivering innovative, corrosion-resistant, and reliable solutions with uncompromising quality, safety, and on-time execution.
            </p>

            <p className="text-sm text-gray-600">
              As both a leading manufacturer and stockist of thermoplastic and composite systems, we provide comprehensive end-to-end support ranging from custom drawing fabrication to site erection and plant maintenance.
            </p>
          </div>

          {/* Right: Minimalist 2x2 Stat Matrix */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFAFC] border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:border-[#FF6B00]/60 transition-colors duration-200 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="type-h3 text-xl sm:text-2xl text-[#0A1628]">
                      {stat.value}
                    </span>
                    <Icon className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="type-eyebrow text-gray-900 leading-snug">
                      {stat.label}
                    </h3>
                    <p className="type-footer text-gray-500 mt-0.5">
                      {stat.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}