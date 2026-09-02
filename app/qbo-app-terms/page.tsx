import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "../components/legal/LegalPageLayout";
import { COMPANY_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "QuickBooks Online Integration Terms of Use | Mega Glass LLC",
  description:
    "Terms governing authorized internal use of the Mega Glass LLC QuickBooks Online integration.",
};

const sectionClass = "mt-10 first:mt-0";
const headingClass = "mb-4 text-2xl font-bold text-gray-900";
const paragraphClass = "mt-4 leading-7";
const listClass = "mt-4 list-disc space-y-2 pl-6 leading-7";

export default function QboAppTermsPage() {
  return (
    <LegalPageLayout
      title="QuickBooks Online Integration Terms of Use"
      lastUpdated="September 2, 2026"
    >
      <section className={sectionClass}>
        <h2 className={headingClass}>Agreement and Scope</h2>
        <p className={paragraphClass}>
          These QuickBooks Online Integration Terms of Use
          (&quot;Terms&quot;) govern access to and use of the internal software
          integration operated by Mega Glass LLC (&quot;Mega Glass,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) that connects
          authorized Mega Glass systems with QuickBooks Online (the
          &quot;Integration&quot;).
        </p>
        <p className={paragraphClass}>
          The Integration is a private business tool provided only for Mega Glass
          internal accounting, administrative, reporting, and operational purposes.
          It is not offered to the public, sold as a subscription, or made available
          for use with a third party&apos;s QuickBooks company. By accessing or using
          the Integration, you agree to these Terms.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Authorized Users</h2>
        <p className={paragraphClass}>
          You may use the Integration only if Mega Glass has specifically authorized
          you to do so as an employee, officer, or approved contractor acting within
          the scope of assigned duties. You must stop using the Integration when
          that authorization ends or Mega Glass instructs you to stop.
        </p>
        <p className={paragraphClass}>
          You may not provide access to any other person, use the Integration for a
          personal or third-party business, or attempt to access any QuickBooks
          company that Mega Glass has not authorized.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>QuickBooks Authorization and Data</h2>
        <p className={paragraphClass}>
          The Integration connects to QuickBooks Online through authorization made
          by an authorized administrator of the applicable Mega Glass QuickBooks
          company. Depending on the permissions granted and the Integration&apos;s
          configuration, it may access, receive, process, create, update, or
          synchronize accounting and related business information available through
          QuickBooks Online.
        </p>
        <p className={paragraphClass}>
          The Integration will use QuickBooks data only to support authorized Mega
          Glass business functions. Such data remains subject to Mega Glass access,
          confidentiality, retention, security, and recordkeeping requirements.
          Users must not export, copy, disclose, or use that data except as required
          for authorized Mega Glass work.
        </p>
        <p className={paragraphClass}>
          An authorized QuickBooks administrator may revoke the Integration&apos;s
          access through QuickBooks Online. Mega Glass may also disable the
          Integration or an individual user&apos;s access at any time.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>User Responsibilities</h2>
        <p className={paragraphClass}>Authorized users must:</p>
        <ul className={listClass}>
          <li>Protect account credentials, access tokens, and company information;</li>
          <li>
            Follow Mega Glass security, accounting, confidentiality, and records
            policies;
          </li>
          <li>
            Verify the accuracy and completeness of information before relying on it
            or entering it into company records;
          </li>
          <li>
            Promptly report suspected unauthorized access, security incidents, or
            inaccurate data; and
          </li>
          <li>
            Comply with applicable laws and the terms governing the user&apos;s
            QuickBooks Online account.
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Prohibited Conduct</h2>
        <p className={paragraphClass}>You may not:</p>
        <ul className={listClass}>
          <li>Use the Integration for unlawful, fraudulent, or unauthorized purposes;</li>
          <li>
            Circumvent access controls, interfere with security measures, or attempt
            to gain access to systems or data beyond your authorization;
          </li>
          <li>
            Introduce malicious code, disrupt the Integration, or use automated
            methods that unreasonably burden connected systems; or
          </li>
          <li>
            Reverse engineer, copy, distribute, sublicense, sell, or commercially
            exploit the Integration except where applicable law does not permit such
            a restriction.
          </li>
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Privacy and Confidentiality</h2>
        <p className={paragraphClass}>
          Information processed through the Integration is handled for Mega Glass
          internal business purposes and may be processed by service providers that
          support our hosting, security, software, and accounting systems. We may
          also disclose information when required by law or reasonably necessary to
          protect Mega Glass, its systems, or others.
        </p>
        <p className={paragraphClass}>
          Additional information about our privacy practices is available in the{" "}
          <Link
            href="/privacy-policy"
            className="text-mega-teal underline underline-offset-2"
          >
            Mega Glass LLC Privacy Policy
          </Link>
          . Authorized users remain responsible for complying with all company
          confidentiality obligations.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Third-Party Services and Intuit</h2>
        <p className={paragraphClass}>
          QuickBooks Online is a third-party service provided by Intuit Inc. Use of
          QuickBooks Online is governed by the applicable Intuit agreements and
          policies. Mega Glass does not control and is not responsible for the
          availability, security, performance, or changes to QuickBooks Online or
          other third-party services.
        </p>
        <p className={paragraphClass}>
          The Integration is developed and operated by Mega Glass. It is not
          sponsored, certified, or endorsed by Intuit unless Intuit expressly states
          otherwise. Intuit and QuickBooks are trademarks and service marks of
          Intuit Inc.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Ownership and Internal License</h2>
        <p className={paragraphClass}>
          Mega Glass and its licensors retain all rights, title, and interest in the
          Integration, including its software, configuration, documentation, and
          related intellectual property. Subject to these Terms, Mega Glass grants
          authorized users a limited, revocable, nonexclusive, nontransferable right
          to use the Integration solely for authorized Mega Glass business purposes.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Availability and Changes</h2>
        <p className={paragraphClass}>
          Mega Glass may modify, suspend, restrict, or discontinue any part of the
          Integration at any time. We do not guarantee that the Integration will be
          uninterrupted, error-free, or compatible with every change made by Intuit
          or another service provider. Users must maintain appropriate review and
          backup procedures for business records.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Disclaimer of Warranties</h2>
        <p className={paragraphClass}>
          To the fullest extent permitted by law, the Integration is provided
          &quot;as is&quot; and &quot;as available.&quot; Mega Glass disclaims all
          warranties, express or implied, including warranties of merchantability,
          fitness for a particular purpose, title, noninfringement, accuracy, and
          availability.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Limitation of Liability</h2>
        <p className={paragraphClass}>
          To the fullest extent permitted by law, Mega Glass and its officers,
          employees, contractors, and licensors will not be liable for indirect,
          incidental, special, consequential, exemplary, or punitive damages, or for
          loss of data, revenue, profits, or business opportunity arising from or
          related to the Integration. Nothing in these Terms excludes liability that
          cannot lawfully be excluded.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Termination</h2>
        <p className={paragraphClass}>
          Mega Glass may terminate or suspend access immediately if a user violates
          these Terms, no longer requires access, leaves the company, creates a
          security risk, or if continued operation is no longer appropriate. Upon
          termination, the user must stop using the Integration and return or delete
          company information as directed by Mega Glass and applicable recordkeeping
          requirements.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Governing Law</h2>
        <p className={paragraphClass}>
          These Terms are governed by the laws of the Commonwealth of Virginia,
          without regard to conflict-of-law principles. Any dispute arising from
          these Terms or the Integration will be subject to the state or federal
          courts with jurisdiction in Virginia, except where applicable law requires
          otherwise.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Changes to These Terms</h2>
        <p className={paragraphClass}>
          Mega Glass may update these Terms from time to time. Any revised version
          will be posted on this page with an updated date. Continued use of the
          Integration after an update constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className={sectionClass}>
        <h2 className={headingClass}>Contact</h2>
        <p className={paragraphClass}>
          Questions about the Integration or these Terms may be directed to:
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
      </section>
    </LegalPageLayout>
  );
}
