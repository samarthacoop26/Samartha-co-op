"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageSquare,
  Building2,
  Factory,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Loader2,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.companyName.trim())
      errs.companyName = "Company or organization name is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim())
      errs.message = "Please enter your requirement or inquiry details";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const { sales, quotations } = CONTACT_CONFIG.departments;

  return (
    <div className="w-full bg-white text-[#0A1628] font-sans">
      {/* ═══ 1. INDUSTRIAL HERO BANNER WITH SLANTED ACCENT ═══ */}
      <section className="relative w-full bg-[#0A1628] overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24 border-b border-gray-800">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />
        {/* Subtle Dark Industrial Overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-transparent to-[#0A1628]/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full mb-3 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span className="text-[11px] font-bold tracking-widest text-white uppercase drop-shadow-sm">
              Technical & Commercial Inquiries
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Contact {CONTACT_CONFIG.companyName}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Connect directly with our team for PP/FRP tanks, blowers, scrubbers, M.S. lining, piping projects, and turnkey execution.
          </p>
        </div>

        {/* Slanted Breadcrumb Bar */}
        <div className="absolute bottom-0 right-0 z-20">
          <div
            className="bg-[#FF6B00] text-[#0A1628] font-bold text-xs sm:text-sm py-2.5 px-8 sm:px-12 flex items-center gap-2 shadow-lg"
            style={{
              clipPath: "polygon(28px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="opacity-60">/</span>
            <span className="text-[#0A1628]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. MAIN CONTENT: Form (Left) + Contact Info (Right) ═══ */}
      <section className="py-14 sm:py-18 lg:py-22">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14 items-start">
            {/* ── LEFT: Inquiry Form (3/5) ── */}
            <div className="lg:col-span-3 order-1">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)]">
                <h2 className="text-2xl font-bold text-[#0A1628] tracking-tight">
                  Send an Inquiry / Request Quote
                </h2>
                <p className="text-sm text-gray-500 mt-1.5 mb-7">
                  Fill out the form below and our leadership team will respond with competitive rates and engineering details within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="py-14 text-center space-y-5">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A1628]">
                      Inquiry Sent Successfully
                    </h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Thank you,{" "}
                      <span className="font-semibold text-[#0A1628]">
                        {formData.fullName}
                      </span>
                      . We have received your message and our team will get in
                      touch promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          companyName: "",
                          phone: "",
                          email: "",
                          message: "",
                        });
                      }}
                      className="mt-2 px-7 py-2.5 text-sm font-semibold bg-[#0A1628] hover:bg-gray-800 text-white rounded-md transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        id="fullName"
                        label="Full Name"
                        required
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.fullName}
                        error={errors.fullName}
                        onChange={handleInputChange}
                      />
                      <FormField
                        id="companyName"
                        label="Company / Organization"
                        required
                        type="text"
                        placeholder="e.g. Chemical Process Ltd."
                        value={formData.companyName}
                        error={errors.companyName}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        id="phone"
                        label="Phone Number"
                        required
                        type="tel"
                        placeholder="+91 99308 62729"
                        value={formData.phone}
                        error={errors.phone}
                        onChange={handleInputChange}
                      />
                      <FormField
                        id="email"
                        label="Email Address"
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        error={errors.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[13px] font-semibold text-gray-700 mb-1.5"
                      >
                        Message / Requirement / Project Scope{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your requirements (e.g. PP FRP Tank, Scrubber Blower Erection, M.S. FRP Lining, HDPE Pipeline, Sintex Tank Welding, or Stockist Materials)..."
                        className={`w-full p-3.5 rounded-lg border ${
                          errors.message
                            ? "border-red-400 focus:ring-red-400"
                            : "border-gray-200 focus:border-[#FF6B00] focus:ring-[#FF6B00]"
                        } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none bg-gray-50/60 focus:bg-white`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#FF6B00] hover:bg-[#e66000] text-white font-semibold text-sm px-10 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-gray-400 italic">
                        Direct response from our leadership team.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Trust Strip */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[11px] text-gray-400 font-medium tracking-wide uppercase">
                <span>GST: 27AEVFS9451A1ZK</span>
                <span className="text-gray-200">•</span>
                <span>UDYAM-MH-33-0265642</span>
                <span className="text-gray-200">•</span>
                <span>ESIC & PF Registered</span>
              </div>
            </div>

            {/* ── RIGHT: Contact Information (2/5) ── */}
            <div className="lg:col-span-2 order-2 space-y-7">
              {/* Key Person 1: Vishal Gadade */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
                  Key Contact — Sales & Technical
                </h3>
                <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="font-bold text-base text-[#0A1628]">
                    Vishal Gadade
                  </div>
                  <ContactRow
                    icon={<Phone size={16} className="text-[#FF6B00]" />}
                    label="Mobile"
                    value={sales.phoneDisplay}
                    href={`tel:${sales.phone}`}
                  />
                  <ContactRow
                    icon={
                      <MessageSquare size={16} className="text-green-600" />
                    }
                    label="WhatsApp Chat"
                    value={sales.whatsappDisplay}
                    href={`https://wa.me/${sales.whatsapp}?text=${encodeURIComponent("Hi Vishal Sir, I would like to inquire about PP/FRP products.")}`}
                    external
                  />
                </div>
              </div>

              {/* Key Person 2: Ramesh Gadade */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00] mb-3">
                  Key Contact — Commercial & Erection
                </h3>
                <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-3">
                  <div className="font-bold text-base text-[#0A1628]">
                    Ramesh Gadade
                  </div>
                  <ContactRow
                    icon={<Phone size={16} className="text-[#FF6B00]" />}
                    label="Mobile"
                    value={quotations.phoneDisplay}
                    href={`tel:${quotations.phone}`}
                  />
                  <ContactRow
                    icon={<Mail size={16} className="text-[#FF6B00]" />}
                    label="Official Email"
                    value={quotations.email}
                    href={`mailto:${quotations.email}`}
                  />
                </div>
              </div>

              {/* Statutory Registrations */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00] flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>Statutory Registrations</span>
                  </h3>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified
                  </span>
                </div>

                <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 divide-y divide-gray-200/80 text-xs">
                  <div className="flex items-center justify-between py-2 first:pt-0">
                    <span className="text-gray-500 font-medium">GSTIN</span>
                    <span className="font-mono font-bold text-[#0A1628]">{CONTACT_CONFIG.gstin}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-500 font-medium">PAN</span>
                    <span className="font-mono font-bold text-[#0A1628]">{CONTACT_CONFIG.pan}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-500 font-medium">MSME Udyam</span>
                    <span className="font-mono font-bold text-[#0A1628]">{CONTACT_CONFIG.msmeRegNo}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 last:pb-0">
                    <span className="text-gray-500 font-medium">Labor Compliance</span>
                    <span className="font-medium text-gray-700">ESIC &amp; PF Registered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. LOCATIONS — Full-Width 2-Card Row ═══ */}
      <section className="pb-16 sm:pb-20 border-t border-gray-100 pt-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0A1628] tracking-tight">
              Our Registered Office & Workshop Locations
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Registered corporate presence in Dombivli (W) & heavy engineering workshop in MIDC Taloja, Raigad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACT_CONFIG.locations.map((loc) => (
              <div
                key={loc.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
              >
                {/* Map */}
                <div className="w-full h-52 bg-gray-100">
                  <iframe
                    title={`Map — ${loc.name}`}
                    src={loc.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        {loc.type === "office" ? (
                          <Building2 size={16} className="text-[#FF6B00]" />
                        ) : (
                          <Factory size={16} className="text-[#FF6B00]" />
                        )}
                      </div>
                      <h3 className="text-base font-bold text-[#0A1628]">
                        {loc.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {loc.badge}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {loc.addressLine1}
                    <br />
                    {loc.addressLine2}, {loc.cityStateZip}
                  </p>

                  <a
                    href={loc.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#e66000] transition-colors"
                  >
                    <MapPin size={13} />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Reusable Form Field ─── */
function FormField({
  id,
  label,
  required,
  type,
  placeholder,
  value,
  error,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[13px] font-semibold text-gray-700 mb-1.5"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3.5 py-3 rounded-lg border ${
          error
            ? "border-red-400 focus:ring-red-400"
            : "border-gray-200 focus:border-[#FF6B00] focus:ring-[#FF6B00]"
        } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors bg-gray-50/60 focus:bg-white`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

/* ─── Reusable Contact Row ─── */
function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-none mb-1">
          {label}
        </p>
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-xs sm:text-sm font-semibold text-[#0A1628] hover:text-[#FF6B00] transition-colors truncate block"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
