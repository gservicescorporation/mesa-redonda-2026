"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function SpeakersList() {
  const speakers = [
    {
      name: "Nardos Bekele Thomas",
      title: "Directora Executiva do AUDA-NEPAD",
      image: "/images/speakers/nardo-bekele.jpg",
    },
    {
      name: "S.E. Dr. Pedro Passos Coelho",
      title: "Ex-Primeiro-Ministro de Portugal",
      image: "/images/speakers/pedro_coelho.png",
    },
    {
      name: "S.E. Dr. Paulo Portas",
      title: "Ex-Vice-Primeiro-Ministro de Portugal",
      image: "/images/speakers/paulo_portas.jpg",
    },
    {
      name: "Carlos Lopes",
      title: "Ex-Secretário-Geral Adjunto das Nações Unidas",
      image: "/images/speakers/carlos_lopes.jpg",
    },
    {
      name: "Sidi Ould Tah",
      title:
        "Presidente do Banco Árabe para o Desenvolvimento Económico em África",
      image: "/images/speakers/sidi_tah.png",
    },
    {
      name: "George Elombi",
      title: "Presidente do Afreximbank",
      image: "/images/speakers/george-elombi.jpg",
    },
    {
      name: "Dr. Armando Manuel",
      title: "Presidente do Fundo Soberano de Angola",
      image: "/images/speakers/armando_manuel.jpeg",
    },
    {
      name: "Rui Miguêns de Oliveira",
      title: "Ministro da Indústria e Comércio",
      image: "/images/speakers/rui_miguens.jpg",
    },
    {
      name: "Vera Daves de Sousa",
      title: "Ministra Angolana das Finanças",
      image: "/images/speakers/vera_daves.jpeg",
    },
  ];

  return (
    <div className="w-full relative bg-[url(/logo-white.png)]">
      <div className="flex flex-col min-h-screen items-center gap-14 px-24 py-24 max-lg:px-6 max-lg:py-16 justify-center backdrop-blur-xs w-full h-full bg-linear-to-b from-accent/75 to-accent/95 z-10">
        <div className="max-w-7xl w-full flex flex-col gap-14">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold max-lg:text-2xl">
              Oradores e Convidados
            </h1>

            <p className="text-lg max-lg:text-base">
              Veja quem fará parte do nosso painel de oradores e grande parte
              dos nossos convidados.
            </p>
          </div>

          {/* Desktop */}
          <ul className="flex flex-wrap w-full gap-12 items-center justify-center max-lg:hidden">
            {speakers.map((speaker, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-4 max-w-sm w-full">
                <div className="bg-clip-padding p-2 border-8 border-transparent bg-linear-to-r from-primary to-secondary rounded-full">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={300}
                    height={300}
                    className="rounded-full h-72 w-72 object-cover object-top m-4"
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-white">
                    {speaker.name}
                  </h2>
                  <p className="text-lg text-white">{speaker.title}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <div className="hidden max-lg:block w-full">
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              speed={800}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                0: { slidesPerView: 1 },
              }}
              modules={[Autoplay]}
              className="w-full">
              {speakers.map((speaker, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-clip-padding p-2 border-8 border-transparent bg-linear-to-r from-primary to-secondary rounded-full">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={300}
                        height={300}
                        className="rounded-full h-56 w-56 object-cover object-top"
                      />
                    </div>

                    <div className="text-center px-4">
                      <h2 className="text-lg font-semibold text-white">
                        {speaker.name}
                      </h2>
                      <p className="text-sm text-white">{speaker.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
