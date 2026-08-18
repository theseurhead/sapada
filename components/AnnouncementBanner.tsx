import React from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-red-500/20 text-red-500 rounded-lg shrink-0 mt-0.5 sm:mt-0">
          <Info className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white md:text-gray-900 font-semibold text-sm sm:text-base">
            Batas Akhir Jatuh Tempo PBB-P2 2026
          </h3>
          <p className="text-white/70 md:text-gray-600 text-xs sm:text-sm mt-0.5">
            Segera lakukan pembayaran sebelum 31 Agustus 2026 untuk menghindari denda.
          </p>
        </div>
      </div>
      <Link
        href="/layanan/cek-kode-bayar"
        className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-red-500/20"
      >
        <span>Cek Tagihan Sekarang</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
