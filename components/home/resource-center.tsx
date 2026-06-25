const resources = [
  "AMI Deployment Guide",
  "TID Rollover Whitepaper",
  "Revenue Protection Framework",
  "Smart Water Metering Brochure",
];

export default function ResourceCenter() {
  return (
    <section className="section">

      <h2 className="text-4xl font-bold mb-10">
        Resource Center
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {resources.map((resource) => (
          <div
            key={resource}
            className="card p-6"
          >
            {resource}
          </div>
        ))}

      </div>

    </section>
  );
}