"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { galleryImages, GalleryCategory } from "@/lib/galleryData";

const categories: { label: string; value: GalleryCategory }[] = [
  { label: "All Photos", value: "all" },
  { label: "Our Projects", value: "projects" },
  { label: "Smart Infrastructure", value: "infrastructure" },
  { label: "Investment Insights", value: "investment" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === "all" || img.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#f9fafb] selection:bg-[#000] selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0a192f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-black/50 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Dholera in <span className="text-[#FACC15]">Pictures</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            A picture is worth a thousand words. Explore the breathtaking infrastructure, premium projects, and massive scale of development of India's first greenfield smart city.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[70px] md:top-20 z-40 bg-[#f9fafb]/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-nowrap overflow-x-auto gap-2 md:gap-4 no-scrollbar items-center md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.value 
                    ? "bg-[#0a192f] text-white shadow-md scale-105" 
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-black border border-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No images found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#FACC15]">
        <div className="max-w-4xl mx-auto px-6 text-center text-black">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to secure your plot?</h2>
          <p className="text-lg md:text-xl font-medium mb-10 opacity-90">
            Don't miss out on the incredible growth story of Dholera SIR.
          </p>
          <a href="/contact-us" className="inline-block px-10 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Schedule a Site Visit
          </a>
        </div>
      </section>

    </main>
  );
}
