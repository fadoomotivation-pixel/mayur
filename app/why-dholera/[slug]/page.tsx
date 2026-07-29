import { notFound } from "next/navigation";
import { whyDholera } from "@/lib/data";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function WhyDholeraPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const reason = whyDholera.find(r => r.slug === resolvedParams.slug);

  if (!reason) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#dholera" className="hover:text-blue-600 transition-colors">Why Dholera</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{reason.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image 
          src={reason.image} 
          alt={reason.title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {reason.title}
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            {reason.text}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 -mt-32 relative z-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Insights</h2>
            
            <div className="space-y-6">
              {reason.detailedContent?.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-50 rounded-2xl p-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Invest?</h3>
                <p className="text-gray-600">Secure your plot in India's fastest-growing smart city.</p>
              </div>
              <Link href="/contact-us" className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 flex items-center gap-2">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Reasons */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">More Reasons to Invest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyDholera.filter(r => r.slug !== reason.slug).slice(0, 3).map((item, i) => (
              <Link href={`/why-dholera/${item.slug}`} key={i} className="group block">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-40">
                    <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{item.text}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
