export default function ClientLogos() {
  const logos = [
    "Municipal Utilities",
    "Water Boards",
    "Electric Utilities",
    "Smart Cities",
    "Industrial Parks",
    "Government Agencies",
  ];

  return (
    <section className="section">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Trusted Across Utility Infrastructure
        </h2>

        <p className="text-white/60 mt-4">
          Designed for municipalities, utilities and smart city initiatives.
        </p>

      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

        {logos.map((logo) => (
          <div
            key={logo}
            className="card p-6 text-center font-semibold"
          >
            {logo}
          </div>
        ))}

      </div>

    </section>
  );
}