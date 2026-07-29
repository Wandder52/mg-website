import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";
import { Container } from "../ui/container";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
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

          <nav
            aria-label="Legal"
            className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-6"
          >
            <Link
              href="/privacy-policy"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sms-terms"
              className="text-gray-300 transition-colors hover:text-white"
            >
              SMS Terms and Conditions
            </Link>
          </nav>

          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
