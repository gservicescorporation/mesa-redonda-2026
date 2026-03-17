import About from "./components/About";
import Hero from "./components/Hero";

export default function Magazine() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center bg-cover bg-center w-full relative">
      <Hero />
      <About />
    </div>
  );
}
