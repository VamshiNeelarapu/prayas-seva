import Image from "next/image";
import { cloudinaryUrl } from "@/lib/cloudinary";
import type { InstagramLink } from "@/lib/types";

export default function InstagramCard({
  url,
  thumbnailImageId,
  caption,
}: InstagramLink) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-gray-100">
        <Image
          src={cloudinaryUrl(thumbnailImageId, { width: 450, height: 800 })}
          alt={caption}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl">
            ▶
          </span>
        </div>
      </div>
      <p className="p-3 text-sm text-gray-700">{caption}</p>
    </a>
  );
}
