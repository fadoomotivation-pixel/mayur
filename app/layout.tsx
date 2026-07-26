import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mayur Dholera | Premium Plots near Dholera Smart City",
  description: "Invest in premium, clear-title residential and commercial plots in Dholera Smart City, India's fastest growing greenfield smart city. Near the upcoming international airport.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#f9fafb] text-[#1d1d1f]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}