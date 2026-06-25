interface KPIWidgetProps {
  label: string;
  value: string | number;
  status?: "healthy" | "warning" | "critical";
}

export default function KPIWidget({
  label,
  value,
  status = "healthy",
}: KPIWidgetProps) {
  const color =
    status === "healthy"
      ? "text-green-400"
      : status === "warning"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div className="card p-4">
      <p className="text-white/50 text-xs">{label}</p>
      <p className={`text-xl font-bold mt-1 ${color}`}>
        {value}
      </p>
    </div>
  );
}