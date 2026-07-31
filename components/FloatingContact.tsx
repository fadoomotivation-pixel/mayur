"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

export default function FloatingContact() {
  return (
    <Link 
      href="/contact-us"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-[#FACC15] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 md:hidden"
      aria-label="Contact Us"
    >
      <Phone className="w-6 h-6 fill-current" />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </Link>
  );
}
