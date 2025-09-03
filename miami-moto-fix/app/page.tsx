import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturesBar />
      <Services />
      <Process />
      <Reviews />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}