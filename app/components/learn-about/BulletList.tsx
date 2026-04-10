import { cn } from "@/lib/utils";

interface BulletListProps {
  items: readonly string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {/* Yellow square bullet */}
          <div className="mt-1.5 h-3 w-3 flex-shrink-0 bg-mega-yellow" />
          {/* Text */}
          <span className="text-base text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
