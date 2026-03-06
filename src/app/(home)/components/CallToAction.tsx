export default function CallToAction() {
  return (
    <div className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/21.png)] bg-cover bg-center">
      <div
        className="
        text-white min-h-96 w-full h-full 
        bg-linear-to-r from-primary/80 to-accent/80 
        flex justify-center p-24 backdrop-blur-xs

        max-lg:p-10
      "
      >
        <div
          className="
          max-w-7xl w-full flex justify-around items-center gap-16

          max-lg:flex-col
          max-lg:text-center
          max-lg:gap-8
        "
        >
          <h1
            className="
            uppercase text-4xl font-semibold max-w-md

            max-lg:text-2xl
            max-lg:max-w-none
          "
          >
            Posicione sua marca em um ambiente exclusivo!
          </h1>

          <div
            className="
            flex flex-col gap-6 max-w-lg

            max-lg:items-center
          "
          >
            <p
              className="
              text-white italic text-xl

              max-lg:text-base
            "
            >
              Patrocine o Mesa Redonda com CEOS 2026 - 5ª Edição sobre o Papel
              da Banca e de Outros Agentes do Sistema Financeiro na Mobilização
              de Financiamento e seja destaque no evento.
            </p>

            <button className="px-8 py-3 btn-primary w-fit">
              Entrar em contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}