import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-8 text-center", className)}>
      {/* Stat Value */}
      <div className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">{value}</div>

      {/* Stat Label */}
      <div className="text-sm font-light text-white md:text-base">{label}</div>
    </div>
  );
}
