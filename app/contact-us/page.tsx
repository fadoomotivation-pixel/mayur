import { site } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Contact <span className="text-gradient-gold">Us</span>
        </h1>
        <p className="text-xl text-[#86868b] mb-12">
          Get in touch with our investment experts to secure your future in Dholera Smart City.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4a017] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4a017] transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4a017] transition-colors"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4a017] transition-colors"
              ></textarea>
              <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4 text-[#d4a017]">Office Location</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0 mt-1" />
                <p className="text-[#86868b] leading-relaxed">{site.address}</p>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-semibold mb-4 text-[#d4a017]">Direct Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 shrink-0" />
                  <div>
                    <a href={`tel:${site.phone}`} className="block text-lg hover:text-[#d4a017]">{site.phoneDisplay}</a>
                    <a href={`tel:${site.phoneAlt}`} className="block text-lg hover:text-[#d4a017]">+91 {site.phoneAlt}</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <Mail className="w-6 h-6 shrink-0" />
                  <a href={`mailto:${site.email}`} className="text-lg hover:text-[#d4a017]">{site.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}