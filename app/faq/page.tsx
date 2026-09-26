import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { organization } from "@/content/organization";

export const metadata: Metadata = {
  title: `FAQ | ${organization.name}`,
};

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer: `Yes. ${organization.name} is registered under Section 80G (order number ${organization.reg80G}), so donations are eligible for tax deduction. We email a receipt after every confirmed transfer.`,
  },
  {
    question: "Do you accept foreign donations?",
    answer:
      "Not currently — we are not yet FCRA registered, so we can only accept donations from Indian citizens/entities at this time.",
  },
  {
    question: "Can I visit an activity in person?",
    answer:
      "Yes, prospective volunteers and donors are welcome to visit an upcoming activity. Email us at least 3 days in advance so we can arrange access and briefing.",
  },
  {
    question: "How do you choose which children's photos to publish?",
    answer:
      "Only photos with confirmed guardian or partner-school consent are published. See our Child Safeguarding & Photo Consent Policy for details.",
  },
  {
    question: "How can my company run a CSR activity with you?",
    answer:
      "Email us with your CSR focus area and budget range, and our Programs Director will share a proposal tailored to one of our existing program areas.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <PageHeader title="Frequently Asked Questions" />
      <section className="mx-auto max-w-3xl px-4 py-12 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-xl border border-gray-200 p-5"
          >
            <h2 className="font-semibold text-gray-900">{faq.question}</h2>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
