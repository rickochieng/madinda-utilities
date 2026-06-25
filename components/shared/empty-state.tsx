export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="card p-10 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && (
        <p className="text-white/50 text-sm mt-2">
          {description}
        </p>
      )}
    </div>
  );
}   