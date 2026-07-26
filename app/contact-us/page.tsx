import { site } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#f9fafb] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Get in touch with our investment experts to secure your future in Dholera Smart City.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
              ></textarea>
              <button type="submit" className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:shadow-md transition-all hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Office Location</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0 mt-1 text-gray-900" />
                <p className="text-gray-600 leading-relaxed font-medium">{site.address}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Direct Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 shrink-0 text-gray-900" />
                  <div>
                    <a href={`tel:${site.phone}`} className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">{site.phoneDisplay}</a>
                    <a href={`tel:${site.phoneAlt}`} className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">+91 {site.phoneAlt}</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <Mail className="w-6 h-6 shrink-0 text-gray-900" />
                  <a href={`mailto:${site.email}`} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">{site.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}