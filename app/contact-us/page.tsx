"use client";
import { useState } from "react";
import { site } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  const [status, setStatus] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] pt-20 sm:pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
          Contact <span className="text-[#FACC15]">Us</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Get in touch with our investment experts to secure your future in Dholera Smart City.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h3>
            
            {status === "success" ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-xl border border-green-200 text-center">
                <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setStatus("")} className="mt-4 text-sm font-semibold underline">Send another message</button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Full Name" 
                  className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/10 transition-all"
                />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/10 transition-all"
                />
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/10 transition-all"
                />
                <textarea 
                  name="message"
                  required
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-6 py-4 rounded-xl bg-[#f9fafb] border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FACC15] focus:ring-4 focus:ring-[#FACC15]/10 transition-all resize-none"
                ></textarea>
                
                {status === "error" && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
                
                <button disabled={status === "submitting"} type="submit" className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-70">
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#FACC15]">Office Location</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0 mt-1 text-gray-900" />
                <p className="text-gray-600 leading-relaxed font-medium">{site.address}</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#FACC15]">Direct Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 shrink-0 text-gray-900" />
                  <div>
                    <a href={`tel:+91${site.phone}`} className="block text-lg font-medium text-gray-900 hover:text-[#FACC15] transition-colors">{site.phoneDisplay}</a>
                    <a href={`tel:+91${site.phoneAlt}`} className="block text-lg font-medium text-gray-900 hover:text-[#FACC15] transition-colors">+91 {site.phoneAlt}</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <Mail className="w-6 h-6 shrink-0 text-gray-900" />
                  <a href={`mailto:${site.email}`} className="text-lg font-medium text-gray-900 hover:text-[#FACC15] transition-colors">{site.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
