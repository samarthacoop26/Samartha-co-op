"use client";

import { useState, useRef, useEffect, useSyncExternalStore } from "react";
import { X, Send, Check, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CONTACT_CONFIG } from "@/data/contactConfig";
import { trackDirectContact, trackCtaClick } from "@/lib/analytics";

const WHATSAPP_PHONE = CONTACT_CONFIG.departments.sales.whatsapp;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

interface InquiryOption {
  label: string;
  message: string;
  badge?: string;
}

interface InquiryCategory {
  title: string;
  items: InquiryOption[];
}

const inquiryCategories: InquiryCategory[] = [
  {
    title: "New to FRP?",
    items: [
      {
        label: "What products do you make?",
        message: "Hi, I want to know what FRP products you manufacture.",
      },
      {
        label: "Is FRP better than steel/concrete for my project?",
        message: "Hi, can you help me understand if FRP suits my project better than steel or concrete?",
      },
    ],
  },
  {
    title: "Ready for Pricing?",
    items: [
      {
        label: "Instant Quote / BOQ Pricing",
        message: "Hi, I need pricing for a BOQ — can you help?",
        badge: "Popular",
      },
      {
        label: "Technical Specs & Load Ratings",
        message: "Hi, I need technical specs and load ratings for [product name].",
      },
      {
        label: "Pan-India Dispatch & Timeline",
        message: "Hi, do you dispatch pan-India? Need timeline for a bulk order.",
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.6 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 },
  },
};

const emptySubscribe = () => () => {};

export function FloatingContact() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(
    inquiryCategories[1].items[0].message
  );
  const [customMessage, setCustomMessage] = useState(
    inquiryCategories[1].items[0].message
  );
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside drawer
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    }
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || customMessage || selectedInquiry).trim();
    trackDirectContact("whatsapp", {
      location: "Floating Widget Drawer",
      value: WHATSAPP_PHONE,
      inquiryTopic: text,
    });
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, "_blank");
    setIsDrawerOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Widget Container */}
      <motion.div
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* WhatsApp Popup Support Card */}
        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              ref={drawerRef}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 26, mass: 0.9 }}
              className="w-[calc(100vw-2.5rem)] sm:w-[370px] max-w-[390px] max-h-[85vh] flex flex-col bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-slate-200 overflow-hidden mb-1 font-sans"
            >
              {/* WhatsApp Brand Header */}
              <div className="bg-[#075E54] px-4 py-3.5 flex items-center justify-between text-white shadow-sm shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white border border-white/20">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm leading-tight text-white">
                      Samarth Corporation
                    </h4>
                    <p className="text-[12px] text-emerald-100 flex items-center gap-1.5 mt-0.5 font-normal">
                      <span>Direct WhatsApp Support</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-white/80 hover:text-white p-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Close WhatsApp Drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Content Body */}
              <div className="p-4 overflow-y-auto space-y-3.5 bg-slate-50 flex-1">
                {/* Greeting Bubble */}
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm text-[13px] text-slate-700 shadow-sm leading-relaxed">
                  <p className="font-semibold text-slate-900 mb-0.5">
                    Hello! How can we assist you today?
                  </p>
                  <p className="text-slate-600 text-xs">
                    Choose a quick inquiry below or type your message to chat with our team.
                  </p>
                </div>

                {/* Section 1: New to FRP? */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide px-1">
                    {inquiryCategories[0].title}
                  </span>
                  <div className="space-y-1.5">
                    {inquiryCategories[0].items.map((item, idx) => {
                      const isSelected = selectedInquiry === item.message;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedInquiry(item.message);
                            setCustomMessage(item.message);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50 border-emerald-500 text-emerald-900 font-medium shadow-xs"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70"
                          }`}
                        >
                          <span className="truncate pr-2">{item.label}</span>
                          {isSelected ? (
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle Divider */}
                <div className="border-t border-slate-200/80 my-1" />

                {/* Section 2: Ready for Pricing? */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide">
                      {inquiryCategories[1].title}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {inquiryCategories[1].items.map((item, idx) => {
                      const isSelected = selectedInquiry === item.message;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedInquiry(item.message);
                            setCustomMessage(item.message);
                          }}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50 border-emerald-500 text-emerald-900 font-medium shadow-xs"
                              : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70"
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate pr-2">
                            <span className="truncate">{item.label}</span>
                            {item.badge && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </span>
                          {isSelected ? (
                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Box */}
                <div className="pt-1">
                  <label
                    htmlFor="wa-input"
                    className="block text-[11px] font-semibold text-slate-600 mb-1 px-1"
                  >
                    Your Message:
                  </label>
                  <textarea
                    id="wa-input"
                    rows={2}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366] resize-none transition shadow-xs"
                  />
                </div>

                {/* Send Button */}
                <button
                  onClick={() => handleSend()}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(37,211,102,0.3)] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Start Chat on WhatsApp</span>
                  <Send className="w-3.5 h-3.5 ml-0.5 opacity-90" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Action Button */}
        <div className="flex flex-col items-end gap-3">
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center w-14 h-14"
          >
            {/* Ripple Ring 1 — gentle expanding ring with opacity fade */}
            {!isDrawerOpen && (
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[#25D366] pointer-events-none"
                style={{ willChange: "transform, opacity" }}
                animate={{
                  scale: [1, 2.2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            )}

            {/* Ripple Ring 2 — staggered for continuous rhythm */}
            {!isDrawerOpen && (
              <motion.span
                className="absolute inset-0 rounded-full border-2 border-[#25D366] pointer-events-none"
                style={{ willChange: "transform, opacity" }}
                animate={{
                  scale: [1, 2.2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 1.4,
                }}
              />
            )}

            {/* Main Button — clean hover/tap, ambient glow only */}
            <motion.button
              onClick={() => {
                const nextState = !isDrawerOpen;
                trackCtaClick("Floating WhatsApp Button", "Floating Contact", nextState ? "Open" : "Close");
                setIsDrawerOpen(nextState);
              }}
              aria-label="Open WhatsApp Chat"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative z-10 w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-[background-color,box-shadow] duration-300"
            >
              {isDrawerOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <WhatsAppIcon className="w-7 h-7 text-white" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
