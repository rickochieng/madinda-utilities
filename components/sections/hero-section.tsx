"use client";

import Image from "next/image";
import Link from "next/link";

import AnimatedStat from "@/components/home/AnimatedStat";
import ActivityFeed from "@/components/home/ActivityFeed";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background */}

      <div className="absolute inset-0 hero-grid opacity-20" />

      <div className="absolute left-0 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT COLUMN */}

          <div>

            <h1 className="text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
              Transform Utility Operations With

              <span className="mt-3 block text-blue-600">
                Advanced Metering Infrastructure
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-900/70">
              Empower electricity and water utilities through
              AI-powered Advanced Metering Infrastructure,
              Revenue Protection,
              Smart Grid Management,
              Smart Water Networks,
              and Digital Utility Analytics.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-slate-900 shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
              >
                Request Demo
              </Link>

              <Link
                href="/pilot-project"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-slate-900 transition hover:border-cyan-400"
              >
                Pilot Project
              </Link>

            </div>

            {/* Animated Stats */}

            <div className="mt-16 grid gap-6 md:grid-cols-3">

              <AnimatedStat
                title="Smart Meters"
                end={1.2}
                suffix="M+"
                decimals={1}

color="text-blue-600"
              />

              <AnimatedStat
                title="Availability"
                end={99.98}
                suffix="%"
                color="text-emerald-600"
              />

              <AnimatedStat
                title="Projects"
                end={48}
                color="text-orange-500"
              />

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="relative space-y-8">

            {/* Dashboard Image */}

            <div className="relative">

              <Image
                src="/images/utility-analytics.jpg"
                alt="Madinda Utilities Command Centre"
                width={850}
                height={750}
                priority
                className="glow-card rounded-3xl border border-cyan-400/20 shadow-2xl"
              />

              {/* Grid Health Card */}

              <div className="absolute -left-10 top-12 rounded-3xl border border-cyan-500/20 bg-black/40 p-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,194,255,.15)]">

                <p className="text-sm text-slate-900/50">
                  Grid Health
                </p>

                <h2 className="mt-2 text-4xl font-black text-emerald-600">
                  99.98%
                </h2>

                <div className="mt-3 h-2 rounded-full bg-white/10">

                  <div className="h-full w-[99%] rounded-full bg-green-400" />

                </div>

              </div>

              {/* Connected Devices Card */}

              <div className="absolute -right-10 bottom-10 rounded-3xl border border-cyan-500/20 bg-black/40 p-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,194,255,.15)]">

                <p className="text-sm text-slate-900/50">
                  Connected Devices
                </p>

                <h2 className="mt-2 text-4xl font-black text-blue-600">
                  1.2M+
                </h2>

                <p className="mt-3 text-emerald-600">
                  ● Live
                </p>

              </div>

            </div>

            {/* Live Activity */}

            <ActivityFeed />

          </div>

        </div>

      </div>

    </section>
  );
}