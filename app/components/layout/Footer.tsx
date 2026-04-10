import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { Container } from "../ui/container";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src={BRAND.logo.src}
              alt={BRAND.logo.alt}
              width={125}
              height={0}
              priority
              objectFit="contain"
            />
          </Link>

          {/* Social Links */}
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
