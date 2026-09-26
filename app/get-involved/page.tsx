import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Get Involved | ${organization.name}`,
};

const ways = [
  {
    title: "Volunteer",
    description:
      "Join our 150+ strong volunteer network for weekend activity drives, health camps, and skill-training sessions. No fixed commitment required — sign up for individual activities.",
  },
  {
    title: "Corporate Partnerships (CSR)",
    description:
      "We partner with companies for CSR-funded programs — school kit sponsorships, health camp funding, and employee volunteering days. Reach out for our CSR partnership deck.",
  },
  {
    title: "In-kind Donations",
    description:
      "Donate stationery, uniforms, sewing machines, or medical supplies directly for an upcoming activity. Contact us to check current requirements before donating goods.",
  },
  {
    title: "Spread the Word",
    description:
      "Follow and share our activity updates on Instagram — helping us reach more volunteers and donors costs nothing but a follow and a share.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <PageHeader
        title="Get Involved"
        subtitle="There are several ways to support our work beyond direct donations."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 space-y-6">
        {ways.map((way) => (
          <div
            key={way.title}
            className="rounded-xl border border-gray-200 p-6"
          >
            <h2 className="font-semibold text-emerald-700">{way.title}</h2>
            <p className="mt-2 text-gray-700">{way.description}</p>
          </div>
        ))}
        <p className="text-gray-700">
          To get started, email us at{" "}
          <a
            href={`mailto:${organization.contact.email}`}
            className="text-emerald-700 hover:underline"
          >
            {organization.contact.email}
          </a>{" "}
          or call {organization.contact.phone}.
        </p>
      </section>
    </div>
  );
}
