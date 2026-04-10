import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export function HeroBackground({ imageSrc, imageAlt, className }: HeroBackgroundProps) {
  return (
    <>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className={cn("object-cover", className)}
        sizes="100vw"
        quality={90}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
    </>
  );
}
