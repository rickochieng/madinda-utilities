export default function AboutPage() {
  return (
    <main className="section space-y-10">

      <h1 className="text-2xl  text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900 font-bold">About Madinda Utilities</h1>

      <p className="text-slate-500 max-w-lg md:max-w-xl lg:max-w-3xl">
        Madinda Utilities (Pty) Ltd is a smart utility technology company
        specializing in Advanced Metering Infrastructure (AMI),
        revenue protection systems, and AI-powered utility analytics
        for African municipalities and utilities.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Mission</h3>
          <p className="text-slate-500 text-sm mt-2">
            Deliver intelligent utility infrastructure for Africa.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Vision</h3>
          <p className="text-slate-500 text-sm mt-2">
            Build fully digitized, loss-free utility networks.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Impact</h3>
          <p className="text-slate-500 text-sm mt-2">
            Reduce losses, increase transparency, and modernize grids.
          </p>
        </div>
      </div>
    </main>
  );
}