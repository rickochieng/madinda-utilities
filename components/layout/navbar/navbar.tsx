"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/10 bg-bg-primary/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="text-xl font-bold">
          Madinda Utilities
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          <Link href="/solutions">Solutions</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/dashboard-demo">Dashboard</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden px-3 py-2 border border-white/10 rounded-lg"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-white/80">
          <Link href="/solutions">Solutions</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/platform">Platform</Link>
          <Link href="/dashboard-demo">Dashboard</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}