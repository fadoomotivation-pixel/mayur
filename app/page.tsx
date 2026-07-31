"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Leaf, 
  Trees, 
  Waves,
  Building2,
  ChevronRight,
  ArrowRight,
  Landmark,
  Cpu,
  Plane,
  Route,
  Plus,
  Minus
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { site, whyDholera, projects, faqs, stats } from "@/lib/data";

const iconMap: Record<string, any> = {
  Landmark,
  Cpu,
  Plane,
  Route,
  TrendingUp,
  ShieldCheck
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://mirrikh.com/wp-content/uploads/2026/06/Web-Banner1.jpg.jpeg",
    "https://mirrikh.com/wp-content/uploads/2026/04/Mayur-Greenz-Courtyard-Web-Banner.jpg-1.jpeg",
    "https://mirrikh.com/wp-content/uploads/2026/06/banner-Mayur-Park-3-1.jpg",
    "https://mirrikh.com/wp-content/uploads/2026/07/Mayur-NOVA-cover-banner-2.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <main className="min-h-screen bg-[#f9fafb] overflow-hidden selection:bg-[#000] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative w-full pt-[70px] md:pt-20 bg-[#f9fafb]">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[85vh] z-0 overflow-hidden bg-[#f9fafb]">
          {heroImages.map((src, idx) => (
            <img 
              key={idx}
              src={src} 
              alt="Dholera Smart City Real Estate" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100 md:scale-105' : 'opacity-0 scale-100'}`}
            />
          ))}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>



      {/* WHY DHOLERA */}
      <section id="dholera" className="py-20 sm:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Why Invest in <span className="text-blue-600">Dholera?</span></h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">India's first greenfield smart city is rapidly becoming the epicenter of global manufacturing and infrastructure.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className="absolute bottom-4 left-4 sm:left-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">{item.title}</h3>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1 bg-[#f9fafb]">
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
      <section id="projects" className="py-20 sm:py-32 relative bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Our <span className="text-blue-600">Portfolio.</span></h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">A collection of premium residential developments strategically located across Dholera.</p>
            </div>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 sm:p-6 flex justify-end">
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
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Pricing</div>
                    <div className="font-bold text-gray-900">{project.priceUnit}</div>
                  </div>
                  <a href={`/project/${project.slug}`} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AMENITIES GRID */}
      <section id="amenities" className="py-20 sm:py-32 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">Designed for <span className="text-blue-600">Tomorrow.</span></h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">A premium gated community equipped with world-class infrastructure.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#f9fafb] border border-gray-200 rounded-3xl p-8 flex flex-col justify-end min-h-[300px] sm:min-h-[400px] relative overflow-hidden group">
              <img src="https://mirrikh.com/wp-content/uploads/2026/04/Mayur-Greenz-Courtyard-Web-Banner.jpg-1.jpeg" alt="Clubhouse" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="relative z-10 text-white">
                <Building2 className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Luxury Clubhouse</h3>
                <p className="text-gray-200 font-medium">State-of-the-art facilities for recreation and wellness.</p>
              </div>
            </div>
            
            <div className="bg-[#f9fafb] border border-gray-200 rounded-3xl p-8 flex flex-col justify-end min-h-[300px] sm:min-h-[400px] relative overflow-hidden group">
              <img src="https://mirrikh.com/wp-content/uploads/2026/05/Mayur-Forest-Villa-Web-Banner-1.png" alt="Resort Setting" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
              <div className="relative z-10 text-white">
                <Waves className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Swimming Pool</h3>
                <p className="text-gray-200 font-medium">Resort-style aquatic center.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8">
              <Trees className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Lush Green Parks</h3>
              <p className="text-gray-600 text-sm font-medium">Extensive tree plantations and manicured landscapes for a serene environment.</p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">24/7 Security</h3>
              <p className="text-gray-600 text-sm font-medium">Gated community with boundary walls and round-the-clock surveillance.</p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8">
              <Leaf className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm font-medium">Sustainable infrastructure built in harmony with nature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section id="faqs" className="py-20 sm:py-32 relative bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about investing with us.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden transition-colors hover:border-gray-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-4 sm:px-6 py-5 sm:py-6 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-base sm:text-lg pr-4 sm:pr-8 text-gray-900">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-blue-600 shrink-0" /> : <Plus className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-4 sm:px-6 pb-6 text-gray-600 leading-relaxed font-medium text-sm sm:text-base"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT / LEAD FORM */}
      <section id="contact" className="py-20 sm:py-32 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#f9fafb] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-16 border border-gray-200 shadow-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/50" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Secure your piece of the future.</h2>
              <p className="text-gray-600 mb-10 max-w-xl mx-auto text-base sm:text-lg">Leave your details and our investment experts will contact you with the complete project brochure and pricing.</p>
              
              <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                />
                <button type="submit" className="w-full py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black hover:shadow-lg transition-all hover:-translate-y-0.5">
                  Request Callback
                </button>
              </form>
              <p className="text-sm font-medium text-gray-500 mt-6">
                Or call directly: <a href={`tel:+91${site.phone}`} className="text-gray-900 hover:text-blue-600">{site.phoneDisplay}</a> | <a href={`tel:+91${site.phoneAlt}`} className="text-gray-900 hover:text-blue-600">+91 {site.phoneAlt}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
