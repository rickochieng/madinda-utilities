import IntroCarousel from "@/components/home/IntroCarousel";

import HeroSection from "@/components/sections/hero-section";

import ClientLogos from "@/components/home/client-logos";

import ExecutiveKPIs from "@/components/home/executive-kpis";

import SolutionsOverviewSection from "@/components/sections/solutions-overview-section";

import ExecutiveDashboardPreview from "@/components/home/executive-dashboard-preview";

import SmartCitySection from "@/components/home/smart-city-section";

import UtilityNetwork from "@/components/home/utility-network";

import AfricaCoverage from "@/components/home/africa-coverage";

import CaseStudies from "@/components/home/case-studies";

import TrustMetricsSection from "@/components/sections/trust-metrics-section";

import GovernmentReadiness from "@/components/home/government-readiness";

import InvestorRelations from "@/components/home/investor-relations";

import ResourceCenter from "@/components/home/resource-center";

import NewsPreview from "@/components/home/news-preview";

import CareersPreview from "@/components/home/careers-preview";

import PilotCTASection from "@/components/sections/pilot-cta-section";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">

      {/* Cinematic Intro */}
      <IntroCarousel />

      {/* Hero */}
      <HeroSection />

      {/* Trusted By */}
      <ClientLogos />

      {/* Executive KPIs */}
      <ExecutiveKPIs />

      {/* Solutions */}
      <SolutionsOverviewSection />

      {/* Dashboard Preview */}
      <ExecutiveDashboardPreview />


      {/* Africa Coverage */}
      <AfricaCoverage />

    

  

      {/* Resource Centre */}
      <ResourceCenter />

      {/* Latest News */}


      {/* Careers */}
      <CareersPreview />

      {/* Final CTA */}
      <PilotCTASection />

    </main>
  );
}