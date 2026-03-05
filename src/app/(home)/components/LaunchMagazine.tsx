import Image from "next/image";

export default function LaunchMagazine() {
  return (
    <div className="w-full bg-[url(/images/magazine.png)] bg-cover bg-center">
      <div className="flex min-h-screen items-center gap-24 p-24 backdrop-blur-xs justify-center w-full bg-linear-to-b from-accent/50 to-accent/75 z-10">
        <div className="max-w-lg w-full flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">
            Lançamento da Revista{" "}
            <span
              className="text-4xl font-extrabold 
           bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f] 
           bg-clip-text text-transparent">
              LOCAL CONTENT MAGANIZE
            </span>
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
          src={"/images/magazine.png"}
          alt={"About Us"}
          width={1920}
          height={1080}
          className="max-w-xl w-full h-125 rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
