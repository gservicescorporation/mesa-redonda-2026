import { ArrowRight, Store } from "lucide-react";
import Image from "next/image";

export default function GetTickets() {
  return (
    <div className="w-full relative bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2024/6.jpeg)]">
      <div className="flex flex-col items-center gap-14 p-24 justify-center w-full h-full bg-linear-to-b from-accent/65 to-accent/95 z-10">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold ">Assegure Seu Acesso ao Evento</h1>

          <p className="text-lg">
            Ingressos limitados para uma experiência de alto valor e networking
            qualificado.
          </p>
        </div>

       <ul className="flex gap-12">
         <li className="text-lg text-white px-8 py-8 rounded-2xl w-full max-w-md flex flex-col gap-6 items-center bg-white/20 backdrop-blur-sm">
          <div className="w-full flex flex-col gap-8">
            <Image src="https://ik.imagekit.io/globalsc/mr-nova-era-da-lideranca/20.jpg" alt="Espaço de vendas" width={6000} height={250} className="rounded-2xl object-cover w-full h-60" />

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">EXPOSITOR</h1>
              <p className="text-sm text-white/90">
               Mostre sua marca! Escolha entre categorias: Startups, Empresas ou Instituições.
              </p>
            </div>
            <p className="text-2xl font-bold flex items-center">
              <span className="text-xs font-light mr-2">a partir de</span>
              450.000,00 Kz
            </p>
          </div>
          <button className="btn-primary px-12 py-3 w-full">
            Explorar modalidade <ArrowRight size={18} />
          </button>
        </li>

        <li className="text-lg text-white px-8 py-8 rounded-2xl w-full max-w-md flex flex-col gap-6 items-center bg-white/20 backdrop-blur-sm">
          <div className="w-full flex flex-col gap-8">
            <Image src="https://ik.imagekit.io/globalsc/responsabilidade-social-viana/36.jpg" alt="Espaço de vendas" width={400} height={250} className="rounded-2xl object-cover w-full h-60" />

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-semibold">PATROCINADOR</h1>
              <p className="text-sm text-white/90">
               Aumente a visibilidade da sua marca e associe-se a um evento de impacto nacional.
              </p>
            </div>
            <p className="text-2xl font-bold flex items-center">
              <span className="text-xs font-light mr-2">valor</span>
              Sob consulta
            </p>
          </div>
          <button className="btn-primary px-12 py-3 w-full">
            Explorar modalidade <ArrowRight size={18} />
          </button>
        </li>
       </ul>
      </div>
    </div>
  );
}
