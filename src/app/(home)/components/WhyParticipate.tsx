"use client";

import Image from "next/image";

export default function WhyParticipate() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/baw-fev-2024/7.jpg)] bg-center bg-cover">
      <div className="flex  items-center min-h-screen gap-24 p-24 justify-center w-full bg-linear-to-t from-accent/60 to-accent/75 z-10 backdrop-blur-xs ">
          <Image
            src={"https://ik.imagekit.io/globalsc/baw-fev-2024/2.jpg"}
            alt={"About Us"}
            width={1920}
            height={1080}
            className="max-w-xl w-full h-125 rounded-2xl object-cover"
          />

        <div className="max-w-xl w-full">
          <h1 className="text-3xl font-bold text-white">
            Por que participar do Mesa Redonda com CEOS - 5ª Edição?
          </h1>

          <p className="text-white text-lg mt-4">
            O Mesa Redonda com CEOS é uma oportunidade única para os
            participantes se envolverem em discussões estratégicas sobre o papel
            da banca e de outros agentes do sistema financeiro na mobilização de
            financiamento. Ao participar, os participantes terão a chance de:
            <ul className="list-disc ml-6">
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
          </p>
        </div>
      </div>
    </div>
  );
}
