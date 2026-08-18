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
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-8 sm:pt-16 pb-8 w-full">
          
          {/* Left Side: Text & Label */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white md:text-gray-900 leading-tight max-w-xl">
              Sistem Administrasi Pajak Daerah Kabupaten Garut.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/70 md:text-gray-600 max-w-xl mt-3 md:mt-4 leading-relaxed">
              Daftar objek pajak, cek tagihan, dan bayar langsung via QR. Semua dari HP tanpa perlu antre.
            </p>

            {/* Stats Card */}
            <div className="w-full max-w-md mt-8 bg-white/[0.03] md:bg-white border border-white/10 md:border-gray-200 rounded-2xl p-4 sm:p-5 backdrop-blur-sm md:shadow-sm grid grid-cols-3 divide-x divide-white/10 md:divide-gray-200">
              <div className="px-2 text-center">
                <div className="text-lg md:text-xl font-bold text-white md:text-gray-900">3.708</div>
                <div className="text-[10px] sm:text-xs text-white/50 md:text-gray-500 mt-1">Pengguna</div>
              </div>
              <div className="px-2 text-center">
                <div className="text-lg md:text-xl font-bold text-white md:text-gray-900">1.127</div>
                <div className="text-[10px] sm:text-xs text-white/50 md:text-gray-500 mt-1">Wajib Pajak</div>
              </div>
              <div className="px-2 text-center">
                <div className="text-lg md:text-xl font-bold text-white md:text-gray-900">+51rb</div>
                <div className="text-[10px] sm:text-xs text-white/50 md:text-gray-500 mt-1">Transaksi</div>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full max-w-[420px] shrink-0">
            <div className="bg-[#12141a] md:bg-white border border-white/10 md:border-gray-100 rounded-2xl p-6 sm:p-8 shadow-2xl md:shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col space-y-5">
              <form className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Email atau nomor telepon" 
                  className="w-full px-4 py-3.5 bg-white/5 md:bg-gray-50 border border-white/10 md:border-gray-200 rounded-xl text-white md:text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-white/30 md:placeholder-gray-400"
                  required
                />
                <input 
                  type="password" 
                  placeholder="Kata sandi" 
                  className="w-full px-4 py-3.5 bg-white/5 md:bg-gray-50 border border-white/10 md:border-gray-200 rounded-xl text-white md:text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder-white/30 md:placeholder-gray-400"
                  required
                />

                <div className="flex flex-col space-y-3 mt-1">
                  <div className="flex justify-start">
                    <Link href="/forgot-password" className="text-sm font-semibold text-[#1877f2] hover:text-blue-700 transition-colors">
                      Lupa kata sandi?
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer group">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#1877f2]/40 rounded-full peer dark:bg-white/10 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1877f2] group-hover:after:scale-95"></div>
                      <span className="ml-3 text-sm font-medium text-white/90 md:text-gray-600 cursor-pointer">Ingat saya di perangkat ini</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#1877f2] hover:bg-[#166fe5] active:bg-[#1460c4] text-white font-bold text-[17px] transition-all focus-visible:outline-none shadow-lg shadow-blue-500/25"
                >
                  Log In
                </button>
              </form>

              <div className="relative flex items-center justify-center w-full my-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10 md:border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-[13px] font-medium">
                  <span className="px-3 bg-[#12141a] md:bg-white text-white/50 md:text-gray-400">ATAU</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 md:bg-white hover:bg-white/10 md:hover:bg-gray-50 border border-white/10 md:border-gray-200 text-white md:text-gray-700 font-semibold text-[15px] transition-all shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Masuk dengan Google
              </button>

              <div className="text-center mt-4 mb-2 text-sm">
                <span className="text-white/70 md:text-gray-600">Belum punya akun? </span>
                <Link href="/register" className="font-semibold text-[#1877f2] hover:underline transition-colors">
                  Daftar
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-white/60 md:text-gray-600">
              <Link href="/panduan" className="font-bold text-white md:text-gray-800 hover:underline">Panduan SAPADA</Link> untuk wajib pajak daerah.
            </div>
          </div>
        </section>

        {/* 3. Banner Urgent (moved below hero) */}
        <AnnouncementBanner />

        {/* 4. FAQ */}
        <FAQSection />

        {/* 5. Footer (compact) */}
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
