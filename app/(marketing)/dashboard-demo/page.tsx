import ConsumptionChart from "@/components/dashboard/charts/consumption-chart";
import LiveKPIGrid from "@/components/dashboard/live-kpi-grid";

export default function DashboardDemo() {
  return (
    <main className="section space-y-10">

      <h1 className="text-4xl font-bold">
        Utility Command Center
      </h1>

      {/* KPIs */}
     <LiveKPIGrid />

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <ConsumptionChart />

        <div className="card p-6">
          <h3 className="font-semibold mb-4">System Alerts</h3>

          <div className="space-y-2 text-sm text-white/70">
            <p>⚠ Leak detected - Zone A12</p>
            <p>⚠ Tamper alert - Meter #8821</p>
            <p>⚠ Grid instability - Sector 4</p>
            <p>✔ System stable - 98% efficiency</p>
          </div>
        </div>
      </div>
    </main>
  );
}