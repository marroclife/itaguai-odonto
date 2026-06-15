export interface ProcedimentoRecomendado {
  nome: string;
  descricao: string;
  tecnologiaAplicada: string;
  grauDeInvasividade: string;
}

export interface RelatorioDiagnostico {
  diagnosticoId: string;
  analiseFacial: string;
  recomendacoesProcedimentos: ProcedimentoRecomendado[];
  esquemaCoresRecomendado: string;
  cronogramaEstimado: string;
  mensagemFilosofica: string;
}

export interface DepoimentoPremium {
  id: string;
  nome: string;
  ocupacao: string;
  texto: string;
  tratamentoRealizado: string;
  vibe: string;
}

export interface TecnologiaLuxo {
  id: string;
  nome: string;
  categoria: string;
  descricao: string;
  beneficioParaMente: string;
  icone: string;
}
