import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVIGATION_LINKS } from "@/lib/constants";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-8", className)}>
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium text-white transition-colors hover:text-white/80",
            "relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0",
            "after:bg-white after:transition-all hover:after:w-full",
            link.href === "/" && "after:w-full" // Active state for home
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
