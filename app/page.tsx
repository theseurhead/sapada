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
    <div className="min-h-screen bg-[#0a0c10] text-white flex flex-col selection:bg-[#1d4ed8] selection:text-white">
      {/* 1. Header with Panduan & Layanan Dropdown */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-8 sm:space-y-12">

        {/* 2. Hero Section (Split-Screen) */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 pt-4 sm:pt-8 w-full">
          
          {/* Left Column */}
          <div className="flex-1 w-full text-center md:text-left flex flex-col items-center md:items-start">
            
            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Sistem Administrasi<br />Pajak Daerah
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mt-4 leading-relaxed">
              Aplikasi resmi Bapenda Garut untuk urus pajak daerah — daftar objek pajak,
              cek tagihan, dan bayar langsung via QR, semua dari HP tanpa perlu antre ke
              kantor Bapenda.
            </p>

            {/* Stats Card */}
            <div className="w-full max-w-xl mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm shadow-xl grid grid-cols-3 divide-x divide-white/10">
              <div className="px-2 sm:px-3 text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  3.708
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-medium">
                  Pengguna Aktif
                </div>
              </div>

              <div className="px-2 sm:px-3 text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  1.127
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-medium">
                  Wajib Pajak Terdaftar
                </div>
              </div>

              <div className="px-2 sm:px-3 text-center md:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  +51rb
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 mt-1 font-medium">
                  Kode Bayar Terbayar
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Auth Card */}
          <div className="w-full md:w-[380px] lg:w-[420px] flex-shrink-0">
            <div className="bg-[#12141a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-white">Mulai Gunakan SAPADA</h2>
                <p className="text-sm text-white/60 mt-1">Masuk atau daftar akun baru</p>
              </div>

              <form action="/login" className="flex flex-col space-y-4">
                <div className="space-y-3">
                  <div>
                    <label className="sr-only" htmlFor="username">Username / NIK</label>
                    <input 
                      type="text" 
                      id="username" 
                      name="username" 
                      placeholder="Username atau NIK" 
                      className="w-full px-4 py-3 bg-[#0a0c10] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/40"
                      required
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="password">Kata Sandi</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      placeholder="Kata Sandi" 
                      className="w-full px-4 py-3 bg-[#0a0c10] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white/40"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  id="hero-login-submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#1d4ed8] hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-900/30 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
                >
                  Masuk
                </button>

                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-white/10"></div>
                  <span className="flex-shrink-0 mx-4 text-xs text-white/40">atau</span>
                  <div className="flex-grow border-t border-white/10"></div>
                </div>

                <Link
                  href="/register"
                  id="hero-register-btn"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none"
                >
                  Daftar
                </Link>
              </form>
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
      <footer className="w-full border-t border-white/10 bg-[#07090e] mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
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
