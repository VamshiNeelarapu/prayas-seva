import fs from "fs";
import path from "path";
import type { Activity } from "./types";

const ACTIVITIES_DIR = path.join(process.cwd(), "content", "activities");

export function getAllActivities(): Activity[] {
  const files = fs
    .readdirSync(ACTIVITIES_DIR)
    .filter((f) => f.endsWith(".json"));
  const activities = files.map((file) => {
    const raw = fs.readFileSync(path.join(ACTIVITIES_DIR, file), "utf-8");
    return JSON.parse(raw) as Activity;
  });
  return activities.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return getAllActivities().find((activity) => activity.slug === slug);
}

export function getAllActivitySlugs(): string[] {
  return getAllActivities().map((activity) => activity.slug);
}
