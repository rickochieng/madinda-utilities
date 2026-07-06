import {
  Droplets,
  Zap,
  RadioTower,
  MonitorSmartphone,
  ShieldCheck,
  Brain,
  Network,
  Power,
  Receipt,
  Waves,
} from "lucide-react";

const solutions = [
  {
    title: "Smart Water Metering",
    description: "Real-time water consumption, leak alerts and remote monitoring.",
    icon: Droplets,
  },
  {
    title: "Smart Electricity Metering",
    description: "Accurate energy metering with prepaid and postpaid support.",
    icon: Zap,
  },
  {
    title: "AMI Infrastructure",
    description: "Scalable Advanced Metering Infrastructure for utilities.",
    icon: RadioTower,
  },
  {
    title: "Utility Platform",
    description: "Centralized dashboard for monitoring and managing assets.",
    icon: MonitorSmartphone,
  },
  {
    title: "TID Rollover",
    description: "Secure STS token migration and compliance management.",
    icon: ShieldCheck,
  },
  {
    title: "AI Analytics",
    description: "Predictive insights for revenue protection and efficiency.",
    icon: Brain,
  },
  {
    title: "Grid Monitoring",
    description: "Live network visibility and outage detection.",
    icon: Network,
  },
  {
    title: "Remote Disconnect",
    description: "Control utility services remotely and securely.",
    icon: Power,
  },
  {
    title: "Automated Billing",
    description: "Accurate billing with seamless payment integration.",
    icon: Receipt,
  },
  {
    title: "Leak Detection",
    description: "AI-powered monitoring for rapid leak identification.",
    icon: Waves,
  },
];

export default function SolutionsOverviewSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OUR SOLUTIONS
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Complete Utility Technology Suite
          </h2>

          <p className="mx-auto mt-5 max-w-lg md:max-w-xl lg:max-w-3xl text-lg text-slate-600">
            From smart metering and AI analytics to revenue protection,
            Madinda Utilities delivers end-to-end digital infrastructure
            for modern utility providers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {solution.title}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {solution.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More →
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}