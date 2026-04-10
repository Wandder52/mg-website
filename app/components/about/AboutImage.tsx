import Image from "next/image";
import { ExperienceBadge } from "./ExperienceBadge";
import { ABOUT_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AboutImageProps {
  className?: string;
}

export function AboutImage({ className }: AboutImageProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Main image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={ABOUT_CONTENT.image.src}
          alt={ABOUT_CONTENT.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Experience badge overlay */}
      <div className="absolute bottom-8 left-8">
        <ExperienceBadge
          years={ABOUT_CONTENT.experience.years}
          label={ABOUT_CONTENT.experience.label}
        />
      </div>
    </div>
  );
}
