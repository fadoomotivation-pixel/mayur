import { site } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            Mayur <span className="text-gradient-gold">Dholera</span>
          </Link>
          <p className="text-[#86868b] max-w-sm mb-8 leading-relaxed text-sm">
            {site.tagline}. Strategic investments in India's first greenfield smart city. High ROI, completely legal, and transparent documentation under DMIC.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
              X
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
              in
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4 text-[#86868b] text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/career" className="hover:text-white transition-colors">Career</Link></li>
            <li><Link href="/#dholera" className="hover:text-white transition-colors">Why Dholera?</Link></li>
            <li><Link href="/#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Col 3: Properties */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Properties</h4>
          <ul className="space-y-4 text-[#86868b] text-sm">
            <li><Link href="/residential-plots" className="hover:text-white transition-colors">Residential Plots</Link></li>
            <li><Link href="/industrial-land" className="hover:text-white transition-colors">Industrial Land</Link></li>
            <li><Link href="/project/dholera-iconic-rera-approved-commercial-shops" className="hover:text-white transition-colors">Commercial Shops</Link></li>
            <li><Link href="/rooms-for-rent-in-dholera" className="hover:text-white transition-colors">Rooms for Rent</Link></li>
            <li><Link href="/corporate-staff-accommodation-in-dholera" className="hover:text-white transition-colors">Staff Accommodation</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
          <ul className="space-y-4 text-[#86868b] text-sm">
            <li className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 text-[#d4a017]" />
              <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">{site.phoneDisplay}</a>
            </li>
            <li className="flex gap-3 pl-8">
              <a href={`tel:${site.phoneAlt}`} className="hover:text-white transition-colors">+91 {site.phoneAlt}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 shrink-0 text-[#d4a017]" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-[#d4a017]" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#86868b]">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Legal Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}