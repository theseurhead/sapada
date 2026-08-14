import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import HowToUseSection from "@/components/HowToUseSection";
import ContactInfoSection from "@/components/ContactInfoSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Header with Panduan & Layanan Dropdown */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-8 sm:space-y-12">

        {/* 2. Hero Section */}
        <section className="flex flex-col items-center justify-center pt-8 sm:pt-16 pb-8 w-full text-center">
          
          <div className="flex-1 w-full max-w-4xl flex flex-col items-center">
            
            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white md:text-gray-900 leading-tight">
              Sistem Administrasi<br />Pajak Daerah
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 md:text-gray-600 max-w-2xl mt-6 leading-relaxed">
              Aplikasi resmi Bapenda Garut untuk urus pajak daerah — daftar objek pajak,
              cek tagihan, dan bayar langsung via QR, semua dari HP tanpa perlu antre ke
              kantor Bapenda.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
              <Link href="/register" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/30">
                Daftar Akun
              </Link>
              <Link href="/panduan" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 md:bg-gray-100 md:hover:bg-gray-200 border border-white/10 md:border-gray-300 text-white md:text-gray-900 font-bold text-sm transition-all">
                Panduan
              </Link>
            </div>

            {/* Stats Card */}
            <div className="w-full max-w-2xl mt-12 bg-white/[0.03] md:bg-white border border-white/10 md:border-gray-200 rounded-2xl p-4 sm:p-5 backdrop-blur-sm md:shadow-md grid grid-cols-3 divide-x divide-white/10 md:divide-gray-200">
              <div className="px-2 sm:px-3 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white md:text-gray-900 tracking-tight">
                  3.708
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 md:text-gray-500 mt-1 font-medium">
                  Pengguna Aktif
                </div>
              </div>

              <div className="px-2 sm:px-3 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white md:text-gray-900 tracking-tight">
                  1.127
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 md:text-gray-500 mt-1 font-medium">
                  Wajib Pajak Terdaftar
                </div>
              </div>

              <div className="px-2 sm:px-3 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white md:text-gray-900 tracking-tight">
                  +51rb
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 md:text-gray-500 mt-1 font-medium">
                  Kode Bayar Terbayar
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* 3. Banner Urgent (moved below hero) */}
        <AnnouncementBanner />

        {/* 4. Cara Pakai (baru) */}
        <HowToUseSection />

        {/* 5. Testimoni (2 card) & 6. FAQ */}
        <TestimonialSection />
        <FAQSection />

        {/* 8. Footer (compact) */}
        <ContactInfoSection />
      </main>

      {/* 8. Footer */}
      <footer className="w-full border-t border-white/10 md:border-gray-200 bg-[#07090e] md:bg-gray-50 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="SAPADA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-white md:text-gray-900 leading-none">
                  SAPADA
                </span>
                <span className="text-[11px] text-white/50 md:text-gray-500 mt-0.5">
                  Sistem Administrasi Pajak Daerah Garut
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <div className="flex flex-col gap-2.5 text-xs text-white/60 md:text-gray-500">
                <span className="font-semibold text-white/90 md:text-gray-800 mb-1">Layanan Utama</span>
                <Link href="/peta-pajak" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Peta Pajak
                </Link>
                <Link href="/live-pajak" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Live Pajak
                </Link>
                <Link href="/layanan/lupa-npwpd" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Lupa NPWPD
                </Link>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-white/60 md:text-gray-500">
                <span className="font-semibold text-white/90 md:text-gray-800 mb-1">Informasi</span>
                <Link href="/dasar-hukum" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Dasar Hukum
                </Link>
                <Link href="/kebijakan-privasi" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Kebijakan Privasi
                </Link>
                <Link href="#" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Kritik & Saran
                </Link>
              </div>

              <div className="flex flex-col gap-2.5 text-xs text-white/60 md:text-gray-500">
                <span className="font-semibold text-white/90 md:text-gray-800 mb-1">Bapenda Garut</span>
                <a href="https://bapenda.garutkab.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Beranda Website
                </a>
                <a href="https://bapenda.garutkab.go.id/informasi" target="_blank" rel="noopener noreferrer" className="hover:text-white md:hover:text-blue-600 transition-colors">
                  Informasi Publik
                </a>
              </div>
            </div>
          </div>

          {/* Thin Divider & Bottom Bar */}
          <div className="pt-6 border-t border-white/10 md:border-gray-200 text-center sm:text-left text-xs text-white/40 md:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              © 2026 Badan Pendapatan Daerah Kabupaten Garut. Hak Cipta Dilindungi.
            </div>
            <div className="text-[11px] text-white/30 md:text-gray-400">
              Pemerintah Kabupaten Garut
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
