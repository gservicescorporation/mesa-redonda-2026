import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import LaunchMagazine from "./components/LaunchMagazine";
import Speakers from "./components/Speakers";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full">
      <Hero />
      <JoinUs />
      <About />
      <LaunchMagazine />
      <CallToAction />
      <Speakers />
    </div>
  );
}
