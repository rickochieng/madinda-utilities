import ConsumptionChart from "@/components/dashboard/charts/consumption-chart";

export default function ExecutiveDashboardPreview() {
  return (
    <section className="py-24">

      <div className="card p-10">

        <div className="flex justify-between mb-8">

          <div>
            <h2 className="text-3xl font-bold">
              Utility Command Center
            </h2>

            <p className="text-white/60">
              Real-time visibility across water and electricity infrastructure.
            </p>
          </div>

          <div className="text-right">
            <div className="text-green-400">
              System Healthy
            </div>

            <div className="text-white/60">
              99.9% uptime
            </div>
          </div>

        </div>

        <ConsumptionChart />

      </div>

    </section>
  );
}