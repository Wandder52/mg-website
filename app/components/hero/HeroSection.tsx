import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { Container } from "../ui/container";
import { cn } from "@/lib/utils";
import { HERO_CONTENT } from "@/lib/constants";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Background with Image and Overlay */}
      <HeroBackground
        imageSrc={HERO_CONTENT.image.src}
        imageAlt={HERO_CONTENT.image.alt}
      />

      {/* Content Container */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center py-32">
        <div className="flex flex-col gap-12">
          {/* Hero Content (Heading + Subheading) */}
          <HeroContent className="pl-8 md:pl-12" />
        </div>
      </Container>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white">
        <svg
          className="absolute bottom-0 h-24 w-full"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 96C0 96 360 0 720 0C1080 0 1440 96 1440 96V96H0V96Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
