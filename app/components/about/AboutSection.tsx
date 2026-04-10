import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";
import { Container } from "../ui/container";

export function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column - Text content (60%) */}
          <AboutContent className="lg:col-span-3" />

          {/* Right column - Image with badge (40%) */}
          <AboutImage className="lg:col-span-2" />
        </div>
      </Container>
    </section>
  );
}
