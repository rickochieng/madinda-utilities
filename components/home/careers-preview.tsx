import { ArrowRight, Briefcase, Users, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function CareersPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">

      <div className="container mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 shadow-2xl">

          <div className="grid items-center gap-12 lg:grid-cols-2 p-12 lg:p-16">

            {/* Left Side */}

            <div>

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                CAREERS
              </span>

              <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white">
                Build the Future of Utility Infrastructure
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-200">
                At Madinda Utilities, we're transforming how Africa manages
                electricity, water, and smart infrastructure. Join a team of
                engineers, innovators, and technology leaders shaping the next
                generation of utility solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
                >
                  View Open Positions
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/about"
                  className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Learn About Our Culture
                </Link>

              </div>

            </div>

            {/* Right Side */}

            <div className="grid gap-6">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500 text-white">
                  <Briefcase size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Exciting Projects
                </h3>

                <p className="mt-3 text-slate-200">
                  Work on smart metering, AMI systems, IoT platforms, AI
                  analytics, and large-scale digital infrastructure projects.
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <Users size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Collaborative Culture
                </h3>

                <p className="mt-3 text-slate-200">
                  Join multidisciplinary teams committed to innovation,
                  excellence, and customer success throughout Africa.
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <GraduationCap size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Continuous Growth
                </h3>

                <p className="mt-3 text-slate-200">
                  Advance your career through training, certifications,
                  mentorship, and opportunities to lead transformative utility
                  projects.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}