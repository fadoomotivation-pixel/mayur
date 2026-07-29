import { notFound } from "next/navigation";
import { site, projects } from "@/lib/data";
import { MapPin, Phone, Building, Home, Maximize, Tag, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const path = resolvedParams.slug.join('/');
  const lastSegment = resolvedParams.slug[resolvedParams.slug.length - 1];
  
  const project = projects.find(p => p.slug === lastSegment);

  if (project) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 border-b border-gray-100">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333]">
            {project.name}
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          <div className="lg:col-span-1 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm order-2 lg:order-1">
            <div className="divide-y divide-gray-100">
              
              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-center gap-3 shrink-0">
                  <Tag className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-500 font-medium text-sm">Builder:</span>
                </div>
                <span className="text-[#0ea5e9] font-medium text-sm text-right">Mirrikh Infratech</span>
              </div>
              
              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-center gap-3 shrink-0">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-500 font-medium text-sm">Location:</span>
                </div>
                <span className="text-[#0ea5e9] font-medium text-sm text-right">{project.location.split(',')[0]}</span>
              </div>

              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-center gap-3 shrink-0">
                  <Phone className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-500 font-medium text-sm">Phone:</span>
                </div>
                <span className="text-[#0ea5e9] font-medium text-sm text-right">(+91) 98999 74590<br/>/ 70423 67340</span>
              </div>

              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-center gap-3 shrink-0">
                  <Building className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-500 font-medium text-sm">Status:</span>
                </div>
                <span className="text-gray-700 font-medium text-sm text-right">{project.status}</span>
              </div>

              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-center gap-3 shrink-0">
                  <Home className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-500 font-medium text-sm">Type:</span>
                </div>
                <span className="text-gray-700 font-medium text-sm text-right">{project.type}</span>
              </div>

              <div className="flex items-start justify-between gap-3 p-4">
                <div className="flex items-center gap-3 shrink-0">
                  <Maximize className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-500 font-medium text-sm">Min Size (Sq. Yard):</span>
                </div>
                <span className="text-gray-700 font-medium text-sm text-right">{project.minSize || '126'}</span>
              </div>

              {project.brochure && (
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <a href={project.brochure} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FACC15] hover:bg-[#eab308] text-gray-900 font-bold rounded-md transition-colors text-sm shadow-sm">
                    Download Brochure
                  </a>
                </div>
              )}

            </div>
          </div>

          <div className="lg:col-span-3 space-y-10 order-1 lg:order-2">
            <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] overflow-hidden rounded-md">
              <Image 
                src={project.image} 
                alt={project.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

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

            {project.map && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#333333]">Master Plan</h3>
                <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white p-2">
                  <Image 
                    src={project.map} 
                    alt={`${project.name} Master Plan`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain rounded"
                    unoptimized
                  />
                </div>
              </div>
            )}
          </div>
          
        </div>
      </main>
    );
  }

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
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
                  <div className="bg-white border border-gray-200 h-full hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden rounded-lg">
                    {proj.image && (
                      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                        <Image 
                          src={proj.image}
                          alt={proj.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#FACC15] transition-colors">{proj.name}</h3>
                      <p className="text-gray-500 text-sm mb-6 flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" /> <span className="line-clamp-2">{proj.location}</span>
                      </p>
                      <div className="font-bold text-gray-900 mt-auto border-t border-gray-100 pt-4 flex justify-between items-center">
                        <span>{proj.priceUnit}</span>
                        <span className="text-[#FACC15] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Details <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
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
