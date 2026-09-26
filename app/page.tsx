import Image from "next/image";
import Link from "next/link";
import { getAllActivities } from "@/lib/activities";
import { organization } from "@/content/organization";
import ActivityCard from "@/components/ActivityCard";
import InstagramCard from "@/components/InstagramCard";
import { cloudinaryUrl } from "@/lib/cloudinary";

export default function Home() {
  const activities = getAllActivities();
  const featuredActivities = activities.slice(0, 3);
  const recentInstagramLinks = activities
    .flatMap((a) => a.instagramLinks)
    .slice(0, 4);

  return (
    <div>
      <section className="relative bg-emerald-800 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={cloudinaryUrl("site/hero-banner", {
              width: 1600,
              height: 700,
            })}
            alt="Prayas Seva Foundation volunteers working with a local community"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <p className="text-emerald-200 font-semibold">
            {organization.legalStatus}
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold max-w-2xl">
            {organization.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-emerald-50">
            {organization.mission}
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/activities"
              className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              See Our Activities
            </Link>
            <Link
              href="/donate"
              className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {organization.impactStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-emerald-700">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Recent Activities
          </h2>
          <Link
            href="/activities"
            className="text-sm font-semibold text-emerald-700 hover:underline"
          >
            View all activities →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredActivities.map((activity) => (
            <ActivityCard key={activity.slug} {...activity} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              From Our Instagram
            </h2>
            <Link
              href="/media"
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              View all media →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recentInstagramLinks.map((link) => (
              <InstagramCard key={link.url} {...link} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
