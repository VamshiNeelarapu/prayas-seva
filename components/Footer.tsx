import Link from "next/link";
import { organization } from "@/content/organization";

const quickLinks = [
  { href: "/registrations", label: "Registrations & Certifications" },
  { href: "/reports", label: "Annual Reports" },
  { href: "/safeguarding", label: "Child Safeguarding Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-white font-semibold text-lg">
            {organization.name}
          </p>
          <p className="mt-2 text-sm">{organization.legalStatus}</p>
          <p className="mt-2 text-sm">
            {organization.address.line1}
            <br />
            {organization.address.line2}, {organization.address.state} -{" "}
            {organization.address.pincode}
            <br />
            {organization.address.country}
          </p>
        </div>

        <div>
          <p className="text-white font-semibold">Contact</p>
          <p className="mt-2 text-sm">
            <a
              href={`mailto:${organization.contact.email}`}
              className="hover:text-white"
            >
              {organization.contact.email}
            </a>
          </p>
          <p className="mt-1 text-sm">{organization.contact.phone}</p>
          <div className="mt-3 flex gap-3 text-sm">
            <a
              href={organization.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={organization.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a
              href={organization.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              YouTube
            </a>
          </div>
        </div>

        <div>
          <p className="text-white font-semibold">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold">Registration Details</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Trust Reg. No: {organization.registrationNumber}</li>
            <li>PAN: {organization.panNumber}</li>
            <li>12A: {organization.reg12A}</li>
            <li>80G: {organization.reg80G}</li>
            <li>Darpan ID: {organization.darpanId}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {year} {organization.name}. All rights reserved.
      </div>
    </footer>
  );
}
