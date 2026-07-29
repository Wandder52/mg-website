import type { ReactNode } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Container } from "../ui/container";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <div className="relative bg-gray-900 pb-14 pt-32 md:pb-16 md:pt-36">
        <Header />
        <Container>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-mega-teal">
            Mega Glass LLC
          </p>
          <h1 className="max-w-4xl text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-gray-300">Last updated: {lastUpdated}</p>
        </Container>
      </div>

      <main className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <Container>
          <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 text-gray-700 shadow-sm md:p-10 lg:p-12">
            {children}
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
