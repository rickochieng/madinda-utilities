import {
  MapPinned,
  Globe,
  Building2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const countries = [
  "South Africa",
  "Botswana",
  "Namibia",
  "Zimbabwe",
  "Zambia",
  "Mozambique",
  "Kenya",
  "Tanzania",
];

export default function AfricaCoverage() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            AFRICA EXPANSION
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Building Africa's Smart Utility Future
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Madinda Utilities is expanding across Africa, partnering with
            municipalities, utility providers, water authorities and smart
            city initiatives to deliver intelligent infrastructure.
          </p>

        </div>

        {/* Stats */}

        <div className="mb-14 grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <Globe className="mx-auto mb-4 text-blue-600" size={34} />

            <h3 className="text-4xl font-bold text-slate-900">
              8+
            </h3>

            <p className="mt-2 text-slate-500">
              Target Countries
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <Building2 className="mx-auto mb-4 text-emerald-600" size={34} />

            <h3 className="text-4xl font-bold text-slate-900">
              100+
            </h3>

            <p className="mt-2 text-slate-500">
              Municipal Partners
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <TrendingUp className="mx-auto mb-4 text-orange-500" size={34} />

            <h3 className="text-4xl font-bold text-slate-900">
              1.2M+
            </h3>

            <p className="mt-2 text-slate-500">
              Utility Connections
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">

            <MapPinned className="mx-auto mb-4 text-cyan-600" size={34} />

            <h3 className="text-4xl font-bold text-slate-900">
              SADC
            </h3>

            <p className="mt-2 text-slate-500">
              Regional Focus
            </p>

          </div>

        </div>

        {/* Countries */}

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            Current Expansion Targets
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {countries.map((country) => (
              <div
                key={country}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg"
              >
                <span className="font-semibold text-slate-800">
                  {country}
                </span>

                <CheckCircle2
                  size={20}
                  className="text-emerald-500"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}