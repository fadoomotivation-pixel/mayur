"use client";

import { motion, Variants } from "framer-motion";
import { 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Leaf, 
  Trees, 
  Waves,
  Building2,
  ChevronRight,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden selection:bg-[#b8860b] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Aerial view" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#b8860b] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-[#d4a017] uppercase">Special Pre-Launch Offer</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              Mayur Aerocity <span className="text-gradient-gold">II</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#86868b] max-w-2xl mb-10 font-light">
              Premium residential plots just 0 KM from Dholera SIR boundary. Secure your future in Gujarat’s fastest-growing smart city corridor.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a href="#invest" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium text-lg transition-transform hover:scale-105 active:scale-95">
                Invest Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#details" className="inline-flex items-center justify-center px-8 py-4 glass-panel text-white rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
                View Project Details
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ROI / INVESTMENT HIGHLIGHT */}
      <section id="invest" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                The Smart Investor's <br /><span className="text-gradient">Choice.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-[#86868b] mb-8 leading-relaxed">
                Experience unparalleled growth with guaranteed returns. Capitalize on the massive infrastructure development of Dholera Smart City before prices surge.
              </motion.p>
              
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, title: "1% Monthly Return", desc: "Guaranteed for 36 Months" },
                  { icon: ShieldCheck, title: "Invest ₹12 Lakhs", desc: "Secure a premium NA, NOC & Title Clear plot" },
                  { icon: MapPin, title: "0 KM from Boundary", desc: "Prime strategic location" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-4 glass-panel rounded-2xl">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#d4a017]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-[#86868b]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b8860b]/20 to-transparent blur-3xl -z-10" />
              <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <TrendingUp className="w-32 h-32" />
                </div>
                <p className="text-sm font-semibold tracking-widest text-[#d4a017] uppercase mb-4">Limited Time Offer</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold tracking-tighter">₹10,750</span>
                  <span className="text-xl text-[#86868b]">/ Sq. Yd.</span>
                </div>
                <p className="text-[#86868b] mb-8 pb-8 border-b border-white/10">Starting price for premium plots ranging from 125.84 to 377.46 Sq. Yd.</p>
                <ul className="space-y-4 mb-8">
                  {['NA, NOC & Title Clear', 'Premium Gated Community', 'Immediate Registry Available'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <ShieldCheck className="w-5 h-5 text-[#d4a017]" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-[#d4a017] hover:bg-[#b8860b] text-black font-semibold rounded-2xl transition-colors">
                  Claim This Offer
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. AMENITIES GRID */}
      <section id="details" className="py-32 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Designed for <span className="text-gradient">Tomorrow.</span></h2>
            <p className="text-xl text-[#86868b] max-w-2xl mx-auto">A premium gated community equipped with world-class infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop" alt="Clubhouse" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10">
                <Building2 className="w-10 h-10 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-2">Luxury Clubhouse</h3>
                <p className="text-[#86868b]">State-of-the-art facilities for recreation and wellness.</p>
              </div>
            </div>
            
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" alt="Pool" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10">
                <Waves className="w-10 h-10 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-2">Swimming Pool</h3>
                <p className="text-[#86868b]">Resort-style aquatic center.</p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8">
              <Trees className="w-10 h-10 text-[#d4a017] mb-4" />
              <h3 className="text-xl font-bold mb-2">Lush Green Parks</h3>
              <p className="text-[#86868b] text-sm">Extensive tree plantations and manicured landscapes for a serene environment.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8">
              <ShieldCheck className="w-10 h-10 text-[#d4a017] mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Security</h3>
              <p className="text-[#86868b] text-sm">Gated community with boundary walls and round-the-clock surveillance.</p>
            </div>

            <div className="glass-panel rounded-3xl p-8">
              <Leaf className="w-10 h-10 text-[#d4a017] mb-4" />
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-[#86868b] text-sm">Sustainable infrastructure built in harmony with nature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT / LEAD FORM */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel rounded-[2.5rem] p-8 md:p-16 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b8860b]/10 to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Secure your piece of the future.</h2>
              <p className="text-[#86868b] mb-10 max-w-xl mx-auto">Leave your details and our investment experts will contact you with the complete project brochure and pricing.</p>
              
              <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4a017] transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4a017] transition-colors"
                />
                <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                  Request Callback
                </button>
              </form>
              <p className="text-xs text-[#86868b] mt-6">Or call directly: <a href="tel:9899974590" className="text-white hover:text-[#d4a017]">9899974590</a> | <a href="tel:7042367340" className="text-white hover:text-[#d4a017]">7042367340</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#86868b]">
        <p>&copy; {new Date().getFullYear()} Mayur Aerocity II. All rights reserved.</p>
      </footer>
    </main>
  );
}