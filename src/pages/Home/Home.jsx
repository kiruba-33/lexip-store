import React from 'react';
import HeroSection from '../../components/home/HeroSection';
import CategoriesSection from '../../components/home/CategoriesSection';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import WhyLexip from '../../components/home/WhyLexip';
import SupportedEcosystem from '../../components/home/SupportedEcosystem';
import ContactFAQ from '../../components/contact/ContactFAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-4 md:pt-8">
      <main className="flex-grow container mx-auto px-4 pb-12">
        <HeroSection />
        
        <div className="mt-12 space-y-12">
          <CategoriesSection />
          <FeaturedProducts />
          <WhyLexip />
          <SupportedEcosystem />
          <ContactFAQ/>
        </div>
      </main>
    </div>
  );
}
