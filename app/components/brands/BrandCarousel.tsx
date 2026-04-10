"use client";

import { BrandLogo } from "./BrandLogo";
import { BRANDS } from "@/lib/constants";

export function BrandCarousel() {
  // Duplicate brands array for seamless infinite scroll
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-white to-transparent" />

      {/* Scrolling container */}
      <div className="flex animate-scroll hover:pause-animation">
        {duplicatedBrands.map((brand, index) => (
          <BrandLogo
            key={`${brand.name}-${index}`}
            name={brand.name}
            logoSrc={brand.logoSrc}
            alt={brand.alt}
            className="shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
