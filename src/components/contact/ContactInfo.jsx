
import React from 'react';
import { Phone, MapPin, Globe } from 'lucide-react';

export default function ContactInfo() {
  const items = [
    {
      label: "PHONE",
      value: "+91 979059 8203",
      support: "Speak with our team",
      icon: Phone,
    },
    {
      label: "LOCATION",
      value: "Theni \u00B7 Coimbatore \u00B7 Dindigul",
      support: "Serving customers across the region",
      icon: MapPin,
    },
    {
      label: "WEBSITE",
      value: "lexip.tech",
      support: "Explore the LEXIP ecosystem",
      icon: Globe,
    }
  ];

  return (
    <div className="space-y-12 pr-0 lg:pr-8">
      <div>
        <span className="block text-xs font-bold text-purple-600 uppercase tracking-widest mb-3">GET IN TOUCH</span>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-5">Let's Talk</h2>
        <p className="text-slate-600 font-medium leading-relaxed max-w-sm">
          Whether you're exploring smart automation, looking for product information, or need help with a specific requirement, our team is here to help.
        </p>
      </div>

      <div className="space-y-8">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-6 pb-8 border-b border-slate-200/60 last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{item.label}</h3>
                <p className="text-lg font-bold text-slate-900 mb-1">{item.value}</p>
                <p className="text-sm font-medium text-slate-500">{item.support}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
