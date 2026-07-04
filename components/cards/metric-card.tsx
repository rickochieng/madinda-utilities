interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: number;
}

export default function MetricCard({
  title,
  value,
  subtitle,
  trend,
}: MetricCardProps) {
  return (
    <div className="card p-5">
      <p className="text-slate-500 text-sm">{title}</p>

      <h3 className="text-2xl font-bold mt-2">{value}</h3>

      {subtitle && (
        <p className="text-slate-900/40 text-xs mt-1">{subtitle}</p>
      )}

      {trend !== undefined && (
        <p className="text-emerald-600 text-xs mt-2">
          ▲ {trend}% improvement
        </p>
      )}
    </div>
  );
}