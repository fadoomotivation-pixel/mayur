"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/data";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  
  // Transition background from transparent to solid black on scroll
  const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);
  const blur = useTransform(scrollY, [0, 50], [0, 12]);
  
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Why Dholera", href: "#dholera" },
    { name: "Amenities", href: "#amenities" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <motion.header
        style={{
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity.get()})`,
          backdropFilter: `blur(${blur.get()}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 relative z-50">
            <span className="text-2xl font-bold tracking-tighter">
              Mayur <span className="text-gradient-gold">Aerocity</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#d4a017] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {site.phoneDisplay}
            </a>
            <a 
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 active:scale-95 transition-transform"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 mt-4 rounded-full bg-[#d4a017] text-black text-lg font-semibold"
          >
            Enquire Now
          </a>
        </div>
      )}
    </>
  );
}