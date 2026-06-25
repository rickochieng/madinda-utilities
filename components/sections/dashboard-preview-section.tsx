import ConsumptionChart from "@/components/dashboard/charts/consumption-chart";

export default function DashboardPreviewSection() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Utility Command Center
        </h2>

        <div className="card p-8">

          <ConsumptionChart />

        </div>

      </div>

    </section>
  );
}