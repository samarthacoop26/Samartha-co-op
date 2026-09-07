"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProductCategory {
  id: string;
  title: string;
  subheading: string;
  image: string;
  link: string;
}

const productCategories: ProductCategory[] = [
  {
    id: "gratings-walkways",
    title: "Gratings & Walkway Systems",
    subheading: "Slip-resistant, load-rated FRP gratings, walkways and platforms built for industrial and infrastructure use.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    link: "/products/gratings-walkways",
  },
  {
    id: "manhole-trench-covers",
    title: "Manhole & Trench Covers",
    subheading: "Corrosion-free, tamper-resistant covers engineered for municipal, Smart City and civic infrastructure projects.",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80",
    link: "/products/manhole-trench-covers",
  },
  {
    id: "tanks-chemical-piping",
    title: "Tanks & Chemical Piping",
    subheading: "Chemical-resistant storage tanks and pipeline systems for process plants, power stations and industrial facilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    link: "/products/tanks-piping",
  },
  {
    id: "doors-windows-enclosures",
    title: "Doors, Windows & Enclosures",
    subheading: "Weatherproof doors, windows and electrical enclosures engineered for demanding industrial and public infrastructure.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    link: "/products/doors-enclosures",
  },
  {
    id: "safety-access-structures",
    title: "Safety & Access Structures",
    subheading: "Handrails, ladders and safety railings designed to meet industrial safety and compliance standards.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    link: "/products/safety-access",
  },
  {
    id: "defence-railway-components",
    title: "Defence & Railway Components",
    subheading: "Precision-engineered FRP components built to specification for defence, railway and metro applications.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    link: "/products/defence-railway",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ProductCategories() {
  return (
    <section className="relative w-full bg-white pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading — Senior UI Typography & Spacing */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A1628] tracking-tight leading-[1.18]">
            Our FRP Product Range
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-[19px] text-gray-600 font-normal leading-relaxed">
            Engineered composite solutions manufactured to specification for government, defence, railway, and industrial applications. Built for compliance, tested for performance.
          </p>
        </div>

        {/* Minimalist & Premium Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9"
        >
          {productCategories.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group flex flex-col bg-white rounded overflow-hidden border border-gray-200/90 hover:border-gray-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(10,22,40,0.12)] transition-all duration-500 hover:-translate-y-1.5"
            >
              <Link href={product.link} className="flex flex-col h-full">
                {/* Photo Container */}
                <div className="relative w-full aspect-[16/11] overflow-hidden bg-gray-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Tapered Orange Accent Line (Reveals on hover: animates from center outward to corners) */}
                <div className="relative w-full h-[4.5px] flex items-center justify-center overflow-hidden bg-transparent">
                  <div className="w-full h-full transform origin-center scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <svg
                      viewBox="0 0 100 4"
                      preserveAspectRatio="none"
                      className="w-full h-full block"
                    >
                      <defs>
                        <linearGradient
                          id={`orange-taper-${product.id}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                          <stop offset="18%" stopColor="#FF6B00" stopOpacity="0.75" />
                          <stop offset="50%" stopColor="#FF6B00" stopOpacity="1" />
                          <stop offset="82%" stopColor="#FF6B00" stopOpacity="0.75" />
                          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,2 Q 50,-0.8 100,2 Q 50,4.8 0,2 Z"
                        fill={`url(#orange-taper-${product.id})`}
                      />
                    </svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] tracking-tight group-hover:text-[#FF6B00] transition-colors duration-300 leading-snug">
                        {product.title}
                      </h3>

                      {/* Animated Dual-Sliding Arrow Button */}
                      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-50 border border-gray-200 group-hover:border-[#FF6B00] group-hover:bg-[#FF6B00] flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm shrink-0 mt-0.5">
                        {/* Outgoing Arrow */}
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-5 group-hover:-translate-y-5" />
                        {/* Incoming Arrow */}
                        <ArrowUpRight className="w-4 h-4 text-white absolute transition-all duration-300 transform -translate-x-5 translate-y-5 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                      </div>
                    </div>

                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-normal">
                      {product.subheading}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
