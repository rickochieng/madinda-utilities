import HeroSection from "@/components/sections/hero-section";
import TrustMetricsSection from "@/components/sections/trust-metrics-section";
import ProblemsSection from "@/components/sections/problems-section";
import SolutionsOverviewSection from "@/components/sections/solutions-overview-section";
import IndustriesSection from "@/components/sections/industries-section";
import DashboardPreviewSection from "@/components/sections/dashboard-preview-section";
import PilotCTASection from "@/components/sections/pilot-cta-section";
import ExecutiveKPIs from "@/components/home/executive-kpis";
import ExecutiveDashboardPreview from "@/components/home/executive-dashboard-preview";
import SmartCitySection from "@/components/home/smart-city-section";
import ClientLogos from "@/components/home/client-logos";
import CaseStudies from "@/components/home/case-studies";
import AfricaCoverage from "@/components/home/africa-coverage";
import GovernmentReadiness from "@/components/home/government-readiness";
import UtilityNetwork from "@/components/home/utility-network";
import CommandCenter from "@/components/home/command-center";
import InvestorRelations from "@/components/home/investor-relations";
import ResourceCenter from "@/components/home/resource-center";
import NewsPreview from "@/components/home/news-preview";
import CareersPreview from "@/components/home/careers-preview";

export default function HomePage() {
  return (
    <main>

<HeroSection />

<ExecutiveKPIs />

<ClientLogos />

<TrustMetricsSection />

<ExecutiveDashboardPreview />

<CaseStudies />

<SmartCitySection />

<AfricaCoverage />

<GovernmentReadiness />

<UtilityNetwork />

<CommandCenter />

<InvestorRelations />

<ResourceCenter />

<NewsPreview />

<CareersPreview />

<ProblemsSection />

<SolutionsOverviewSection />

<IndustriesSection />

<PilotCTASection />
    </main>
  );
}