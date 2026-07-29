import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "../components/legal/LegalPageLayout";
import { COMPANY_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SMS Terms and Conditions | Mega Glass LLC",
  description:
    "Terms for the Mega Glass Customer Updates text-messaging program.",
};

const sectionClass = "mt-10 first:mt-0";
const headingClass = "mb-4 text-2xl font-bold text-gray-900";
const paragraphClass = "mt-4 leading-7";
const listClass = "mt-4 list-disc space-y-2 pl-6 leading-7";

export default function SmsTermsPage() {
  return (
    <LegalPageLayout title="SMS Terms and Conditions" lastUpdated="July 29, 2026">
      <section className={sectionClass}>
        <h2 className={headingClass}>Mega Glass Customer Updates</h2>
        <p className={paragraphClass}>
          These SMS Terms and Conditions apply to the{" "}
          <strong>Mega Glass Customer Updates</strong> program sent by{" "}
          <strong>Mega Glass LLC</strong>. The program provides conversational and
          informational messages regarding estimates, appointment scheduling,
          project/order updates, and customer support.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Voluntary Participation</h2>
        <p className={paragraphClass}>
          Participation is voluntary. Consent to receive text messages is optional
          and is not a condition of purchase. You may submit the website contact form
          and request services without agreeing to receive text messages.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Message Frequency and Charges</h2>
        <ul className={listClass}>
          <li>Message frequency varies.</li>
          <li>Message and data rates may apply.</li>
        </ul>
        <p className={paragraphClass}>
          Contact your wireless provider for questions about your text or data plan.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Opt Out and Help</h2>
        <ul className={listClass}>
          <li>
            <strong>Reply STOP to opt out.</strong> After you opt out, you may receive
            a final confirmation message.
          </li>
          <li>
            <strong>Reply HELP for assistance.</strong>
          </li>
        </ul>
        <p className={paragraphClass}>
          You can also request assistance using the contact information below.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Delivery</h2>
        <p className={paragraphClass}>
          Message delivery is subject to effective transmission by your mobile
          carrier and is not guaranteed. Mobile carriers are not liable for delayed
          or undelivered messages.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Privacy</h2>
        <p className={paragraphClass}>
          Our collection and use of information, including mobile information and
          text-messaging consent, are described in the{" "}
          <Link
            href="/privacy-policy"
            className="text-mega-teal underline underline-offset-2"
          >
            Mega Glass LLC Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Contact</h2>
        <address className="mt-4 not-italic leading-7">
          <strong>{COMPANY_CONTACT.name}</strong>
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

      <section className={sectionClass}>
        <h2 className={headingClass}>Changes to These Terms</h2>
        <p className={paragraphClass}>
          Mega Glass LLC may update these SMS Terms and Conditions from time to
          time. Any revised terms will be posted on this page with an updated date.
        </p>
      </section>
    </LegalPageLayout>
  );
}
