import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";
import { cloudinaryUrl } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: `Our Team | ${organization.name}`,
};

export default function TeamPage() {
  return (
    <div>
      <PageHeader
        title="Our Team & Board of Trustees"
        subtitle="Meet the people responsible for governance and day-to-day program delivery."
      />
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {organization.team.map((member) => (
            <div
              key={member.name}
              className="flex gap-4 rounded-xl border border-gray-200 p-5"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={cloudinaryUrl(
                    `team/${member.name.toLowerCase().replace(/\s+/g, "-")}`,
                    {
                      width: 160,
                      height: 160,
                    },
                  )}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm font-medium text-emerald-700">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
