import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";
import { getAllActivities } from "@/lib/activities";

export const metadata: Metadata = {
  title: `Our Impact | ${organization.name}`,
};

export default function ImpactPage() {
  const activities = getAllActivities();
  const categoryCounts = activities.reduce<Record<string, number>>(
    (acc, activity) => {
      acc[activity.category] = (acc[activity.category] ?? 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <div>
      <PageHeader
        title="Our Impact"
        subtitle="Cumulative numbers across 13+ years of on-ground work."
      />
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {organization.impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 p-6"
            >
              <p className="text-3xl font-bold text-emerald-700">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Activities by Program Area
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="rounded-xl bg-gray-50 p-5">
                <p className="text-2xl font-bold text-gray-900">{count}</p>
                <p className="text-sm text-gray-600">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
