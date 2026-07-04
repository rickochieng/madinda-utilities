import {
  Newspaper,
  ArrowRight,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const articles = [
  {
    title:
      "Eskom Accelerates Smart Meter Rollout Across South Africa",
    date: "June 2026",
    category: "Smart Metering",
    description:
      "Eskom continues expanding smart meter deployments to reduce electricity theft, improve billing accuracy and eliminate load reduction in affected communities.",
    link: "https://www.sanews.gov.za/south-africa/eskom-ramps-load-reduction-elimination-efforts",
  },
  {
    title:
      "Cameroon Launches 20,000 Smart Electricity Meters",
    date: "May 2026",
    category: "Utility Modernisation",
    description:
      "Cameroon has begun deploying 20,000 AMI-enabled smart meters under a World Bank-supported electricity reform programme.",
    link: "https://www.wearetech.africa/en/fils-uk/news/tech/cameroon-begins-rollout-of-20-000-smart-meters",
  },
  {
    title:
      "New Industry Standards Advance Secure Smart Metering",
    date: "May 2026",
    category: "Technology",
    description:
      "Industry leaders continue strengthening interoperability between legacy STS systems and next-generation smart metering platforms.",
    link: "https://www.engineeringnews.co.za/article/conlog-advances-rt29-rollout-and-strengthens-smart-utility-capability-in-south-africa-2026-05-04",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            LATEST NEWS
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Industry News & Insights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Stay informed with the latest developments in smart metering,
            utility infrastructure, digital transformation and smart city
            technologies across Africa.
          </p>

        </div>

        {/* News Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <Newspaper size={30} />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {article.category}
                </span>

              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">

                <CalendarDays size={16} />

                {article.date}

              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-4"
              >
                Read Full Story
                <ArrowRight size={18} />
              </a>

            </article>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center text-white">

          <TrendingUp
            className="mx-auto mb-4"
            size={40}
          />

          <h3 className="text-3xl font-bold">
            Stay Ahead of Utility Innovation
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Follow the latest trends in smart metering, AI analytics,
            revenue protection and digital utility transformation across Africa.
          </p>

        </div>

      </div>

    </section>
  );
}import {
  Newspaper,
  ArrowRight,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const articles = [
  {
    title:
      "Eskom Accelerates Smart Meter Rollout Across South Africa",
    date: "June 2026",
    category: "Smart Metering",
    description:
      "Eskom continues expanding smart meter deployments to reduce electricity theft, improve billing accuracy and eliminate load reduction in affected communities.",
    link: "https://www.sanews.gov.za/south-africa/eskom-ramps-load-reduction-elimination-efforts",
  },
  {
    title:
      "Cameroon Launches 20,000 Smart Electricity Meters",
    date: "May 2026",
    category: "Utility Modernisation",
    description:
      "Cameroon has begun deploying 20,000 AMI-enabled smart meters under a World Bank-supported electricity reform programme.",
    link: "https://www.wearetech.africa/en/fils-uk/news/tech/cameroon-begins-rollout-of-20-000-smart-meters",
  },
  {
    title:
      "New Industry Standards Advance Secure Smart Metering",
    date: "May 2026",
    category: "Technology",
    description:
      "Industry leaders continue strengthening interoperability between legacy STS systems and next-generation smart metering platforms.",
    link: "https://www.engineeringnews.co.za/article/conlog-advances-rt29-rollout-and-strengthens-smart-utility-capability-in-south-africa-2026-05-04",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            LATEST NEWS
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Industry News & Insights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Stay informed with the latest developments in smart metering,
            utility infrastructure, digital transformation and smart city
            technologies across Africa.
          </p>

        </div>

        {/* News Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <Newspaper size={30} />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {article.category}
                </span>

              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">

                <CalendarDays size={16} />

                {article.date}

              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-4"
              >
                Read Full Story
                <ArrowRight size={18} />
              </a>

            </article>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center text-white">

          <TrendingUp
            className="mx-auto mb-4"
            size={40}
          />

          <h3 className="text-3xl font-bold">
            Stay Ahead of Utility Innovation
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Follow the latest trends in smart metering, AI analytics,
            revenue protection and digital utility transformation across Africa.
          </p>

        </div>

      </div>

    </section>
  );
}