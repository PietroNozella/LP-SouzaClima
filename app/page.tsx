import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import TrustIndicators from "./components/TrustIndicators";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import MissionVisionValues from "./components/MissionVisionValues";
import InstallationsGallery from "./components/InstallationsGallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <InstallationsGallery />
        <Differentials />
        <MissionVisionValues />
        <HowItWorks />
        <Testimonials />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
