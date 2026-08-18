import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-[#18191a] flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-[980px] flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 pt-10 pb-20">
        
        {/* Left Side: Brand & Text */}
        <div className="w-full md:w-[500px] flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-12">
          <Link href="/" className="mb-4 inline-block">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                <Image src="/logo/logo.png" alt="SAPADA Logo" fill className="object-contain" priority />
              </div>
            </div>
          </Link>
          <h2 className="text-2xl md:text-[28px] font-normal text-gray-800 dark:text-gray-200 leading-tight md:leading-normal max-w-[400px]">
            Sistem Administrasi Pajak Daerah untuk memudahkan pelaporan Anda.
          </h2>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-[420px]">
          <div className="bg-white dark:bg-[#242526] rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none flex flex-col space-y-5 border border-gray-100 dark:border-[#3a3b3c]">
            
            <form className="flex flex-col space-y-4">
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email atau nomor telepon" 
                  className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#3a3b3c] border border-gray-200 dark:border-[#4e4f50] rounded-xl text-gray-900 dark:text-gray-200 text-[17px] focus:outline-none focus:ring-2 focus:ring-[#1877f2]/50 focus:border-[#1877f2] transition-all placeholder-gray-400 dark:placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Kata sandi" 
                  className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#3a3b3c] border border-gray-200 dark:border-[#4e4f50] rounded-xl text-gray-900 dark:text-gray-200 text-[17px] focus:outline-none focus:ring-2 focus:ring-[#1877f2]/50 focus:border-[#1877f2] transition-all placeholder-gray-400 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex flex-col space-y-3 mt-1">
                <div className="flex justify-start">
                  <Link href="/forgot-password" className="text-sm font-semibold text-[#1877f2] hover:text-blue-700 transition-colors">
                    Lupa kata sandi?
                  </Link>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer group">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#1877f2]/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1877f2] group-hover:after:scale-95"></div>
                    <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300 cursor-pointer">Ingat saya di perangkat ini</span>
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
                <div className="w-full border-t border-gray-200 dark:border-[#3a3b3c]"></div>
              </div>
              <div className="relative flex justify-center text-[13px] font-medium">
                <span className="px-3 bg-white dark:bg-[#242526] text-gray-400">ATAU</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-[#242526] hover:bg-gray-50 dark:hover:bg-[#3a3b3c] border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold text-[15px] transition-all shadow-sm focus-visible:outline-none"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Masuk dengan Google
            </button>
            
            <div className="text-center mt-4 mb-2 text-[15px]">
              <span className="text-gray-600 dark:text-gray-400">Belum punya akun? </span>
              <Link href="/register" className="font-semibold text-[#1877f2] hover:underline transition-colors">
                Daftar
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="font-bold hover:underline text-gray-800 dark:text-gray-200">Panduan SAPADA</Link> untuk wajib pajak daerah.
          </div>
        </div>
      </div>
    </div>
  );
}
