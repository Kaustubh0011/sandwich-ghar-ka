"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-yellow-50">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reviews />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}