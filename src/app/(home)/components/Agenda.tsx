"use client";

import React from "react";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  MessageSquare,
  Coffee,
  Utensils,
  Award,
} from "lucide-react";
import Image from "next/image";

interface Speaker {
  name: string;
  role: string;
  image: string;
}

interface AgendaItem {
  time: string;
  title: string;
  category?: string;
  description?: string;
  moderator?: string;
  speakers?: Speaker[];
  type: "session" | "panel" | "break" | "qa";
}

const agendaData: AgendaItem[] = [
  {
    time: "08:00 - 09:00",
    category: "Credenciamento",
    title: "Sessão de Credenciamento",
    type: "break",
  },
  {
    time: "09:00 - 09:10",
    category: "Momento Cultural",
    title: "Momento Cultural & Mensagem Institucional",
    type: "session",
  },
  {
    time: "09:10 - 09:15",
    category: "Sponsor Keynote",
    title: "Discurso de Abertura Patrocinador Premium",
    speakers: [
      {
        name: "Edson R. dos Santos",
        role: "PCA da Etu Energias",
        image: "/images/speakers/edson-dos-santos.png",
      },
    ],
    type: "session",
  },
  {
    time: "09:15 - 09:20",
    category: "Intervenções Institucionais",
    title: "Abertura Oficial",
    description:
      "Intervenções dos Ministérios convidados (MINDCOM, MINFIN, MIREMPET).",
    type: "session",
  },
  {
    time: "09:20 - 09:30",
    category: "Discurso de Abertura",
    title: "Discurso de Abertura",
    speakers: [
      {
        name: "Dr. José de Lima Massano",
        role: "Ministro de Estado para a Coordenação Económica",
        image: "/images/speakers/jose_lima_massano.png", // Altere o path se necessário
      },
    ],
    type: "session",
  },
  {
    time: "09:30 - 09:45",
    category: "Momento Cultural",
    title: "Momento Cultural com DJ Malvado",
    type: "break",
  },
  {
    time: "09:45 - 10:10",
    category: "Keynote / Internacional I",
    title: "Reformas, disciplina económicas e financiamento do desenvolvimento",
    speakers: [
      {
        name: "H.E. Dr. Pedro Passos Coelho",
        role: "Ex-Primeiro-Ministro de Portugal",
        image: "/images/speakers/pedro_coelho.png",
      },
    ],
    type: "session",
  },
  {
    time: "10:10 - 10:35",
    category: "Coffee Break",
    title: "Pausa para Café e Networking",
    type: "break",
  },
  {
    time: "10:35 - 11:00",
    category: "CONVERSA DE ALTO NÍVEL",
    title:
      "O Papel do Sector dos Recursos Minerais e Petróleo & Gás na Garantia de Financiamento para a Indústria e para o Conteúdo Local",
    speakers: [
      {
        name: "H.E. Gabriel Mbaga Obiang Lima",
        role: "Ex-Ministro de Minas e Hidrocarbonetos (Guiné Equatorial) e Fundador e Presidente da Bioko Consulting",
        image: "/images/speakers/gabriel_mbaga.jpeg",
      },
    ],
    type: "panel",
  },
  {
    time: "11:00 - 11:30",
    category: "PAINEL I",
    title:
      "Sistema Financeiro e Economia Real (prazos, garantias, custo do capital, risco percebido vs risco real)",
    moderator: "Hariana Veras",
    speakers: [
      {
        name: "José Gualberto",
        role: "PCA da EMIS",
        image: "/images/speakers/jose-gualberto.png",
      },
      {
        name: "Aguinaldo Jaime",
        role: "PCA da UNITEL",
        image: "/images/speakers/aguinaldo-jaime.png",
      },
      {
        name: "Edson R. dos Santos",
        role: "PCA da ETU Energias",
        image: "/images/speakers/edson-dos-santos.png",
      },
      {
        name: "Elmer Serrão",
        role: "PCA da CMC",
        image: "/images/speakers/elmer-serrao.png",
      },
      {
        name: "Osvaldo Macaia",
        role: "PCA do Banco Sol",
        image: "/images/speakers/osvaldo-macaia.png",
      },
      {
        name: "Mário Nascimento",
        role: "Presidente da Abanc",
        image: "/images/speakers/mario-nascimento.png",
      },
    ],
    type: "panel",
  },
  {
    time: "11:30 - 12:30",
    category: "Q&A",
    title: "Perguntas e Respostas",
    type: "qa",
  },
  {
    time: "12:30 - 12:45",
    category: "Almoço",
    title: "Almoço Institucional",
    type: "break",
  },
  {
    time: "12:45 - 14:00",
    category: "PAINEL INTERNACIONAL",
    title:
      "Nova Configuração Geopolítica e o Seu Impacto no Sistema Financeiro Mundial, Oportunidades e Desafios para Industrialização em Angola",
    speakers: [
      {
        name: "Dr. Paulo Portas",
        role: "Comentador, Professor e Ex-Vice-Primeiro-Ministro de Portugal",
        image: "/images/speakers/paulo_portas.jpg",
      },
    ],
    type: "panel",
  },
  {
    time: "14:00 - 14:30",
    category: "Momento Cultural",
    title: "Momento Cultural",
    type: "break",
  },
  {
    time: "14:30 - 14:45",
    category: "ESPECIAL KEYNOTE SPEAKER",
    title: "Os Desafios da Industrialização em África, Oportunidades para Angola",
    moderator: "Professor Dr. José Octávio Serra Van-Dúnem",
    speakers: [
      {
        name: "H.E. Armando Manuel",
        role: "PCA do Fundo Soberano de Angola",
        image: "/images/speakers/armando_manuel.jpeg",
      },
    ],
    type: "session",
  },
  {
    time: "14:45 - 15:15",
    category: "A VOZ DA INDÚSTRIA",
    title: "Competitividade e Inovação",
    moderator: "Hariana Veras",
    speakers: [
      {
        name: "Adilson Nelumba",
        role: "PCA do Copia Group",
        image: "/images/speakers/adilson-nelumba.png",
      },
      {
        name: "Noorali Manji",
        role: "Chairman do MMD Steel Group, Founder da Furniture Palace e Chairman Reliance Hotels",
        image: "/images/speakers/noorali-manji.png",
      },
      {
        name: "Agostinho Kapaia",
        role: "PCA do Grupo OPAIA",
        image: "/images/speakers/agostinho-kapaia.png",
      },
    ],
    type: "panel",
  },
  {
    time: "15:15 - 16:15",
    category: "PAINEL II",
    title:
      "Instrumentos Financeiros para Industrialização e Conteúdo Local (SFC, Confirming/ Factoring, CAPEX, garantias, Seguros)",
    moderator: "Carlos Rosado de Carvalho",
    speakers: [
      {
        name: "José Carlos",
        role: "PCA da Teleservice",
        image: "/images/speakers/jose-figueiredo.png",
      },
      {
        name: "Ulanga Martins",
        role: "PCA da Poliedro",
        image: "/images/speakers/ulanga-martins.png",
      },
      {
        name: "Berta Issa",
        role: "Presidente da ASSEA",
        image: "/images/speakers/berta-rodrigues.jpeg",
      },
      {
        name: "Luís Lago de Carvalho",
        role: "Vice-Presidente da AECIPA",
        image: "/images/speakers/luis-lago.png",
      },
      {
        name: "Sanção Manuel",
        role: "Director Geral Adjunto da CABSHIP",
        image: "/images/speakers/sancao-manuel.png",
      },
      {
        name: "Jorge de Morais",
        role: "Director Geral da Kaeso Energy Services",
        image: "/images/speakers/jorge-morais.png",
      },
      {
        name: "Dr. James Shindi",
        role: "Lawyer, Businessman, Advisor And Serial Entrepreneur of British/Nigerian heritage",
        image: "/images/speakers/james_shindi.jpeg",
      },
    ],
    type: "panel",
  },
  {
    time: "16:15 - 17:15",
    category: "Encerramento",
    title:
      "Conclusões do Dia e apresentação do Relatório (Compromissos, métricas e próximos passos)",
    type: "session",
  },
  {
    time: "17:30 - 17:50",
    category: "Networking",
    title: "Networking and Cocktail",
    type: "break",
  },
];

export default function Agenda() {
  return (
    <section className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/mr-jul-2026/main-banner.png)]">
      <div className="flex flex-col min-h-screen items-center gap-14 px-24 py-24 max-lg:px-12 max-lg:py-16 justify-center backdrop-blur-xs w-full h-full bg-linear-to-b from-accent/85 to-accent/65 z-10">
        <div className="max-w-7xl w-full flex flex-col gap-14 text-white">
          <div className="text-center mb-8">
            <span className="text-white font-bold tracking-widest uppercase text-sm max-lg:text-xs flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-white" /> CCTA — Luanda
            </span>
            <h2 className="text-5xl max-lg:text-3xl font-extrabold tracking-tight mb-4">
              Agenda Oficial{" "}
              <span className="text-white">08 de Julho de 2026</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg max-lg:text-base">
              Acompanhe o cronograma completo dos painéis de debate,
              conferências internacionais e sessões de networking estratégico.
            </p>
          </div>

          <div className="relative border-l border-primary/20 ml-44 max-lg:ml-4 space-y-12">
            {agendaData.map((item, index) => {
              const isBreak = item.type === "break";
              const isSession = item.type === "session";
              const isQA = item.type === "qa";

              return (
                <div
                  key={index}
                  className="relative pl-10 max-lg:pl-4 group cursor-pointer">
                  
                  <div className="flex max-lg:hidden absolute -left-48 top-1.5 w-40 justify-end items-center gap-2 text-right">
                    <span
                      className={`font-bold text-base ${isBreak ? "text-gray-400 group-hover:text-gray-300" : isSession ? "text-white " : "text-white "} `}>
                      {item.time.split("-")[0]}
                    </span>
                    <ChevronRight className="w-4 h-4 text-primary/30 group-hover:text-white transition-colors" />
                  </div>

                  <div
                    className={`absolute -left-2.25 top-2.5 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 z-10
                  ${
                    isBreak
                      ? "bg-gray-400 border-gray-400 ring-4 ring-gray-200/20"
                      : isSession
                        ? "bg-secondary border-secondary ring-4 ring-secondary/20"
                        : isQA
                          ? "bg-secondary border-secondary ring-4 ring-secondary/20"
                          : "bg-secondary border-secondary ring-4 ring-secondary/20"
                  }`}
                  />

                  <div
                    className={`p-8 max-lg:p-4 rounded-2xl border transition-all duration-300 backdrop-blur-sm
                  ${
                    isBreak
                      ? "bg-white/2 border-white/5 opacity-75"
                      : isQA
                        ? "bg-primary/5 border-primary/20 border-dashed"
                        : "bg-white/3 border-white/10 hover:border-primary/40 hover:bg-white/5"
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      {item.category && (
                        <span
                          className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border
                        ${
                          isBreak
                            ? "text-gray-400 border-gray-700 bg-white/5"
                            : "text-secondary border-secondary/20 bg-secondary/5"
                        }`}>
                          {item.category}
                        </span>
                      )}
                      
                      <div className="hidden max-lg:flex items-center gap-1.5 text-secondary font-bold text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    <h3
                      className={`text-xl max-lg:text-lg font-bold tracking-tight leading-snug ${isBreak ? "text-gray-400 italic" : "text-white group-hover:text-secondary transition-colors"}`}>
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-3 text-base max-lg:text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.moderator && (
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <span className="text-secondary font-medium">
                          Moderador(a):
                        </span>{" "}
                        {item.moderator}
                      </div>
                    )}

                    {item.speakers && item.speakers.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-white/5">
                        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4">
                          {item.speakers.map((speaker, sIndex) => (
                            <div
                              key={sIndex}
                              className="flex items-center gap-3 bg-white/2 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-primary/30 shrink-0">
                                <Image
                                  src={speaker.image}
                                  alt={speaker.name}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%23b48a2c" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><circle cx="12" cy="7" r="4"/></svg>';
                                  }}
                                  width={500} height={500}
                                  className="w-full h-full object-cover rounded-full object-top"
                                />
                              </div>

                              <div className="min-w-0">
                                <h4 className="text-sm font-bold text-white truncate">
                                  {speaker.name}
                                </h4>
                                <p className="text-[11px] text-gray-400 line-clamp-2 mt-0.5 leading-tight">
                                  {speaker.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm max-lg:text-xs text-white">
              * O programa oficial decorre no CCTA e está sujeito a adjustments
              pontuais de protocolo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}