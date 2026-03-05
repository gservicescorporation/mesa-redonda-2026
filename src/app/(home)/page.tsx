import About from "./components/About";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import GetTickets from "./components/GetTickets"; /* 
import Hero from "./components/Hero"; */
import JoinUs from "./components/JoinUs";
import LaunchMagazine from "./components/LaunchMagazine";
import SpeakersList from "./components/Speakers";
import SponsorsPartners from "./components/SponsorsPartners";
import Statistics from "./components/Stats";
import WhyParticipate from "./components/WhyParticipate";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center w-full">
      <JoinUs />
      {/*  <Hero /> */}
      <Statistics />
      <About />
      <SponsorsPartners />
      <WhyParticipate />
      <CallToAction />
      <LaunchMagazine />
      <SpeakersList />
      <GetTickets />
      <FAQ />
      <ContactUs />
    </div>
  );
}
