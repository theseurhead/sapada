import React from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Wajib Pajak",
      text: "Sangat membantu! Saya tidak perlu lagi antre panjang di kantor Bapenda. Cukup dari rumah, bayar pajak jadi beres dan cepat.",
      initials: "BS"
    },
    {
      id: 2,
      name: "Siti Rahmawati",
      role: "Pengusaha Lokal",
      text: "Aplikasi SAPADA sangat mudah digunakan. Informasi tagihan jelas dan proses pembayaran menggunakan QRIS sangat praktis. Sukses selalu Bapenda Garut!",
      initials: "SR"
    }
  ];

  return (
    <section className="space-y-6 pt-6 sm:pt-8" id="testimoni">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-gray-900">
          Apa Kata Mereka?
        </h2>
        <p className="text-sm sm:text-base text-white/60 md:text-gray-500 mt-2 max-w-lg">
          Pengalaman wajib pajak yang telah menggunakan layanan SAPADA
        </p>
      </div>

      <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-6 pt-4 max-w-4xl mx-auto overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-4 sm:pb-0 px-4 sm:px-0 scrollbar-hide">
        {testimonials.map((t) => (
          <div key={t.id} className="min-w-[85vw] sm:min-w-0 snap-center shrink-0 bg-white/[0.02] md:bg-white border border-white/10 md:border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.04] md:hover:bg-gray-50 hover:border-white/20 md:hover:border-gray-300 md:shadow-sm transition-all duration-300">
            <p className="text-white/80 md:text-gray-700 text-sm italic leading-relaxed mb-6">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1d4ed8] flex items-center justify-center font-bold text-white text-sm">
                {t.initials}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white md:text-gray-900">{t.name}</h4>
                <p className="text-[11px] text-white/50 md:text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
