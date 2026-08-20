import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Header with Panduan & Layanan Dropdown */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-8 sm:space-y-12">

        {/* 2. Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-8 sm:pt-16 pb-8 w-full">
          
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
            <div className="bg-[#0f1115] border border-white/5 rounded-[20px] md:rounded-[24px] p-5 sm:p-8 shadow-2xl flex flex-col w-full text-white">
              
              <div className="mb-5 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2">Masuk ke SAPADA</h3>
                <p className="text-[13px] md:text-[15px] text-gray-400">Masukkan data Anda untuk masuk ke akun.</p>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 mb-5 md:mb-6">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 md:gap-2.5 px-4 py-2.5 md:py-3 rounded-[12px] md:rounded-[14px] bg-[#1a1c23] hover:bg-[#23252d] border border-white/5 transition-colors text-[13px] md:text-[14px] font-semibold text-white">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Masuk dengan Google
                </button>
                <button type="button" className="flex-1 flex items-center justify-center gap-2 md:gap-2.5 px-4 py-2.5 md:py-3 rounded-[12px] md:rounded-[14px] bg-[#1a1c23] hover:bg-[#23252d] border border-white/5 transition-colors text-[13px] md:text-[14px] font-semibold text-white">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.09 0-1.44-.65-3.03-.65-1.6 0-1.95.65-3.03.65-1.04 0-2.11-.93-3.08-1.88C2.5 17.5 1.15 12.33 3.65 9.42c1.23-1.42 2.89-2.3 4.54-2.3 1.54 0 2.86.97 3.86.97 1.01 0 2.59-1.12 4.39-1.12 1.48 0 2.82.61 3.73 1.62-3.23 1.94-2.73 6.55.33 7.78-.71 1.81-1.74 3.48-3.45 5.11zm-3.69-14.8c-.8.95-2.05 1.55-3.21 1.45.18-1.17.82-2.34 1.63-3.14.8-.95 2.05-1.55 3.21-1.45-.18 1.17-.82 2.34-1.63 3.14z"/>
                  </svg>
                  Masuk dengan Apple
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-5 md:mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center text-[12px] md:text-[13px] font-medium">
                  <span className="px-3 bg-[#0f1115] text-gray-500">Atau</span>
                </div>
              </div>

              {/* Form */}
              <form className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1.5 md:space-y-2">
                  <label htmlFor="email-home" className="text-[13px] md:text-sm font-medium text-gray-300">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email-home" 
                    name="email" 
                    placeholder="Masukkan email Anda" 
                    className="w-full px-4 py-3 md:py-3.5 bg-[#1a1c23] border border-white/5 rounded-[12px] md:rounded-[14px] text-white text-[14px] md:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all placeholder-gray-500"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1.5 md:space-y-2">
                  <label htmlFor="password-home" className="text-[13px] md:text-sm font-medium text-gray-300">Kata Sandi</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      id="password-home" 
                      name="password" 
                      placeholder="Masukkan kata sandi" 
                      className="w-full px-4 py-3 md:py-3.5 bg-[#1a1c23] border border-white/5 rounded-[12px] md:rounded-[14px] text-white text-[14px] md:text-[15px] focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all placeholder-gray-500 pr-12"
                      required
                    />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                      {/* Eye icon */}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                  <label className="relative inline-flex items-center cursor-pointer group">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-white/5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500 group-hover:after:scale-95 border border-white/10"></div>
                    <span className="ml-2.5 md:ml-3 text-[13px] md:text-sm font-medium text-gray-400 cursor-pointer group-hover:text-gray-300 transition-colors">Ingat saya</span>
                  </label>
                  <Link href="/forgot-password" className="text-[13px] md:text-sm font-semibold text-green-500 hover:text-green-400 transition-colors">
                    Lupa kata sandi?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 md:py-3.5 rounded-[12px] md:rounded-[14px] bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#20b958] hover:to-[#15803d] active:scale-[0.98] text-white font-bold text-[15px] md:text-[16px] transition-all focus-visible:outline-none shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                >
                  Masuk
                </button>
              </form>

              <div className="text-center mt-5 md:mt-6 text-[14px] md:text-[15px]">
                <span className="text-gray-400">Belum punya akun? </span>
                <Link href="/register" className="font-semibold text-white hover:text-green-400 hover:underline transition-colors">
                  Daftar
                </Link>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-white/60 md:text-gray-600">
              <Link href="/panduan" className="font-bold text-white md:text-gray-800 hover:underline">Panduan SAPADA</Link> untuk wajib pajak daerah.
            </div>
          </div>
        </section>

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
