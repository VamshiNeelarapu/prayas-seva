import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Donate | ${organization.name}`,
};

export default function DonatePage() {
  return (
    <div>
      <PageHeader
        title="Donate"
        subtitle="Every contribution directly funds an upcoming activity — no overhead deduction on program costs."
      />
      <section className="mx-auto max-w-3xl px-4 py-12 space-y-8">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-gray-800">
            Donations to {organization.name} are eligible for a tax deduction
            under Section 80G of the Income Tax Act (order number{" "}
            {organization.reg80G}). A receipt will be emailed to you after every
            transfer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Bank Transfer / UPI
          </h2>
          <dl className="mt-4 divide-y divide-gray-200 rounded-xl border border-gray-200">
            <div className="flex justify-between px-5 py-3">
              <dt className="text-gray-600">Account Name</dt>
              <dd className="font-medium text-gray-900">
                {organization.bank.accountName}
              </dd>
            </div>
            <div className="flex justify-between px-5 py-3">
              <dt className="text-gray-600">Account Number</dt>
              <dd className="font-medium text-gray-900">
                {organization.bank.accountNumber}
              </dd>
            </div>
            <div className="flex justify-between px-5 py-3">
              <dt className="text-gray-600">IFSC Code</dt>
              <dd className="font-medium text-gray-900">
                {organization.bank.ifsc}
              </dd>
            </div>
            <div className="flex justify-between px-5 py-3">
              <dt className="text-gray-600">Bank</dt>
              <dd className="font-medium text-gray-900">
                {organization.bank.bankName}
              </dd>
            </div>
            <div className="flex justify-between px-5 py-3">
              <dt className="text-gray-600">UPI ID</dt>
              <dd className="font-medium text-gray-900">
                {organization.bank.upiId}
              </dd>
            </div>
          </dl>
        </div>

        <p className="text-sm text-gray-500">
          This site does not process online payments. After transferring funds,
          please email your transaction reference to{" "}
          <a
            href={`mailto:${organization.contact.donationEmail}`}
            className="text-emerald-700 hover:underline"
          >
            {organization.contact.donationEmail}
          </a>{" "}
          so we can send your 80G receipt.
        </p>
      </section>
    </div>
  );
}
