import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LogIn,
  MapPin,
  MessageCircle,
  Mail,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import TaxRealizationSection from "@/components/TaxRealizationSection";
import LegalBasisSection from "@/components/LegalBasisSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white flex flex-col selection:bg-[#1d4ed8] selection:text-white">
      {/* 1. Header with Panduan & Layanan Dropdown */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-10 sm:space-y-14">
        {/* 2 & 3. Hero Section (Clean Solid Background) + Social Proof Stats */}
        <section className="text-center flex flex-col items-center">
          {/* Badge Status */}
          <div
            id="hero-banner-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span>Terbaru • Pendataan PBB-P2</span>
          </div>

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
      </main>

      {/* 7. Footer */}
      <footer className="w-full border-t border-white/10 bg-[#0a0c10] mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-8">
          {/* Logo & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/logo/logo.png"
                  alt="SAPADA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-base tracking-tight text-white">
                sapada
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Jl.+Otista+No.278,+Sukagalih,+Tarogong+Kidul,+Garut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Jl. Otista No.278, Sukagalih, Tarogong Kidul, Garut
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="https://wa.me/6281315265538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (0813) 1526 5538
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="mailto:admin@bapenda.garutkab.go.id"
                  className="hover:text-white transition-colors"
                >
                  admin@bapenda.garutkab.go.id
                </a>
              </div>
            </div>
          </div>

          {/* Thin Divider & Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div>
              © 2026 Badan Pendapatan Daerah Kabupaten Garut
            </div>

            <div className="flex items-center gap-5 flex-wrap">
              <Link
                href="/kebijakan-privasi"
                className="hover:text-white/80 transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/peta-pajak"
                className="hover:text-white/80 transition-colors"
              >
                Peta Pajak
              </Link>
              <Link
                href="/live-pajak"
                className="hover:text-white/80 transition-colors"
              >
                Live Pajak
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
