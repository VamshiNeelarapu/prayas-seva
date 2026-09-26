import type { MetadataRoute } from "next";
import { getAllActivitySlugs } from "@/lib/activities";
import { organization } from "@/content/organization";

export const dynamic = "force-static";

const staticPaths = [
  "",
  "about",
  "vision-mission",
  "team",
  "activities",
  "gallery",
  "media",
  "impact",
  "get-involved",
  "donate",
  "contact",
  "registrations",
  "reports",
  "safeguarding",
  "privacy-policy",
  "terms",
  "faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.map((path) => ({
    url: `${organization.siteUrl}/${path}`,
    lastModified: new Date(),
  }));

  const activityEntries = getAllActivitySlugs().map((slug) => ({
    url: `${organization.siteUrl}/activities/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...activityEntries];
}
