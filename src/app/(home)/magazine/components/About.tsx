import Image from "next/image";

export default function About() {
  return (
    <div className="p-24 flex items-center justify-center min-h-145 bg-linear-to-l w-full from-primary/95 via-accent/90 to-accent/90">
      <div className="max-w-7xl w-full flex gap-24 items-center justify-center">
        <div className="max-w-xl w-full flex flex-col gap-2 text-white">
          <span className="bg-primary/30 px-2 py-1 rounded-lg">Sobre a revista</span>
          <h1 className="text-3xl font-semibold">Nossa Missão Editorial</h1>

          <p className="text-white text-lg max-lg:text-base mt-4">
            A Local Content Magazine dedica-se a mostrar o poder transformador
            das estratégias de negócios localizadas. Nós nos aprofundamos no
            cerne da inovação corporativa, destacando como os padrões globais
            encontram a execução local.
          </p>

          <p className="text-white text-lg max-lg:text-base mt-4">
            Por meio de análises especializadas, entrevistas exclusivas e
            relatórios de dados abrangentes, fornecemos a executivos e
            formuladores de políticas as informações necessárias para construir
            economias locais sustentáveis, resilientes e prósperas.
          </p>
        </div>

        <Image
          src={"/magazine/banner.jpeg"}
          alt=""
          width={1920}
          height={1080}
          className="max-w-lg w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
