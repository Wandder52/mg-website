import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "../components/legal/LegalPageLayout";
import { COMPANY_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Mega Glass LLC",
  description:
    "Privacy Policy for Mega Glass LLC, including contact-form and mobile-messaging privacy practices.",
};

const sectionClass = "mt-10 first:mt-0";
const headingClass = "mb-4 text-2xl font-bold text-gray-900";
const paragraphClass = "mt-4 leading-7";
const listClass = "mt-4 list-disc space-y-2 pl-6 leading-7";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="July 29, 2026">
      <section className={sectionClass}>
        <h2 className={headingClass}>Overview</h2>
        <p className={paragraphClass}>
          Mega Glass LLC (&quot;Mega Glass,&quot; &quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;) respects your privacy. This Privacy Policy explains
          how we collect, use, store, protect, and disclose information when you
          visit megaglassdc.com, submit a request, communicate with us, or use our
          services.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Information We Collect</h2>
        <p className={paragraphClass}>We may collect the following categories of information:</p>
        <ul className={listClass}>
          <li>
            <strong>Contact information:</strong> your name, email address, optional
            mobile phone number, company information, and other contact details you
            voluntarily provide.
          </li>
          <li>
            <strong>Project and inquiry information:</strong> the details you include
            in an estimate request, message, scheduling request, order or project
            communication, or customer-support inquiry.
          </li>
          <li>
            <strong>Communication records:</strong> copies of emails, form
            submissions, text-message preferences, and records needed to document
            your request and our response.
          </li>
          <li>
            <strong>Technical information:</strong> limited device, browser, IP
            address, referring-page, access-time, and website log information that
            may be processed automatically by our hosting, security, and form-delivery
            providers.
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>How We Use Information</h2>
        <p className={paragraphClass}>We may use information to:</p>
        <ul className={listClass}>
          <li>Respond to inquiries and prepare estimates;</li>
          <li>Schedule appointments and coordinate requested services;</li>
          <li>Provide project, order, and customer-support updates;</li>
          <li>Maintain business, consent, and communication records;</li>
          <li>Operate, secure, troubleshoot, and improve our website and systems;</li>
          <li>Prevent fraud, abuse, or security incidents; and</li>
          <li>Comply with legal, regulatory, contractual, and safety obligations.</li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Mobile Messaging Privacy</h2>
        <p className={paragraphClass}>
          Mega Glass LLC may collect mobile phone numbers when customers voluntarily
          provide them for estimates, scheduling, project updates, and customer
          support. Message frequency varies. Message and data rates may apply.
          Customers may reply STOP to opt out or HELP for assistance. Consent to
          receive text messages is optional and is not a condition of purchase.
        </p>
        <p className={paragraphClass}>
          No mobile information will be shared with third parties or affiliates for
          marketing or promotional purposes. All the above categories exclude text
          messaging originator opt-in data and consent; this information will not be
          shared with any third parties.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>How We Store and Protect Information</h2>
        <p className={paragraphClass}>
          Website inquiries are processed through service providers that help operate
          the website and deliver the request to Mega Glass. We may retain information
          in company email, project, customer-service, and recordkeeping systems for
          as long as reasonably necessary for the purposes described in this policy,
          to resolve disputes, and to meet legal or contractual obligations.
        </p>
        <p className={paragraphClass}>
          We use reasonable administrative, technical, and organizational safeguards
          designed to protect personal information. No internet transmission or
          storage system can be guaranteed to be completely secure.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>When Information May Be Disclosed</h2>
        <p className={paragraphClass}>
          We do not sell personal information. We may disclose information only as
          reasonably necessary in these circumstances:
        </p>
        <ul className={listClass}>
          <li>
            To technical contractors and service providers that process contact
            forms, host or secure the website, deliver communications, maintain
            infrastructure, or otherwise help provide services you requested;
          </li>
          <li>
            To comply with applicable law, a valid legal process, or a government
            request; or
          </li>
          <li>
            To protect the rights, safety, security, and property of Mega Glass, our
            customers, or others.
          </li>
        </ul>
        <p className={paragraphClass}>
          Technical providers may use information only to perform the relevant
          service or maintain the supporting infrastructure, subject to their
          contractual and legal obligations. Mobile information and text-messaging
          opt-in data or consent are not shared with third parties or affiliates for
          marketing or promotional purposes.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Your Choices and Rights</h2>
        <p className={paragraphClass}>
          Depending on applicable law, you may ask to access, correct, update, or
          delete personal information we maintain about you, or object to or restrict
          certain processing. You may also withdraw optional text-message consent at
          any time by replying STOP. Reply HELP for assistance.
        </p>
        <p className={paragraphClass}>
          We may need to verify your identity before completing a request, and we may
          retain information when required by law or reasonably necessary for
          legitimate business records.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Children&apos;s Privacy</h2>
        <p className={paragraphClass}>
          Our website and commercial services are not directed to children under 13,
          and we do not knowingly collect personal information from children under 13.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Third-Party Links</h2>
        <p className={paragraphClass}>
          Our website may link to third-party websites. Their privacy practices are
          governed by their own policies, and Mega Glass is not responsible for those
          practices.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Changes to This Policy</h2>
        <p className={paragraphClass}>
          We may update this Privacy Policy from time to time. The revised version
          will be posted on this page with an updated date.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Contact Us</h2>
        <p className={paragraphClass}>
          To ask a privacy question or submit a request, contact:
        </p>
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
        <p className={paragraphClass}>
          For terms that apply specifically to text messaging, see our{" "}
          <Link
            href="/sms-terms"
            className="text-mega-teal underline underline-offset-2"
          >
            SMS Terms and Conditions
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
