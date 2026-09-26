import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Terms of Use | ${organization.name}`,
};

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        title="Terms of Use"
        subtitle="Last updated: September 2026"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 space-y-6 text-gray-700 leading-relaxed">
        <p>
          By using this website, you agree to the following terms. This site is
          provided for informational purposes only and does not process
          donations or personal data submissions directly.
        </p>

        <div>
          <h2 className="font-semibold text-gray-900">Content Ownership</h2>
          <p className="mt-2">
            All photos, videos, and written content on this site belong to{" "}
            {organization.name} or are used with permission from the original
            creator. Do not reproduce, redistribute, or use any image or video
            from this site for commercial purposes without written permission.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">
            Accuracy of Information
          </h2>
          <p className="mt-2">
            We make reasonable efforts to keep activity details, registration
            numbers, and bank details up to date, but we recommend confirming
            bank/UPI details directly with us before any large donation.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">External Links</h2>
          <p className="mt-2">
            Links to Instagram and other third-party platforms are provided for
            convenience. We are not responsible for the content or privacy
            practices of those external sites.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
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
