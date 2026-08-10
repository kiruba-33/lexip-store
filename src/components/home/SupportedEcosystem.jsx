import React from 'react';
import { Radio, MessageCircle, Smartphone, Clock, Share2, Pointer, Mic } from 'lucide-react';

const supportedFeatures = [
  { id: "amazon-alexa", title: "Amazon Alexa", icon: Radio },
  { id: "google-assistant", title: "Google Assistant", icon: MessageCircle },
  { id: "lexip-app", title: "Lexip App", icon: Smartphone },
  { id: "timing-schedules", title: "Timing Schedules", icon: Clock },
  { id: "share-control", title: "Share Control", icon: Share2 },
  { id: "touch-control", title: "Touch Control", icon: Pointer },
  { id: "voice-assistant", title: "Voice Assistant", icon: Mic }
];

export default function SupportedEcosystem() {
  return (
    <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
          One Ecosystem. Total Control.
        </h2>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
          LEXIP works seamlessly with modern platforms, giving you multiple ways to control your connected spaces effortlessly.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-y-10 gap-x-6 md:gap-x-12">
        {supportedFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <div 
              key={feature.id} 
              className="flex flex-col items-center justify-center w-[120px] md:w-[140px]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 border border-slate-100 shadow-sm text-slate-700">
                <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-[13px] md:text-sm font-bold text-slate-800 text-center leading-tight">
                {feature.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
