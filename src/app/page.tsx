import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { PracticeAreas } from "@/components/PracticeAreas";
import { ContactWizard } from "@/components/ContactWizard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <div className="relative z-10">
        <AboutSection />
      </div>
      <div className="relative z-20">
        <PracticeAreas />
      </div>
      <div className="relative z-30 pt-[30vh] bg-obsidian">
        <ContactWizard />
        <Footer />
      </div>
    </main>
  );
}
