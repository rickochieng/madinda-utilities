const industries = [
  "Governments",
  "Municipalities",
  "Water Utilities",
  "Electric Utilities",
  "Residential Estates",
  "Commercial Buildings",
  "Industrial Facilities",
  "Hospitals",
  "Universities",
  "Property Developers",
  "Smart Cities",
];

export default function IndustriesSection() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6">

        <h2 className="text-2xl  text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900 font-bold mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {industries.map((industry) => (
            <div
              key={industry}
              className="card p-6"
            >
              {industry}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}