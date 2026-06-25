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

      <p className="text-white/60 text-sm mt-2">
        {painPoint}
      </p>

      <div className="mt-4 text-green-400 text-sm font-medium">
        ROI: {roi}
      </div>
    </div>
  );
}