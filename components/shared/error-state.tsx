export default function ErrorState({
  message,
}: {
  message: string;
}) {
  return (
    <div className="card p-6 border-red-500/30">
      <p className="text-red-400 font-medium">
        ⚠ {message}
      </p>
    </div>
  );
}