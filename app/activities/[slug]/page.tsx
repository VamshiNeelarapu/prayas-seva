import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getActivityBySlug, getAllActivitySlugs } from "@/lib/activities";
import { organization } from "@/content/organization";
import ImageGallery from "@/components/ImageGallery";
import InstagramCard from "@/components/InstagramCard";

export function generateStaticParams() {
  return getAllActivitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return {};
  return {
    title: `${activity.title} | ${organization.name}`,
    description: activity.summary,
  };
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) notFound();

  const formattedDate = new Date(activity.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="bg-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            {activity.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold">{activity.title}</h1>
          <p className="mt-2 text-emerald-100">
            {formattedDate} · {activity.location}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          {activity.description}
        </p>

        <h2 className="mt-10 text-xl font-bold text-gray-900">
          Photos ({activity.images.length})
        </h2>
        <div className="mt-4">
          <ImageGallery images={activity.images} altPrefix={activity.title} />
        </div>

        {activity.instagramLinks.length > 0 && (
          <>
            <h2 className="mt-12 text-xl font-bold text-gray-900">
              Videos from this activity
            </h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {activity.instagramLinks.map((link) => (
                <InstagramCard key={link.url} {...link} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
