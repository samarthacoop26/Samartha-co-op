"use client";

import Link from 'next/link';
import { useState, FormEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, ChevronDown, ArrowRight, X, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MainNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    if (!name?.trim()) newErrors.name = 'Name is required';
    if (!email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!service?.trim()) newErrors.service = 'Please select a service';
    if (!message?.trim()) newErrors.message = 'Please provide some project details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState === 'submitting' || formState === 'success') return;

    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) return;

    setFormState('submitting');
    
    // Simulate API submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState('success');
      
      // Auto-close after success
      setTimeout(() => {
        setIsModalOpen(false);
        // Reset form state after modal close animation
        setTimeout(() => {
          setFormState('idle');
          setErrors({});
        }, 300);
      }, 2500);
    } catch (err) {
      setFormState('error');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormState('idle');
      setErrors({});
    }, 300);
  };

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-black my-auto z-10"
          >
            {/* Modal Header */}
            <div className="bg-[#FDE047] p-6 sm:p-8 border-b-2 border-black relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-black font-bold" />
              </button>
              <div className="pr-10">
                <h2 className="text-2xl sm:text-3xl font-black text-black">Request a Quote</h2>
                <p className="text-black/80 font-medium mt-2 text-sm sm:text-base">Tell us about your project and we'll get back to you with a custom proposal within 24 hours.</p>
              </div>
            </div>

            {/* Modal Body / Form */}
            <div className="p-6 sm:p-8 relative">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. Our team will review your requirements and contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5" 
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {formState === 'error' && (
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 font-medium">Something went wrong submitting your request. Please try again later.</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          id="name"
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-lg border-2 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} bg-gray-50 focus:bg-white focus:outline-none transition-colors`}
                          disabled={formState === 'submitting'}
                        />
                        {errors.name && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.name}</p>}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          id="email"
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-lg border-2 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} bg-gray-50 focus:bg-white focus:outline-none transition-colors`}
                          disabled={formState === 'submitting'}
                        />
                        {errors.email && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company Field (Optional) */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-1.5">
                          Company Name <span className="text-gray-500 font-normal text-xs">(Optional)</span>
                        </label>
                        <input 
                          id="company"
                          name="company"
                          type="text" 
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black bg-gray-50 focus:bg-white focus:outline-none transition-colors"
                          disabled={formState === 'submitting'}
                        />
                      </div>

                      {/* Service Interest */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-1.5">
                          Service Needed <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select 
                            id="service"
                            name="service"
                            className={`w-full px-4 py-3 rounded-lg border-2 ${errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} bg-gray-50 focus:bg-white focus:outline-none transition-colors appearance-none`}
                            defaultValue=""
                            disabled={formState === 'submitting'}
                          >
                            <option value="" disabled>Select a service...</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-app">Mobile App Development</option>
                            <option value="ui-ux">UI/UX Design</option>
                            <option value="cloud">Cloud Consulting</option>
                            <option value="other">Other / General Inquiry</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        {errors.service && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.service}</p>}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project goals, timeline, and budget..."
                        className={`w-full px-4 py-3 rounded-lg border-2 ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-black'} bg-gray-50 focus:bg-white focus:outline-none transition-colors resize-none`}
                        disabled={formState === 'submitting'}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs font-bold mt-1.5">{errors.message}</p>}
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="relative w-full bg-black text-white font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.23)] hover:bg-gray-900 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden flex justify-center items-center gap-2 group"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Custom Quote</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-4">
                        By submitting this form, you agree to our privacy policy.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="flex items-center justify-between py-3 md:py-4 px-6 md:px-12 bg-[#0A1628]">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <div className="flex items-center gap-3">
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L0 28H6L12 14L18 28H24L12 0Z" fill="#FF6B00" />
              <path d="M6 28H10L14 18H10L6 28Z" fill="white" />
            </svg>
            <span className="text-white text-2xl font-bold tracking-wide">Perfect Engineering</span>
          </div>
          <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] ml-[36px] font-semibold mt-1">FRP Solutions</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#" className="flex items-center gap-1 text-white font-medium hover:text-[#FF6B00] transition-colors">
            Home <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="#" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
            Products
          </Link>
          <Link href="#" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
            Industries
          </Link>
          <Link href="#" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
            Projects
          </Link>
          <Link href="#" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
            About
          </Link>
          <Link href="#" className="text-white font-medium hover:text-[#FF6B00] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-7 py-3 font-bold text-sm uppercase tracking-widest rounded transition-all duration-300 ease-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_20px_-4px_rgba(255,107,0,0.5)] group"
          >
            <span>GET A QUOTE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="text-white hover:text-[#FF6B00] transition-colors lg:hidden" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Render Modal via Portal to avoid clipping issues with Navbar's overflow-hidden */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}

