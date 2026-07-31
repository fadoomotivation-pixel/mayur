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
        <div className="absolute top-0 left-0 bottom-0 w-48 bg-[#FACC15]" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}></div>
        
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
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#F87171] text-black font-bold rounded-full flex items-center justify-center text-xl md:text-2xl font-serif">
              d
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold tracking-widest leading-none text-black">DHOLERA</div>
              <div className="text-[10px] md:text-xs tracking-widest font-semibold text-gray-500 uppercase leading-tight mt-0.5">SMART CITY</div>
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
