import { BrandCarousel } from "./BrandCarousel";
import { Container } from "../ui/container";

export function BrandsSection() {
  return (
    <section className="bg-white py-8 md:py-10">
      <Container>
        {/* Optional: Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Brand Carousel */}
        <BrandCarousel />
      </Container>
    </section>
  );
}
