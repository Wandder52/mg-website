import Image from "next/image";
import { CONTACT_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactImageProps {
  className?: string;
}

export function ContactImage({ className }: ContactImageProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Light blue background */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-100" />

      {/* Main image container */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={CONTACT_CONTENT.image.src}
            alt={CONTACT_CONTENT.image.alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Teal curved overlay - top right */}
        <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-mega-teal md:h-64 md:w-64" />
      </div>
    </div>
  );
}
