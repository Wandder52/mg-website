import { cn } from "@/lib/utils";

interface ExperienceBadgeProps {
  years: number;
  label: string;
  className?: string;
}

export function ExperienceBadge({ years, label, className }: ExperienceBadgeProps) {
  return (
    <div
      className={cn(
        "flex h-32 w-32 flex-col items-center justify-center rounded-full bg-mega-teal p-6 text-white shadow-lg md:h-40 md:w-40",
        className
      )}
    >
      <div className="text-center">
        <div className="text-3xl font-bold leading-none md:text-4xl">+{years}</div>
        <div className="mt-2 text-xs font-semibold uppercase leading-tight tracking-wide md:text-sm">
          {label}
        </div>
      </div>
    </div>
  );
}
