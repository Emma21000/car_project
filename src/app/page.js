import { aboutus } from "../../data/about-us";
import { contactus } from "../../data/contact-us";
import { heroData } from "../../data/hero";
import { our_work } from "../../data/ourwork";
import { services } from "../../data/services";
import Aboutus from "./components/About-us";
import ContactUs from "./components/ContactUs";
import HeroSection from "./components/HeroSection";
import Imagefile from "./components/Imagefile";
import OurWork from "./components/OurWork";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="" id="Home">
      <HeroSection data={heroData} />
      <Services data={services} />
      <OurWork data={our_work} />
      <Aboutus data={aboutus} />
      <Imagefile />
      <ContactUs data={contactus} />
    </div>
  );
}
