"use client";

import { Phone, Mail, Clock, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Custom SVG components for social icons
const Facebook = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Pinterest = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4v-3c-.1-.7.2-2.1.2-2.1s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 2.3.6 2.3 1.3 0 1.3-.8 3.2-1.2 5-.3 1.5.8 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.1-6.1-4 0-6.3 3-6.3 6 0 1.5.6 3.1 1.3 4 .1.1.1.3 0 .4l-.4 1.7c-.1.3-.2.3-.5.2-1.9-.9-3.1-3.6-3.1-5.9 0-4.8 3.5-9.2 10-9.2 5.3 0 9.4 3.8 9.4 8.8 0 5.3-3.3 9.5-7.9 9.5-1.5 0-2.9-.8-3.4-1.7l-1 3.8c-.3 1.3-1.2 3-1.8 4 1.5.5 3 .7 4.6.7 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="w-full font-sans">
      {/* Top Bar - Yellow/Black split */}
      <div className="bg-black text-white text-xs h-10 flex items-center relative overflow-hidden">
        {/* Yellow slanted background for the left side */}
        <div className="absolute top-0 left-0 bottom-0 w-64 bg-[#FACC15]" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2 text-black font-medium">
            <Clock className="w-4 h-4" />
            <span>Mon-Sun : 9.00 AM - 5.00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Facebook className="w-4 h-4 fill-current" /></a>
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Twitter className="w-4 h-4 fill-current" /></a>
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-[#FACC15] transition-colors"><Pinterest className="w-4 h-4 fill-current" /></a>
          </div>
        </div>
      </div>

      {/* Middle Bar - Logo and Contact Info */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-12 h-12 bg-[#F87171] text-black font-bold rounded-full flex items-center justify-center text-3xl font-serif">
              d
            </div>
            {/* Using an orange/red color here based on the screenshot where it looks orange/red in the header. #F97316 or similar. Actually in footer it was yellow, in header it looks orange #f97316 */}
            <div>
              <div className="text-3xl font-bold tracking-widest leading-none text-black">DHOLERA</div>
              <div className="text-xl tracking-widest font-light text-black">CITY SMART</div>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row gap-8 items-center border border-gray-100 p-2 pr-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-[#FACC15]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-gray-900 font-medium">Have Any Question</div>
                <div className="text-[#FACC15] font-semibold">(+91) 888 278 4781</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-[#FACC15]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-gray-900 font-medium">Send Your Mail</div>
                <div className="text-[#FACC15] font-semibold">info@dholeracitysmart.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="bg-black text-white relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className={`md:flex items-center gap-8 px-6 ${isOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-black py-4 z-50' : 'hidden'}`}>
            <Link href="/" className="hover:text-[#FACC15] py-4 text-sm font-medium">Home</Link>
            <Link href="/investment" className="hover:text-[#FACC15] py-4 text-sm font-medium">Investment</Link>
            
            <Link href="/projects" className="relative group flex items-center gap-1 hover:text-[#FACC15] py-4 text-sm font-medium">
              Projects <ChevronDown className="w-4 h-4" />
            </Link>
            
            <Link href="/developers" className="relative group flex items-center gap-1 hover:text-[#FACC15] py-4 text-sm font-medium">
              Developers <ChevronDown className="w-4 h-4" />
            </Link>
            
            <Link href="/contact-us" className="hover:text-[#FACC15] py-4 text-sm font-medium">Contact</Link>
            <Link href="/career" className="hover:text-[#FACC15] py-4 text-sm font-medium">Careers</Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact-us" className="bg-[#FACC15] text-black font-semibold px-8 py-5 flex items-center h-full hover:bg-yellow-500 transition-colors whitespace-nowrap">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}