import { Play } from "lucide-react";

export default function TeaserPresentation() {
  return (
    <div className="w-full bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/39.jpg)] bg-center bg-cover">
      <div
        className="flex items-center min-h-screen gap-14 p-24 justify-center w-full 
                bg-linear-to-b from-accent/85 to-accent/95 backdrop-blur-xs
                max-lg:flex-col
                max-lg:gap-10
                max-lg:p-10
                max-lg:text-center text-white flex-col">
        <div className="flex flex-col gap-4 items-center max-w-7xl w-full">
          <span className=" text-center bg-white/20 px-4 py-2 border-2 backdrop-blur-sm border-primary rounded-full uppercase flex items-center gap-2">
            <Play /> Assista ao Teaser Oficial
          </span>

          <h1 className="text-4xl font-extrabold text-center">
            Papel da Banca e de Outros Agentes do Sistema Financeiro na
            Mobilização de Financiamento
          </h1>
          <p className="text-xl text-center max-w-4xl">
            Veja como as edições anteriores da Mesa Redonda com CEOs marcaram o
            debate empresarial e prepare-se para a 5ª edição.
          </p>
        </div>

        <div className="max-w-300 w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-150 object-cover rounded-2xl shadow-2xl shadow-white/20 ">
            <source
              src="https://ik.imagekit.io/globalsc/mr-jul-2026/INTRO%20LOGO%20MESA%20REDONDA%205%20EDI%C3%87%C3%83O.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
