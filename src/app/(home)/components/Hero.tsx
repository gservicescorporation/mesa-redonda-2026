"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    src: "https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/50.png",
    alt: "Fórum Internacional - Slide 1",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/20.png",
    alt: "Fórum Internacional - Slide 2",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/30.png",
    alt: "Fórum Internacional - Slide 3",
  },
];

const heroContent = {
  title: {
    prefix: "FÓRUM INTERNACIONAL:",
    main: "O Papel da Banca e de Outros Agentes do Sistema Financeiro na Mobilização de Financiamento",
  },
  description:
    "O evento reúne decisores públicos, banca, operadores petrolíferos e empresas nacionais para transformar política económica em financiamento real, acelerar a industrialização e consolidar cadeias de valor nacionais.",
  primaryAction: {
    label: "Ver mais sobre",
    icon: FaArrowDownLong,
  },
  footer: {
    date: "29 de Janeiro de 2026 | Últimos Ingressos",
    highlight: "Não Perca a Oportunidade de Ter o Melhor Networking do Ano",
    action: {
      label: "Obter ingressos",
      icon: FaArrowRightLong,
    },
  },
};

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="w-full h-full">
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority={slide.id === 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-10 inset-0 h-full w-full flex items-center justify-center bg-linear-to-b from-accent/45 to-accent/95">
        <div className="w-full h-full p-24">
          <div className="max-w-151 flex flex-col gap-5 text-white absolute top-44 right-24">
            <h1 className="text-3xl font-bold">
              <span>{heroContent.title.prefix}</span>
              <br />
              {heroContent.title.main}
            </h1>

            <p className="text-lg">{heroContent.description}</p>

            <button className="px-8 py-3 btn-primary text-lg w-fit flex items-center gap-2">
              {heroContent.primaryAction.label}
              <heroContent.primaryAction.icon size={14} />
            </button>
          </div>
        </div>

        <div className="text-white absolute bottom-24 left-24 flex flex-col gap-4 max-w-sm">
          <p className="text-sm text-white/70">{heroContent.footer.date}</p>

          <p className="font-semibold">{heroContent.footer.highlight}</p>

          <button className="btn-secondary px-6 py-3 text-sm w-fit flex items-center gap-2">
            {heroContent.footer.action.label}
            <heroContent.footer.action.icon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
