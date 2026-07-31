"use client";

import { CheckCircle2, TrendingUp, MapPin, ShieldCheck, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

export default function SmartInvestorChoice() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24 overflow-hidden border-t-4 border-[#FACC15]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15]/20 text-[#FACC15] font-semibold text-sm mb-4 border border-[#FACC15]/30"
          >
            Limited Time Offer
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            The <span className="text-[#FACC15]">Smart Investor's</span> Choice.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-light"
          >
            Experience unparalleled growth with guaranteed returns. Capitalize on the massive infrastructure development of Dholera Smart City before prices surge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <TrendingUp className="w-10 h-10 text-[#FACC15] mb-6" />
            <div className="text-2xl font-bold mb-2">1% Monthly Return</div>
            <p className="text-gray-400 text-sm">Guaranteed for 36 Months</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <IndianRupee className="w-10 h-10 text-[#FACC15] mb-6" />
            <div className="text-2xl font-bold mb-2">Invest ₹12 Lakhs</div>
            <p className="text-gray-400 text-sm">Secure a premium NA, NOC & Title Clear plot</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <MapPin className="w-10 h-10 text-[#FACC15] mb-6" />
            <div className="text-2xl font-bold mb-2">0 KM from Boundary</div>
            <p className="text-gray-400 text-sm">Prime strategic location directly connected to Dholera SIR</p>
          </motion.div>

          {/* Card 4 - Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-[#FACC15] text-black rounded-2xl p-8 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
              <IndianRupee className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="text-gray-900 font-bold uppercase tracking-wider text-sm mb-2">Starting Price</div>
              <div className="text-4xl font-extrabold mb-1">₹9,750 <span className="text-xl font-medium text-gray-800">/ Sq.Yd</span></div>
              <p className="text-gray-800 text-sm font-medium mt-4">
                Premium plots ranging from 125.84 to 377.46 Sq. Yd.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FACC15]" />
              <span className="font-medium">NA, NOC & Title Clear</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FACC15]" />
              <span className="font-medium">Premium Gated Community</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FACC15]" />
              <span className="font-medium">Immediate Registry Available</span>
            </div>
          </div>
          
          <motion.a 
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-[#FACC15] text-black font-bold text-lg rounded-full shadow-2xl shadow-[#FACC15]/20 hover:bg-yellow-500 transition-colors"
          >
            Claim This Offer
          </motion.a>
        </div>

      </div>
    </section>
  );
}
