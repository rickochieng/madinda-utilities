interface IndustryCardProps {
  name: string;
  painPoint: string;
  roi: string;
}

export default function IndustryCard({
  name,
  painPoint,
  roi,
}: IndustryCardProps) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold">{name}</h3>

      <p className="text-slate-500 text-sm mt-2">
        {painPoint}
      </p>

      <div className="mt-4 text-emerald-600 text-sm font-medium">
        ROI: {roi}
      </div>
    </div>
  );
}