"use client";

import { Phone, Mail, Clock, Facebook, Twitter, Instagram, Pinterest, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
            
            <div className="relative group flex items-center gap-1 cursor-pointer hover:text-[#FACC15] py-4 text-sm font-medium">
              Projects <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="relative group flex items-center gap-1 cursor-pointer hover:text-[#FACC15] py-4 text-sm font-medium">
              Developers <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="relative group flex items-center gap-1 cursor-pointer hover:text-[#FACC15] py-4 text-sm font-medium">
              Rent <ChevronDown className="w-4 h-4" />
            </div>
            
            <Link href="/blog" className="hover:text-[#FACC15] py-4 text-sm font-medium">Blog</Link>
            <Link href="/contact" className="hover:text-[#FACC15] py-4 text-sm font-medium">Contact</Link>
            <Link href="/careers" className="hover:text-[#FACC15] py-4 text-sm font-medium">Careers</Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/quote" className="bg-[#FACC15] text-black font-semibold px-8 py-5 flex items-center h-full hover:bg-yellow-500 transition-colors whitespace-nowrap">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}