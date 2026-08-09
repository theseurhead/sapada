import React from "react";
import Link from "next/link";

export default function ClosingCTASection() {
  return (
    <section className="pt-8 sm:pt-12 pb-4">
      <div className="bg-gradient-to-br from-blue-900/20 to-blue-600/10 border border-blue-500/20 rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          Belum punya akun?
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-lg mb-8">
          Segera daftar akun SAPADA untuk kemudahan akses cek tagihan dan pembayaran pajak daerah dari mana saja.
        </p>
        <Link
          href="/register"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1d4ed8] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-blue-900/40 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
        >
          <span>Daftar Sekarang</span>
        </Link>
      </div>
    </section>
  );
}
