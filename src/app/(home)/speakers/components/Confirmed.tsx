"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const speakers = [
  {
    id: 1,
    name: "Hariana Verás",
    role: "Jornalista, Apresentadora de TV, Produtora/Correspondente Permanente da Casa Branca, Senado dos EUA, Pentágono e Departamento de Estado para a África",
    imageUrl: "/images/speakers/hariana-veras.png",
    videoUrl: "/hariana-veras.mp4",
    bio: "Hariana Verás é uma jornalista e apresentadora de TV renomada, com vasta experiência em cobertura política internacional. ",
  },
  {
    id: 2,
    name: "Osvaldo Macaia",
    role: "CEO do Banco Sol",
    imageUrl: "/images/speakers/osvaldo-macaia.png",
    videoUrl: "/osvaldo-macaia.mp4",
    bio: "Osvaldo Macaia é o CEO do Banco Sol, uma instituição financeira de destaque em Angola. Com uma carreira sólida no setor bancário, ele lidera iniciativas estratégicas que impulsionam o crescimento econômico e a inclusão financeira no país.",
  },
  {
    id: 3,
    name: "Edvânia do Carmo",
    role: "Apresentadora de TV",
    imageUrl: "/images/speakers/edvania-do-carmo.png",
    videoUrl: "/edvania-carmo.mp4",
    bio: "Edvânia do Carmo é uma apresentadora de TV reconhecida por sua habilidade em comunicar informações de forma clara e envolvendo.",
  },
];

export default function SpeakerConfirmation() {
  return (
    <section className="bg-accent text-white bg-[url(/bg-oficial.jpeg)] w-full">
      <div className="flex flex-col min-h-screen items-center gap-14 px-24 py-24 max-lg:px-6 max-lg:py-16 justify-center backdrop-blur-xs w-full h-full bg-linear-to-b from-accent/55 to-accent/75 z-10">
        <div className="max-w-7xl w-full flex flex-col gap-14">
          <div className="text-white text-center max-w-3xl w-full mx-auto">
            <h1 className="text-3xl font-bold max-lg:text-2xl text-white">
              Líderes que Transformam o Mercado
            </h1>
            <p className="text-lg max-lg:text-base text-gray-300">
              Assista aos vídeos de confirmação dos CEOs e decisores convidados
              e descubra uma antevisão dos insights estratégicos que vão moldar
              o futuro dos negócios nesta edição.
            </p>
          </div>

          <div className="relative flex max-lg:flex-col items-center gap-8 justify-center">
            <button className="button-prev z-20 cursor-pointer bg-secondary! rounded-full min-h-12 min-w-12 flex justify-center items-center text-white! max-lg:order-2">
              <ChevronLeft className="w-5" />
            </button>

            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              className="pb-14 w-full max-lg:order-1">
              {speakers.map((speaker) => (
                <SwiperSlide
                  key={speaker.id}
                  className="pb-4">
                  <div className="flex justify-center gap-12 items-center h-full w-full max-lg:flex-col max-lg:gap-8">
                    <div className="flex flex-col max-w-md w-full items-center gap-6 bg-primary/10 px-6 py-8 rounded-2xl border border-primary/20 backdrop-blur-sm min-h-135 max-lg:min-h-0">
                      <div className="bg-clip-padding p-1 border-8 border-transparent bg-linear-to-r from-primary to-secondary rounded-full">
                        <Image
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          width={300}
                          height={300}
                          className="rounded-full h-50 w-50 max-lg:h-40 max-lg:w-40 object-cover object-top m-4 bg-linear-to-r from-gray-400 to-white"
                        />
                      </div>

                      <div className="text-center flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white max-lg:text-xl">
                          {speaker.name}
                        </h3>
                        <p className="text-white font-medium text-base mb-2 max-lg:text-sm">
                          {speaker.role}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>

                    <video
                      className="w-full object-contain h-135 max-w-sm rounded-2xl border border-primary/20 backdrop-blur-sm max-lg:h-auto max-lg:max-w-md"
                      controls
                      preload="metadata"
                      playsInline>
                      <source
                        src={speaker.videoUrl}
                        type="video/mp4"
                      />
                      O seu navegador não suporta a reprodução de vídeos.
                    </video>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="button-next z-20 cursor-pointer bg-secondary! rounded-full min-h-12 min-w-12 flex justify-center items-center text-white! max-lg:order-3">
              <ChevronRight className="w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
