"use client";

import React from 'react';
import { Phone, Mail, ChevronRight, User, Edit2, MessageSquare, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <Link 
    href={href} 
    className="w-10 h-10 rounded-full border border-[#f9852f] flex items-center justify-center text-[#f9852f] hover:bg-[#f9852f] hover:text-white transition-all duration-300"
  >
    {icon}
  </Link>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const NavLink = ({ text, href }: { text: string, href: string }) => (
  <Link 
    href={href} 
    className="flex items-center gap-3 text-white hover:text-[#f9852f] transition-colors duration-300 font-medium py-1"
  >
    <ChevronRight size={16} className="text-[#f9852f]" />
    {text}
  </Link>
);

const FormInput = ({ icon, placeholder }: { icon: React.ReactNode, placeholder: string }) => (
  <div className="flex items-center gap-3 border-b border-black/20 py-3 text-black/80">
    <div className="text-black/60">
      {icon}
    </div>
    <input 
      type="text" 
      placeholder={placeholder}
      className="bg-transparent border-none outline-none w-full text-black placeholder:text-black/70 placeholder:tracking-widest placeholder:text-xs font-semibold focus:ring-0"
    />
  </div>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-40">
      {/* Dark Background with clip path for top-left cut */}
      <div 
        className="absolute inset-0 bg-[#212121] z-0" 
        style={{ clipPath: 'polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)' }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Info */}
          <div className="md:col-span-5 text-white space-y-10 pt-4">
            {/* Logo Placeholder (Stylized A) */}
            <div className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 28L20 4H24L16 28H12Z" fill="white"/>
                <path d="M8 28L12 16H16L12 28H8Z" fill="#a3a3a3"/>
              </svg>
            </div>

            <p className="text-[#f9852f] text-[28px] font-bold leading-[1.2] tracking-tight pr-4">
              We are always ready<br/>
              to help you and answer<br/>
              your questions.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Phone className="text-[#f9852f]" size={24} />
                <span className="font-bold text-xl tracking-wide">+123 456 7890</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#f9852f]" size={24} />
                <span className="font-bold text-xl tracking-wide">info@example.com</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <SocialIcon icon={<FacebookIcon />} href="#" />
              <SocialIcon icon={<TwitterIcon />} href="#" />
              <SocialIcon icon={<LinkedinIcon />} href="#" />
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div className="md:col-span-3 pt-4 pl-0 md:pl-8">
            <div className="space-y-4">
              <NavLink text="Home" href="#" />
              <NavLink text="About Aventra" href="#" />
              <NavLink text="Services" href="#" />
              <NavLink text="Commitment" href="#" />
              <NavLink text="Our News" href="#" />
              <NavLink text="Contact" href="#" />
            </div>
          </div>
          
          {/* Column 3: Quick Contact Form */}
          <div className="md:col-span-4 relative">
            <div 
              className="absolute -top-32 left-0 right-0 bg-[#f9852f] p-10 shadow-2xl"
              style={{ 
                clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
                // Optional: Add a subtle texture/gradient to match the image's rich look
                backgroundImage: 'linear-gradient(135deg, #f9852f 0%, #e87522 100%)'
              }}
            >
              <h3 className="text-black font-extrabold text-center tracking-[0.2em] text-sm mb-10">
                QUICK CONTACT
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <FormInput icon={<User size={20} />} placeholder="YOUR NAME" />
                <FormInput icon={<Phone size={20} />} placeholder="PHONE" />
                <FormInput icon={<Mail size={20} />} placeholder="EMAIL ADDRESS" />
                <FormInput icon={<Edit2 size={20} />} placeholder="SUBJECT" />
                <FormInput icon={<MessageSquare size={20} />} placeholder="MESSAGE" />
                
                <button 
                  type="submit"
                  className="w-full bg-[#262626] text-white font-bold py-5 mt-10 flex items-center justify-center gap-2 text-xs tracking-[0.15em] hover:bg-black transition-colors duration-300"
                >
                  SEND MESSAGE <ChevronRight size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center relative">
          <p className="text-[#a3a3a3] text-sm font-medium tracking-wide">
            © 2025 GFXPARTNER.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="absolute -right-4 bottom-0 bg-[#f9852f] text-white p-3 hover:bg-[#e87522] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
}
