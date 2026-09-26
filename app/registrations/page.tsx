import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Registrations & Certifications | ${organization.name}`,
};

const registrations = [
  { label: "Legal Status", value: organization.legalStatus },
  { label: "Trust Registration No.", value: organization.registrationNumber },
  { label: "PAN", value: organization.panNumber },
  {
    label: "12A Registration (Income Tax Exemption)",
    value: organization.reg12A,
  },
  {
    label: "80G Registration (Donor Tax Exemption)",
    value: organization.reg80G,
  },
  { label: "NITI Aayog Darpan ID", value: organization.darpanId },
  {
    label: "FCRA Registration",
    value:
      organization.fcraNumber ??
      "Not registered — we do not currently accept foreign contributions",
  },
];

export default function RegistrationsPage() {
  return (
    <div>
      <PageHeader
        title="Registrations & Certifications"
        subtitle="Published for full transparency with our donors, partners, and beneficiaries."
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <dl className="divide-y divide-gray-200 rounded-xl border border-gray-200">
          {registrations.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between"
            >
              <dt className="text-gray-600">{item.label}</dt>
              <dd className="font-medium text-gray-900">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-gray-500">
          Scanned copies of the certificates above are available on request —
          email{" "}
          <a
            href={`mailto:${organization.contact.email}`}
            className="text-emerald-700 hover:underline"
          >
            {organization.contact.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
