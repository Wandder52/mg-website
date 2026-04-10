import { ContactForm } from "./ContactForm";
import { ContactImage } from "./ContactImage";
import { Container } from "../ui/container";
import { CONTACT_CONTENT } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left column - Form (40%) */}
          <div className="lg:col-span-2">
            {/* Section Header */}
            <div className="mb-8">
              {/* Eyebrow with underline */}
              <div className="mb-4 inline-block">
                <p className="text-sm font-semibold uppercase tracking-wider text-mega-teal">
                  {CONTACT_CONTENT.eyebrow}
                </p>
                <div className="mt-2 h-0.5 w-full bg-mega-teal" />
              </div>

              {/* Main Heading */}
              <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                {CONTACT_CONTENT.heading}
              </h2>

              {/* Description */}
              <p className="text-gray-600">{CONTACT_CONTENT.description}</p>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Right column - Image (60%) */}
          <ContactImage className="lg:col-span-3" />
        </div>
      </Container>
    </section>
  );
}
