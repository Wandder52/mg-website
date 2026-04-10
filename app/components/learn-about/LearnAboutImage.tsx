import Image from "next/image";
import { LEARN_ABOUT_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LearnAboutImageProps {
  className?: string;
}

export function LearnAboutImage({ className }: LearnAboutImageProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Decorative dot pattern - top right */}
      <div className="absolute -right-8 -top-8 h-32 w-32 opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-top" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots-top)" />
        </svg>
      </div>

      {/* Main image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
        <Image
          src={LEARN_ABOUT_CONTENT.image.src}
          alt={LEARN_ABOUT_CONTENT.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {/* Decorative dot pattern - bottom left */}
      <div className="absolute -bottom-8 -left-8 h-32 w-32 opacity-30">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-bottom" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#9CA3AF" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots-bottom)" />
        </svg>
      </div>
    </div>
  );
}
