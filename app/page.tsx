import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { BrandsSection } from "./components/brands/BrandsSection";
import { AboutSection } from "./components/about/AboutSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { SectorsSection } from "./components/sectors/SectorsSection";
import { StatsSection } from "./components/stats/StatsSection";
import { LearnAboutSection } from "./components/learn-about/LearnAboutSection";
import { ContactSection } from "./components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ProjectsSection />
        <StatsSection />
        <SectorsSection />
        <LearnAboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
