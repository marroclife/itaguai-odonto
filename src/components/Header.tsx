import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Menu, X, Landmark, Compass } from "lucide-react";

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Header({ onNavigate, currentSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Assinatura", id: "hero" },
    { label: "A Ciência & Conforto", id: "tech" },
    { label: "O Estúdio de IA", id: "ai-studio" },
    { label: "Relatos", id: "testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-sage-50/90 backdrop-blur-md border-b border-sage-200/50 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            onClick={() => onNavigate("hero")} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-9 h-9 flex items-center justify-center border border-gold-500 rounded-full bg-sage-50 group-hover:border-gold-600 transition-colors duration-500">
              <div className="w-4 h-4 bg-sage-600 rounded-full transition-transform duration-500 group-hover:scale-115" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-medium tracking-[0.25em] text-sage-800">ITAGUAÍ</h1>
              <p className="text-[9px] uppercase tracking-[0.4em] text-gold-600/70">Ateliê de Sorrisos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                  currentSection === item.id 
                    ? "text-gold-600 font-medium" 
                    : "text-sage-800/80 hover:text-gold-600"
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-500" />
                )}
              </button>
            ))}
          </nav>

          {/* Luxury Action CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("booking")}
              className="group relative px-6 py-2.5 overflow-hidden rounded-full border border-gold-500/50 bg-transparent text-[11px] uppercase tracking-widest text-gold-600 font-light transition-all duration-500 hover:text-white"
            >
              <div className="absolute inset-0 w-full h-full bg-gold-600 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 -z-10" />
              <span className="flex items-center gap-2">
                Agendamento Exclusivo
                <Compass className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-sage-800 hover:text-gold-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-sage-50/98 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden">
          <div className="space-y-8">
            <div className="border-b border-sage-250 pb-4">
              <span className="font-serif text-sm italic text-gold-600">Itaguaí Estética</span>
              <h2 className="text-2xl font-serif text-sage-800 tracking-wider">Odontologia Clinical Zen</h2>
            </div>
            
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-serif text-xl tracking-wide ${
                    currentSection === item.id ? "text-gold-600" : "text-sage-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => {
                onNavigate("booking");
                setMobileMenuOpen(false);
              }}
              className="w-full mt-6 py-4 bg-gold-600 hover:bg-gold-700 text-white font-sans text-xs uppercase tracking-[0.2em] rounded-full transition-colors duration-300"
            >
              Marcar Consulta Exclusiva
            </button>
          </div>
        </div>
      )}
    </>
  );
}
