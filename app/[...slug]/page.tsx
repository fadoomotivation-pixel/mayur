import { notFound } from "next/navigation";
import { site, projects } from "@/lib/data";
import { MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DynamicPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join('/');
  const lastSegment = params.slug[params.slug.length - 1];
  
  // Check if it's a specific project
  const project = projects.find(p => p.slug === lastSegment);

  if (project) {
    // Render High-Fidelity Project Template
    return (
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full flex items-center justify-center">
          <Image 
            src="https://raw.githubusercontent.com/fadoomotivation-pixel/cap/main/public/hero-bg.jpg" 
            alt={project.name}
            fill
            className="object-cover opacity-40"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
            <span 
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block"
              style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
            >
              {project.status}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {project.name}
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#86868b] text-lg">
              <MapPin className="w-5 h-5" style={{ color: project.accent }} />
              {project.location}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-xl text-[#86868b] leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Key Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: project.accent }} />
                    <span className="text-gray-300 font-medium leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Lead Form */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-8 rounded-3xl sticky top-32">
              <h3 className="text-2xl font-bold mb-2">Interested in {project.name}?</h3>
              <p className="text-[#86868b] text-sm mb-8">Drop your details below and our Dholera experts will contact you directly.</p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none transition-colors"
                  style={{ borderColor: project.accent }}
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none transition-colors"
                />
                <button 
                  type="submit" 
                  className="w-full py-4 text-black font-semibold rounded-xl transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: project.accent || '#d4a017' }}
                >
                  Request Call Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // If not a specific project, render Informational / Category Template
  const rawTitle = lastSegment;
  const title = rawTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Filter projects if it's a category page like "residential-plots"
  let categoryProjects = projects;
  if (title.toLowerCase().includes('residential')) categoryProjects = projects.filter(p => p.type.includes('Residential'));
  if (title.toLowerCase().includes('commercial')) categoryProjects = projects.filter(p => p.type.includes('Commercial'));
  if (title.toLowerCase().includes('industrial')) categoryProjects = projects.filter(p => p.type.includes('Industrial'));

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-[#86868b] mb-8">
            Discover detailed insights and premium opportunities regarding {title} in Dholera Smart City.
          </p>
          <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Speak to an Advisor
          </Link>
        </div>

        {/* Project Grid for Informational Pages */}
        {categoryProjects.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">Featured {title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map(proj => (
                <Link key={proj.slug} href={`/project/${proj.slug}`} className="group block h-full">
                  <div className="glass-panel p-8 rounded-3xl h-full border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block"
                      style={{ backgroundColor: `${proj.accent}20`, color: proj.accent }}
                    >
                      {proj.status}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#d4a017] transition-colors">{proj.name}</h3>
                    <p className="text-[#86868b] text-sm mb-6 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {proj.location}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {proj.highlights.slice(0,2).map((h, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: proj.accent }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="font-semibold text-white mt-auto border-t border-white/10 pt-4 flex justify-between items-center">
                      <span>View Details</span>
                      <span style={{ color: proj.accent }}>&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}