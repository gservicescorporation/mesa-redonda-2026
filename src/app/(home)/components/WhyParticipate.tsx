"use client";

import Image from "next/image";

export default function WhyParticipate() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/baw-fev-2024/7.jpg)] bg-center bg-cover">
      <div
        className="
        flex items-center min-h-screen gap-24 p-24 justify-center w-full
        bg-linear-to-t from-accent/60 to-accent/75 backdrop-blur-xs

        max-lg:flex-col
        max-lg:gap-10
        max-lg:p-10
        max-lg:min-h-auto
      "
      >
        <Image
          src={"https://ik.imagekit.io/globalsc/baw-fev-2024/2.jpg"}
          alt={"About Us"}
          width={1920}
          height={1080}
          className="
          max-w-xl w-full h-125 rounded-2xl object-cover

          max-lg:h-72
        "
        />

        <div className="max-w-xl w-full">
          <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
            Por que participar do Mesa Redonda com CEOS - 5ª Edição?
          </h1>

          <p className="text-white text-lg mt-4 max-lg:text-base">
            O Mesa Redonda com CEOS é uma oportunidade única para os
            participantes se envolverem em discussões estratégicas sobre o papel
            da banca e de outros agentes do sistema financeiro na mobilização de
            financiamento. Ao participar, os participantes terão a chance de:
          </p>

          <ul className="list-disc ml-6 mt-4 text-white text-lg max-lg:text-base">
            <li>
              Engajar-se com líderes e especialistas do setor financeiro
              nacional e internacional.
            </li>

            <li>
              Compartilhar experiências e melhores práticas para mobilizar
              recursos para o financiamento da economia real.
            </li>

            <li>
              Explorar oportunidades de colaboração e parcerias estratégicas.
            </li>

            <li>
              Contribuir para a construção de um sistema financeiro mais
              sustentável, inclusivo e inovador.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}