"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>

      <button
        onClick={() => reset()}
        className="btn-primary mt-4"
      >
        Try Again
      </button>
    </div>
  );
}