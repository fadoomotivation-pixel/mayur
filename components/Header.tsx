"use client";

import { Phone, Mail, Clock, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG components for social icons
const Facebook = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Pinterest = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4v-3c-.1-.7.2-2.1.2-2.1s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 2.3.6 2.3 1.3 0 1.3-.8 3.2-1.2 5-.3 1.5.8 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.1-6.1-4 0-6.3 3-6.3 6 0 1.5.6 3.1 1.3 4 .1.1.1.3 0 .4l-.4 1.7c-.1.3-.2.3-.5.2-1.9-.9-3.1-3.6-3.1-5.9 0-4.8 3.5-9.2 10-9.2 5.3 0 9.4 3.8 9.4 8.8 0 5.3-3.3 9.5-7.9 9.5-1.5 0-2.9-.8-3.4-1.7l-1 3.8c-.3 1.3-1.2 3-1.8 4 1.5.5 3 .7 4.6.7 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-sm relative">
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-black/95 backdrop-blur-md text-white text-[10px] md:text-xs h-8 hidden sm:flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-64 bg-[#FACC15]" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2 text-black font-medium">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            <span>Mon-Sun : 9.00 AM - 5.00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Facebook className="w-3 h-3 md:w-4 md:h-4 fill-current" /></a>
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Twitter className="w-3 h-3 md:w-4 md:h-4 fill-current" /></a>
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Instagram className="w-3 h-3 md:w-4 md:h-4" /></a>
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Pinterest className="w-3 h-3 md:w-4 md:h-4 fill-current" /></a>
          </div>
        </div>
      </div>

      {/* Middle Bar & Nav Combined for smaller size on Mobile, separate on Desktop */}
      <div className="bg-white/95 backdrop-blur-md relative z-[60]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          {/* Animated Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 shrink-0 group relative overflow-hidden">
            {/* Premium Animated Smart City Icon */}
            <motion.div 
              className="relative w-11 h-11 md:w-[52px] md:h-[52px] flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
            >
              <svg viewBox="0 0 56 56" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Premium dark gradient */}
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f2027" />
                    <stop offset="40%" stopColor="#142a3a" />
                    <stop offset="100%" stopColor="#0a1520" />
                  </linearGradient>
                  {/* Rich gold */}
                  <linearGradient id="goldPremium" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4a017" />
                    <stop offset="30%" stopColor="#FACC15" />
                    <stop offset="60%" stopColor="#FDE68A" />
                    <stop offset="100%" stopColor="#d4a017" />
                  </linearGradient>
                  {/* Sunrise glow */}
                  <radialGradient id="sunGlow" cx="50%" cy="72%" r="45%">
                    <stop offset="0%" stopColor="#FACC15" stopOpacity="0.5" />
                    <stop offset="40%" stopColor="#FACC15" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
                  </radialGradient>
                  {/* Building glass reflection */}
                  <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="50%" stopColor="#FEF3C7" />
                    <stop offset="100%" stopColor="#d4a017" />
                  </linearGradient>
                  {/* Soft glow filter */}
                  <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="0.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Strong glow for sun */}
                  <filter id="sunFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Clip for shield shape */}
                  <clipPath id="shieldClip">
                    <path d="M28 3 L50 12 L50 32 Q50 46 28 54 Q6 46 6 32 L6 12 Z" />
                  </clipPath>
                </defs>

                {/* Shield shape — draws in */}
                <motion.path 
                  d="M28 3 L50 12 L50 32 Q50 46 28 54 Q6 46 6 32 L6 12 Z"
                  fill="url(#shieldGrad)"
                  stroke="url(#goldPremium)"
                  strokeWidth="1.8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />

                {/* Inner shield border — luxury double-line effect */}
                <motion.path 
                  d="M28 6 L48 14 L48 31 Q48 44 28 51 Q8 44 8 31 L8 14 Z"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="0.3"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                />

                {/* Clipped content inside shield */}
                <g clipPath="url(#shieldClip)">
                  {/* Sunrise glow behind city */}
                  <motion.circle cx="28" cy="38" r="18" fill="url(#sunGlow)"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: 18, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />

                  {/* Sunrise arc */}
                  <motion.path d="M10 38 Q28 22 46 38" fill="none" stroke="#FACC15" strokeWidth="0.6" opacity="0.4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
                  />
                  <motion.path d="M12 38 Q28 26 44 38" fill="none" stroke="#FACC15" strokeWidth="0.4" opacity="0.25"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.5 }}
                  />

                  {/* === CITY SKYLINE — forms a "D" silhouette === */}
                  <motion.g filter="url(#softGlow)">
                    {/* Left curved edge of "D" — tall building with rounded top */}
                    <motion.path d="M16 38 L16 18 Q16 13 20 13 L20 38 Z" fill="url(#glassGrad)" opacity="0.95"
                      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                      style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}
                    />

                    {/* Center-left tower (tallest — iconic Dholera admin tower) */}
                    <motion.g initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.6, duration: 0.55, ease: "easeOut" }}
                      style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}>
                      <rect x="21" y="15" width="5" height="23" rx="0.5" fill="url(#goldPremium)" opacity="0.9" />
                      {/* Crown/top detail */}
                      <rect x="22" y="13" width="3" height="2" rx="0.3" fill="#FDE68A" opacity="0.8" />
                    </motion.g>

                    {/* Center-right tower */}
                    <motion.rect x="27" y="20" width="4.5" height="18" rx="0.5" fill="#FACC15" opacity="0.8"
                      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.7, duration: 0.45, ease: "easeOut" }}
                      style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}
                    />

                    {/* Right curve of "D" — stepped buildings curving inward */}
                    <motion.rect x="32" y="22" width="4" height="16" rx="0.5" fill="url(#glassGrad)" opacity="0.75"
                      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.75, duration: 0.4, ease: "easeOut" }}
                      style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}
                    />
                    <motion.rect x="36.5" y="26" width="3.5" height="12" rx="0.5" fill="#FACC15" opacity="0.65"
                      initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.85, duration: 0.4, ease: "easeOut" }}
                      style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}
                    />

                    {/* Solar panel array on right building (Dholera is solar city) */}
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.4 }}>
                      <line x1="33" y1="23" x2="35" y2="22" stroke="#FDE68A" strokeWidth="0.5" opacity="0.6" />
                      <line x1="33" y1="24.5" x2="35" y2="23.5" stroke="#FDE68A" strokeWidth="0.5" opacity="0.5" />
                      <line x1="33" y1="26" x2="35" y2="25" stroke="#FDE68A" strokeWidth="0.5" opacity="0.4" />
                    </motion.g>
                  </motion.g>

                  {/* Communication antenna on tallest tower */}
                  <motion.line x1="23.5" y1="9" x2="23.5" y2="13" stroke="#FDE68A" strokeWidth="1" strokeLinecap="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 0.3 }}
                  />
                  {/* Signal arcs — smart connectivity */}
                  <motion.path d="M20 11 Q23.5 7 27 11" fill="none" stroke="#FACC15" strokeWidth="0.7" opacity="0.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 0.4 }}
                  />
                  <motion.path d="M18.5 12.5 Q23.5 6 28.5 12.5" fill="none" stroke="#FACC15" strokeWidth="0.5" opacity="0.3"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.6, duration: 0.4 }}
                  />

                  {/* Ground / Highway — perspective road converging to city */}
                  <motion.path d="M6 48 L22 38 L34 38 L50 48" fill="none" stroke="#FACC15" strokeWidth="0.8" opacity="0.5"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
                  />
                  {/* Center road line */}
                  <motion.line x1="28" y1="38" x2="28" y2="46" stroke="#FDE68A" strokeWidth="0.5" strokeDasharray="1.5 1" opacity="0.4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
                  />

                  {/* Twinkling windows */}
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5, 1] }} transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: "reverse" }}>
                    <circle cx="18" cy="21" r="0.5" fill="white" opacity="0.9" />
                    <circle cx="18" cy="25" r="0.5" fill="white" opacity="0.7" />
                    <circle cx="18" cy="29" r="0.5" fill="white" opacity="0.6" />
                    <circle cx="18" cy="33" r="0.5" fill="white" opacity="0.8" />
                    <circle cx="23" cy="18" r="0.5" fill="white" opacity="0.85" />
                    <circle cx="23" cy="22" r="0.5" fill="white" opacity="0.7" />
                    <circle cx="23" cy="26" r="0.5" fill="white" opacity="0.9" />
                    <circle cx="23" cy="30" r="0.5" fill="white" opacity="0.6" />
                    <circle cx="23" cy="34" r="0.5" fill="white" opacity="0.75" />
                    <circle cx="29" cy="24" r="0.5" fill="white" opacity="0.8" />
                    <circle cx="29" cy="28" r="0.5" fill="white" opacity="0.65" />
                    <circle cx="29" cy="32" r="0.5" fill="white" opacity="0.9" />
                    <circle cx="34" cy="26" r="0.5" fill="white" opacity="0.7" />
                    <circle cx="34" cy="30" r="0.5" fill="white" opacity="0.85" />
                    <circle cx="34" cy="34" r="0.5" fill="white" opacity="0.6" />
                    <circle cx="38" cy="30" r="0.5" fill="white" opacity="0.75" />
                    <circle cx="38" cy="34" r="0.5" fill="white" opacity="0.9" />
                  </motion.g>
                </g>


              </svg>
            </motion.div>

            {/* ✈️ Big Flying Airplane — flies over the entire logo area */}
            <motion.svg
              viewBox="0 0 40 20"
              className="absolute z-20 w-10 h-5 md:w-14 md:h-7 pointer-events-none"
              style={{ top: '15%' }}
              animate={{
                left: ['-20%', '120%'],
                top: ['70%', '5%'],
              }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Contrail / vapor trail */}
              <line x1="-15" y1="11" x2="8" y2="10" stroke="#FACC15" strokeWidth="0.6" opacity="0.25" />
              <line x1="-10" y1="12" x2="8" y2="10.5" stroke="#d4a017" strokeWidth="0.4" opacity="0.15" />
              {/* Fuselage */}
              <path d="M18 10 L8 7.5 L4 10 L8 12 Z" fill="#1a1a2e" stroke="#FACC15" strokeWidth="0.5" />
              {/* Top wing */}
              <path d="M12 9.5 L8 3 L6.5 3.5 L9 10 Z" fill="#FACC15" opacity="0.85" />
              {/* Bottom wing */}
              <path d="M12 10.5 L8 17 L6.5 16.5 L9 10 Z" fill="#d4a017" opacity="0.7" />
              {/* Tail fin */}
              <path d="M5.5 10 L3 6.5 L2 7 L4 10 Z" fill="#FACC15" opacity="0.6" />
              {/* Cockpit window */}
              <circle cx="15" cy="10" r="1" fill="#FDE68A" opacity="0.9" />
              {/* Engine glow */}
              <circle cx="3" cy="10" r="1.5" fill="#FACC15" opacity="0.3" />
            </motion.svg>

            {/* Animated Text */}
            <div className="overflow-hidden">
              <motion.div 
                className="text-xl md:text-2xl font-extrabold tracking-[0.2em] leading-none text-gray-900"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="relative">
                  DHOLERA
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
                  />
                </span>
              </motion.div>
              <motion.div 
                className="text-[9px] md:text-[11px] tracking-[0.35em] font-bold uppercase leading-tight mt-0.5 bg-gradient-to-r from-gray-500 via-[#FACC15] to-gray-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1, backgroundPosition: ["0% center", "200% center"] }}
                transition={{ 
                  y: { delay: 0.5, duration: 0.4 },
                  opacity: { delay: 0.5, duration: 0.4 },
                  backgroundPosition: { delay: 2.5, duration: 3, repeat: Infinity, repeatDelay: 4 }
                }}
              >
                SMART CITY
              </motion.div>
            </div>
          </Link>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex gap-6 items-center">
            <div className="flex items-center gap-3 border-r border-gray-200 pr-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#FACC15] border border-gray-100">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <div className="text-gray-500 text-xs md:text-xs font-medium uppercase tracking-wider">Call Us Now</div>
                <div className="text-black font-bold text-sm">+91 98999 74590</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#FACC15] border border-gray-100">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <div className="text-gray-500 text-xs md:text-xs font-medium uppercase tracking-wider">Send Email</div>
                <div className="text-black font-bold text-sm">{site.email}</div>
              </div>
            </div>
          </div>

          <button className="md:hidden p-2 text-black bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Nav Bar */}
      <div className="hidden md:block bg-black/95 backdrop-blur-md text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center gap-8 px-6">
            <Link href="/" className="hover:text-[#FACC15] py-3 text-sm font-medium transition-colors">Home</Link>
            <Link href="/investment" className="hover:text-[#FACC15] py-3 text-sm font-medium transition-colors">Investment</Link>
            <Link href="/projects" className="hover:text-[#FACC15] py-3 text-sm font-medium transition-colors">Projects</Link>
            <Link href="/gallery" className="hover:text-[#FACC15] py-3 text-sm font-medium transition-colors">Gallery</Link>
            <Link href="/contact-us" className="hover:text-[#FACC15] py-3 text-sm font-medium transition-colors">Contact</Link>
            <Link href="/career" className="hover:text-[#FACC15] py-3 text-sm font-medium transition-colors">Careers</Link>
          </nav>

          <div>
            <Link href="/contact-us" className="bg-[#FACC15] text-black font-bold px-8 py-3 flex items-center h-full hover:bg-yellow-500 transition-colors text-sm tracking-wide">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 z-50 overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Investment', path: '/investment' },
                { name: 'Projects', path: '/projects' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact-us' },
                { name: 'Careers', path: '/career' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center justify-between py-4 px-4 text-gray-900 font-medium hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-100 last:border-0"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
              
              <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Ready to Invest?</p>
                <Link 
                  href="/contact-us" 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#FACC15] text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors shadow-sm"
                >
                  Get A Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
