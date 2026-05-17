import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { PracticeAreas } from "@/components/PracticeAreas";
import { ContactWizard } from "@/components/ContactWizard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <ContactWizard />
      <Footer />
    </main>
  );
}
