import { site } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        
        <div className="md:col-span-2">
          <span className="text-2xl font-bold tracking-tighter mb-6 block">
            Mayur <span className="text-gradient-gold">Aerocity</span>
          </span>
          <p className="text-[#86868b] max-w-sm mb-8 leading-relaxed">
            {site.tagline}. Strategic investments in India's first greenfield smart city. High ROI, completely legal, and transparent documentation.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
              X
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
              in
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4 text-[#86868b] text-sm">
            <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
            <li><a href="#dholera" className="hover:text-white transition-colors">Why Dholera?</a></li>
            <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
            <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-4 text-[#86868b] text-sm">
            <li className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 text-[#d4a017]" />
              <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">{site.phoneDisplay}</a>
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
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Legal Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}