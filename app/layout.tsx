import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mayur Aerocity II | Premium Plots near Dholera Smart City",
  description: "Invest in Mayur Aerocity II, mega residential plots just 0 KM from Dholera SIR boundary. Premium gated community starting at ₹10,750 per Sq. Yard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}