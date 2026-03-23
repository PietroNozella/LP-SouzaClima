import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider fromColor="#1B3A5C" toColor="#ffffff" />
        <Services />
        <SectionDivider fromColor="#ffffff" toColor="#F5F7FA" flip />
        <Differentials />
        <SectionDivider fromColor="#F5F7FA" toColor="#1B3A5C" />
        <HowItWorks />
        <SectionDivider fromColor="#1B3A5C" toColor="#ffffff" flip />
        <Testimonials />
        <SectionDivider fromColor="#ffffff" toColor="#ffffff" />
        <Portfolio />
        <SectionDivider fromColor="#ffffff" toColor="#F5F7FA" flip />
        <CTA />
        <SectionDivider fromColor="#F5F7FA" toColor="#122844" />
      </main>
      <Footer />
    </>
  );
}
