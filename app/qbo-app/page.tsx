import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/ui/container";
import { COMPANY_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mega Glass Finance Control | Mega Glass LLC",
  description:
    "Mega Glass Finance Control is an internal, read-only QuickBooks reporting integration for authorized Mega Glass personnel.",
};

export default function QboAppPage() {
  return (
    <>
      <div className="relative bg-gray-900 pb-16 pt-32 md:pb-20 md:pt-36">
        <Header />
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-mega-teal">
            Mega Glass LLC
          </p>
          <h1 className="max-w-4xl text-4xl font-bold text-white md:text-5xl">
            Mega Glass Finance Control
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            An internal, read-only QuickBooks reporting integration for authorized
            Mega Glass personnel.
          </p>
        </Container>
      </div>

      <main className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <Container>
          <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-gray-700 shadow-sm md:p-10 lg:p-12">
            <div className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-mega-dark-teal">
              Internal use only · Read-only access
            </div>

            <section className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">About the Integration</h2>
              <p className="mt-4 leading-7">
                Mega Glass Finance Control provides authorized Mega Glass personnel
                with read-only access to QuickBooks Online data for internal
                financial monitoring and reporting. The Integration does not create,
                modify, or delete QuickBooks records and is not offered for public or
                third-party use.
              </p>
            </section>

            <section className="mt-10 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">Contact Mega Glass</h2>
              <address className="mt-4 not-italic leading-7">
                <strong>{COMPANY_CONTACT.name}</strong>
                <br />
                {COMPANY_CONTACT.location}
                <br />
                Phone:{" "}
                <a
                  href={COMPANY_CONTACT.phoneHref}
                  className="text-mega-teal underline underline-offset-2"
                >
                  {COMPANY_CONTACT.phone}
                </a>
                <br />
                Online:{" "}
                <Link
                  href="/#contact"
                  className="text-mega-teal underline underline-offset-2"
                >
                  Contact Us form
                </Link>
              </address>
            </section>

            <nav
              aria-label="Mega Glass Finance Control policies"
              className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:gap-6"
            >
              <Link
                href="/privacy-policy"
                className="font-semibold text-mega-teal underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="/qbo-app-terms"
                className="font-semibold text-mega-teal underline underline-offset-4"
              >
                QBO App Terms
              </Link>
            </nav>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
