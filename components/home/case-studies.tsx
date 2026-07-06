const studies = [
  {
    title: "Municipal Water Revenue Recovery",
    result: "Recovered 18% non-revenue water losses",
  },
  {
    title: "Smart Meter Rollout",
    result: "250,000 connected endpoints",
  },
  {
    title: "Utility Analytics Deployment",
    result: "99.9% monitoring uptime",
  },
];

export default function CaseStudies() {
  return (
    <section className="section">

      <h2 className="text-2xl  text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900 font-bold mb-12">
        Impact & Case Studies
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {studies.map((study) => (
          <div
            key={study.title}
            className="card p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              {study.title}
            </h3>

            <p className="text-brand-500 font-bold">
              {study.result}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}