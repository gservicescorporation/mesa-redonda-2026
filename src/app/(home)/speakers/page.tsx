import SpeakersList from "../components/Speakers";
import Hero from "./components/Hero";

export default function Speakers() {
  return (
    <div className="flex flex-col justify-center w-full text-white bg-[url(https://ik.imagekit.io/globalsc/mr-nov-2023/38.jpg)]">
      <Hero />
      <SpeakersList />
    </div>
  );
}
