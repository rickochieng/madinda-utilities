export default function ContactPage() {
  return (
    <main className="section space-y-6">

      <h1 className="text-2xl  text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900 font-bold">Contact Us</h1>

      <div className="card p-6 space-y-2 text-slate-900/70">
        <p>📍 130 Rivier Street, Hatfield, Pretoria, South Africa</p>
        <p>📞 +27 83 744 2913</p>
        <p>🏢 Villa Incka Complex</p>
        <p>⭐ Google Rating: 5.0</p>
      </div>

      <div className="card p-6">
        <p className="text-slate-500">
          Enterprise inquiries, pilot deployments, and government tenders.
        </p>
      </div>
    </main>
  );
}