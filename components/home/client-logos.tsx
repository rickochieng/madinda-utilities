import {
  Building2,
  Droplets,
  Zap,
  Building,
  Factory,
 Landmark,
} from "lucide-react";

export default function ClientLogos() {
  const logos = [
    {
      title: "Municipal Utilities",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      title: "Water Boards",
      icon: Droplets,
      color: "text-cyan-500",
    },
    {
      title: "Electric Utilities",
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      title: "Smart Cities",
      icon: Building,
      color: "text-indigo-600",
    },
    {
      title: "Industrial Parks",
      icon: Factory,
      color: "text-orange-500",
    },
    {
      title: "Government Agencies",
      icon: Landmark,
      color: "text-emerald-600",
    },
  ];

  return (
    <section
  className="relative overflow-hidden py-28 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/client-logos-bg.jpg')",
  }}
>

      {/* Decorative Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="relative container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Trusted Across Utility Infrastructure
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Empowering municipalities, utilities, industries and governments
            with intelligent metering, analytics and digital infrastructure.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {logos.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:border-blue-500
                  hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]
                "
              >
                <div
                  className="
                    mb-6
                    inline-flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    transition
                    group-hover:bg-blue-600
                  "
                >
                  <Icon
                    className={`h-8 w-8 ${item.color} group-hover:text-white`}
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Digital utility solutions tailored for this sector.
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}