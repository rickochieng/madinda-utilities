import ConsumptionChart from "@/components/dashboard/charts/consumption-chart";
import {
  Activity,
  Wifi,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ExecutiveDashboardPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              COMMAND CENTER
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Utility Operations Dashboard
            </h2>

            <p className="mt-5 max-w-lg md:max-w-xl lg:max-w-3xl text-lg text-slate-600">
              Monitor electricity and water infrastructure, detect faults,
              analyze consumption trends, and protect revenue through one
              intelligent platform.
            </p>

          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-right shadow-sm">

            <div className="flex items-center justify-end gap-2 text-emerald-700">

              <ShieldCheck size={18} />

              <span className="font-semibold">
                System Healthy
              </span>

            </div>

            <div className="mt-2 text-3xl font-bold text-emerald-600">
              99.98%
            </div>

            <p className="text-slate-500">
              Platform Availability
            </p>

          </div>

        </div>

        {/* Dashboard */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          {/* Top Bar */}

          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-50 px-8 py-5">

            <div>

              <h3 className="text-2xl font-bold text-slate-900">
                Executive Dashboard
              </h3>

              <p className="text-slate-500">
                Live infrastructure monitoring
              </p>

            </div>

            <div className="mt-4 flex gap-4 lg:mt-0">

              <div className="rounded-xl bg-blue-50 px-5 py-3 text-center">

                <Activity
                  className="mx-auto mb-2 text-blue-600"
                  size={24}
                />

                <p className="text-2xl font-bold text-slate-900">
                  1.2M
                </p>

                <p className="text-sm text-slate-500">
                  Connected Meters
                </p>

              </div>

              <div className="rounded-xl bg-emerald-50 px-5 py-3 text-center">

                <Wifi
                  className="mx-auto mb-2 text-emerald-600"
                  size={24}
                />

                <p className="text-2xl font-bold text-slate-900">
                  99.98%
                </p>

                <p className="text-sm text-slate-500">
                  Connectivity
                </p>

              </div>

              <div className="rounded-xl bg-orange-50 px-5 py-3 text-center">

                <Zap
                  className="mx-auto mb-2 text-orange-500"
                  size={24}
                />

                <p className="text-2xl font-bold text-slate-900">
                  48
                </p>

                <p className="text-sm text-slate-500">
                  Active Projects
                </p>

              </div>

            </div>

          </div>

          {/* Chart */}

          <div className="p-8">

            <ConsumptionChart />

          </div>

        </div>

      </div>

    </section>
  );
}