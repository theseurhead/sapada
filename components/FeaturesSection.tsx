import React from "react";
import { Zap, ShieldCheck, Layers } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Cepat",
      desc: "Akses dan pelaporan data pajak instan, tanpa waktu tunggu.",
    },
    {
      icon: ShieldCheck,
      title: "Mudah",
      desc: "Tampilan sederhana dan intuitif, memudahkan setiap langkah Anda.",
    },
    {
      icon: Layers,
      title: "Lengkap",
      desc: "Dilengkapi berbagai fitur canggih untuk memaksimalkan efisiensi pengelolaan pajak.",
    },
  ];

  return (
    <section className="space-y-5">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Kenapa SAPADA?
        </h2>
        <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-md">
          Cepat, mudah, dan lengkap untuk masyarakat dan pemerintah daerah
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 transition-transform duration-200 group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
                  <h3 className="font-semibold text-base sm:text-lg text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
