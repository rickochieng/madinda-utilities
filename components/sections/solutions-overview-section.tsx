const solutions = [
  "Smart Water Metering",
  "Smart Electricity Metering",
  "AMI Infrastructure",
  "Utility Management Platform",
  "TID Rollover Compliance",
  "AI Analytics",
  "Grid Monitoring",
  "Remote Disconnect",
  "Automated Billing",
  "Leak Detection",
];

export default function SolutionsOverviewSection() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Solutions Overview
        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

          {solutions.map((solution) => (
            <div
              key={solution}
              className="card p-5"
            >
              {solution}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}