"use client";

import { useState } from 'react';
import { Phone, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15, mass: 1 } 
  }
};

export function FloatingContact() {
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* WhatsApp Button — Senior Designer Edition */}
        <motion.div 
          variants={itemVariants} 
          className="relative flex items-center justify-center w-14 h-14"
        >
          {/* Flawless Single Ripple — No snapping, fades in and out smoothly */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#25D366]"
            animate={{ 
              scale: [0.9, 1.5, 2.2], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Breathing ambient glow — perfectly synced with ripple */}
          <motion.div 
            className="absolute inset-[-6px] rounded-full bg-[#25D366]/20 blur-md"
            animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Button - Elevated, smooth, and grounded */}
          <motion.a 
            href="#" 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(37,211,102,0.6)", transition: { type: "spring", stiffness: 400, damping: 12 } }}
            whileTap={{ scale: 0.92 }}
            className="absolute inset-0 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] z-10"
          >
            <WhatsAppIcon className="w-7 h-7 text-white" />
          </motion.a>
        </motion.div>

        {/* Phone Pill - Expanding Animation */}
        <motion.div 
          variants={itemVariants}
          className="relative flex items-center justify-end cursor-pointer group h-14"
          onMouseEnter={() => setIsPhoneHovered(true)}
          onMouseLeave={() => setIsPhoneHovered(false)}
        >
          <motion.a 
            href="tel:+917700093966" 
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isPhoneHovered ? 210 : 0,
              opacity: isPhoneHovered ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-[#FDE047] h-full flex items-center justify-start pl-6 rounded-l-full text-black font-semibold text-lg tracking-wide shadow-lg overflow-hidden whitespace-nowrap z-0 -mr-4"
          >
            +91 77000 93966
          </motion.a>
          
          <div className="relative z-10 w-14 h-14 bg-[#818CF8] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-6 h-6 text-white fill-white" />
          </div>
        </motion.div>

        {/* Contact Us Box */}
        <motion.button 
          onClick={() => setIsModalOpen(true)}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-[#FDE047] border-2 border-black rounded-xl py-3 px-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center mt-2 group z-10"
        >


          <span className="font-extrabold text-black text-xl tracking-tight whitespace-nowrap">Enquiry Now</span>
          


        </motion.button>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-black"
            >
              {/* Modal Header */}
              <div className="bg-[#FDE047] p-6 border-b-2 border-black relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all"
                >
                  <X className="w-4 h-4 text-black font-bold" />
                </button>
                <h2 className="text-2xl font-black text-black">Get In Touch</h2>
                <p className="text-black/80 font-medium mt-1">We'll get back to you as soon as possible.</p>
              </div>

              {/* Modal Body / Form */}
              <div className="p-6">
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow mt-2"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
