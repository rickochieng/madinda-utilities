"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-extrabold text-slate-900"
        >
          MADINDA UTILITIES
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-700 hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/pilot-project"
          className="hidden lg:inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Request Pilot
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white shadow-lg">
          <nav className="flex flex-col p-6 space-y-5">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-slate-700 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/pilot-project"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
            >
              Request Pilot
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}