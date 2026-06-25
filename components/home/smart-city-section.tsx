export default function SmartCitySection() {
  return (
    <section className="section">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <h2 className="text-5xl font-bold mb-6">
            Building Africa's Future Smart Cities
          </h2>

          <p className="text-white/70 text-lg">
            Madinda Utilities delivers the digital infrastructure
            required to support modern municipalities,
            utility operators, industrial zones,
            and smart city initiatives.
          </p>

        </div>

        <div className="card p-10">

          <div className="space-y-4">

            <div>✓ Smart Metering</div>
            <div>✓ Revenue Protection</div>
            <div>✓ GIS Integration</div>
            <div>✓ AI Analytics</div>
            <div>✓ Utility Billing</div>
            <div>✓ Remote Monitoring</div>

          </div>

        </div>

      </div>

    </section>
  );
}