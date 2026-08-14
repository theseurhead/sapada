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
              <span className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tighter text-[#1877f2]">
                SAPADA
              </span>
            </div>
          </Link>
          <h2 className="text-2xl md:text-[28px] font-normal text-gray-800 dark:text-gray-200 leading-tight md:leading-normal max-w-[400px]">
            Sistem Administrasi Pajak Daerah untuk memudahkan pelaporan Anda.
          </h2>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-[400px]">
          <div className="bg-white dark:bg-[#242526] rounded-xl p-4 shadow-xl flex flex-col space-y-4">
            
            <form className="flex flex-col space-y-3">
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email atau nomor telepon" 
                  className="w-full px-4 py-3.5 bg-white dark:bg-[#3a3b3c] border border-gray-300 dark:border-[#3a3b3c] rounded-md text-gray-900 dark:text-gray-200 text-[17px] focus:outline-none focus:ring-1 focus:ring-[#1877f2] focus:border-[#1877f2] placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Kata sandi" 
                  className="w-full px-4 py-3.5 bg-white dark:bg-[#3a3b3c] border border-gray-300 dark:border-[#3a3b3c] rounded-md text-gray-900 dark:text-gray-200 text-[17px] focus:outline-none focus:ring-1 focus:ring-[#1877f2] focus:border-[#1877f2] placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold text-xl transition-all focus-visible:outline-none"
              >
                Log In
              </button>
            </form>

            <div className="text-center mt-3">
              <Link href="/forgot-password" className="text-[14px] font-medium text-[#1877f2] hover:underline transition-colors">
                Lupa kata sandi?
              </Link>
            </div>

            <div className="border-t border-gray-200 dark:border-[#3a3b3c] my-4"></div>

            <div className="flex justify-center mb-2">
              <Link href="/register" className="inline-flex items-center justify-center px-4 py-3 rounded-md bg-[#42b72a] hover:bg-[#36a420] text-white font-bold text-[17px] transition-all focus-visible:outline-none">
                Buat akun baru
              </Link>
            </div>
            
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-white dark:bg-[#242526] hover:bg-gray-50 dark:hover:bg-[#3a3b3c] border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200 font-semibold text-sm transition-all focus-visible:outline-none mt-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Masuk dengan Google
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="font-bold hover:underline text-gray-800 dark:text-gray-200">Panduan SAPADA</Link> untuk wajib pajak daerah.
          </div>
        </div>
      </div>
    </div>
  );
}
