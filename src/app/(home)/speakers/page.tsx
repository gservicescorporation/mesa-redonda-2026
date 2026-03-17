import Hero from "@/app/ui/Hero";
import SpeakersList from "./components/Speakers";

export default function Speakers() {
  return (
    <div className="flex flex-col justify-center w-full text-white bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)]">
      <Hero
        title="Oradores"
        subtitle="Veja o perfil de cada um dos nossos especiais oradores."
        date="07 e 08 de Julho de 2026"
      />
      <SpeakersList />
    </div>
  );
}
