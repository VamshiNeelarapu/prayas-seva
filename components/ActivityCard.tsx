import Image from "next/image";
import Link from "next/link";
import { cloudinaryUrl } from "@/lib/cloudinary";

export default function ActivityCard({
  slug,
  title,
  category,
  date,
  location,
  summary,
  coverImageId,
}: {
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  summary: string;
  coverImageId: string;
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/activities/${slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={cloudinaryUrl(coverImageId, { width: 640, height: 480 })}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute left-3 top-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
          {category}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500">
          {formattedDate} · {location}
        </p>
        <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-emerald-700">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{summary}</p>
      </div>
    </Link>
  );
}
