import { site } from "@/lib/data";
import { Mail, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";

// Custom SVG components for social icons
const Facebook = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Instagram = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Pinterest = ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.4v-3c-.1-.7.2-2.1.2-2.1s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 2.3.6 2.3 1.3 0 1.3-.8 3.2-1.2 5-.3 1.5.8 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.1-6.1-4 0-6.3 3-6.3 6 0 1.5.6 3.1 1.3 4 .1.1.1.3 0 .4l-.4 1.7c-.1.3-.2.3-.5.2-1.9-.9-3.1-3.6-3.1-5.9 0-4.8 3.5-9.2 10-9.2 5.3 0 9.4 3.8 9.4 8.8 0 5.3-3.3 9.5-7.9 9.5-1.5 0-2.9-.8-3.4-1.7l-1 3.8c-.3 1.3-1.2 3-1.8 4 1.5.5 3 .7 4.6.7 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>;

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-gray-800 pb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#FACC15] text-black font-bold rounded-full flex items-center justify-center text-3xl font-serif">
              d
            </div>
            <div>
              <div className="text-3xl font-bold tracking-widest leading-none">DHOLERA</div>
              <div className="text-xl tracking-widest font-light">SMART CITY</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 md:justify-center">
            <Phone className="w-8 h-8 text-[#FACC15] shrink-0" />
            <div>
              <div className="text-[#FACC15] font-semibold">Phone</div>
              <div className="text-[#FACC15] text-sm sm:text-base">(+91) 98999 74590 / 70423 67340</div>
            </div>
          </div>

          {/* Mail */}
          <div className="flex items-center gap-4 md:justify-end">
            <Mail className="w-8 h-8 text-[#FACC15] shrink-0" />
            <div>
              <div className="text-[#FACC15] font-semibold">Mail</div>
              <div className="text-[#FACC15]">{site.email}</div>
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
              <li>
                <Link href="/about-us" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/investment" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Investment
                </Link>
              </li>
              <li>
                <Link href="/projects" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Useful Links */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/career" className="flex items-center gap-3 text-gray-300 hover:text-[#FACC15] transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#FACC15]" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: News Letter */}
          <div>
            <h3 className="text-2xl mb-6 font-medium">News Letter</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Stay updated with the latest news, tips, offers — straight to your inbox.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white text-black px-4 py-3 pr-24 focus:outline-none"
              />
              <button type="submit" className="absolute right-0 top-0 bottom-0 bg-[#FACC15] text-black font-bold px-4 hover:bg-yellow-400 transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <div>
            Copyright © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </div>
          <div>
            Powered by Mirrikh Group
          </div>
        </div>
      </div>
    </footer>
  );
}
