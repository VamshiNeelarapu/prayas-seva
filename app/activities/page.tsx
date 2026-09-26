import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ActivityCard from "@/components/ActivityCard";
import { getAllActivities } from "@/lib/activities";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Activities | ${organization.name}`,
};

export default function ActivitiesPage() {
  const activities = getAllActivities();

  return (
    <div>
      <PageHeader
        title="Our Activities"
        subtitle="Browse every program we've run — each one links to photos and videos from the day."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} {...activity} />
          ))}
        </div>
      </section>
    </div>
  );
}
