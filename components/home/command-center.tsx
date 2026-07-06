import LiveKPIGrid from "@/components/dashboard/live-kpi-grid";
import ConsumptionChart from "@/components/dashboard/charts/consumption-chart";

export default function CommandCenter() {
  return (
    <section className="section network-bg">

      <div className="card p-10">

        <h2 className="text-2xl  text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900 font-bold mb-8">
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