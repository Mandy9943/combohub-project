"use client";

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Marketplace from "@/components/sections/Marketplace";
import Streaming from "@/components/sections/Streaming";
import MallNetwork from "@/components/sections/MallNetwork";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <MallNetwork />
      <Marketplace />
      <Streaming />
      <Newsletter />
      <Footer />
    </main>
  );
}