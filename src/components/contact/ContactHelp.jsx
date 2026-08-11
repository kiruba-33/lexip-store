
import React from 'react';
import { Box, Lightbulb, Info, HelpCircle } from 'lucide-react';

export default function ContactHelp() {
  const helps = [
    { title: "PRODUCT GUIDANCE", desc: "Understand the right product for your requirements.", icon: Box },
    { title: "AUTOMATION ENQUIRIES", desc: "Discuss your smart-home and automation needs.", icon: Lightbulb },
    { title: "PRODUCT INFORMATION", desc: "Get information about LEXIP products and their applications.", icon: Info },
    { title: "GENERAL SUPPORT", desc: "Have another question? Send us an enquiry.", icon: HelpCircle },
  ];

  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">How Can We Help?</h2>
        <p className="text-slate-500 mt-3 font-medium text-lg">From product questions to automation requirements, we're here to help you find the right direction.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {helps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-lexip-300 shadow-[0_2px_8px_rgb(0,0,0,0.02)] transition-colors group">
              <div className="w-10 h-10 text-slate-700 flex items-center mb-5">
                <Icon className="w-6 h-6 text-lexip-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">{item.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
