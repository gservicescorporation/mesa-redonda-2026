"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Handshake, ArrowUpRight, CheckCircle2 } from "lucide-react";

// Dados dos Patrocinadores com Vídeo (Carrossel)
const featuredSponsors = [
  {
    id: 1,
    name: "Banco Sol",
    tier: "Patrocinador Diamante",
    logoUrl: "/images/sponsors/banco-sol-logo.png",
    videoUrl: "/sponsors/banco-sol-institucional.mp4",
    description: "O Banco Sol apoia ativamente as iniciativas que impulsionam o empreendedorismo e o desenvolvimento económico em Angola, fortalecendo o ecossistema de negócios nacional.",
  },
  {
    id: 2,
    name: "Unitel",
    tier: "Patrocinador Platina",
    logoUrl: "/images/sponsors/unitel-logo.png",
    videoUrl: "/sponsors/unitel-institucional.mp4",
    description: "Líder em telecomunicações, a Unitel conecta o país ao futuro digital, apoiando a transformação tecnológica e a inovação nas grandes empresas angolanas.",
  },
];

// Listagem Geral de Patrocinadores (Grid por Categorias)
const allSponsors = {
  diamante: [
    { name: "Banco Sol", logo: "/images/sponsors/banco-sol-logo.png" },
    { name: "Empresa Exemplo 1", logo: "/images/sponsors/exemplo1.png" },
  ],
  platina: [
    { name: "Unitel", logo: "/images/sponsors/unitel-logo.png" },
    { name: "Empresa Exemplo 2", logo: "/images/sponsors/exemplo2.png" },
  ],
  ouro: [
    { name: "Sonangol", logo: "/images/sponsors/sonangol-logo.png" },
    { name: "Empresa Exemplo 3", logo: "/images/sponsors/exemplo3.png" },
    { name: "Empresa Exemplo 4", logo: "/images/sponsors/exemplo4.png" },
  ],
};

export default function PatrocinadoresPage() {
  return (
    <div className="bg-accent text-white min-h-screen font-sans selection:bg-primary selection:text-white">
    
      <section className="relative pt-44 pb-32 flex flex-col items-center justify-center text-center px-6 bg-[url(/bg-oficial.jpeg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-linear-to-b from-accent/90 via-accent/95 to-accent z-0" />
        
        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full text-primary text-sm font-medium">
            <Handshake className="w-4 h-4" /> Parceiros Estratégicos 2026
          </div>
          <h1 className="text-5xl max-lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
            As Marcas que Constroem o <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">Future do Mercado Nacional</span>
          </h1>
          <p className="text-xl max-lg:text-base text-gray-300 max-w-2xl">
            A Mesa Redonda com CEOs conta com o apoio das maiores instituições do país. Juntos, promovemos o diálogo, a inovação e o crescimento económico sustentável.
          </p>
        </div>
      </section>

      {/* 3. SWIPER / SEÇÃO DE VÍDEOS (Destaques) */}
      <section id="destaques" className="py-24 bg-accent border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
          
          <div className="text-center max-w-3xl w-full mx-auto">
            <h2 className="text-3xl font-bold max-lg:text-2xl text-white">
              Visão dos Nossos Parceiros
            </h2>
            <p className="text-lg max-lg:text-base text-gray-400 mt-2">
              Assista aos depoimentos e vídeos institucionais dos patrocinadores que lideram a transformação do mercado nesta edição.
            </p>
          </div>

          <div className="relative flex max-lg:flex-col items-center gap-8 justify-center">
            <button className="button-prev-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white max-lg:order-2 hover:scale-105 transition-transform">
              <ChevronLeft className="w-5" />
            </button>

            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop
              speed={1000}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              navigation={{ nextEl: ".button-next-sponsor", prevEl: ".button-prev-sponsor" }}
              className="pb-14 w-full max-lg:order-1"
            >
              {featuredSponsors.map((sponsor) => (
                <SwiperSlide key={sponsor.id} className="pb-4">
                  <div className="flex justify-center gap-12 items-center h-full w-full max-lg:flex-col max-lg:gap-8">
                    
                    {/* Infos do Patrocinador */}
                    <div className="flex flex-col max-w-md w-full items-center gap-6 bg-primary/5 px-6 py-8 rounded-2xl border border-white/10 backdrop-blur-sm min-h-135 max-lg:min-h-0 justify-center">
                      <div className="bg-clip-padding p-1 border-8 border-transparent bg-gradient-to-r from-primary to-secondary rounded-full bg-white">
                        <div className="bg-white rounded-full h-44 w-44 flex items-center justify-center p-4">
                          <Image src={sponsor.logoUrl} alt={sponsor.name} width={160} height={160} className="max-h-full max-w-full object-contain" />
                        </div>
                      </div>

                      <div className="text-center flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white max-lg:text-xl">{sponsor.name}</h3>
                        <p className="text-secondary font-semibold text-sm tracking-widest uppercase">{sponsor.tier}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mt-2">{sponsor.description}</p>
                      </div>
                    </div>

                    {/* Vídeo */}
                    <video className="w-full object-contain h-135 max-w-sm rounded-2xl border border-white/10 backdrop-blur-sm max-lg:h-auto max-lg:max-w-md shadow-2xl" controls preload="metadata" playsInline>
                      <source src={sponsor.videoUrl} type="video/mp4" />
                      O seu navegador não suporta a reprodução de vídeos.
                    </video>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="button-next-sponsor z-20 cursor-pointer bg-secondary rounded-full min-h-12 min-w-12 flex justify-center items-center text-white max-lg:order-3 hover:scale-105 transition-transform">
              <ChevronRight className="w-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. GRID DE MARCAS (Todos os Patrocinadores) */}
      <section id="marcas" className="py-24 bg-accent/50 border-t border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Alinhamento de Marcas</h2>
            <p className="text-gray-400 mt-2">Empresas de excelência comprometidas com o desenvolvimento executivo.</p>
          </div>

          {/* Categoria Diamante */}
          <div className="flex flex-col gap-6 items-center">
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1 rounded-full">Categoria Diamante</h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-2xl justify-center">
              {allSponsors.diamante.map((s, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-center h-32 hover:border-primary/50 transition-colors">
                  <span className="text-gray-400 font-medium">{s.name}</span> {/* Substituir por <Image /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Categoria Platina */}
          <div className="flex flex-col gap-6 items-center mt-6">
            <h4 className="text-xs font-bold tracking-widest text-secondary uppercase bg-secondary/10 px-4 py-1 rounded-full">Categoria Platina</h4>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-2xl justify-center">
              {allSponsors.platina.map((s, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center h-28 hover:border-secondary/50 transition-colors">
                  <span className="text-gray-400 font-medium">{s.name}</span> {/* Substituir por <Image /> */}
                </div>
              ))}
            </div>
          </div>

          {/* Categoria Ouro */}
          <div className="flex flex-col gap-6 items-center mt-6">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase bg-white/5 px-4 py-1 rounded-full">Categoria Ouro</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {allSponsors.ouro.map((s, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center h-24 hover:bg-white/10 transition-colors">
                  <span className="text-gray-400 text-sm font-medium">{s.name}</span> {/* Substituir por <Image /> */}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION (Seja um Patrocinador) */}
      <section id="seja-patrocinador" className="py-24 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-b border-white/10 relative overflow-hidden scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-4xl max-lg:text-2xl font-bold text-white">Posicione a Sua Marca Entre os Líderes</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Associe a sua empresa ao maior evento de liderança executiva e networking estratégico do mercado. Garanta visibilidade máxima e conexões de alto nível.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 my-2">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> +300 Decisores e CEOs</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Cobertura Mediática Ampla</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Networking Exclusivo</span>
          </div>
          <Link href="mailto:parcerias@evento.com" className="bg-white hover:bg-gray-100 text-accent font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
            Descarregar Dossier de Patrocínio
          </Link>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 bg-accent border-t border-white/5 text-center text-sm text-gray-500">
        <p>&copy; 2026 Mesa Redonda com CEOs. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}