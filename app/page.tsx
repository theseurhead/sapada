import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn } from "lucide-react";
import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import TaxRealizationSection from "@/components/TaxRealizationSection";
import LegalBasisSection from "@/components/LegalBasisSection";
import ContactInfoSection from "@/components/ContactInfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white flex flex-col selection:bg-[#1d4ed8] selection:text-white">
      {/* 1. Header with Panduan & Layanan Dropdown */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-10 sm:space-y-14">
        {/* 2 & 3. Hero Section (Clean Solid Background) + Social Proof Stats */}
        <section className="text-center flex flex-col items-center pt-2 sm:pt-4">
          {/* H1 Title (Responsive font size for mobile-first) */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl">
            Sistem Administrasi<br />Pajak Daerah
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed px-2">
            Aplikasi resmi Bapenda Garut untuk urus pajak daerah — daftar objek pajak,
            cek tagihan, dan bayar langsung via QR, semua dari HP tanpa perlu antre ke
            kantor Bapenda.
          </p>

          {/* Stats Card (First-fold Social Proof) */}
          <div className="w-full max-w-2xl mt-6 sm:mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-3.5 sm:p-5 backdrop-blur-sm shadow-xl grid grid-cols-3 divide-x divide-white/10">
            <div className="px-1 sm:px-3 text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                3.708
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1 font-medium">
                Pengguna Aktif
              </div>
            </div>

            <div className="px-1 sm:px-3 text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                1.127
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1 font-medium">
                Wajib Pajak Terdaftar
              </div>
            </div>

            <div className="px-1 sm:px-3 text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                +51rb
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 mt-0.5 sm:mt-1 font-medium">
                Kode Bayar Terbayar
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 mt-6 sm:mt-8">
            <Link
              href="/login"
              id="hero-login-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#1d4ed8] hover:bg-blue-700 text-white font-medium text-sm sm:text-base transition-all shadow-lg shadow-blue-900/30 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
            >
              <LogIn className="w-4 h-4" />
              <span>Masuk</span>
            </Link>

            <Link
              href="/panduan"
              id="hero-guide-btn"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white/80 hover:text-white font-medium text-sm sm:text-base transition-colors hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none border border-white/10"
            >
              <span>Panduan</span>
            </Link>
          </div>

          {/* Micro-guidance */}
          <p className="text-xs text-white/50 mt-3 sm:mt-4">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-white/80 underline underline-offset-4 hover:text-white transition-colors"
            >
              Daftar dulu di sini.
            </Link>
          </p>
        </section>

        {/* 4. Fitur (Cepat, Mudah, Lengkap) — posisi di atas setelah hero */}
        <FeaturesSection />

        {/* 5. Realisasi Pajak per Jenis — diringkas dengan ringkasan & collapsible detail */}
        <TaxRealizationSection />

        {/* 6. Dasar Hukum — accordion / collapsible */}
        <LegalBasisSection />

        {/* 7. Informasi Kontak, Jam Operasional & Ikuti Kami */}
        <ContactInfoSection />
      </main>

      {/* 8. Footer */}
      <footer className="w-full border-t border-white/10 bg-[#07090e] mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
                <span className="font-bold text-base tracking-tight text-white leading-none">
                  SAPADA
                </span>
                <span className="text-[11px] text-white/50 mt-0.5">
                  Sistem Administrasi Pajak Daerah Garut
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 flex-wrap text-xs text-white/60">
              <Link
                href="/kebijakan-privasi"
                className="hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/peta-pajak"
                className="hover:text-white transition-colors"
              >
                Peta Pajak
              </Link>
              <Link
                href="/live-pajak"
                className="hover:text-white transition-colors"
              >
                Live Pajak
              </Link>
            </div>
          </div>

          {/* Thin Divider & Bottom Bar */}
          <div className="pt-6 border-t border-white/10 text-center sm:text-left text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              © 2026 Badan Pendapatan Daerah Kabupaten Garut. Hak Cipta Dilindungi.
            </div>
            <div className="text-[11px] text-white/30">
              Pemerintah Kabupaten Garut
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
