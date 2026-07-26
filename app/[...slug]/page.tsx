import { notFound } from "next/navigation";
import { site, projects } from "@/lib/data";
import { MapPin, Phone, Building, Home, Maximize, Tag, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DynamicPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug.join('/');
  const lastSegment = params.slug[params.slug.length - 1];
  
  // Check if it's a specific project
  const project = projects.find(p => p.slug === lastSegment);

  if (project) {
    // Render Identical Project Template matching the screenshot
    return (
      <main className="min-h-screen bg-white">
        
        {/* Title Area */}
        <div className="max-w-7xl mx-auto px-6 py-8 border-b border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333]">
            {project.name}
          </h1>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Left Sidebar - Meta Data */}
          <div className="lg:col-span-1 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            
            {/* Meta Items */}
            <div className="divide-y divide-gray-100">
              
              <div className="flex items-center gap-3 p-4">
                <Tag className="w-5 h-5 text-gray-700 shrink-0" />
                <span className="text-gray-500 font-medium text-sm">Builder:</span>
                <span className="text-[#0ea5e9] font-medium text-sm ml-auto text-right">Mirrikh Infratech</span>
              </div>
              
              <div className="flex items-center gap-3 p-4">
                <MapPin className="w-5 h-5 text-gray-700 shrink-0" />
                <span className="text-gray-500 font-medium text-sm">Location:</span>
                <span className="text-[#0ea5e9] font-medium text-sm ml-auto text-right line-clamp-1" title={project.location}>{project.location.split(',')[0]}</span>
              </div>

              <div className="flex items-center gap-3 p-4">
                <Phone className="w-5 h-5 text-gray-700 shrink-0" />
                <span className="text-gray-500 font-medium text-sm">Phone:</span>
                <span className="text-[#0ea5e9] font-medium text-sm ml-auto text-right">8882784781</span>
              </div>

              <div className="flex items-center gap-3 p-4">
                <Building className="w-5 h-5 text-gray-700 shrink-0" />
                <span className="text-gray-500 font-medium text-sm">Property Status:</span>
                <span className="text-gray-700 font-medium text-sm ml-auto text-right">{project.status}</span>
              </div>

              <div className="flex items-center gap-3 p-4">
                <Home className="w-5 h-5 text-gray-700 shrink-0" />
                <span className="text-gray-500 font-medium text-sm">Property Type:</span>
                <span className="text-gray-700 font-medium text-sm ml-auto text-right">{project.type}</span>
              </div>

              <div className="flex items-center gap-3 p-4">
                <Maximize className="w-5 h-5 text-gray-700 shrink-0" />
                <span className="text-gray-500 font-medium text-sm whitespace-nowrap">Min Size (Sq. Yard):</span>
                <span className="text-gray-700 font-medium text-sm ml-auto text-right">126</span>
              </div>

            </div>
          </div>

          {/* Right Main Content - Hero Image */}
          <div className="lg:col-span-3 space-y-10">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-md">
              <Image 
                src="https://raw.githubusercontent.com/fadoomotivation-pixel/cap/main/public/hero-bg.jpg" 
                alt={project.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Additional Sections added below image to fill out the page */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#333333]">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#333333]">Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[#FACC15]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>
    );
  }

  // If not a specific project, render Informational / Category Template
  const rawTitle = lastSegment;
  const title = rawTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  let categoryProjects = projects;
  if (title.toLowerCase().includes('residential')) categoryProjects = projects.filter(p => p.type.includes('Residential'));
  if (title.toLowerCase().includes('commercial')) categoryProjects = projects.filter(p => p.type.includes('Commercial'));
  if (title.toLowerCase().includes('industrial')) categoryProjects = projects.filter(p => p.type.includes('Industrial'));

  return (
    <main className="min-h-screen bg-[#f9fafb] pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Discover detailed insights and premium opportunities regarding {title} in Dholera Smart City.
          </p>
        </div>

        {categoryProjects.length > 0 && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map(proj => (
                <Link key={proj.slug} href={`/project/${proj.slug}`} className="group block h-full">
                  <div className="bg-white p-6 border border-gray-200 h-full hover:shadow-lg transition-all duration-300 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#FACC15] transition-colors">{proj.name}</h3>
                    <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FACC15]" /> {proj.location}
                    </p>
                    <div className="font-bold text-gray-900 mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
                      <span>{proj.priceUnit}</span>
                      <span className="text-[#FACC15] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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