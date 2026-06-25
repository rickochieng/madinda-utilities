import PilotForm from "@/components/forms/pilot-form";

export default function PilotProjectPage() {
  return (
    <main className="section space-y-10">

      <h1 className="text-4xl font-bold">
        Pilot Project Application
      </h1>

      <p className="text-white/60 max-w-2xl">
        Deploy Madinda smart utility infrastructure in your network.
        Test revenue recovery, leak detection, and AMI systems.
      </p>

      <PilotForm />
    </main>
  );
}