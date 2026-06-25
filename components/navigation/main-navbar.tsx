"use client";

import Link from "next/link";

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Platform",
    href: "/platform",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MainNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/90 backdrop-blur">

      <div className="container mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="font-bold text-xl"
          >
            MADINDA UTILITIES
          </Link>

          <nav className="hidden lg:flex gap-8">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          <Link
            href="/pilot-project"
            className="px-5 py-3 rounded-xl bg-brand-500"
          >
            Request Pilot
          </Link>

        </div>

      </div>

    </header>
  );
}