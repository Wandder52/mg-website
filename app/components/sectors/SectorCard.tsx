import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectorCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  featured?: boolean;
  className?: string;
}

export function SectorCard({
  imageSrc,
  imageAlt,
  title,
  description,
  className,
}: SectorCardProps) {
  return (
    <div className="group relative overflow-visible">
      {/* Rotated background square - appears on hover */}
      <div className="absolute h-full w-full opacity-0 transition-all duration-500 group-hover:opacity-50 pointer-events-none z-0">
        <div className="h-full w-full bg-[#FEA2123D] -rotate-8" />
      </div>

      {/* Main Card */}
      <div className={cn(
        "relative flex flex-col items-center bg-white p-8 transition-all duration-500 hover:shadow-lg hover:bg-mega-teal md:p-10 z-10",
        "min-h-100",
        className
      )}>
        {/* Icon */}
        <div className="flex-row mb-6">
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={80}
            width={80}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold text-mega-teal transition-colors duration-500 group-hover:text-white md:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 flex-1 text-base leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white">
          {description}
        </p>

        {/* Arrow Link */}
        {/* <div className="flex items-center gap-2 text-gray-900 transition-all duration-300 group-hover:gap-4">
          <div className="p-3 border border-[#EBEBEB] rounded-full transition-all duration-500 group-hover:bg-[#E8A84E] group-hover:border-[#E8A84E]">
            <svg
              className="h-5 w-5 transition-all duration-500 group-hover:rotate-90 group-hover:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
}
