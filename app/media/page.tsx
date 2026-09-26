import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InstagramCard from "@/components/InstagramCard";
import { getAllActivities } from "@/lib/activities";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Media | ${organization.name}`,
};

export default function MediaPage() {
  const activities = getAllActivities();
  const allInstagramLinks = activities.flatMap(
    (activity) => activity.instagramLinks,
  );

  return (
    <div>
      <PageHeader
        title="Videos & Media"
        subtitle="Watch highlight reels from our activities — each thumbnail links to the original Instagram post."
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {allInstagramLinks.map((link) => (
            <InstagramCard key={link.url} {...link} />
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Follow us on{" "}
          <a
            href={organization.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline"
          >
            Instagram
          </a>{" "}
          for the latest updates.
        </p>
      </section>
    </div>
  );
}
