import Image from "next/image";

export default function Speakers() {
  return (
    <div className="w-full min-h-screen relative  bg-[url(https://ik.imagekit.io/globalsc/conteudo-local-jul-2025/12.png)]">
      <div className="flex flex-col items-center gap-24 p-24 absolute top-0 left-0 justify-center w-full h-full bg-linear-to-b from-accent/85 to-accent/95 z-10">
        <nav>
          <div className="text-white">
            <h1 className="text-3xl font-bold ">Oradores e Convidados</h1>

            <p className="text-lg">
              Veja quem fará parte do nosso painel de oradores e grande parte
              dos nossos convidados.
            </p>
          </div>
        </nav>

        <ul className="w-full">
          <li className="max-w-xs w-full text-white">
            <Image
              src={"/"}
              alt={"Speaker picture"}
              width={1920}
              height={1080}
              className="w-full h-64 rounded-t-2xl bg-white"
            />

            <div className="flex flex-col p-5">
              <h2 className="text-2xl font-bold ">Nome do Orador</h2>
              <p>Cargo do Orador</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
