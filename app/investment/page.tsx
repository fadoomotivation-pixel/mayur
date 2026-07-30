import Image from 'next/image';
import Link from 'next/link';
import { site, projects, whyDholera } from '@/lib/data';
import { Landmark, Cpu, Plane, Route, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const IconMap = {
  Landmark,
  Cpu,
  Plane,
  Route,
  TrendingUp,
  ShieldCheck,
} as const;

export default function InvestmentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f9fafb]">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Investment in Dholera Smart City
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              India's first greenfield smart city is rapidly developing. Secure your ground-floor entry into the future of manufacturing and urban living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact-us" className="px-8 py-3 bg-[#FACC15] text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition shadow-sm w-full sm:w-auto text-center">
                Get Investment Guide
              </Link>
              <Link href="#projects" className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition w-full sm:w-auto text-center">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Dholera */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Invest in Dholera</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic advantages that make Dholera the most promising real estate destination in India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyDholera.map((reason, index) => {
              const Icon = IconMap[reason.icon as keyof typeof IconMap] || CheckCircle2;
              
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group">
                  <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Infrastructure Developments & Investment Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Infra */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Infrastructure Developments</h2>
              <div className="space-y-6">
                {[
                  "Dholera International Airport (Navagam)",
                  "Tata Electronics ₹91,000 Cr Semiconductor Fab",
                  "Ahmedabad-Dholera Expressway (109 km)",
                  "ABCD Building & Activation Center",
                  "Metro rail connectivity",
                  "Solar power plants",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-gray-800 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Investment Benefits</h2>
              <div className="space-y-6">
                {[
                  "Government-backed SIR with DMIC corridor",
                  "Early-growth pricing (₹9,750/sq yd starting)",
                  "Clear-title, NA, NOC-approved plots",
                  "High ROI potential (projected 3-5x in 5-7 years)",
                  "Premium gated community projects",
                  "Flexible payment plans",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-gray-800 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section id="projects" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our premium plotted developments across Dholera Smart City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition">
                <div className="relative h-48 bg-gray-200">
                  <Image 
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-sm font-semibold text-gray-900">
                      {project.price}
                    </div>
                    <Link href={`/${project.slug}`} className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 flex items-center gap-1">
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Invest?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Connect with our investment advisors to find the perfect property that aligns with your financial goals in Dholera Smart City.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact-us" className="px-8 py-4 bg-[#FACC15] text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition shadow-lg w-full sm:w-auto text-lg flex items-center justify-center gap-2">
              Contact Us
            </Link>
            <a href={`tel:+91${site.phone}`} className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition backdrop-blur-sm border border-white/20 w-full sm:w-auto text-lg">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
