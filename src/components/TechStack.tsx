import React, { useState } from "react";
import { Cpu, Eye, Wind, Layers, Compass, Plus, Activity } from "lucide-react";
import { TecnologiaLuxo } from "../types";

export default function TechStack() {
  const [selectedTech, setSelectedTech] = useState<string>("scanner");

  const technologies: TecnologiaLuxo[] = [
    {
      id: "scanner",
      nome: "Escaneamento Intraoral 3D de Alta Resolução",
      categoria: "Precisão Microscópica",
      descricao: "Substitui os desconfortáveis moldes de gesso por uma leitura óptica veloz e indolor em menos de 60 segundos. Cria um gêmeo digital em 3D de sua estrutura maxilar com precisão submilimétrica.",
      beneficioParaMente: "Zero repetições de moldeiras, planejamento previsível instantâneo e total clareza visual dos prognósticos.",
      icone: "Layers"
    },
    {
      id: "ai-diagnosis",
      nome: "IA de Diagnóstico & Arquitetura de Sorrisos",
      categoria: "Equilíbrio & Proporção",
      descricao: "Modelos generativos de aprendizado profundo, como o algoritmo integrado do Itaguaí, processam as proporções áureas de sua estrutura facial para prever dentes esteticamente perfeitos que se harmonizam com seu olhar, etnia e musculatura bucal.",
      beneficioParaMente: "Segurança de testemunhar os resultados finais e a refração da luz nas facetas antes do início de qualquer tratamento físico.",
      icone: "Cpu"
    },
    {
      id: "sedation",
      nome: "Protocolo de Sedação Inalatória Consciente",
      categoria: "Clinical Zen",
      descricao: "A administração refinada de óxido nitroso terapêutico induz um estado de torpor e tranquilidade semelhante a uma meditação guiada, enquanto você permanece perfeitamente consciente e capaz de interagir.",
      beneficioParaMente: "Dissolve por completo traumas passados, aflições sonoras e fobias clínicas. Uma autêntica experiência de tratamento sem angústia.",
      icone: "Wind"
    },
    {
      id: "microscope",
      nome: "Microscopia Operatória Alemã Zeiss",
      categoria: "Soberba Artesanal",
      descricao: "Lentes de altíssima amplificação permitem que o cirurgião-dentista prepare as estruturas dentárias de maneira micro-invasiva, preservando até 95% a mais de esmalte e dentina saudáveis em comparação a tratamentos tradicionais.",
      beneficioParaMente: "Pós-operatório livre de sensibilidades, longevidade multiplicada por dez para lentes de contato e procedimentos cirúrgicos extremamente discretos.",
      icone: "Eye"
    }
  ];

  const currentTech = technologies.find(t => t.id === selectedTech) || technologies[0];

  // Helper icon helper map
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return <Layers className="w-5 h-5 text-gold-500" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-gold-500" />;
      case "Wind": return <Wind className="w-5 h-5 text-gold-500" />;
      case "Eye": return <Eye className="w-5 h-5 text-gold-500" />;
      default: return <Activity className="w-5 h-5 text-gold-500" />;
    }
  };

  const techImage = "/src/assets/images/dental_tech_art_1781525548061.jpg";

  return (
    <section id="tech" className="py-24 bg-sage-100/60 border-y border-sage-200/50 relative">
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-gold-200/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="border-l border-gold-500/80 pl-6 mb-16 space-y-3">
          <p className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-600 font-semibold">Tecnologia Boutique</p>
          <h3 className="font-serif text-3xl sm:text-4xl text-sage-800 font-light tracking-tight">
            A Ciência a serviço do <span className="italic font-normal">Conforto Supremo</span>
          </h3>
          <p className="max-w-2xl text-xs md:text-sm text-sage-800/60 font-light">
            O requinte tecnológico não serve para ostentação, mas sim para resgatar a absoluta tranquilidade do corpo e garantir que o procedimento seja uma experiência indolor, precisa e eterna.
          </p>
        </div>

        {/* Content Matrix */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Tech Selector Panel */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {technologies.map((tech) => {
              const isActive = tech.id === selectedTech;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTech(tech.id)}
                  className={`w-full text-left p-5 rounded-sm border transition-all duration-500 relative flex gap-4 items-start group ${
                    isActive
                      ? "bg-white border-gold-500/40 shadow-md translate-x-1"
                      : "bg-sage-50/50 border-sage-200 hover:bg-white hover:border-gold-500/20"
                  }`}
                >
                  <div className={`p-2 rounded-full border transition-colors duration-500 ${
                    isActive ? "bg-gold-50 border-gold-500/30" : "bg-sage-100 border-transparent"
                  }`}>
                    {renderIcon(tech.icone)}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-gold-600 font-medium">
                      {tech.categoria}
                    </span>
                    <h4 className="font-serif text-base text-sage-800 font-light transition-colors group-hover:text-gold-600">
                      {tech.nome}
                    </h4>
                  </div>

                  {isActive && (
                    <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gold-500/40 rotate-45 hidden lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Technology Detail View */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-gold-100 shadow-xl flex flex-col justify-between min-h-[500px]">
            
            <div className="space-y-8">
              {/* Category Breadcrumb */}
              <div className="flex items-center justify-between border-b border-sage-200/50 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-gold-600">
                  {currentTech.categoria} // PROTOCOLO DE LUXO
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-sage-600/60 bg-sage-50 px-3 py-1 rounded">
                  Status: Operando
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h4 className="font-serif text-2xl sm:text-3xl text-sage-800 font-light leading-snug">
                  {currentTech.nome}
                </h4>
                <p className="font-sans text-sm text-sage-800/80 font-light leading-relaxed">
                  {currentTech.descricao}
                </p>
              </div>

              {/* Patient Philosophy Box */}
              <div className="bg-gold-50/60 border border-gold-500/15 p-5 rounded-sm space-y-2">
                <h5 className="font-serif text-xs text-gold-700 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  Benefício Clinical Zen
                </h5>
                <p className="text-xs text-sage-800/80 italic font-light leading-relaxed">
                  &ldquo;{currentTech.beneficioParaMente}&rdquo;
                </p>
              </div>
            </div>

            {/* Embedded Luxury Tech Art Picture at Bottom / Side */}
            <div className="mt-8 pt-6 border-t border-sage-200/50 grid grid-cols-12 gap-6 items-center">
              <div className="col-span-4 rounded overflow-hidden aspect-square max-h-[80px]">
                <img
                  src={techImage}
                  alt={currentTech.nome}
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="col-span-8">
                <p className="text-[10px] text-sage-600/60 font-mono uppercase tracking-widest leading-normal">
                  Visualização Científica Itaguaí <br />
                  <span className="text-gold-600">Equipamento de design biocompatível suíço</span>
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
