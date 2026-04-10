import { SectorCard } from "./SectorCard";
import { Container } from "../ui/container";
import { SECTORS_CONTENT, SECTORS } from "@/lib/constants";

export function SectorsSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          {/* Eyebrow with underline */}
          <div className="mb-4 inline-block">
            <p className="text-sm font-semibold uppercase tracking-wider text-mega-teal">
              {SECTORS_CONTENT.eyebrow}
            </p>
            <div className="mt-2 h-0.5 w-full bg-mega-teal" />
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            {SECTORS_CONTENT.heading}
          </h2>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <SectorCard
              key={sector.id}
              imageSrc={sector.imageSrc}
              imageAlt={sector.imageAlt}
              title={sector.title}
              description={sector.description}
              featured={sector.featured}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
