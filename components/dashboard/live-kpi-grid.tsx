"use client";

import KPIWidget from "@/components/dashboard/widgets/kpi-widget";
import { useKPIs } from "@/hooks/use-kpis";

export default function LiveKPIGrid() {
  const data = useKPIs();

  if (!data) {
    return <div>Loading KPIs...</div>;
  }

  return (
    <div className="grid md:grid-cols-4 gap-4">
      <KPIWidget
        label="Active Meters"
        value={data.activeMeters}
      />

      <KPIWidget
        label="Water Meters"
        value={data.waterMeters}
      />

      <KPIWidget
        label="Electricity Meters"
        value={data.electricityMeters}
      />

      <KPIWidget
        label="Revenue Protected"
        value={`R${data.revenueProtected.toLocaleString()}`}
      />
    </div>
  );
}