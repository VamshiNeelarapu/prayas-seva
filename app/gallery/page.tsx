import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ImageGallery from "@/components/ImageGallery";
import { getAllActivities } from "@/lib/activities";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `Gallery | ${organization.name}`,
};

export default function GalleryPage() {
  const activities = getAllActivities();
  const allImages = activities.flatMap((activity) => activity.images);

  return (
    <div>
      <PageHeader
        title="Photo Gallery"
        subtitle={`${allImages.length}+ photos across all our activities — click any photo to enlarge.`}
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <ImageGallery images={allImages} altPrefix={organization.name} />
      </section>
    </div>
  );
}
