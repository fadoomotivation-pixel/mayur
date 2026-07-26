import { notFound } from "next/navigation";
import { site, projects } from "@/lib/data";
import { MapPin, CheckCircle2, ChevronRight, Home, IndianRupee, Move } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DynamicPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join('/');
  const lastSegment = params.slug[params.slug.length - 1];
  
  // Check if it's a specific project
  const project = projects.find(p => p.slug === lastSegment);

  if (project) {
    // Render Identical White Theme Project Template
    return (
      <main className="min-h-screen bg-[#f9fafb]">
        {/* Clean Hero Header with Breadcrumbs */}
        <div className="bg-[#0C447C] pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image 
              src="https://raw.githubusercontent.com/fadoomotivation-pixel/cap/main/public/hero-bg.jpg" 
              alt={project.name}
              fill
              className="object-cover opacity-20 mix-blend-overlay"
              unoptimized
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {project.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 text-blue-100 text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/${project.category.toLowerCase()}`} className="hover:text-white transition-colors">{project.category}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{project.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Left Content - 8 columns */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Property Detail Grid (Replicating the competitor's meta table) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border-b border-gray-100">
                <div className="p-6 text-center">
                  <div className="mx-auto w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-[#0C447C]">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Price</div>
                  <div className="text-sm font-bold text-gray-900">{project.priceUnit}</div>
                </div>
                <div className="p-6 text-center">
                  <div className="mx-auto w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-[#0C447C]">
                    <Home className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Type</div>
                  <div className="text-sm font-bold text-gray-900">{project.type}</div>
                </div>
                <div className="p-6 text-center">
                  <div className="mx-auto w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-[#0C447C]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Status</div>
                  <div className="text-sm font-bold text-gray-900">{project.status}</div>
                </div>
                <div className="p-6 text-center">
                  <div className="mx-auto w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-[#0C447C]">
                    <Move className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Area</div>
                  <div className="text-sm font-bold text-gray-900">{project.size}</div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 flex items-center gap-3 text-gray-700 font-medium text-sm">
                <MapPin className="w-5 h-5 text-[#0C447C]" />
                Location: {project.location}
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.desc}
              </p>
            </div>

            {/* Amenities Section */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">Features & Amenities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
                    <span className="text-gray-700 font-medium text-sm leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Lead Form - 4 columns */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden sticky top-28">
              <div className="bg-[#0C447C] px-6 py-5">
                <h3 className="text-xl font-bold text-white mb-1">Interested in {project.name}?</h3>
                <p className="text-blue-200 text-xs">Drop your details below and our Dholera experts will contact you directly.</p>
              </div>
              
              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter phone number" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter email address" 
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full py-4 text-white font-bold rounded-lg transition-transform hover:-translate-y-0.5 bg-[#d97e21] shadow-md hover:shadow-lg"
                    >
                      Request Call Back
                    </button>
                  </div>
                  <p className="text-[11px] text-center text-gray-400 mt-4">
                    Your details are safe with us. We will never spam you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // If not a specific project, render Informational / Category Template in White Theme
  const rawTitle = lastSegment;
  const title = rawTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  let categoryProjects = projects;
  if (title.toLowerCase().includes('residential')) categoryProjects = projects.filter(p => p.type.includes('Residential'));
  if (title.toLowerCase().includes('commercial')) categoryProjects = projects.filter(p => p.type.includes('Commercial'));
  if (title.toLowerCase().includes('industrial')) categoryProjects = projects.filter(p => p.type.includes('Industrial'));

  return (
    <main className="min-h-screen bg-[#f9fafb] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover detailed insights and premium opportunities regarding {title} in Dholera Smart City.
          </p>
          <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-[#0C447C] text-white font-semibold rounded-full hover:bg-blue-800 transition-colors shadow-md">
            Speak to an Advisor
          </Link>
        </div>

        {/* Project Grid for Informational Pages */}
        {categoryProjects.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map(proj => (
                <Link key={proj.slug} href={`/project/${proj.slug}`} className="group block h-full">
                  <div className="bg-white p-8 rounded-3xl h-full border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="mb-6 flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-blue-50 text-blue-700">
                        {proj.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">{proj.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-blue-600" /> {proj.location}
                    </p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {proj.highlights.slice(0,3).map((h, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-3 font-medium">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="font-bold text-gray-900 mt-auto border-t border-gray-100 pt-5 flex justify-between items-center">
                      <span>{proj.priceUnit}</span>
                      <span className="text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Details <ChevronRight className="w-4 h-4" />
                      </span>
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