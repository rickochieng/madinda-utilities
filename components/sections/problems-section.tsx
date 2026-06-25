const problems = [
  "Revenue Leakage",
  "Meter Tampering",
  "Illegal Connections",
  "Water Leaks",
  "Billing Disputes",
  "Manual Meter Reading",
  "Poor Consumption Visibility",
];

export default function ProblemsSection() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Problems We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {problems.map((problem) => (
            <div
              key={problem}
              className="card p-6"
            >
              {problem}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}