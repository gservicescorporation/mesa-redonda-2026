import Image from "next/image";

export default function LaunchMagazine() {
  return (
    <div className="w-full min-h-screen relative bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/21.png)]">
      <div className="flex items-center gap-24 p-24 absolute top-0 left-0 justify-center w-full h-full bg-linear-to-t from-accent/45 to-accent/95 z-10">
        <div className="max-w-lg w-full flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">
            Lançamento da Revista LOCAL CONTENT MAGANIZE
          </h1>

          <p className="text-white text-lg">
            A revista que destaca o valor, a inovação e o impacto do conteúdo
            local.
          </p>

          <p className="text-white text-lg">
            A LOCAL CONTENT MAGAZINE é uma revista criada para dar visibilidade
            a histórias, iniciativas e profissionais que contribuem para o
            fortalecimento do ecossistema local, promovendo conhecimento,
            identidade e desenvolvimento por meio de uma curadoria editorial
            criteriosa e atual.
          </p>
        </div>

        <Image
          src={"https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/5.png"}
          alt={"About Us"}
          width={1920}
          height={1080}
          className="max-w-xl w-full h-125 rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
