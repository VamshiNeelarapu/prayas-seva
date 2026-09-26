import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Vision & Mission | ${organization.name}`,
};

export default function VisionMissionPage() {
  return (
    <div>
      <PageHeader title="Vision & Mission" />
      <section className="mx-auto max-w-4xl px-4 py-12 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            {organization.vision}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            {organization.mission}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Values</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {organization.values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-200 p-5"
              >
                <h3 className="font-semibold text-emerald-700">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
