import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper for lazy loading GoogleGenAI
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("A chave GEMINI_API_KEY não foi encontrada nas configurações do servidor.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Dental Smile Architecture Plan
  app.post("/api/gemini/diagnostico", async (req, res) => {
    try {
      const { nome, objetivo, alinhamento, tonalidade, estilo, preocupacoes } = req.body;

      if (!nome || !objetivo) {
        return res.status(400).json({ error: "Nome e objetivo são obrigatórios." });
      }

      // Check if API key is present
      if (!process.env.GEMINI_API_KEY) {
        return res.status(503).json({
          error: "API_KEY_MISSING",
          message: "Para ativar o Diagnóstico Assistido por IA de Ultra-Luxo, insira sua chave GEMINI_API_KEY no painel Secrets do AI Studio."
        });
      }

      const client = getGeminiClient();

      const promptString = `
Você é o Diretor de Arquitetura de Sorrisos do "Itaguaí - Ateliê de Odontologia de Ultra-Luxo", uma clínica suíça especializada em reabilitação oral Clinical Zen.
Seu papel é criar um parecer estético personalizado e ultra-sofisticado que combina odontologia integrativa, precisão milimétrica e bem-estar.
O relatório deve soar extremamente requintado, quase poético, porém com autoridade técnica soberba. Evite clichés comerciais de dente branco ou sorrisos genéricos. Dedique-se à excelência artesanal e naturalidade.

Dados do Paciente:
- Nome: ${nome}
- Objetivo Estético Principal: ${objetivo}
- Estado de Alinhamento: ${alinhamento}
- Tonalidade Atual: ${tonalidade}
- Vibe / Estilo de Sorriso Escolhido: ${estilo}
- Preocupações ou Medos: ${preocupacoes}

Gere um parecer estético formatado estritamente como JSON em Língua Portuguesa com os seguintes campos:
1. "diagnosticoId": Um código exclusivo e elegante (ex: "ITAGUAI-ZEN-XXXX") baseado nas iniciais do paciente e números aleatórios.
2. "analiseFacial": Uma dissertação primorosa e acolhedora analisando como as escolhas do paciente (por exemplo, buscando ${estilo} com foco em ${objetivo}) se alinham com proporções áureas, equilíbrio de luminosidade natural e o conceito de "micro-translucidez" (porcelanas que refratam a luz como o esmalte biológico).
3. "recomendacoesProcedimentos": Uma lista contendo 2 a 3 procedimentos estritamente desenhados para ele, cada um contendo:
   - "nome": O nome do procedimento com apelo premium (ex: "Faceta Biomimética em Porcelana Feldspática", "Micro-remodelação Gengival a Laser CO2", "Alinhamento Invisível 3D Ativo", "Remineralização de Esmalte com Hidroxiapatita Ativa").
   - "descricao": Explicação elegante de por que este procedimento foi planejado individualmente para as características informadas (frequentemente abordando de forma implícita preocupações como ${preocupacoes}).
   - "tecnologiaAplicada": Tecnologia de ponta utilizada (ex: "Scanner Intraoral PrimeScan 3D", "Microscopia Óptica Zeiss", "Sonda Ultrassônica de Alta Precisão").
   - "grauDeInvasividade": string indicando o nível de conforto físico ("Virtualmente não-invasivo", "Micro-intervenção sob sedação zen", etc).
4. "esquemaCoresRecomendado": Uma curadoria sobre a matiz natural ideal recomendada (ex: Escala VITA Premium om 3D-Master com alta translucidez incisal), justificando que o ultra-luxo valoriza a verdade biológica do dente e não o branco opaco artificial.
5. "cronogramaEstimado": Uma descrição de como a jornada é projetada em poucas sessões ultra-exclusivas na suíte Clinical Zen, prometendo conforto absoluto.
6. "mensagemFilosofica": Uma frase poética e acolhedora sobre o sorriso como expressão da alma e equilíbrio estético.
      `;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptString,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              diagnosticoId: { type: Type.STRING },
              analiseFacial: { type: Type.STRING },
              recomendacoesProcedimentos: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    nome: { type: Type.STRING },
                    descricao: { type: Type.STRING },
                    tecnologiaAplicada: { type: Type.STRING },
                    grauDeInvasividade: { type: Type.STRING }
                  },
                  required: ["nome", "descricao", "tecnologiaAplicada", "grauDeInvasividade"]
                }
              },
              esquemaCoresRecomendado: { type: Type.STRING },
              cronogramaEstimado: { type: Type.STRING },
              mensagemFilosofica: { type: Type.STRING }
            },
            required: ["diagnosticoId", "analiseFacial", "recomendacoesProcedimentos", "esquemaCoresRecomendado", "cronogramaEstimado", "mensagemFilosofica"]
          }
        }
      });

      if (!response.text) {
        throw new Error("Resposta do modelo Gemini vazia");
      }

      const reportData = JSON.parse(response.text.trim());
      res.json(reportData);

    } catch (error: any) {
      console.error("Erro no processamento do diagnóstico:", error);
      res.status(500).json({
        error: "INTERNAL_ERROR",
        message: error.message || "Erro desconhecido ao processar o diagnóstico de luxo."
      });
    }
  });

  // Vite integration for dev server or static hosting for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Itaguaí Server] Executando elegantemente na porta ${PORT}`);
  });
}

startServer();
