import Link from "next/link";

export default function PilotCTASection() {
  return (
    <section className="py-32">

      <div className="container mx-auto px-6">

        <div className="card p-16 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Launch Your Pilot Project
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto mb-8">
            Validate smart utility technology with a low-risk pilot deployment
            before scaling across your entire network.
          </p>

          <Link
            href="/pilot-project"
            className="px-8 py-4 bg-brand-500 rounded-xl inline-flex"
          >
            Request Pilot Project
          </Link>

        </div>

      </div>

    </section>
  );
}