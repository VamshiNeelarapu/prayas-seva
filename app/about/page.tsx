import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `About Us | ${organization.name}`,
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle={`${organization.legalStatus}, founded in ${organization.foundedYear}`}
      />
      <section className="mx-auto max-w-4xl px-4 py-12 space-y-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            {organization.name} began in {organization.foundedYear} as a small
            group of Hyderabad-based volunteers running weekend literacy classes
            for children in Vidyanagar. Over the years, that effort grew into a
            registered public charitable trust running sustained programs across
            education, community health, environmental conservation, and
            women&apos;s livelihoods in and around Hyderabad.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Journey</h2>
          <ol className="mt-4 space-y-4 border-l-2 border-emerald-200 pl-6">
            {organization.history.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-emerald-600" />
                <p className="font-semibold text-emerald-700">{item.year}</p>
                <p className="text-gray-700">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            A Note From Our Founder
          </h2>
          <blockquote className="mt-3 border-l-4 border-emerald-600 pl-4 italic text-gray-700">
            &ldquo;We didn&apos;t set out to build an organization — we set out
            to fix a Saturday. Thirteen years later, the Saturday is still
            there, and so is the work. What&apos;s changed is how many hands now
            carry it.&rdquo;
            <footer className="mt-2 not-italic text-sm font-semibold text-gray-900">
              — Anitha Reddy, Founder & Managing Trustee
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
