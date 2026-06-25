"use client";

import Link from "next/link";
import SmartEcosystem from "@/components/home/smart-ecosystem";

export default function HeroSection() {
  return (
    <section className="hero-grid relative overflow-hidden py-32">

      {/* Background Glow */}
      <div className="glow-bg top-0 right-0 absolute -z-10" />

      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div>

            <p className="text-brand-400 font-semibold mb-4">
              Smart Utility Infrastructure Built for Africa
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Transform Utility Operations With
              <span className="block text-brand-500">
                Advanced Metering Infrastructure
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-2xl">
              Advanced Metering Infrastructure,
              Utility Management,
              Revenue Protection,
              Grid Modernization and AI Analytics.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/contact"
                aria-label="Request Demo"
                className="px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 transition font-semibold"
              >
                Request Demo
              </Link>

              <Link
                href="/pilot-project"
                aria-label="Request Pilot Project"  
                className="px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition"
              >
                Request Pilot Project
              </Link>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <SmartEcosystem />
          </div>

        </div>

      </div>

    </section>
  );
}