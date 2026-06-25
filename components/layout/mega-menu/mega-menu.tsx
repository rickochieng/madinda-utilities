"use client";

import Link from "next/link";

export default function MegaMenu() {
  return (
    <div className="grid grid-cols-4 gap-6 p-8 bg-bg-secondary border border-white/10 rounded-xl2 shadow-card">
      <div>
        <h3 className="text-sm text-white/60 mb-3">Solutions</h3>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/solutions/smart-water-metering">Smart Water</Link>
          <Link href="/solutions/smart-electricity-metering">Smart Electricity</Link>
          <Link href="/solutions/ami-infrastructure">AMI Infrastructure</Link>
          <Link href="/solutions/revenue-protection">Revenue Protection</Link>
        </div>
      </div>

      <div>
        <h3 className="text-sm text-white/60 mb-3">Industries</h3>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/industries/municipalities">Municipalities</Link>
          <Link href="/industries/government">Government</Link>
          <Link href="/industries/water-utilities">Water Utilities</Link>
          <Link href="/industries/electric-utilities">Electric Utilities</Link>
        </div>
      </div>

      <div>
        <h3 className="text-sm text-white/60 mb-3">Platform</h3>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/platform">Overview</Link>
          <Link href="/dashboard-demo">Dashboard Demo</Link>
          <Link href="/pilot-project">Pilot Projects</Link>
        </div>
      </div>

      <div>
        <h3 className="text-sm text-white/60 mb-3">Company</h3>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}