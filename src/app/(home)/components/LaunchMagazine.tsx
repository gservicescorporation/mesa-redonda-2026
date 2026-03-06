import Image from "next/image";

export default function LaunchMagazine() {
  return (
    <div className="w-full bg-[url(/images/magazine.png)] bg-cover bg-center">
      <div
        className="
        flex min-h-screen items-center gap-24 p-24 justify-center w-full
        backdrop-blur-xs bg-linear-to-b from-accent/50 to-accent/75 z-10

        max-lg:flex-col
        max-lg:gap-10
        max-lg:p-10
      ">
        <div
          className="
          max-w-lg w-full flex flex-col gap-6

          max-lg:text-center
          max-lg:items-center
        ">
          <h1 className="text-3xl font-bold text-white max-lg:text-2xl">
            Lançamento da Revista{" "}
            <span
              className="
              text-4xl font-extrabold
              bg-linear-to-r from-[#e3b82c] via-[#ffe44b] to-[#e3ae0f]
              bg-clip-text text-transparent

              max-lg:text-3xl
              ">
              LOCAL CONTENT MAGANIZE
            </span>
          </h1>

          <p className="text-white text-lg max-lg:text-base">
            A revista que destaca o valor, a inovação e o impacto do conteúdo
            local.
          </p>

          <p className="text-white text-lg max-lg:text-base">
            A LOCAL CONTENT MAGAZINE é uma revista criada para dar visibilidade
            a histórias, iniciativas e profissionais que contribuem para o
            fortalecimento do ecossistema local, promovendo conhecimento,
            identidade e desenvolvimento por meio de uma curadoria editorial
            criteriosa e atual.
          </p>
        </div>

        <Image
          src={"/images/magazine.png"}
          alt={"Magazine"}
          width={1920}
          height={1080}
          className="
          max-w-xl w-full h-125 rounded-2xl object-cover

          max-lg:h-80
          max-lg:max-w-md
          "
        />
      </div>
    </div>
  );
}
