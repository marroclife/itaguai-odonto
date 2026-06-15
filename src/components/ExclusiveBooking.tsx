import React, { useState } from "react";
import { Compass, Calendar, Coffee, Music, Sparkles, Sliders, CheckCircle, Ticket, Heart, ShieldAlert } from "lucide-react";

export default function ExclusiveBooking() {
  const [suite, setSuite] = useState("matterhorn");
  const [foco, setFoco] = useState("Planejamento Digital de Sorriso");
  const [aroma, setAroma] = useState("Lavanda Francesa (Indução ao relaxamento)");
  const [cha, setCha] = useState("Chá Branco Orgânico com notas de pêssego suíço");
  const [som, setSom] = useState("Frequência Fisiológica Binaural 528hz");
  const [data, setData] = useState("");
  const [contato, setContato] = useState("");
  const [nome, setNome] = useState("");
  
  const [ticket, setTicket] = useState<{
    locator: string;
    suiteNome: string;
    dataHora: string;
    detalhes: string;
  } | null>(null);

  const suites = [
    {
      id: "matterhorn",
      nome: "Suíte Matterhorn",
      desc: "Inspirada no minimalismo dos alpes suíços. Paredes em pedra natural cinza sutil, luz natural indireta e acabamentos em linho puro orgânico.",
      vibe: "Calma Alpina Absoluta"
    },
    {
      id: "genebra",
      nome: "Suíte Genebra",
      desc: "Elegância clássica contemporânea com curadoria de arte abstrata, madeira de carvalho escovada e poltronas ergonômicas de design italiano.",
      vibe: "Serenidade Intelectual"
    },
    {
      id: "saintmoritz",
      nome: "Suíte Saint-Moritz",
      desc: "Aconchego e calor. Dispositivo de bio-clareamento avançado silencioso, lareira ecológica virtual de vapor de água e acabamento em bronze escovado.",
      vibe: "Acolhimento & Suave Calor"
    }
  ];

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !contato) return;

    const chosenSuite = suites.find(s => s.id === suite)?.nome || "Suíte Matterhorn";
    const generatedLocator = `ITAGUAI-VIP-${Math.floor(10000 + Math.random() * 90000)}`;

    setTicket({
      locator: generatedLocator,
      suiteNome: chosenSuite,
      dataHora: data ? new Date(data).toLocaleString('pt-BR') : "A definir com Concierge",
      detalhes: `Foco em ${foco}. Lounge configurado com óleo essencial de ${aroma}, acompanhado de ${cha} e sonorização sob ${som}.`
    });
  };

  const handleReset = () => {
    setTicket(null);
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden border-t border-sage-200">
      {/* Decorative Halo Backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-600 font-bold">Reserva Privada</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-sage-800 font-light tracking-tight leading-tight">
            Solicitar <span className="italic font-normal text-gold-500">Agendamento Exclusivo</span>
          </h2>
          <p className="text-xs sm:text-sm text-sage-800/70 font-light leading-relaxed">
            Selecione sua cabine terapêutica preferida e configure suas cortesias sensoriais Clinical Zen. Um concierge dedicado entrará em contato em minutos para alinhar sua agenda com discrição.
          </p>
        </div>

        {!ticket ? (
          /* Form UI layout */
          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            
            {/* Left Col: Choose Suite Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gold-600 font-semibold block mb-2">
                1. Selecione Sua Suíte Clinica
              </span>

              {suites.map((s) => {
                const isSelected = s.id === suite;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSuite(s.id)}
                    className={`w-full text-left p-5 border rounded-none transition-all duration-300 relative ${
                      isSelected
                        ? "bg-sage-100/50 border-gold-500/40 shadow-md"
                        : "bg-white border-sage-200 hover:border-gold-500/10"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-serif text-[16px] text-sage-800 font-medium">
                        {s.nome}
                      </h4>
                      <span className="text-[9px] uppercase font-mono text-gold-600 bg-gold-100/50 px-2.5 py-0.5 rounded-none">
                        {s.vibe}
                      </span>
                    </div>
                    <p className="text-[12px] text-sage-800/70 leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Col: Personal Settings Form */}
            <form onSubmit={handleCreateBooking} className="lg:col-span-7 bg-sage-50/50 border border-sage-200 rounded-none p-6 sm:p-8 space-y-6 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gold-600 font-semibold block border-b border-sage-200 pb-2">
                2. Adaptação Sensorial & Dados Pessoais
              </span>

              {/* Grid split parameters */}
              <div className="grid sm:grid-cols-2 gap-4">
                
                {/* Pacient Name */}
                <div className="space-y-2">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80">Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Amanda Cavalcanti"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none focus:border-gold-500 font-serif"
                  />
                </div>

                {/* Secure Call contact */}
                <div className="space-y-2">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80">WhatsApp ou Telefone Seguro</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 98888-7777"
                    value={contato}
                    onChange={(e) => setContato(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none focus:border-gold-500 font-mono"
                  />
                </div>

                {/* Date suggestion */}
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80">Data Desejada</label>
                  <input
                    type="datetime-local"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="w-full text-xs bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none focus:border-gold-500 font-mono"
                  />
                </div>

                {/* Treatment Focus selection */}
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80">Foco do Atendimento</label>
                  <select
                    value={foco}
                    onChange={(e) => setFoco(e.target.value)}
                    className="w-full text-xs bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none focus:border-gold-500"
                  >
                    <option>Planejamento Digital de Sorriso</option>
                    <option>Check-up Clinical Zen sem dor</option>
                    <option>Micro-reabilitação Lentes Estéticas</option>
                    <option>Consultoria Integrativa Biocompatível</option>
                  </select>
                </div>

                {/* Aromatherapy select */}
                <div className="space-y-2 col-span-2">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80 flex items-center gap-1.5">
                    <Compass className="w-3 h-3 text-gold-500" />
                    Assinatura de Aromaterapia (Cabine)
                  </label>
                  <select
                    value={aroma}
                    onChange={(e) => setAroma(e.target.value)}
                    className="w-full text-xs bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none"
                  >
                    <option>Lavanda Francesa (Indução ao relaxamento e paz somática)</option>
                    <option>Sândalo Indiano (Foco, serenidade e ancoragem profunda)</option>
                    <option>Jasmim Real (Suavidade romântica e frescor de primavera)</option>
                  </select>
                </div>

                {/* Tea selection */}
                <div className="space-y-2 col-span-2">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80 flex items-center gap-1.5">
                    <Coffee className="w-3 h-3 text-gold-500" />
                    Curadoria de Bebida Welcome Lounge
                  </label>
                  <select
                    value={cha}
                    onChange={(e) => setCha(e.target.value)}
                    className="w-full text-xs bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none"
                  >
                    <option>Chá Branco Orgânico com notas de pêssego suíço</option>
                    <option>Blend de Camomila e Baunilha silvestre sob infusão lenta</option>
                    <option>Café Boutique Arábica das montanhas de Minas (Single-Origin)</option>
                  </select>
                </div>

                {/* Solfeggio soundscapes */}
                <div className="space-y-2 col-span-2">
                  <label className="block text-[9px] uppercase font-mono text-sage-600/80 flex items-center gap-1.5">
                    <Music className="w-3 h-3 text-gold-500" />
                    Acústica Terapêutica (Durante o procedimento)
                  </label>
                  <select
                    value={som}
                    onChange={(e) => setSom(e.target.value)}
                    className="w-full text-xs bg-white border border-sage-200 text-sage-900 rounded-none px-3 py-2.5 focus:outline-none"
                  >
                    <option>Frequência Fisiológica Binaural 528hz (Reparação celular e paz cognitiva)</option>
                    <option>Jazz Minimalista Nórdico (Elegância intelectual branda)</option>
                    <option>Silêncio Zen Absoluto (Fones anti-ruído Bose com isolamento acústico)</option>
                  </select>
                </div>

              </div>

              {/* Booking CTA micro-interaction */}
              <div className="pt-4 border-t border-sage-200">
                <button
                  type="submit"
                  disabled={!nome.trim() || !contato.trim()}
                  className="w-full py-4 bg-sage-600 hover:bg-sage-800 disabled:bg-sage-200 text-white font-sans text-xs uppercase tracking-[0.25em] font-bold rounded-none transition-all duration-300 shadow-xl shadow-sage-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse-slow" />
                  Solicitar Agendamento Exclusivo
                </button>
              </div>
            </form>

          </div>
        ) : (
          /* Prestige confirmation Ticket voucher */
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-sage-950 to-sage-900 p-8 text-white rounded-none shadow-2xl relative text-left border border-gold-500/30 overflow-hidden">
            {/* Ticket line borders */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-6 gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-none bg-gold-600/20 border border-gold-500/30">
                  <Ticket className="w-3.5 h-3.5 text-gold-500" />
                  <span className="text-[9px] uppercase tracking-widest text-gold-400 font-medium">Lounge Confirmed</span>
                </div>
                <h4 className="font-serif text-xl text-white tracking-wide font-light">Ticket de Agendamento Itaguaí</h4>
              </div>

              <div className="text-left sm:text-right font-mono text-gold-500 bg-white/5 p-2 rounded-none">
                <span className="text-[8px] uppercase tracking-widest text-slate-400 block">Código Localizador</span>
                <span className="text-sm font-semibold tracking-wider font-mono">{ticket.locator}</span>
              </div>
            </div>

            <div className="py-8 space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400">Paciente</span>
                  <p className="font-serif text-[15px]">{nome}</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400">Suíte Clínico-Zen</span>
                  <p className="font-serif text-[15px]">{ticket.suiteNome}</p>
                </div>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-wider font-mono text-slate-400">Data Sugerida</span>
                <p className="font-mono text-xs text-gold-400">{ticket.dataHora}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-none text-xs space-y-1 text-slate-300 font-light">
                <span className="text-[8px] font-semibold uppercase tracking-widest text-gold-500 block mb-1">
                  Configuração Sensorial Personalizada
                </span>
                <p className="leading-relaxed italic">
                  &ldquo;{ticket.detalhes}&rdquo;
                </p>
              </div>

              <div className="flex gap-2.5 items-start bg-gold-500/10 p-4 rounded-none border border-gold-500/20 text-slate-300">
                <Heart className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h5 className="font-semibold text-gold-400">Compromisso Clinical Zen</h5>
                  <p className="leading-relaxed font-light">
                    Sua experiência será isenta de preocupações, amparada por sedação inalatória consciente se desejado e microscopia de altíssima precisão. Aguarde o contato protocolar secreto de nossa equipe em até 15 minutos para formalizar sua admissão.
                  </p>
                </div>
              </div>

            </div>

            <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-4">
              <span className="text-[8px] tracking-[0.2em] font-mono text-slate-500 uppercase">
                Itaguaí Ateliê • Centro, Itaguaí - RJ
              </span>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-mono uppercase text-gold-400 hover:text-gold-300 underline"
              >
                Solicitar Nova Reserva
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
