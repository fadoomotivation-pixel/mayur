import { site } from "@/lib/data";
import { Mail, Phone, ChevronRight, Facebook, Twitter, Instagram, Pinterest } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-gray-800 pb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Imitating the logo from the screenshot */}
            <div className="w-12 h-12 bg-[#FACC15] text-black font-bold rounded-full flex items-center justify-center text-3xl font-serif">
              d
            </div>
            <div>
              <div className="text-3xl font-bold tracking-widest leading-none">DHOLERA</div>
              <div className="text-xl tracking-widest font-light">CITY SMART</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 md:justify-center">
            <Phone className="w-8 h-8 text-[#FACC15] fill-current" />
            <div>
              <div className="text-[#FACC15] font-semibold">Phone</div>
              <div className="text-[#FACC15]">(+91) 888 278 4781</div>
            </div>
          </div>

          {/* Mail */}
          <div className="flex items-center gap-4 md:justify-end">
            <Mail className="w-8 h-8 text-[#FACC15] fill-current" />
            <div>
              <div className="text-[#FACC15] font-semibold">Mail</div>
              <div className="text-[#FACC15]">info@dholeracitysmart.com</div>
            </div>
          </div>
        </div>

        {/* Middle Section (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Col 1: About Us */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">About Us</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm pr-4">
              Dholera, a visionary urban marvel that's redefining the future of sustainable living and business opportunities in India.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Pinterest].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-[#FACC15] flex items-center justify-center text-black hover:bg-yellow-400 transition-colors">
                  <Icon className="w-4 h-4 fill-current" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Investment', 'Villages', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Useful Links */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">Useful Links</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms and Conditions', 'Disclaimer', 'Support'].map((item) => (
                <li key={item}>
                  <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: News Letter */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">News Letter</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Stay updated with the latest news, tips, offers — straight to your inbox.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white text-black px-4 py-3 focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
          </div>
          
          <div className="flex bg-white rounded my-4 md:my-0 px-1 py-1">
            <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-black text-xs font-semibold rounded shadow-sm">
              <span className="text-[10px]">🇬🇧</span> English
            </button>
            <button className="flex items-center gap-2 px-3 py-1 text-black text-xs font-semibold">
              <span className="text-[10px]">🇮🇳</span> हिंदी
            </button>
          </div>

          <div>
            Website Design by India
          </div>
        </div>
      </div>
    </footer>
  );
}