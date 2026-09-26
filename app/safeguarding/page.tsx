import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Child Safeguarding & Photo Consent Policy | ${organization.name}`,
};

export default function SafeguardingPage() {
  return (
    <div>
      <PageHeader
        title="Child Safeguarding & Photo Consent Policy"
        subtitle="Many of our activity photos include children and other vulnerable beneficiaries — here's how we protect them."
      />
      <section className="mx-auto max-w-3xl px-4 py-12 space-y-6 text-gray-700 leading-relaxed">
        <p>
          {organization.name} works closely with children and other vulnerable
          community members through our education, health, and skill-training
          programs. We take the safety and dignity of every beneficiary
          seriously, both in the field and in how we represent them on this
          website.
        </p>

        <div>
          <h2 className="font-semibold text-gray-900">Photo & Video Consent</h2>
          <p className="mt-2">
            Before publishing any photo or video that includes a minor, we
            obtain verbal or written consent from a parent, guardian, or the
            partner school/institution present at the activity. Where consent
            cannot be confirmed, the image is not published on this site or our
            social media.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">
            What We Don&apos;t Publish
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Full names of children alongside their photos</li>
            <li>School names or exact home addresses of individual children</li>
            <li>
              Any content that could reveal a beneficiary&apos;s exact daily
              location or routine
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">
            Request a Photo Takedown
          </h2>
          <p className="mt-2">
            If you, your child, or someone in your care appears in a photo or
            video on this site and you would like it removed, email{" "}
            <a
              href={`mailto:${organization.contact.email}`}
              className="text-emerald-700 hover:underline"
            >
              {organization.contact.email}
            </a>{" "}
            with a description or link to the image. We will remove it within 5
            working days.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">Reporting a Concern</h2>
          <p className="mt-2">
            If you have a safeguarding concern about the conduct of any staff
            member or volunteer, contact our Programs Director directly at{" "}
            {organization.contact.phone} or {organization.contact.email}. All
            reports are treated confidentially.
          </p>
        </div>
      </section>
    </div>
  );
}
