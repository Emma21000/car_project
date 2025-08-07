import { heroData } from "../../data/hero";
import { services } from "../../data/services";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <HeroSection data={heroData} />
      <Services data={services} />
    </div>
  );
}
