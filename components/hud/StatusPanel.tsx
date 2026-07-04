"use client";

export default function StatusPanel() {
  return (
    <div className="rounded-xl bg-white
border border-slate-200
shadow-xl border border-cyan-500/20 p-4 backdrop-blur-lg">
      <h3 className="text-blue-600 font-semibold mb-3">
        System Status
      </h3>

      <div className="space-y-2 text-sm">
        <p>🟢 Grid Health: 99.8%</p>
        <p>🟢 Water Network: Online</p>
        <p>🟢 AI Engine: Active</p>
        <p>🟡 Revenue Alerts: 4</p>
      </div>
    </div>
  );
}