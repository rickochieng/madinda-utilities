"use client";

const metrics = [
  {
    label: "Connected Smart Meters",
    value: "1.2M+",
    color: "text-blue-600",
    bg: "from-blue-50 to-white",
  },
  {
    label: "Platform Availability",
    value: "99.98%",
    color: "text-emerald-600",
    bg: "from-emerald-50 to-white",
  },
  {
    label: "Projects Delivered",
    value: "48+",
    color: "text-orange-500",
    bg: "from-orange-50 to-white",
  },
  {
    label: "Revenue Protected",
    value: "$12.4M",
    color: "text-purple-600",
    bg: "from-purple-50 to-white",
  },
];

export default function ExecutiveKPIs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Platform Performance
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-900">
            Trusted by Modern Utilities
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-lg md:max-w-xl lg:max-w-3xl mx-auto">
            Delivering reliable smart metering, utility analytics, revenue
            protection and infrastructure management across Africa.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (

            <div
              key={metric.label}
              className={`
                rounded-3xl
                bg-gradient-to-br
                ${metric.bg}
                p-10
                border
                border-slate-200
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              `}
            >

              <div className={`text-5xl font-extrabold ${metric.color}`}>
                {metric.value}
              </div>

              <div className="mt-4 h-1 w-20 rounded-full bg-slate-200">
                <div className="h-full w-12 rounded-full bg-blue-600"></div>
              </div>

              <p className="mt-5 text-lg font-semibold text-slate-800">
                {metric.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}