import { LearnAboutImage } from "./LearnAboutImage";
import { LearnAboutContent } from "./LearnAboutContent";
import { Container } from "../ui/container";

export function LearnAboutSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column - Image (40%) */}
          <LearnAboutImage className="lg:col-span-2" />

          {/* Right column - Content (60%) */}
          <LearnAboutContent className="lg:col-span-3" />
        </div>
      </Container>
    </section>
  );
}
