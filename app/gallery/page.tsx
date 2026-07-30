import Image from 'next/image';
import { site } from '@/lib/data';

const galleryImages = [
  {
    src: 'https://mirrikh.com/wp-content/uploads/2025/11/dsir-home-1.jpg',
    title: 'Dholera Smart City Infrastructure',
    description: 'India\'s first greenfield smart city taking shape with world-class underground utilities and wide roads.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    src: 'https://mirrikh.com/wp-content/uploads/2026/02/dholera-airport-2.jpg',
    title: 'Dholera International Airport',
    description: 'Upcoming massive international airport at Navagam, boosting global connectivity.',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://mirrikh.com/wp-content/uploads/2026/01/expressway-1.jpg',
    title: 'Ahmedabad-Dholera Expressway',
    description: '109 km long, 6-lane access-controlled expressway for seamless transport.',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-CG-Semi-Dholera-1.jpg',
    title: 'Tata Electronics Semiconductor Fab',
    description: '₹91,000 Cr massive semiconductor manufacturing plant establishing Dholera as a global tech hub.',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    src: 'https://mirrikh.com/wp-content/uploads/2026/07/banner-Education-in-Dholera-Smart-City-1.jpg',
    title: 'Education & Social Infrastructure',
    description: 'Premium educational institutions and social infrastructure for a complete lifestyle.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  }
];

export const metadata = {
  title: 'Gallery | ' + site.name,
  description: 'Explore the visionary infrastructure and premium projects of Dholera Smart City through our gallery.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Visionary <span className="text-blue-600">Infrastructure.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the future of urban living. Explore the massive scale and premium development of India's first greenfield smart city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl overflow-hidden group ${image.span} shadow-sm border border-gray-200 bg-white`}
            >
              <Image 
                src={image.src} 
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-medium line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 sm:p-12 bg-white rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden w-full max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
              {/* Decorative element */}
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 3.8L18.4 19H5.6L12 5.8z"/></svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Invest in the Future Today</h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Don't miss out on the incredible growth potential of Dholera SIR. Secure your premium plot now.
            </p>
            <a href="/contact-us" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-md">
              Speak with an Expert
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
