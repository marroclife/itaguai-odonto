import React, { useState } from "react";
import { Sparkles, Compass, Shield, Award, Trash2, CheckCircle, RefreshCw, AlertCircle, Calendar } from "lucide-react";
import { RelatorioDiagnostico } from "../types";

// Static premium fallback data for demonstration when of API_KEY misses
const demoprelude: RelatorioDiagnostico = {
  diagnosticoId: "ITAGUAI-ZEN-9804",
  analiseFacial: "A análise facio-estrutural revela que a busca por uma vibe 'Brilhante Atemporal' se harmoniza primorosamente com a simetria de seus lábios superiores. Identificamos uma necessidade de preservar a translucidez nas pontas incisais, que refratam a luz solar de forma idêntica ao esmalte biológico ativo. O planejamento de sua arquitetura de sorriso priorizará o reestabelecimento da proporção áurea (coeficiente de Euler de 1.618 entre dentes centrais e laterais) sem apelar para fisionomias chapadas artificiais.",
  recomendacoesProcedimentos: [
    {
      nome: "Lentes de Contato de Porcelana Feldspática Multi-Camada",
      descricao: "Lâminas microscópicas com espessura de até 0.2mm, confeccionadas artesanalmente por ceramistas suíços. Restauram o viço e o alinhamento corrigindo desgastes, com desgaste zero ou mínimo do esmalte natural.",
      tecnologiaAplicada: "CAD/CAM Alemão CEREC Omnicam 3D e Microscopia Óptica Zeiss",
      grauDeInvasividade: "Virtualmente não-invasivo (Micro-estética ativa)"
    },
    {
      nome: "Laserterapia Gengival Estética CO2",
      descricao: "Micro-remodelação do contorno gengival por luz focada, ajustando a moldura vermelha do dente para revelar um sorriso simétrico com pós-operatório indolor e cicatrização celular de alta performance.",
      tecnologiaAplicada: "Laser Óptico CO2 de última geração",
      grauDeInvasividade: "Conforto absoluto (Cicatrização a laser de alta frequência)"
    }
  ],
  esquemaCoresRecomendado: "Curadoria de Matiz VITA 3D-Master na escala 1D1 (Branco Translúcido Natural). Evitamos o tom opaco monocromático, preferindo pigmentações orgânicas nas zonas de transição cervical.",
  cronogramaEstimado: "Projetado em apenas 2 sessões premium de 90 minutos em nossa cabine Clinical Zen com aromaterapia de lavanda francesa e terapia de som binaural.",
  mensagemFilosofica: "O sorriso perfeito é a alma que encontrou uma forma perfeita de luz e precisão métrica."
};

interface DiagnosticStudioProps {
  onNavigateToBooking: () => void;
}

export default function DiagnosticStudio({ onNavigateToBooking }: DiagnosticStudioProps) {
  // Form states
  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState("Harmonização de Proporções Áureas");
  const [alinhamento, setAlinhamento] = useState("Leves aglomerações ou desalinhamentos");
  const [tonalidade, setTonalidade] = useState("Escurecido pelo tempo");
  const [estilo, setEstilo] = useState("Brilhante Atemporal");
  const [preocupacoes, setPreocupacoes] = useState("Sensibilidade dentária e fobias clínicas");

  // App processing states
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<RelatorioDiagnostico | null>(null);
  const [errorStatus, setErrorStatus] = useState<{ isError: boolean; type: string; message: string } | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingQuotes = [
    "Escaneando métricas proporcionais de estética facial...",
    "Harmonizando coeficiente áureo com o estilo de sorriso solicitado...",
    "Calibrando refração de luz e esmalte natural biodinâmico...",
    "Sintetizando recomendações com o protocolo relaxante Clinical Zen..."
  ];

  const handleRunDiagnosis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) return;

    setLoading(true);
    setErrorStatus(null);
    setLoadingStep(0);

    // Dynamic cute loading steps effect
    const interval = setInterval(() => {
      setLoadingStep(prev => (prev < 3 ? prev + 1 : 0));
    }, 2000);

    try {
      const response = await fetch("/api/gemini/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, objetivo, alinhamento, tonalidade, estilo, preocupacoes })
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "API_KEY_MISSING") {
          // Normal gracefully handled missing key
          setErrorStatus({
            isError: false, // Soft alert, allowed to show demo fallback
            type: "API_KEY_MISSING",
            message: data.message
          });
          // Populate fallbacks for prestige presentation
          setReport({
            ...demoprelude,
            diagnosticoId: `ITAGUAI-PREVIEW-${Math.floor(1000 + Math.random() * 9000)}`,
            analiseFacial: demoprelude.analiseFacial.replace("lábios superiores", `lábios superiores de ${nome}`),
          });
        } else {
          throw new Error(data.message || "Erro desconhecido durante a simulação.");
        }
      } else {
        setReport(data);
      }
    } catch (err: any) {
      console.error(err);
      setErrorStatus({
        isError: true,
        type: "GENERIC_ERROR",
        message: err.message || "Não foi possível conectar ao servidor de IA do Itaguaí. Exibindo demonstração segura offline."
      });
      // Safety demo display
      setReport({
        ...demoprelude,
        diagnosticoId: "ITAGUAI-LOCAL-4491"
      });
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReport(null);
    setErrorStatus(null);
  };

  return (
    <section id="ai-studio" className="py-24 bg-sage-50 relative">
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gold-200/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-150/15 border border-gold-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse-slow" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-700 font-semibold">Tecnologia Diagnóstica Ativa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-sage-800 font-light tracking-tight">
            Parecer Estético de <span className="italic font-normal text-gold-600">Alta Costura Dental</span>
          </h2>
          <p className="text-xs sm:text-sm text-sage-800/70 font-light leading-relaxed">
            Inicie nosso simulador de arquitetura estética. Nossa inteligência integrada irá processar os contornos de seus anseios e as regras áureas suíças de harmonia para conceber um relatório clínico exclusivo.
          </p>
        </div>

        {/* Layout Switch: Form vs Report */}
        {!report && !loading ? (
          <div className="max-w-4xl mx-auto bg-white border border-sage-200 shadow-2xl rounded-none p-6 sm:p-10 relative overflow-hidden">
            {/* Elegant luxury blueprint lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-100 via-gold-500 to-gold-100" />
            
            <form onSubmit={handleRunDiagnosis} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Full name */}
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-sage-600/80 font-semibold">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Amanda Cavalcanti"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-sage-50/50 border border-sage-200 text-sm text-sage-900 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300 font-serif tracking-wide"
                  />
                </div>

                {/* Aesthetic Goal */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-sage-600/80 font-semibold">
                    Foco Estético Principal
                  </label>
                  <select
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full bg-sage-50/50 border border-sage-200 text-xs text-sage-900 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                  >
                    <option>Harmonização de Proporções Áureas</option>
                    <option>Rejuvenescimento Luminescente (Clareamento Ativo)</option>
                    <option>Correção Funcional Invisível (Alinhamento 3D)</option>
                    <option>Metamorfose do Sorriso (Facetas Feldspáticas)</option>
                  </select>
                </div>

                {/* Alignment */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-sage-600/80 font-semibold">
                    Alinhamento & Moldura Estrutural
                  </label>
                  <select
                    value={alinhamento}
                    onChange={(e) => setAlinhamento(e.target.value)}
                    className="w-full bg-sage-50/50 border border-sage-200 text-xs text-sage-900 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                  >
                    <option>Perfeitamente alinhados, necessito apenas de refinamento</option>
                    <option>Leves aglomerações ou desalinhamentos</option>
                    <option>Espaçamentos visíveis (Diastemas)</option>
                    <option>Desgaste fisiológico ou pequenas imperfeições</option>
                  </select>
                </div>

                {/* Color/Shade */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-sage-600/80 font-semibold">
                    Aspecto Cromático Atual
                  </label>
                  <select
                    value={tonalidade}
                    onChange={(e) => setTonalidade(e.target.value)}
                    className="w-full bg-sage-50/50 border border-sage-200 text-xs text-sage-900 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                  >
                    <option>Levemente amarelado com brilho preservado</option>
                    <option>Escurecido pelo tempo ou pigmentação orgânica</option>
                    <option>Presença de restaurações antigas manchadas</option>
                    <option>Opacidade acentuada, ausência de translucidez</option>
                  </select>
                </div>

                {/* Archetype Style */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-sage-600/80 font-semibold">
                    Estilo de Expressão do Sorriso (Arquétipo)
                  </label>
                  <select
                    value={estilo}
                    onChange={(e) => setEstilo(e.target.value)}
                    className="w-full bg-sage-50/50 border border-sage-200 text-xs text-sage-900 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                  >
                    <option>Clássico Sutil (Aristocrático, elegante e ultra-discreto)</option>
                    <option>Brilhante Atemporal (Luminosidade autêntica com viço real)</option>
                    <option>Jovem & Dinâmico (Bordas incisais ligeiramente expressivas)</option>
                    <option>Hollywood Premium (Imponente, simétrico e volumoso)</option>
                  </select>
                </div>

                {/* safekeeping and clinical zen */}
                <div className="space-y-2 col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-mono text-sage-600/80 font-semibold">
                    Prioridade de Salvaguarda & Conforto (Clinical Zen)
                  </label>
                  <select
                    value={preocupacoes}
                    onChange={(e) => setPreocupacoes(e.target.value)}
                    className="w-full bg-sage-50/50 border border-sage-200 text-xs text-sage-900 rounded-none px-4 py-3 focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300"
                  >
                    <option>Sensibilidade dentária extraordinária e preparos biológicos invasivos</option>
                    <option>Fobia severa a agulhas, ruídos e traumas odontológicos passados</option>
                    <option>Previsibilidade extrema com cronogramas rápidos e repouso mínimo</option>
                  </select>
                </div>

              </div>

              {/* Action */}
              <div className="border-t border-sage-100 pt-8 flex items-center justify-between flex-wrap gap-4">
                <p className="text-[10px] text-sage-600/60 font-mono">
                  PROCESSO SEGURO & CIRURGIA PREVISÍVEL BIODINÂMICA
                </p>
                <button
                  type="submit"
                  disabled={!nome.trim()}
                  className="px-8 py-4 bg-sage-600 hover:bg-sage-800 disabled:bg-sage-300 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-none transition-all duration-300 shadow-xl shadow-sage-600/20 flex items-center gap-3 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white animate-pulse-slow" />
                  Conceber Parecer Estético
                </button>
              </div>
            </form>
          </div>
        ) : loading ? (
          /* Calming Medical Simulation Loading screen */
          <div className="max-w-2xl mx-auto bg-white border border-gold-100 shadow-2xl rounded p-12 text-center space-y-8 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 to-gold-200 animate-pulse" />
            
            {/* Spinning gold gears or rings */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-gold-100 rounded-full" />
              <div className="absolute inset-0 border-t-2 border-gold-500 rounded-full animate-spin" />
              <Sparkles className="w-8 h-8 text-gold-500 animate-pulse-slow" />
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-xl text-sage-800 tracking-wide font-light">
                Modelando Arquitetura Biocompatível
              </h4>
              <p className="text-xs text-sage-800/60 font-mono tracking-widest uppercase animate-pulse">
                {loadingQuotes[loadingStep]}
              </p>
            </div>

            <div className="w-full bg-sage-100 h-1 rounded-full overflow-hidden max-w-[200px] mx-auto">
              <div 
                className="bg-gold-500 h-full transition-all duration-1000 ease-out" 
                style={{ width: `${(loadingStep + 1) * 25}%` }}
              />
            </div>

            <p className="text-[10px] text-sage-600/50 italic leading-relaxed max-w-sm mx-auto">
              Nossa inteligência artificial de ultra-luxo processa seus desejos estéticos sob severas diretrizes do protocolo de design biológico suíço.
            </p>
          </div>
        ) : (
          /* Report Presentation: masterpiece look and feel */
          <div className="max-w-4xl mx-auto bg-white border border-sage-200 shadow-2xl rounded-none p-6 sm:p-12 relative overflow-hidden" id="report-print-target">
            
            {/* Soft decorative elements of luxury and trust */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-600 via-gold-200 to-sage-600" />
            
            {/* Soft background brand watermark */}
            <div className="absolute inset-0 opacity-1 pointer-events-none flex items-center justify-center -z-10">
              <div className="font-serif text-slate-100 text-[12vw] font-bold tracking-[0.3em] opacity-40 select-none">ITAGUAÍ</div>
            </div>

            {/* Error notifications or notices regarding fallback Mode */}
            {errorStatus && (
              <div className="mb-8 p-4 rounded-sm bg-gold-50 border border-gold-500/20 text-left flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="text-xs text-gold-800 font-semibold uppercase tracking-wider">
                    {errorStatus.type === "API_KEY_MISSING" ? "Demonstração Ativa de Parecer Estético" : "Serviço Operando Localmente"}
                  </h5>
                  <p className="text-xs text-sage-800/70 leading-relaxed">
                    {errorStatus.message}
                  </p>
                </div>
              </div>
            )}

            {/* Header of Certificate */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-sage-200 pb-8 gap-4">
              <div className="space-y-1.5 text-left">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold-500" />
                  <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-gold-600 font-semibold">Laudo Médico Estético Seletivo</span>
                </div>
                <h3 className="font-serif text-2xl text-sage-800 font-light tracking-wide">
                  Relatório de Planejamento Clinical Zen
                </h3>
                <p className="text-[11px] text-sage-800/50 font-light">
                  Paciente: <span className="font-serif py-0.5 border-b border-sage-200 text-sage-800 font-normal">{nome}</span>
                </p>
              </div>

              <div className="text-left sm:text-right font-mono bg-sage-50 p-3 border border-sage-200 rounded-none">
                <p className="text-[9px] text-sage-800/40 uppercase tracking-widest">Documento ID</p>
                <p className="text-[12px] text-gold-600 font-semibold tracking-wider">{report?.diagnosticoId}</p>
                <p className="text-[8px] text-sage-800/50 mt-1 uppercase">Emissão: {new Date().toLocaleDateString('pt-BR')}</p>
              </div>
            </div>

            {/* Report Content */}
            <div className="py-8 space-y-8 text-left">
              
              {/* Comprehensive Facial Alignment Analysis */}
              <div className="space-y-3">
                <h4 className="text-[11px] uppercase tracking-[0.25em] font-mono text-gold-600 font-semibold flex items-center gap-2">
                  <Compass className="w-4 h-4 text-gold-500" />
                  Análise de Proporção & Harmonia Facial
                </h4>
                <p className="font-serif text-md sm:text-lg text-sage-800/90 leading-relaxed font-light italic bg-sage-50/40 p-5 rounded border border-sage-100">
                  &ldquo;{report?.analiseFacial}&rdquo;
                </p>
              </div>

              {/* Recommended luxury procedures */}
              <div className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-[0.25em] font-mono text-gold-600 font-semibold">
                  Planejamento Técnico Micro-Reabilitativo
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {report?.recomendacoesProcedimentos.map((proc, index) => (
                    <div 
                      key={index}
                      className="p-6 bg-sage-50/50 border border-sage-200 rounded-sm space-y-4 hover:border-gold-500/30 transition-all duration-300 relative group"
                    >
                      <div className="absolute top-4 right-4 text-[10px] font-mono text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200">
                        {index + 1}
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-serif text-base text-sage-800 font-medium tracking-wide">
                          {proc.nome}
                        </h5>
                        <p className="text-xs text-sage-800/75 leading-relaxed font-light">
                          {proc.descricao}
                        </p>
                      </div>

                      <div className="border-t border-sage-200/60 pt-3 space-y-2 text-[10px]">
                        <div>
                          <span className="font-mono text-sage-600/60 uppercase">Equipamento:</span>
                          <p className="text-sage-800 font-light">{proc.tecnologiaAplicada}</p>
                        </div>
                        <div>
                          <span className="font-mono text-sage-600/60 uppercase">Nível Físico:</span>
                          <p className="text-gold-700 font-medium italic">{proc.grauDeInvasividade}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color scale & scheduling details split */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                
                {/* Tooth Matiz color selection */}
                <div className="p-5 border border-sage-200 rounded-none bg-gold-50/15 space-y-3">
                  <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] font-bold">
                    Curadoria de Cor & Luminosidade Natural
                  </h4>
                  <p className="text-xs text-sage-800 font-light leading-relaxed">
                    {report?.esquemaCoresRecomendado}
                  </p>
                  <div className="flex gap-2 pt-2">
                    <div className="w-8 h-8 rounded-full bg-[#fafef0] border border-gold-500/20 shadow-inner flex items-center justify-center text-[8px] font-mono font-bold text-sage-800/40">1D1</div>
                    <div className="w-8 h-8 rounded-full bg-[#fdfaf1] border border-gold-500/10 flex items-center justify-center text-[8px] font-mono text-sage-800/40">0M1</div>
                    <div className="w-8 h-8 rounded-full bg-[#fcf5e7] border border-gold-500/10 flex items-center justify-center text-[8px] font-mono text-sage-800/40">2M2</div>
                    <div className="w-8 h-8 rounded-full bg-[#f4f7f2] border border-gold-500/10 flex items-center justify-center text-[8px] font-mono text-sage-800/40">OM2</div>
                  </div>
                </div>

                {/* Patient Wellness timeline */}
                <div className="p-5 border border-sage-200 rounded-none bg-sage-50/30 space-y-3">
                  <h4 className="text-[10px] uppercase font-mono tracking-widest text-sage-800/60 font-semibold">
                    Cronograma de Execução Exclusiva
                  </h4>
                  <p className="text-xs text-sage-800 font-light leading-relaxed">
                    {report?.cronogramaEstimado}
                  </p>
                  <p className="text-[10px] text-sage-600 font-mono uppercase flex items-center gap-1.5 font-bold">
                    <CheckCircle className="w-3.5 h-3.5 text-sage-600" />
                    Protocolo de Convalescença Rápida
                  </p>
                </div>

              </div>

              {/* Philosophical quote signature */}
              <div className="border-t border-sage-200 pt-8 text-center max-w-xl mx-auto space-y-3">
                <Shield className="w-5 h-5 text-gold-500/70 mx-auto" />
                <p className="font-serif italic text-base text-sage-800 font-light leading-relaxed">
                  &ldquo;{report?.mensagemFilosofica}&rdquo;
                </p>
                <div className="h-[1px] w-12 bg-gold-500 mx-auto" />
                <p className="text-[9px] uppercase tracking-[0.3em] font-mono text-gold-600 font-semibold">
                  Itaguaí Ateliê de Sorrisos • Swiss Comfort Dental Protocol
                </p>
              </div>

            </div>

            {/* conversion calls panel */}
            <div className="border-t border-sage-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleReset}
                className="text-xs uppercase tracking-widest text-sage-600/80 hover:text-gold-600 font-mono flex items-center gap-2 p-2 border border-transparent hover:border-sage-200 transition-all rounded-none cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                Nova Análise Estética
              </button>

              <button
                onClick={onNavigateToBooking}
                className="px-8 py-3.5 bg-sage-600 hover:bg-sage-800 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-none transition-all duration-300 shadow-xl shadow-sage-600/20 flex items-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                Solicitar Suíte para este Plano
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
