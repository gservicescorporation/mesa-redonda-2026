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
    category: "Abertura",
    title: "Hino Nacional & Mensagem Institucional",
    type: "session",
  },
  {
    time: "09:10 - 09:15",
    category: "Sponsor Keynote",
    title: "Intervenção do Patrocinador Premium",
    speakers: [
      {
        name: "Eng. Edson Santos",
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
    time: "09:20 - 09:45",
    category: "Discurso de Abertura",
    title: "Discurso de Abertura Oficial",
    speakers: [
      
    ],
    type: "session",
  },
  {
    time: "09:45 - 10:10",
    category: "Keynote Internacional I",
    title: "Reformas, Disciplina Económica e Financiamento do Desenvolvimento",
    speakers: [
      {
        name: "H.E. Dr. Pedro Passos Coelho",
        role: "Ex-Primeiro-Ministro de Portugal",
        image: "/images/speakers/pedro_coelho.png",
      },
    ],
    type: "panel",
  },
  {
    time: "10:05 - 10:35",
    category: "Coffee Break",
    title: "Pausa para Café e Networking",
    type: "break",
  },
  {
    time: "10:35 - 11:00",
    category: "Conversa de Alto Nível",
    title:
      "O Papel do Sector dos Recursos Minerais, Petróleo & Gás na Garantia de Financiamento para a Indústria e para o Conteúdo Local",
    moderator: "Hariana Veras",
    speakers: [
      {
        name: "H.E. Gabriel Mbaga Obiang Lima",
        role: "Ex-Ministro de Minas e Hidrocarbonetos (Guiné Equatorial)",
        image: "/images/speakers/gabriel_mbaga.jpeg",
      },
    ],
    type: "panel",
  },
  {
    time: "12:00 - 13:00",
    category: "PAINEL I",
    title:
      "Sistema Financeiro e Economia Real (Prazos, garantias, custo do capital, risco percebido vs risco real)",
    moderator: "Dr. José Barata (PCA da Deloitte Angola)",
    speakers: [
      {
        name: "H.E. Dr. Pedro Passos Coelho",
        role: "Ex-Primeiro-Ministro de Portugal",
        image: "/images/speakers/pedro_coelho.png",
      },
      
      {
        name: "Aguinaldo Jaime",
        role: "PCA da UNITEL",
        image: "/images/speakers/aguinaldo-jaime.png",
      },
      {
        name: "Edson Santos",
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
      }
    ],
    type: "panel",
  },
  {
    time: "13:00 - 13:15",
    category: "Q&A",
    title: "Sessão de Perguntas e Respostas",
    type: "qa",
  },
  {
    time: "13:15 - 14:30",
    category: "Almoço",
    title: "Almoço Institucional",
    type: "break",
  },
  {
    time: "14:30 - 15:10",
    category: "Painel Internacional",
    title:
      "Nova Configuração Geopolítica e o Seu Impacto no Sistema Financeiro Mundial: Oportunidades e Desafios para a Industrialização em Angola",
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
    time: "15:10 - 15:40",
    category: "Especial Keynote Speaker",
    title:
      "Os Desafios da Industrialização em África: Oportunidades para Angola",
    speakers: [
      {
        name: "H.E. Armando Manuel",
        role: "PCA do Fundo Soberano de Angola",
        image: "/images/speakers/armando_manuel.jpeg",
      },
      {
        name: "NJ Ayuk",
        role: "Chairman da African Energy Chamber",
        image: "/images/speakers/nj-ayuk.png",
      },
    ],
    type: "panel",
  },
  {
    time: "15:45 - 16:25",
    category: "A Voz da Indústria",
    title: "Competitividade e Inovação",
    speakers: [
      {
        name: "Adilson Nelumba",
        role: "PCA do Copia Group",
        image: "/images/speakers/adilson-nelumba.png",
      },
      {
        name: "Noorali Manji",
        role: "Chairman do MMD Steel Group / Founder da Furniture Palace",
        image: "/images/speakers/noorali-manji.png",
      },
    ],
    type: "panel",
  },
  {
    time: "16:25 - 16:40",
    category: "Q&A",
    title: "Sessão de Perguntas e Respostas",
    type: "qa",
  },
  {
    time: "16:40 - 17:55",
    category: "PAINEL II",
    title:
      "Instrumentos Financeiros para Industrialização e Conteúdo Local (SFC, Confirming/Factoring, CAPEX, Garantias, Seguros)",
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
        name: "Felipe Almeida",
        role: "PCA da Vecauto",
        image: "/images/speakers/filipe-de-almeida.png",
      },
      {
        name: "Jorge Morais",
        role: "Director Geral da Kaeso Energy Services",
        image: "/images/speakers/jorge-morais.png",
      },
      {
        name: "Dr. James Shindi",
        role: "Lawyer, Advisor & Serial Entrepreneur",
        image: "/images/speakers/james_shindi.jpeg",
      },
    ],
    type: "panel",
  },
  {
    time: "17:55 - 18:10",
    category: "Encerramento",
    title:
      "Conclusões do Dia e Apresentação do Relatório (Compromissos, métricas e próximos passos)",
    type: "session",
  },
  {
    time: "18:10 - 19:30",
    category: "Networking",
    title: "Cocktail de Networking B2B",
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
                  className="relative pl-10 max-lg:pl-4 group">
                  
                  <div className="flex max-lg:hidden absolute -left-48 top-1.5 w-40 justify-end items-center gap-2 text-right">
                    <span
                      className={`font-bold text-base ${isBreak ? "text-gray-500" : isSession ? "text-white" : "text-secondary"}`}>
                      {item.time.split("-")[0]}
                    </span>
                    <ChevronRight className="w-4 h-4 text-primary/30 group-hover:text-secondary transition-colors" />
                  </div>

                  <div
                    className={`absolute -left-2.25 top-2.5 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125 z-10
                  ${
                    isBreak
                      ? "bg-gray-500 border-gray-500 ring-4 ring-gray-300/20"
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
                          Moderador:
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
              * O programa oficial decorre no CCTA e está sujeito a ajustes
              pontuais de protocolo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}