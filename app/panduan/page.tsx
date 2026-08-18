import React from "react";
import Header from "@/components/Header";
import HowToUseSection from "@/components/HowToUseSection";

export const metadata = {
  title: "Panduan Penggunaan | SAPADA",
  description: "Panduan cara mendaftar dan menggunakan aplikasi SAPADA.",
};

export default function PanduanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c10] md:bg-white text-white md:text-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Panduan Penggunaan</h1>
          <p className="text-white/60 md:text-gray-500 mt-2">Langkah-langkah mudah menggunakan layanan SAPADA.</p>
        </div>
        <div className="bg-white/[0.02] md:bg-white md:border md:border-gray-200 rounded-3xl md:shadow-sm">
          <HowToUseSection />
        </div>
      </main>
    </div>
  );
}
