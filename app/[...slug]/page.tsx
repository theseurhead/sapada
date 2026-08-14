import React from "react";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

export default function PlaceholderPage() {
  return (
    <div className="min-h-screen bg-[#0a0c10] md:bg-white text-white flex flex-col items-center justify-center p-4 selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <div className="text-center space-y-6 max-w-md w-full bg-white/[0.02] md:bg-white border border-white/10 md:border-gray-200 rounded-3xl p-8 backdrop-blur-md shadow-2xl md:shadow-xl">
        <div className="w-16 h-16 bg-blue-500/10 md:bg-blue-50 border border-blue-500/20 md:border-blue-200 text-blue-400 md:text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-8 h-8" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-gray-900">
          Fitur Sedang Dikembangkan
        </h1>
        
        <p className="text-sm sm:text-base text-white/60 md:text-gray-500 leading-relaxed">
          Mohon maaf, halaman atau fitur ini sedang dalam tahap pengembangan dan akan segera hadir.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1d4ed8] hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-900/30 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
