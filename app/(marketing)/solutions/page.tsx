import SolutionCard from "@/components/cards/solution-card";

export default function SolutionsPage() {
  return (
    <main className="section space-y-10">

      <h1 className="text-4xl font-bold">Solutions</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <SolutionCard
          title="Smart Water Metering"
          description="Leak detection and real-time monitoring."
        />
        <SolutionCard
          title="Smart Electricity Metering"
          description="Accurate billing and theft prevention."
        />
        <SolutionCard
          title="AMI Infrastructure"
          description="Full Advanced Metering Infrastructure stack."
        />
        <SolutionCard
          title="Revenue Protection"
          description="AI-driven loss prevention systems."
        />
        <SolutionCard
          title="TID Rollover Compliance"
          description="Prepaid system compliance management."
        />
        <SolutionCard
          title="AI Analytics"
          description="Predictive utility intelligence platform."
        />
      </div>
    </main>
  );
}