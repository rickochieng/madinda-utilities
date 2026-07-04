interface SolutionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function SolutionCard({
  title,
  description,
  icon,
}: SolutionCardProps) {
  return (
    <div className="card p-6 hover:scale-[1.02] transition">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <p className="text-slate-500 text-sm mt-3">{description}</p>
    </div>
  );
}