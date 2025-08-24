import { heroData } from "../../data/hero";
import { our_work } from "../../data/ourwork";
import { services } from "../../data/services";
import HeroSection from "./components/HeroSection";
import OurWork from "./components/OurWork";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
      <HeroSection data={heroData} />
      <Services data={services} />
      <OurWork data={our_work} />
    </div>
  );
}
