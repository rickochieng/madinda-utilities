import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function PilotCTASection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">

      <div className="container mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 shadow-[0_35px_80px_rgba(37,99,235,.35)]">

          <div className="grid items-center gap-12 lg:grid-cols-2 p-12 lg:p-16">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                PILOT PROGRAM
              </span>

              <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white">
                Launch Your Smart Utility Pilot Project
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Experience the power of intelligent metering, AI-driven
                analytics and utility automation with a low-risk pilot
                deployment tailored to your municipality or utility company.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/pilot-project"
                  className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
                >
                  Request a Pilot
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to an Expert
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="grid gap-5">

              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                <ShieldCheck
                  className="mt-1 text-white"
                  size={30}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Low-Risk Deployment
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Validate technology before full-scale implementation across
                    your utility network.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                <Zap
                  className="mt-1 text-yellow-300"
                  size={30}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Rapid Implementation
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Deploy pilot systems quickly with expert support from our
                    engineering and implementation teams.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-md">

                <CheckCircle2
                  className="mt-1 text-emerald-300"
                  size={30}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Measurable Results
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Demonstrate revenue protection, operational efficiency,
                    consumption visibility and infrastructure performance before
                    expanding.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}