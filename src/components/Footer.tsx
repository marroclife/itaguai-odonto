import React from "react";
import { Compass, Mail, Phone, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-sage-200/90 py-16 px-6 font-sans border-t border-gold-500/20 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 text-left">
        
        {/* Brand identity */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center border border-gold-500/30 rounded-full font-serif text-gold-500 text-sm">
              I
            </div>
            <div>
              <h4 className="font-serif text-lg tracking-[0.2em] text-white">ITAGUAÍ</h4>
              <p className="text-[8px] uppercase tracking-[0.4em] text-gold-500/60">Ateliê de Sorrisos</p>
            </div>
          </div>
          <p className="text-xs text-sage-300/70 font-light leading-relaxed max-w-sm">
            Nascida do encontro da micro-ortodontia suíça com a tranquilidade espiritual do Clinical Zen. Unimos inteligência artificial de diagnósticos precisos e acolhimento boutique para redefinir o conceito de terapia dental de luxo.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] font-mono text-gold-500/60 font-semibold bg-white/5 px-2.5 py-1 rounded">CRO/RJ 199.204</span>
            <span className="text-[10px] font-mono text-gold-500/60 font-semibold bg-white/5 px-2.5 py-1 rounded">Resp. Tecn. Dr. Alexandre Itaguaí</span>
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="text-[10px] uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">Menu Exclusivo</h5>
          <ul className="space-y-2.5 text-xs font-light text-sage-300/85">
            <li><a href="#hero" className="hover:text-gold-500 transition-colors">A Experiência de Luxo</a></li>
            <li><a href="#tech" className="hover:text-gold-500 transition-colors">Ciência & Tecnologias</a></li>
            <li><a href="#ai-studio" className="hover:text-gold-500 transition-colors">Estúdio de Diagnóstico IA</a></li>
            <li><a href="#testimonials" className="hover:text-gold-500 transition-colors">Relatos de Autoestima</a></li>
            <li><a href="#booking" className="hover:text-gold-500 transition-colors">Contatar Concierge Privado</a></li>
          </ul>
        </div>

        {/* Location & Contacts */}
        <div className="md:col-span-4 space-y-4">
          <h5 className="text-[10px] uppercase tracking-[0.25em] font-mono text-gold-500 font-bold">O Ateliê Físico</h5>
          <ul className="space-y-3.5 text-xs font-light text-sage-300/85">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>Rua Dr. Curvelo Cavalcanti, 1200 • Mansão Zen<br />Centro, Itaguaí - RJ • Brasil</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <span>+55 (21) 4004-9800 (Atendimento Boutique)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <span>concierge@itaguaiestetica.com.br</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sage-400/50 font-light gap-4 flex-wrap">
        <div className="space-y-1 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Itaguaí - Ateliê de Odontologia de Luxo. Todos os direitos reservados.</p>
          <p className="text-[10px] text-sage-500/40">
            Desenvolvido por{" "}
            <a 
              href="https://marroc.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gold-500 underline transition-colors"
            >
              Marroc Solutions
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-500 transition-colors flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            Termos de Privacidade de Prontuário
          </a>
        </div>
      </div>
    </footer>
  );
}
