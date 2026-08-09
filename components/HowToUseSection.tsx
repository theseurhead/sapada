import React from "react";
import { UserPlus, Search, CreditCard } from "lucide-react";

export default function HowToUseSection() {
  const steps = [
    {
      id: 1,
      title: "Daftar Akun",
      description: "Isi NIK, nama, email, dan nomor HP, lalu verifikasi.",
      icon: UserPlus,
    },
    {
      id: 2,
      title: "Cek Tagihan",
      description: "Lihat tagihan pajak dan kode bayar Anda di dashboard.",
      icon: Search,
    },
    {
      id: 3,
      title: "Bayar via QRIS/VA",
      description: "Bayar langsung tanpa perlu ke kantor Bapenda.",
      icon: CreditCard,
    }
  ];

  return (
    <section className="space-y-6 pt-6 sm:pt-8" id="cara-pakai">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Cara Pakai SAPADA
        </h2>
        <p className="text-sm sm:text-base text-white/60 mt-2 max-w-lg">
          Tiga langkah mudah mengurus pajak daerah Anda
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.id} 
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-[100px] font-black text-white/[0.02] select-none leading-none">
                {step.id}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5 relative z-10">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
