import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pipeline from "@/components/Pipeline";
import FoundingOffer from "@/components/FoundingOffer";
import Guarantee from "@/components/Guarantee";
import Founder from "@/components/Founder";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { homeGraph } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeGraph()) }}
      />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Calculator />
        <Services />
        <HowItWorks />
        <Pipeline />
        <FoundingOffer />
        <Guarantee />
        <Founder />
        <Faq />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
