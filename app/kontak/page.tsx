import React from "react";
import Header from "@/components/Header";
import ContactInfoSection from "@/components/ContactInfoSection";

export const metadata = {
  title: "Kontak & Bantuan | SAPADA",
  description: "Informasi kontak dan layanan bantuan SAPADA.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c10] md:bg-white text-white md:text-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Informasi & Bantuan</h1>
          <p className="text-white/60 md:text-gray-500 mt-2">Hubungi kami jika Anda membutuhkan bantuan lebih lanjut.</p>
        </div>
        <div className="bg-white/[0.02] md:bg-white md:border md:border-gray-200 rounded-3xl md:shadow-sm">
          <ContactInfoSection />
        </div>
      </main>
    </div>
  );
}
