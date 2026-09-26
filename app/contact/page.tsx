import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Contact Us | ${organization.name}`,
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contact Us" />
      <section className="mx-auto max-w-3xl px-4 py-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold text-gray-900">Office Address</h2>
          <p className="mt-2 text-gray-700">
            {organization.address.line1}
            <br />
            {organization.address.line2}, {organization.address.state} -{" "}
            {organization.address.pincode}
            <br />
            {organization.address.country}
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Reach Us</h2>
          <p className="mt-2 text-gray-700">
            Email:{" "}
            <a
              href={`mailto:${organization.contact.email}`}
              className="text-emerald-700 hover:underline"
            >
              {organization.contact.email}
            </a>
            <br />
            Phone: {organization.contact.phone}
          </p>
        </div>
        <div className="sm:col-span-2">
          <h2 className="font-semibold text-gray-900">Office Hours</h2>
          <p className="mt-2 text-gray-700">
            Monday–Saturday, 10:00 AM – 6:00 PM IST
          </p>
        </div>
      </section>
    </div>
  );
}
