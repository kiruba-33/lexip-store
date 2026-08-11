
import React from 'react';
import AboutHero from '../../components/about/AboutHero';
import WhoWeAre from '../../components/about/WhoWeAre';
import WhatWeDo from '../../components/about/WhatWeDo';
import AutomationEcosystem from '../../components/about/AutomationEcosystem';
import WhyLexip from '../../components/about/WhyLexip';
import SmartExperience from '../../components/about/SmartExperience';
import ExpertiseSection from '../../components/about/ExpertiseSection';
import ServiceCoverage from '../../components/about/ServiceCoverage';
import AboutCTA from '../../components/about/AboutCTA';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col pb-28 md:pb-12">
      <main className="flex-grow pt-8 md:pt-10">
        {/* Constrained width sections */}
        <div className="container mx-auto px-4 max-w-[1280px] space-y-[80px] lg:space-y-[120px]">
          <AboutHero />
          <WhoWeAre />
          <WhatWeDo />
          <AutomationEcosystem />
        </div>

        {/* Full width bleed section */}
        <div className="mt-[80px] lg:mt-[120px]">
          <WhyLexip />
        </div>

        {/* Constrained width sections */}
        <div className="container mx-auto px-4 max-w-[1280px] space-y-[80px] lg:space-y-[120px] mt-[80px] lg:mt-[120px]">
          <SmartExperience />
          <ExpertiseSection />
          <ServiceCoverage />
          <AboutCTA />
        </div>
      </main>
    </div>
  );
}
