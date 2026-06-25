const articles = [
  "Smart Metering Trends in Africa",
  "The Future of Utility Analytics",
  "Municipal Revenue Protection Strategies",
];

export default function NewsPreview() {
  return (
    <section className="section">

      <h2 className="text-4xl font-bold mb-10">
        Media & News
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {articles.map((article) => (
          <div
            key={article}
            className="card p-6"
          >
            {article}
          </div>
        ))}

      </div>

    </section>
  );
}