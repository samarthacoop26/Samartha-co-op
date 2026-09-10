"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const slides = [
  {
    id: 1,
    title: "Engineering FRP Solutions for the World's Most Demanding Environments.",
    description: "Manufacturing, installing, and maintaining high-performance FRP products for Industry, Defence, Infrastructure & Railways.",
    image: "/images/about/plant-facility.jpg",
    cta1: { text: "GET A CUSTOM QUOTE \u2192", link: "/quote" },
  },
  {
    id: 2,
    title: "Corrosion-Free Infrastructure. Engineered to Last 30+ Years.",
    description: "From municipal drainage systems to defence-grade enclosures — our FRP products eliminate rust, reduce maintenance costs, and outlast conventional materials.",
    image: "/images/about/utm-testing.jpg",
    cta1: { text: "GET A CUSTOM QUOTE \u2192", link: "/quote" },
  },
  {
    id: 3,
    title: "Trusted by Government, Defence & Railways Across India.",
    description: "MSME-registered, GST-compliant manufacturing with pan-India delivery — serving Smart City projects, industrial infrastructure, and heavy chemical plants.",
    image: "/images/about/defence-railway.jpg",
    cta1: { text: "GET A CUSTOM QUOTE \u2192", link: "/quote" },
  }
];

export function HeroSlider() {
  const { openQuoteModal } = useQuoteModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full bg-[#0A1628] flex flex-col">
      {/* Main Hero Area */}
      <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden">
        
        {/* Background Images Carousel */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          />
        </AnimatePresence>
        
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-[#0A1628]/40 mix-blend-multiply z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0A1628]/90 z-0" />
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110 hidden md:block"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 md:p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all hover:scale-110 hidden md:block"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-32 pb-20 md:pt-48 md:pb-24">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} className="flex flex-col items-center">
              <motion.div className="min-h-[120px] md:min-h-[140px] flex items-center justify-center mb-4 md:mb-6 max-w-4xl mx-auto">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="type-h1 text-white tracking-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
              </motion.div>
              
              <motion.div className="min-h-[80px] md:min-h-[60px] flex items-center justify-center mb-8 max-w-2xl mx-auto">
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="type-subheading text-gray-200 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button 
                  type="button"
                  onClick={() => openQuoteModal({ title: "Request a Custom Quote" })}
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#e66000] text-white type-btn px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(255,107,0,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer"
                >
                  {slides[currentSlide].cta1.text}
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-10 z-30 flex items-center justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === idx 
                  ? "w-6 h-1.5 bg-[#FF6B00]" 
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Bar (Immediately below hero content) */}
      <div className="relative z-20 w-full bg-[#1A1A2E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8 divide-x-0 md:divide-x divide-white/10">
            
            {/* Trust Item 1 */}
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-xl hover:bg-white/5 group hover:-translate-y-1 transition-all">
              <div className="mb-2 bg-white/5 p-3 rounded-full group-hover:bg-[#FF6B00]/20 transition-colors">
                <Award className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl type-h3">25+ Years</h3>
              <p className="text-gray-400 text-sm mt-1 type-footer">of Excellence</p>
            </div>
            
            {/* Trust Item 2 */}
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-xl hover:bg-white/5 group hover:-translate-y-1 transition-all">
              <div className="mb-2 bg-white/5 p-3 rounded-full group-hover:bg-[#FF6B00]/20 transition-colors">
                <CheckCircle className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl type-h3">Govt. Approved</h3>
              <p className="text-gray-400 text-sm mt-1 type-footer">Vendor Listed</p>
            </div>
            
            {/* Trust Item 3 */}
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-xl hover:bg-white/5 group hover:-translate-y-1 transition-all">
              <div className="mb-2 bg-white/5 p-3 rounded-full group-hover:bg-[#FF6B00]/20 transition-colors">
                <Users className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl type-h3">1000+ Clients</h3>
              <p className="text-gray-400 text-sm mt-1 type-footer">Served</p>
            </div>
            
            {/* Trust Item 4 */}
            <div className="flex flex-col items-center justify-center text-center p-3 rounded-xl hover:bg-white/5 group hover:-translate-y-1 transition-all">
              <div className="mb-2 bg-white/5 p-3 rounded-full group-hover:bg-[#FF6B00]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl type-h3">Pan-India</h3>
              <p className="text-gray-400 text-sm mt-1 type-footer">Delivery Network</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
