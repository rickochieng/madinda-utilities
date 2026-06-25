export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 mt-32">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="font-bold text-lg mb-4">
              Madinda Utilities
            </h3>

            <p className="text-white/60">
              Smart Utility Infrastructure Built for Africa
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Solutions
            </h4>

            <ul className="space-y-2 text-white/60">
              <li>Smart Metering</li>
              <li>AMI</li>
              <li>Revenue Protection</li>
              <li>AI Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-white/60">
              <li>About</li>
              <li>Careers</li>
              <li>CSR</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-white/60">
              <li>+27 83 744 2913</li>
              <li>Pretoria, South Africa</li>
            </ul>
          </div>

        </div>

      </div>

    </footer>
  );
}