import About from "./components/About";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Exhibition from "./components/Exhibition"; /* 
import Hero from "./components/Hero"; */
import JoinUs from "./components/JoinUs";
import LaunchMagazine from "./components/LaunchMagazine";
import SpeakersList from "./components/Speakers";
import SponsorsPartners from "./components/SponsorsPartners";
import Statistics from "./components/Stats";
import WhyParticipate from "./components/WhyParticipate";
import Contact from "./contact/page";
import TeaserPresentation from "./components/TeaserPresentation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full">
      <JoinUs />
      {/*  <Hero /> */}
      <Statistics />
      <About />
      <TeaserPresentation />
      <SponsorsPartners />
      <WhyParticipate />
      <CallToAction />
      <LaunchMagazine />
      <SpeakersList />
      <Exhibition />
      <FAQ />
      <Contact />
    </div>
  );
}
