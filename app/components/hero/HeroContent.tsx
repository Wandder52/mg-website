import { cn } from "@/lib/utils";
import { HERO_CONTENT } from "@/lib/constants";

interface HeroContentProps {
  className?: string;
}

export function HeroContent({ className }: HeroContentProps) {
  return (
    <div className={cn("relative max-w-7xl", className)}>
      {/* Decorative Yellow Border */}
      <div className="absolute -left-4 top-0 h-32 w-1 bg-mega-yellow md:-left-8 md:h-40 md:w-1.5" />

      {/* Main Heading */}
      <h1 className="mb-6 line-clamp-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        {HERO_CONTENT.title}
      </h1>

      {/* Subheading */}
      <p className="text-lg text-white/90 md:text-xl lg:text-2xl">
        {HERO_CONTENT.subtitle}
      </p>
    </div>
  );
}
