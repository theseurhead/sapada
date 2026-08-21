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
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 pt-2 sm:pt-4 pb-8 w-full max-w-5xl mx-auto">
          
          {/* Left Side: Intro Text */}
          <div className="flex-1 flex flex-col text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Selamat Datang di <span className="text-blue-600">SAPADA</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Sistem Administrasi Pajak Daerah Kabupaten Garut. Kelola pajak daerah Anda dengan mudah, cepat, dan transparan secara online.
            </p>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Aman & Transparan
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full max-w-[420px] shrink-0">
            <div className="bg-white border border-gray-200 rounded-[20px] md:rounded-[24px] p-5 sm:p-8 shadow-xl flex flex-col w-full text-gray-900">
              
              <div className="mb-5 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2">Masuk ke SAPADA</h3>
                <p className="text-[13px] md:text-[15px] text-gray-500">Masukkan data Anda untuk masuk ke akun.</p>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 mb-5 md:mb-6">
                <button type="button" className="flex-1 flex items-center justify-center gap-2 md:gap-2.5 px-4 py-2.5 md:py-3 rounded-[12px] md:rounded-[14px] bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-[13px] md:text-[14px] font-semibold text-gray-700 shadow-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Masuk dengan Google
                </button>
                <button type="button" className="flex-1 flex items-center justify-center gap-2 md:gap-2.5 px-4 py-2.5 md:py-3 rounded-[12px] md:rounded-[14px] bg-white hover:bg-gray-50 border border-gray-200 transition-colors text-[13px] md:text-[14px] font-semibold text-gray-700 shadow-sm">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05 1.88-3.08 1.88-1.09 0-1.44-.65-3.03-.65-1.6 0-1.95.65-3.03.65-1.04 0-2.11-.93-3.08-1.88C2.5 17.5 1.15 12.33 3.65 9.42c1.23-1.42 2.89-2.3 4.54-2.3 1.54 0 2.86.97 3.86.97 1.01 0 2.59-1.12 4.39-1.12 1.48 0 2.82.61 3.73 1.62-3.23 1.94-2.73 6.55.33 7.78-.71 1.81-1.74 3.48-3.45 5.11zm-3.69-14.8c-.8.95-2.05 1.55-3.21 1.45.18-1.17.82-2.34 1.63-3.14.8-.95 2.05-1.55 3.21-1.45-.18 1.17-.82 2.34-1.63 3.14z"/>
                  </svg>
                  Masuk dengan Apple
                </button>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center mb-5 md:mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-[12px] md:text-[13px] font-medium">
                  <span className="px-3 bg-white text-gray-400">Atau</span>
                </div>
              </div>

              {/* Form */}
              <form className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1.5 md:space-y-2">
                  <label htmlFor="email-home" className="text-[13px] md:text-sm font-medium text-gray-700">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email-home" 
                    name="email" 
                    placeholder="Masukkan email Anda" 
                    className="w-full px-4 py-3 md:py-3.5 bg-gray-50 border border-gray-200 rounded-[12px] md:rounded-[14px] text-gray-900 text-[14px] md:text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1.5 md:space-y-2">
                  <label htmlFor="password-home" className="text-[13px] md:text-sm font-medium text-gray-700">Kata Sandi</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      id="password-home" 
                      name="password" 
                      placeholder="Masukkan kata sandi" 
                      className="w-full px-4 py-3 md:py-3.5 bg-gray-50 border border-gray-200 rounded-[12px] md:rounded-[14px] text-gray-900 text-[14px] md:text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400 pr-12"
                      required
                    />
                    <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
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
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500 group-hover:after:scale-95 border border-gray-300"></div>
                    <span className="ml-2.5 md:ml-3 text-[13px] md:text-sm font-medium text-gray-600 cursor-pointer group-hover:text-gray-900 transition-colors">Ingat saya</span>
                  </label>
                  <Link href="/forgot-password" className="text-[13px] md:text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                    Lupa kata sandi?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 md:py-3.5 rounded-[12px] md:rounded-[14px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 active:scale-[0.98] text-white font-bold text-[15px] md:text-[16px] transition-all focus-visible:outline-none shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                >
                  Masuk
                </button>
              </form>

              <div className="text-center mt-5 md:mt-6 text-[14px] md:text-[15px]">
                <span className="text-gray-500">Belum punya akun? </span>
                <Link href="/register" className="font-semibold text-gray-900 hover:text-blue-600 hover:underline transition-colors">
                  Daftar
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 8. Footer */}
      <footer className="w-full border-t border-white/10 md:border-gray-200 bg-[#07090e] md:bg-gray-50 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col items-center text-center space-y-2">
          <div className="flex flex-col items-center mb-2">
            <span className="font-bold text-base tracking-tight text-white md:text-gray-900 leading-none">
              SAPADA
            </span>
            <span className="text-[11px] text-white/50 md:text-gray-500 mt-1">
              Sistem Administrasi Pajak Daerah Garut
            </span>
          </div>
          <div className="text-xs text-white/40 md:text-gray-400">
            © 2026 Badan Pendapatan Daerah Kabupaten Garut. Hak Cipta Dilindungi.
          </div>
          <div className="text-[11px] text-white/30 md:text-gray-400">
            Pemerintah Kabupaten Garut
          </div>
        </div>
      </footer>
    </div>
  );
}
