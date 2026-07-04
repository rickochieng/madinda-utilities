"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-slate-900"
        >
          Madinda Utilities
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/solutions" className="text-slate-700 hover:text-blue-600 transition">
            Solutions
          </Link>

          <Link href="/industries" className="text-slate-700 hover:text-blue-600 transition">
            Industries
          </Link>

          <Link href="/platform" className="text-slate-700 hover:text-blue-600 transition">
            Platform
          </Link>

          <Link href="/dashboard-demo" className="text-slate-700 hover:text-blue-600 transition">
            Dashboard
          </Link>

          <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition">
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-slate-900 transition hover:bg-blue-700"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 md:hidden"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <Link href="/solutions" className="text-slate-700">
              Solutions
            </Link>

            <Link href="/industries" className="text-slate-700">
              Industries
            </Link>

            <Link href="/platform" className="text-slate-700">
              Platform
            </Link>

            <Link href="/dashboard-demo" className="text-slate-700">
              Dashboard
            </Link>

            <Link href="/contact" className="text-slate-700">
              Contact
            </Link>

            <Link
              href="/contact"
              className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-slate-900"
            >
              Request Demo
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}