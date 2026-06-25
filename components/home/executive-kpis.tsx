export default function ExecutiveKPIs() {
  const metrics = [
    {
      label: "Connected Meters",
      value: "250,000+",
    },
    {
      label: "Revenue Protected",
      value: "$12.4M",
    },
    {
      label: "Monitoring Uptime",
      value: "99.9%",
    },
    {
      label: "Leak Events Managed",
      value: "18,000+",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">

      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="card p-6 text-center"
        >
          <h3 className="text-3xl font-bold text-brand-500">
            {metric.value}
          </h3>

          <p className="text-white/60 mt-2">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}