
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactFAQ() {
  const faqs = [
    { q: "What products does LEXIP offer?", a: "LEXIP offers a comprehensive ecosystem of automation hardware including smart touch switches, in-wall retrofits, smart sensors, smart door locks, and gate automation solutions." },
    { q: "How can I choose the right LEXIP product?", a: "You can explore our product catalogue or send us an enquiry with your requirements. Our team will help guide you toward the right automation solutions for your space." },
    { q: "Can I contact LEXIP for product information?", a: "Yes. You can use the enquiry form on this page to request additional technical information or application details for any of our products." },
    { q: "Can I discuss a custom automation requirement?", a: "We provide guidance on choosing the right products to build your smart ecosystem. Send us an automation enquiry detailing your project needs." },
    { q: "How can I get in touch with the LEXIP team?", a: "You can reach us directly via phone at +91 979059 8203, or send us an email enquiry using the form on this page." }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
