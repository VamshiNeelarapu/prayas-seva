const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Builds an optimized image URL from a Cloudinary public ID.
 * Falls back to a deterministic placeholder image until NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is set,
 * so the template renders real-looking images before a Cloudinary account is connected.
 */
export function cloudinaryUrl(
  publicId: string,
  { width = 800, height = 600 }: { width?: number; height?: number } = {},
): string {
  if (CLOUD_NAME) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_fill,w_${width},h_${height}/${publicId}`;
  }
  const seed = encodeURIComponent(publicId);
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
