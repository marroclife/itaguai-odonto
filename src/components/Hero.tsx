import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import heroImage from "../assets/images/zen_clinic_interior_1781525518737.jpg";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-sage-50">
      {/* Absolute Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full lg:grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Editorial Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-left">
          {/* Subtle VIP Badge */}
          <div className="mb-2 inline-block self-start">
            <span className="text-[10px] uppercase tracking-[0.3em] text-sage-600 font-bold border-l-2 border-sage-600 pl-3">
              Odontologia de Ultra-Luxo
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[1.05] text-sage-950 tracking-tight">
              A Engenharia do <br />
              <span className="italic text-sage-600 block sm:inline">Sorriso Perfeito</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-sage-800/70 font-light leading-relaxed max-w-xl">
              Nascida da harmonia entre a precisão da micro-reabilitação suíça e o bem-estar holístico do spa de luxo. No Itaguaí, cada faceta, alinhador e elemento biológico é esculpido com auxílio de inteligência diagnóstica avançada para refratar a luz natural perfeita.
            </p>
          </div>

          {/* Core Values Minimal Badge List */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-sage-200 py-6 max-w-lg">
            <div className="flex items-center gap-2 text-xs text-sage-800 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
              Precisão Suíça
            </div>
            <div className="flex items-center gap-2 text-xs text-sage-800 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
              Atendimento Clinical Zen
            </div>
            <div className="flex items-center gap-2 text-xs text-sage-800 font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-600" />
              Biológico & Biomimético
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onNavigate("booking")}
              className="px-8 py-5 bg-sage-600 hover:bg-sage-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-sage-600/25 rounded-none transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Solicitar Agendamento Exclusivo
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate("ai-studio")}
              className="px-8 py-5 bg-transparent hover:bg-gold-100/50 border border-gold-500/40 text-gold-700 font-sans text-xs uppercase tracking-[0.2em] rounded-none transition-all duration-350 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse-slow" />
              Arquitetura de Sorrisos IA
            </button>
          </div>
        </div>

        {/* Visual Frame of the Luxury Space */}
        <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
          
          {/* Decorative elements suggesting precise clinical blueprints */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-gold-500/30" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-gold-500/30" />
          
          {/* Fine golden halo background */}
          <div className="absolute inset-2 border border-gold-500/20 pointer-events-none rounded transition-transform duration-500 group-hover:scale-95" />

          {/* Floating Luxury Wellness Card */}
          <div className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-md p-4 rounded border border-gold-100 shadow-xl max-w-[200px] hidden sm:block">
            <div className="flex items-center gap-2 text-[10px] text-gold-600 font-medium tracking-widest uppercase mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Swiss Protocol
            </div>
            <p className="text-[11px] text-sage-800 font-light leading-snug">
              Materiais biocompatíveis livres de metal com translucidez idêntica ao esmalte dental natural.
            </p>
          </div>

          <div className="absolute bottom-6 left-6 z-20 bg-white/80 backdrop-blur-md p-4 rounded border border-gold-100 shadow-xl max-w-[200px] hidden sm:block">
            <div className="flex items-center gap-2 text-[10px] text-gold-600 font-medium tracking-widest uppercase mb-1">
              <Heart className="w-3.5 h-3.5 text-red-450" />
              Clinical Zen
            </div>
            <p className="text-[11px] text-sage-800 font-light leading-snug">
              Sedação inalatória relaxante e aromaterapia personalizada para conforto supremo.
            </p>
          </div>

          {/* Hero Main Premium Image - Arched rounded-t-[200px] styling */}
          <div className="overflow-hidden bg-sage-100 rounded-t-[200px] shadow-2xl relative aspect-[14/15] border-4 border-white">
            <img
              src={heroImage}
              alt="Sala de Espera Clinical Zen - Itaguaí Ateliê de Sorrisos"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Soft shadow and filter overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-sage-950/20 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Aesthetic image metadata label */}
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-sage-600/60 font-mono">
            <span>[ ITAGUAÍ SUÍTE PRIVÉE ]</span>
            <span>Estética Suíça Minimalista</span>
          </div>
        </div>

      </div>
    </section>
  );
}
