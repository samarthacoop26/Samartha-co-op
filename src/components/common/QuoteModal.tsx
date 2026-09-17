"use client";

import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { trackModalForm } from "@/lib/analytics";
import { sendInquiry } from "@/app/actions/sendInquiry";

const PRODUCT_OPTIONS = [
  "Gratings, Walkways & Platforms",
  "Manhole, Drain & Cable Trench Covers",
  "Tanks, Piping & Chemical Storage",
  "Doors, Windows & Architectural Panels",
  "Electrical Enclosures & Control Boxes",
  "Handrails, Ladders & Safety Structures",
  "Cable Management Systems",
  "Civic Furniture & Public Infrastructure",
  "Signage & Display Boards",
  "Defence Equipment & Protective Gear",
  "PP/FRP Blowers, Wet Scrubbers & Ducting",
  "M.S. FRP Lining & Surface Coating",
  "Custom Drawing / Fabrication Inquiry",
];

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

const initialFormValues: FormValues = {
  fullName: "",
  phone: "",
  email: "",
  product: PRODUCT_OPTIONS[0],
  message: "",
};

export function QuoteModal() {
  const { isOpen, modalData, closeQuoteModal } = useQuoteModal();
  const [formData, setFormData] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const formStartedRef = useRef(false);

  // Sync modalData and track open
  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData((prev) => ({
        ...prev,
        product: modalData.productName || prev.product || PRODUCT_OPTIONS[0],
        message: modalData.message || prev.message,
      }));
      setFormState("idle");
      setServerError(null);
      setErrors({});
      formStartedRef.current = false;

      // Track modal open event
      trackModalForm("open", {
        productName: modalData.productName || "General Inquiry",
        triggerSource: modalData.title || "Website Quote Button",
      });
    }
  }, [isOpen, modalData]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        trackModalForm("close", {
          productName: formData.product,
          triggerSource: "Escape Key",
        });
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal, formData.product]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Track when user first starts filling the form
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackModalForm("start", {
        productName: formData.product,
        triggerSource: modalData.title,
      });
    }

    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your requirements or dimensions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm() || formState === "submitting") return;

    setFormState("submitting");
    setServerError(null);

    try {
      const result = await sendInquiry({
        source: "quote_modal",
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        productCategory: formData.product,
        message: formData.message,
      });

      if (result.success) {
        setFormState("success");

        // Track successful submission and lead generation
        trackModalForm("submit_success", {
          productName: formData.product,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          triggerSource: modalData.title,
        });
      } else {
        setFormState("error");
        setServerError(result.message);
        if (result.errors) {
          setErrors((prev) => ({ ...prev, ...result.errors }));
        }
        trackModalForm("submit_error", {
          productName: formData.product,
          errorMessage: result.message,
        });
      }
    } catch {
      setFormState("error");
      setServerError("An unexpected error occurred. Please try again or reach out to us directly.");
      trackModalForm("submit_error", {
        productName: formData.product,
        errorMessage: "Network or submission error",
      });
    }
  };

  const handleModalClose = () => {
    trackModalForm("close", {
      productName: formData.product,
      triggerSource: "Close Button / Backdrop",
    });
    closeQuoteModal();
  };

  const handleResetAndClose = () => {
    setFormData(initialFormValues);
    setErrors({});
    setFormState("idle");
    closeQuoteModal();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={handleModalClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col my-auto"
      >
        {/* ── Rich Colored Header Section ── */}
        <div className="relative bg-gradient-to-r from-[#0A1628] via-[#0E1E36] to-[#142642] text-white px-6 pt-6 pb-5 border-b border-slate-800">
          {/* Top Orange Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-[#FF6B00]" />

          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Subtle Tag */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-orange-400 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                <span className="type-eyebrow text-[10px]">Direct Factory RFQ</span>
              </div>

              {/* Title */}
              <h3 className="type-h3 text-xl text-white tracking-tight leading-snug">
                {modalData.title || "Request a Custom Quote"}
              </h3>

              {/* Subtitle */}
              <p className="type-body text-xs text-slate-300 mt-1 leading-relaxed">
                Submit your project specifications &bull; Fast technical pricing from our engineering team
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleModalClose}
              className="p-1.5 bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white rounded-lg transition-colors cursor-pointer shrink-0 mt-0.5"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.25 }}
                className="py-6 text-center"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3.5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="type-h3 text-lg text-gray-900">
                  Inquiry Sent Successfully!
                </h4>
                <p className="type-body text-sm text-gray-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-900">{formData.fullName}</strong>. We have received your request and our engineering team will get back to you with pricing and technical specifications within 24 hours.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="rfq-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                {formState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <span>
                      {serverError || "An error occurred while sending your inquiry. Please try again or contact us directly."}
                    </span>
                  </motion.div>
                )}

              {/* Name */}
              <div>
                <label
                  htmlFor="modal-fullName"
                  className="block text-xs font-semibold text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none transition ${
                    errors.fullName
                      ? "border-red-500 ring-1 ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  }`}
                  disabled={formState === "submitting"}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-xs font-semibold text-gray-700 mb-1"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none transition ${
                      errors.phone
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    }`}
                    disabled={formState === "submitting"}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-xs font-semibold text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none transition ${
                      errors.email
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                    }`}
                    disabled={formState === "submitting"}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Product Select */}
              <div>
                <label
                  htmlFor="modal-product"
                  className="block text-xs font-semibold text-gray-700 mb-1"
                >
                  Product / Category
                </label>
                <select
                  id="modal-product"
                  name="product"
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent focus:outline-none transition cursor-pointer"
                  disabled={formState === "submitting"}
                >
                  {formData.product && !PRODUCT_OPTIONS.includes(formData.product) && (
                    <option value={formData.product}>{formData.product}</option>
                  )}
                  {PRODUCT_OPTIONS.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-xs font-semibold text-gray-700 mb-1"
                >
                  Your Requirement / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your requirements, quantity, dimensions, or drawing details..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 bg-white focus:outline-none transition resize-none ${
                    errors.message
                      ? "border-red-500 ring-1 ring-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                  }`}
                  disabled={formState === "submitting"}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-xs"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <span>Submit Quote Request</span>
                  )}
                </button>
              </div>
            </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
