"use client";

import { PhoneCall, MapPin, ArrowRight, CheckCircle2, Building, ShieldCheck, ChevronRight, Menu, X, Landmark, Cpu, Plane, Route, TrendingUp, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { projects, whyDholera, stats, faqs, site } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const iconMap: Record<string, any> = {
  Landmark, Cpu, Plane, Route, TrendingUp, ShieldCheck
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://mirrikh.com/wp-content/uploads/2026/07/Mirrikh-Group-Hero.jpg",
    "https://mirrikh.com/wp-content/uploads/2026/04/Mayur-Greenz-Courtyard-Single-Images_Optimizer-1.jpg",
    "https://mirrikh.com/wp-content/uploads/2026/07/Mayur-NOVA-cover-banner-2.jpg",
    "https://mirrikh.com/wp-content/uploads/2026/05/Mayur-Forest-Villa-Dholera-1.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {heroImages.map((src, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={src}
              alt={`Dholera Smart City Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
        {/* Adjusted the overlay to be a bit darker for better text contrast since we removed the grayscale filter */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                {site.name} • Exclusive Partner
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Invest in India's <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Smartest City.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light">
                {site.tagline}. Secure your future in Dholera SIR — the epicenter of the upcoming ₹91,000 Cr semiconductor hub and international airport.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 flex items-center gap-2">
                  Explore Projects <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all">
                  Download Brochure
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className={`px-4 ${i===0 ? 'pl-0' : ''}`}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SEARCH / FILTER (Floating) */}
      <section className="relative z-20 -mt-8 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input type="text" placeholder="Search by project name or location..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-100 outline-none text-gray-700" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            {['Residential', 'Commercial'].map(type => (
              <button key={type} className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                {type}
              </button>
            ))}
            <button className="flex-1 md:flex-none px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED OPPORTUNITY (Offer Section) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                Hot Investment
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Secure your plot before the <span className="text-blue-600">Airport launch.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
                With the Dholera International Airport nearing completion in 2026, land parcels within the SIR boundary are experiencing unprecedented demand. 
              </motion.p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: "High ROI", desc: "Estimated 25-40% appreciation in next 3 years" },
                  { title: "Ready Possession", desc: "Immediate registry with clear title" },
                ].map((item, i) => (
                  <motion.div variants={fadeUp} key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 bg-blue-100 blur-3xl -z-10 rounded-full" />
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                  <TrendingUp className="w-32 h-32" />
                </div>
                <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">Limited Time Offer</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-bold tracking-tighter text-gray-900">₹10,750</span>
                  <span className="text-xl text-gray-500">/ Sq. Yd.</span>
                </div>
                <p className="text-gray-500 mb-8 pb-8 border-b border-gray-100">Starting price for premium plots ranging from 125.84 to 377.46 Sq. Yd.</p>
                <ul className="space-y-4 mb-8">
                  {['NA, NOC & Title Clear', 'Premium Gated Community', 'Immediate Registry Available'].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full py-4 text-center bg-gray-900 hover:bg-black text-white shadow-md font-semibold rounded-2xl transition-all hover:-translate-y-0.5">
                  Claim This Offer
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY DHOLERA */}
      <section id="dholera" className="py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Why Invest in <span className="text-blue-600">Dholera?</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">India's first greenfield smart city is rapidly becoming the epicenter of global manufacturing and infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDholera.map((item, i) => {
              const IconComponent = iconMap[item.icon] || Landmark;
              return (
                <Link href={`/why-dholera/${item.slug}`} key={i} className="group block h-full">
                  <div className="bg-white border border-gray-200 rounded-3xl h-full hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
                    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                      <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1 bg-[#f9fafb]">
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.text}</p>
                      <div className="font-bold text-blue-600 mt-auto flex items-center gap-1 group-hover:translate-x-1 transition-transform text-sm">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section id="projects" className="py-32 relative bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Our <span className="text-blue-600">Portfolio.</span></h2>
              <p className="text-xl text-gray-600 max-w-2xl">A collection of premium residential developments strategically located across Dholera.</p>
            </div>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 flex justify-end">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    {project.status}
                  </span>
                </div>
                <div className="h-16 flex items-center mb-4">
                  {project.logo ? (
                    <img src={project.logo} alt={project.name} className="max-h-12 w-auto object-contain" />
                  ) : (
                    <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                  )}
                </div>
                <p className="text-blue-600 text-sm font-medium mb-6">{project.location}</p>
                
                <ul className="space-y-3 mb-8">
                  {project.highlights.slice(0,3).map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Starting From</p>
                    <p className="text-lg font-bold text-gray-900">{project.price}</p>
                  </div>
                  <Link href={`/project/${project.slug}`} className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about investing in Dholera Smart City.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#f9fafb] border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}