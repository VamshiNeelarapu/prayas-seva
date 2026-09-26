import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Annual Reports | ${organization.name}`,
};

// Sample entries — replace href with real PDF links once reports are uploaded (e.g. to /public/reports/).
const reports = [
  { year: "2024–25", href: "/reports/annual-report-2024-25.pdf" },
  { year: "2023–24", href: "/reports/annual-report-2023-24.pdf" },
  { year: "2022–23", href: "/reports/annual-report-2022-23.pdf" },
];

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Annual Reports & Financials"
        subtitle="Audited financial statements and program reports, published every year for donor transparency."
      />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200">
          {reports.map((report) => (
            <li
              key={report.year}
              className="flex items-center justify-between px-5 py-4"
            >
              <span className="font-medium text-gray-900">
                Annual Report {report.year}
              </span>
              <a
                href={report.href}
                className="text-sm font-semibold text-emerald-700 hover:underline"
              >
                Download PDF
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500">
          Contact {organization.contact.email} for reports older than{" "}
          {reports[reports.length - 1].year}.
        </p>
      </section>
    </div>
  );
}
