"use client";

import KPICard from "./KPICard";
import LiveClock from "./LiveClock";
import StatusPanel from "./StatusPanel";

export default function DashboardHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      <div className="absolute top-8 left-8 w-72 space-y-4">

        <KPICard
          title="Energy Usage"
          value="148 MW"
          color="#FFD000"
        />

        <KPICard
          title="Water Consumption"
          value="22 ML"
          color="#00C2FF"
        />

      </div>

      <div className="absolute top-8 right-8">

        <LiveClock />

      </div>

      <div className="absolute bottom-8 right-8 w-72">

        <StatusPanel />

      </div>

    </div>
  );
}