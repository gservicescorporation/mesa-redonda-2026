"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen relative  bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/20.png)]">
      <div className="flex items-center gap-24 p-24 justify-center absolute top-0 left-0 w-full h-full bg-linear-to-t from-accent/45 to-accent/95 z-10">
        <Image
          src={"https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/20.png"}
          alt={"About Us"}
          width={1920}
          height={1080}
          className="max-w-xl w-full h-125 rounded-2xl object-cover"
        />

        <div className="max-w-xl w-full">
          <h1 className="text-3xl font-bold text-white">
            Sobre o Fórum Internacional
          </h1>

          <p className="text-white text-lg mt-4">
            O Fórum Internacional sobre o Papel da Banca e de Outros Agentes do
            Sistema Financeiro na Mobilização de Financiamento é um espaço
            estratégico de reflexão, diálogo e partilha de experiências entre
            decisores públicos, instituições financeiras, investidores,
            reguladores e especialistas nacionais e internacionais. O evento tem
            como objetivo analisar o papel da banca comercial, bancos de
            desenvolvimento, fundos de investimento, seguradoras, fintechs e
            outros agentes do sistema financeiro na mobilização de recursos para
            o financiamento da economia real, com enfoque no crescimento
            sustentável, inclusão financeira, inovação e fortalecimento do setor
            produtivo.
          </p>
        </div>
      </div>
    </div>
  );
}
