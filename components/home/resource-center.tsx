import {
  FileText,
  ShieldCheck,
  BookOpen,
  Droplets,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
    title: "AMI Deployment Guide",
    description:
      "A comprehensive guide for planning and implementing Advanced Metering Infrastructure.",
    icon: FileText,
    category: "Implementation Guide",
  },
  {
    title: "TID Rollover Whitepaper",
    description:
      "Learn best practices for STS Token Identifier rollover and utility compliance.",
    icon: ShieldCheck,
    category: "Whitepaper",
  },
  {
    title: "Revenue Protection Framework",
    description:
      "Strategies for reducing non-technical losses and maximizing utility revenue.",
    icon: BookOpen,
    category: "Framework",
  },
  {
    title: "Smart Water Metering Brochure",
    description:
      "Explore intelligent water metering solutions for municipalities and utilities.",
    icon: Droplets,
    category: "Brochure",
  },
];

export default function ResourceCenter() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            RESOURCE CENTER
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Insights, Guides & Technical Resources
          </h2>

          <p className="mx-auto mt-6 max-w-lg md:max-w-xl lg:max-w-3xl text-lg text-slate-600">
            Access industry-leading publications, deployment guides,
            whitepapers and technical documentation designed for utility
            providers, municipalities and smart city projects.
          </p>

        </div>

        {/* Resource Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                    <Icon size={30} />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {resource.category}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {resource.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {resource.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4">
                  Read Resource
                  <ArrowRight size={18} />
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}