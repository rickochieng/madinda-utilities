const metrics = [
  {
    value: "20+",
    label: "Years Combined Experience",
  },
  {
    value: "250,000+",
    label: "Connected Meters",
  },
  {
    value: "99.9%",
    label: "Monitoring Uptime",
  },
  {
    value: "$12M+",
    label: "Revenue Protected",
  },
];

export default function TrustMetricsSection() {
  return (
    <section className="py-20 border-y border-white/10">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {metrics.map((item) => (
            <div
              key={item.label}
              className="text-center"
            >
              <div className="text-5xl font-bold text-brand-500">
                {item.value}
              </div>

              <p className="mt-3 text-slate-900/70">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}