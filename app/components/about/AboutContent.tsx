import { ABOUT_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AboutContentProps {
  className?: string;
}

export function AboutContent({ className }: AboutContentProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Eyebrow heading */}
      <p className="text-sm font-semibold uppercase tracking-wider text-mega-teal">
        {ABOUT_CONTENT.eyebrow}
      </p>

      {/* Main heading */}
      <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
        {ABOUT_CONTENT.heading}
      </h2>

      {/* Body paragraphs */}
      <div className="flex flex-col gap-4">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-gray-600 md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="mt-4">
        <Link
          href={ABOUT_CONTENT.cta.href}
          className="inline-flex items-center gap-2 rounded-full bg-mega-teal px-8 py-4 text-base font-semibold text-white transition-all hover:bg-mega-dark-teal hover:shadow-lg"
        >
          {ABOUT_CONTENT.cta.text}
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div> */}
    </div>
  );
}
