import IndustryCard from "@/components/cards/industry-card";

export default function IndustriesPage() {
  return (
    <main className="section space-y-10">

      <h1 className="text-2xl  text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900 font-bold">Industries</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <IndustryCard
          name="Municipalities"
          painPoint="High revenue leakage and aging infrastructure"
          roi="20–40% recovery"
        />

        <IndustryCard
          name="Water Utilities"
          painPoint="Undetected leaks and non-revenue water"
          roi="15–35% savings"
        />

        <IndustryCard
          name="Electric Utilities"
          painPoint="Meter tampering and theft"
          roi="25% loss reduction"
        />
      </div>
    </main>
  );
}