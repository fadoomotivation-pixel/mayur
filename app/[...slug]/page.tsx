import { notFound } from "next/navigation";
import { site } from "@/lib/data";
import Link from "next/link";

export default function GenericPage({ params }: { params: { slug: string[] } }) {
  // Join the slug array to form a path (e.g., ['project', 'builder', 'rsc-group'] -> 'project/builder/rsc-group')
  const path = params.slug.join('/');
  
  // Format the last part of the slug into a readable title
  const rawTitle = params.slug[params.slug.length - 1];
  const title = rawTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-xl text-[#86868b] mb-12">
          Discover detailed insights and premium opportunities regarding {title} in Dholera Smart City.
        </p>

        <div className="glass-panel p-12 rounded-3xl border border-white/10">
          <p className="text-[#86868b] leading-relaxed mb-8">
            This is a dynamically generated page for <strong>/{path}</strong>. Our full content integration for this section is currently being finalized. Please check back soon for complete details on {title} or contact our investment advisors for immediate assistance.
          </p>
          
          <Link href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-[#d4a017] text-black font-semibold rounded-full hover:bg-[#b8860b] transition-colors">
            Contact Advisors
          </Link>
        </div>
      </div>
    </main>
  );
}