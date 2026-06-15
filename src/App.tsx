import React, { useState } from "react";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import TechStack from "./components/TechStack.tsx";
import DiagnosticStudio from "./components/DiagnosticStudio.tsx";
import SocialProof from "./components/SocialProof.tsx";
import ExclusiveBooking from "./components/ExclusiveBooking.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  const [currentSection, setCurrentSection] = useState("hero");

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-sage-50 text-sage-950 flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-700 antialiased">
      {/* Top Floating Elegant Header */}
      <Header onNavigate={handleNavigate} currentSection={currentSection} />

      {/* Main Experience Flow */}
      <main className="flex-grow">
        {/* 1. Hero: A Engenharia do Sorriso Perfeito */}
        <Hero onNavigate={handleNavigate} />
        
        {/* 2. Tech Stack: A Ciência a serviço do Conforto */}
        <TechStack />

        {/* 3. Interactive AI Aesthetic Smile Studio (IA de diagnóstico) */}
        <DiagnosticStudio onNavigateToBooking={() => handleNavigate("booking")} />

        {/* 4. Social Proof: Emotional Recovery and Trust testimonials */}
        <SocialProof />

        {/* 5. CTA: Solicitar Agendamento Exclusivo Suite Configuration */}
        <ExclusiveBooking />
      </main>

      {/* Luxe Footer */}
      <Footer />
    </div>
  );
}
