
import React from 'react';
import ContactHero from '../../components/contact/ContactHero';
import ContactMain from '../../components/contact/ContactMain';
import ContactHelp from '../../components/contact/ContactHelp';
import ContactLocation from '../../components/contact/ContactLocation';
import ContactFAQ from '../../components/contact/ContactFAQ';
import ContactCTA from '../../components/contact/ContactCTA';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-24 font-sans">
      <main className="flex-grow container mx-auto px-4 max-w-[1280px]">
        <ContactHero />
        
        <div className="space-y-[80px] lg:space-y-[96px] mt-[64px] lg:mt-[96px]">
          <ContactMain />
          <ContactHelp />
          <ContactLocation />
          <ContactFAQ />
          <ContactCTA />
        </div>
      </main>
    </div>
  );
}
