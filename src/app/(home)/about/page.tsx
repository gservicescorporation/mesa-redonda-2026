import Image from "next/image";
import Hero from "./components/Hero";

export default function About() {
  return (
    <div className="flex flex-col justify-center w-full text-white bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)]">
      <Hero />

      <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-center bg-cover">
        <div className="flex items-center min-h-screen gap-24 p-24 justify-center w-full bg-linear-to-t from-accent/90 to-accent/75 z-10 backdrop-blur-xs ">
          <div className="max-w-xl w-full flex items-center justify-center h-125 rounded-2xl p-8 bg-linear-to-b from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm">
            <Image
              src={"/logo-white.png"}
              alt={"About Us"}
              width={1920}
              height={1080}
              className="w-100 object-contain"
            />
          </div>

          <div className="max-w-xl w-full">
            <h1 className="text-3xl font-bold text-white">
             O que é a Mesa Redonda com CEOS?
            </h1>

            <p className="text-white text-lg mt-4">
              O Mesa Redonda com CEOS 2026 - 5ª Edição sobre o Papel da Banca e
              de Outros Agentes do Sistema Financeiro na Mobilização de
              Financiamento é um espaço estratégico de reflexão, diálogo e
              partilha de experiências entre decisores públicos, instituições
              financeiras, investidores, reguladores e especialistas nacionais e
              internacionais. O evento tem como objetivo analisar o papel da
              banca comercial, bancos de desenvolvimento, fundos de
              investimento, seguradoras, fintechs e outros agentes do sistema
              financeiro na mobilização de recursos para o financiamento da
              economia real, com enfoque no crescimento sustentável, inclusão
              financeira, inovação e fortalecimento do setor produtivo.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)] bg-center bg-cover">
        <div className="flex flex-row-reverse items-center min-h-screen gap-24 p-24 justify-center w-full bg-linear-to-t from-accent/90 to-accent/75 z-10 backdrop-blur-xs ">
          <div className="max-w-xl w-full flex items-center justify-center h-125 rounded-2xl p-8 bg-linear-to-b from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm">
            <Image
              src={"/logo-white.png"}
              alt={"About Us"}
              width={1920}
              height={1080}
              className="w-100 object-contain"
            />
          </div>

          <div className="max-w-xl w-full">
            <h1 className="text-3xl font-bold text-white">
             O que é a Mesa Redonda com CEOS?
            </h1>

            <p className="text-white text-lg mt-4">
              O Mesa Redonda com CEOS 2026 - 5ª Edição sobre o Papel da Banca e
              de Outros Agentes do Sistema Financeiro na Mobilização de
              Financiamento é um espaço estratégico de reflexão, diálogo e
              partilha de experiências entre decisores públicos, instituições
              financeiras, investidores, reguladores e especialistas nacionais e
              internacionais. O evento tem como objetivo analisar o papel da
              banca comercial, bancos de desenvolvimento, fundos de
              investimento, seguradoras, fintechs e outros agentes do sistema
              financeiro na mobilização de recursos para o financiamento da
              economia real, com enfoque no crescimento sustentável, inclusão
              financeira, inovação e fortalecimento do setor produtivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
