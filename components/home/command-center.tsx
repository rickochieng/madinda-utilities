import LiveKPIGrid from "@/components/dashboard/live-kpi-grid";
import ConsumptionChart from "@/components/dashboard/charts/consumption-chart";

export default function CommandCenter() {
  return (
    <section className="section network-bg">

      <div className="card p-10">

        <h2 className="text-4xl font-bold mb-8">
          Utility Command Center
        </h2>

        <LiveKPIGrid />

        <div className="mt-10">
          <ConsumptionChart />
        </div>

      </div>

    </section>
  );
}