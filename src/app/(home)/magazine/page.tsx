import TeaserMagazine from "../components/TeaserMagazine";
import About from "./components/About";
import DownloadMagazine from "./components/DownloadMagazine";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partners";
import WhatExpect from "./components/WhatExpect";

export default function Magazine() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center bg-cover bg-center w-full relative">
      <Hero />
      <About />
      <WhatExpect />
      <Partners />
      <TeaserMagazine />
      <DownloadMagazine />
      <Newsletter />
    </div>
  );
}
