export default function CallToAction() {
  return (
    <div className="w-full min-h-96 relative bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/21.png)]">
      <div className="text-white absolute top-0 left-0 w-full h-full bg-linear-to-r to-[#0149A7]/50 from-[#001C41] flex p-24 justify-around">
        <h1 className="uppercase text-4xl font-semibold max-w-md">Posicione sua marca em um ambiente exclusivo!</h1>

        <div className="flex flex-col gap-6 max-w-lg">
          <p className="text-white italic text-xl ">
            Patrocine o Fórum Internacional sobre o Papel da Banca e de Outros
            Agentes do Sistema Financeiro na Mobilização de Financiamento e seja
            destaque no evento.
          </p>

          <button className="px-8 py-3 btn-primary w-fit">
            Entrar em contacto
          </button>
        </div>
      </div>
    </div>
  );
}
