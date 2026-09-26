"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { organization } from "@/content/organization";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/vision-mission", label: "Vision & Mission" },
  { href: "/team", label: "Our Team" },
  { href: "/activities", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/media", label: "Media" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg text-emerald-700">
          {organization.shortName}
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={
                isActive(link.href)
                  ? "text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1"
                  : "hover:text-emerald-700"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            className="hidden sm:inline-block rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Donate
          </Link>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-gray-200 px-4 py-3 flex flex-col gap-3 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={
                isActive(link.href)
                  ? "font-semibold text-emerald-700"
                  : "hover:text-emerald-700"
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="font-semibold text-emerald-700"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}
