import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Privacy Policy | ${organization.name}`,
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: September 2026"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 space-y-6 text-gray-700 leading-relaxed">
        <p>
          This website is an informational, view-only site for{" "}
          {organization.name}. We do not run any account sign-up, online
          payment, or comment system, so we collect very little personal data
          directly through the site.
        </p>

        <div>
          <h2 className="font-semibold text-gray-900">What We Collect</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>
              Basic, anonymized analytics (pages visited, approximate location,
              device type)
            </li>
            <li>
              Any information you choose to send us directly via email or phone
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">How We Use It</h2>
          <p className="mt-2">
            Analytics data is used only to understand which activities and pages
            are most viewed, so we can improve the site. We do not sell, rent,
            or share any data with third parties for marketing.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">Cookies</h2>
          <p className="mt-2">
            We may use minimal, privacy-friendly analytics cookies. You can
            disable cookies in your browser settings without affecting your
            ability to browse this site.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
            <a
              href={`mailto:${organization.contact.email}`}
              className="text-emerald-700 hover:underline"
            >
              {organization.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
