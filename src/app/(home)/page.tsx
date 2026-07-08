import About from "./components/About";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Exhibition from "./components/Exhibition";
import MainHero from "./components/MainHero";
import LaunchMagazine from "./components/LaunchMagazine";
import SpeakersList from "./speakers/components/Speakers";
import Statistics from "./components/Stats";
import WhyParticipate from "./components/WhyParticipate";
import Contact from "./contact/page";
import TeaserPresentation from "./components/TeaserPresentation";
import TeaserMagazine from "./components/TeaserMagazine";
import BAW from "./components/BAW";
import Sponsors from "./components/Sponsors";
import Partners from "./components/Partners";
import Confirmed from "./speakers/components/Confirmed";
import PartnersVision from "./sponsors/components/PartnersVision";
import Agenda from "./components/Agenda";
import PhotoGallery from "./pictures/components/PhotoGallery";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col items-center justify-center bg-cover bg-center w-full relative">
      <MainHero />
      <Statistics />
      <About />
      <TeaserPresentation />
      <Sponsors />
      <WhyParticipate />
      <Confirmed />
     {/*  <CallToAction />
      <BAW /> */}
      <PartnersVision />
      <PhotoGallery />
      <TeaserMagazine />
      <SpeakersList />{/* 
      <Agenda /> */}
      {/* <Exhibition /> */}
      <Partners />
      <FAQ />
      <Contact />
    </div>
  );
}
