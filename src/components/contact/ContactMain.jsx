
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactMain() {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
      <div className="w-full lg:w-[42%] shrink-0">
        <ContactInfo />
      </div>
      <div className="w-full lg:w-[58%] shrink-0">
        <ContactForm />
      </div>
    </section>
  );
}
