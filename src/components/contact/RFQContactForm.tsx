"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { CONTACT_CONFIG } from "@/data/contactConfig";

interface FormValues {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

const initialFormValues: FormValues = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  message: "",
};

export function RFQContactForm() {
  const [formData, setFormData] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company or organization name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your requirement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm() || formState === "submitting") return;

    setFormState("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const handleReset = () => {
    setFormData(initialFormValues);
    setErrors({});
    setFormState("idle");
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-7 sm:p-9 lg:p-10">
      
      <div className="mb-8">
        <h2 className="type-h2 text-[#0A1628]">
          Send an Inquiry
        </h2>
        <p className="type-subheading text-sm text-gray-600 mt-1">
          Fill out the form below and our engineering team will get back to you with pricing and technical details.
        </p>
      </div>

      {formState === "success" ? (
        <div className="py-12 px-4 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="type-h2 text-2xl text-[#0A1628]">Inquiry Sent Successfully</h3>
          <p className="type-body text-sm text-gray-600 mt-2">
            Thank you, <span className="font-semibold">{formData.fullName}</span>. We have received your message and our team will get in touch with you within 24 hours.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-6 inline-flex items-center justify-center px-6 py-3 type-btn text-xs bg-[#0A1628] hover:bg-gray-800 text-white rounded-xl transition-colors cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          {formState === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>An error occurred while sending your inquiry. Please try again or contact us directly.</span>
            </div>
          )}

          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block type-eyebrow text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.fullName ? "border-red-500" : "border-gray-300 focus:border-[#FF6B00]"
                } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all`}
                disabled={formState === "submitting"}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block type-eyebrow text-gray-700 mb-1.5">
                Company / Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="e.g. L&T Infrastructure / Municipal Corp."
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.companyName ? "border-red-500" : "border-gray-300 focus:border-[#FF6B00]"
                } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all`}
                disabled={formState === "submitting"}
              />
              {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block type-eyebrow text-gray-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.phone ? "border-red-500" : "border-gray-300 focus:border-[#FF6B00]"
                } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all`}
                disabled={formState === "submitting"}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block type-eyebrow text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@company.com"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-300 focus:border-[#FF6B00]"
                } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all`}
                disabled={formState === "submitting"}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Row 3: Message / Requirement */}
          <div>
            <label htmlFor="message" className="block type-eyebrow text-gray-700 mb-1.5">
              Message / Requirement <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your product requirements (e.g. FRP Gratings, Manhole Covers, Tanks, Enclosures), dimensions, quantities, or required schedule..."
              className={`w-full p-4 rounded-xl border ${
                errors.message ? "border-red-500" : "border-gray-300 focus:border-[#FF6B00]"
              } text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 transition-all resize-none`}
              disabled={formState === "submitting"}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button & 24h note */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn px-9 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Inquiry</span>
              )}
            </button>
            
            <p className="type-footer text-xs text-gray-500 mt-2.5 italic">
              * {CONTACT_CONFIG.responseCommitment}
            </p>
          </div>

        </form>
      )}

    </div>
  );
}
