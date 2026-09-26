"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cloudinaryUrl } from "@/lib/cloudinary";

const BATCH_SIZE = 24;

export default function ImageGallery({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const visibleImages = images.slice(0, visibleCount);
  const slides = images.map((id) => ({
    src: cloudinaryUrl(id, { width: 1600, height: 1200 }),
  }));

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {visibleImages.map((id, index) => (
          <button
            key={id}
            type="button"
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={cloudinaryUrl(id, { width: 400, height: 400 })}
              alt={`${altPrefix} photo ${index + 1}`}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-200"
            />
          </button>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + BATCH_SIZE)}
            className="rounded-full border border-emerald-700 px-6 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Load more photos ({images.length - visibleCount} remaining)
          </button>
        </div>
      )}

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </div>
  );
}
