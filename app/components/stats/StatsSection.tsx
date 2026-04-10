import { StatItem } from "./StatItem";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-mega-teal py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className={
                // Add right border to all except last item on desktop
                // Add right border to odd items on mobile/tablet
                index < STATS.length - 1
                  ? "border-r border-dashed border-white/30 last:border-r-0 md:last:border-r-0"
                  : ""
              }
            >
              <StatItem value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
