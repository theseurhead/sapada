import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0c10] md:bg-white flex flex-col items-center justify-center p-4 selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 group">
        <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
          <Image src="/logo/logo.png" alt="SAPADA Logo" fill className="object-contain" priority />
        </div>
        <span className="font-bold text-lg tracking-tight text-white md:text-gray-900">SAPADA</span>
      </Link>

      <div className="w-full max-w-[420px]">
        <div className="bg-[#12141a] md:bg-white border border-white/10 md:border-gray-200 rounded-3xl p-8 sm:p-10 shadow-2xl md:shadow-xl flex flex-col space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white md:text-gray-900 tracking-tight">Selamat datang kembali</h2>
            <p className="text-sm text-white/60 md:text-gray-500 mt-2 leading-relaxed">
              Masuk ke SAPADA dengan Google atau akun yang sudah terdaftar.
            </p>
          </div>

          <div className="flex flex-col space-y-5">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 md:bg-white hover:bg-white/10 md:hover:bg-gray-50 border border-white/10 md:border-gray-200 text-white md:text-gray-700 font-medium text-sm transition-all focus-visible:ring-2 focus-visible:ring-white/20 md:focus-visible:ring-gray-200 focus-visible:outline-none shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Masuk dengan Google
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10 md:border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-xs font-medium text-white/40 md:text-gray-400">ATAU GUNAKAN EMAIL</span>
              <div className="flex-grow border-t border-white/10 md:border-gray-200"></div>
            </div>

            <form className="flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/80 md:text-gray-700" htmlFor="email">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="nama@email.com" 
                    className="w-full px-4 py-3.5 bg-[#0a0c10] md:bg-white border border-white/10 md:border-gray-300 rounded-xl text-white md:text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/30 md:placeholder-gray-400 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-white/80 md:text-gray-700" htmlFor="password">
                      KATA SANDI
                    </label>
                    <Link href="/forgot-password" className="text-xs font-medium text-blue-400 md:text-blue-600 hover:text-blue-300 md:hover:text-blue-700 transition-colors">
                      Lupa?
                    </Link>
                  </div>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    className="w-full px-4 py-3.5 bg-[#0a0c10] md:bg-white border border-white/10 md:border-gray-300 rounded-xl text-white md:text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/30 md:placeholder-gray-400 transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#1d4ed8] hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/30 md:shadow-blue-600/20 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                Masuk ke Akun
              </button>
            </form>

            <div className="pt-4 text-center flex flex-col space-y-3 border-t border-white/10 md:border-gray-200 mt-4">
              <div className="text-sm text-white/60 md:text-gray-500 mt-4">
                Belum punya akun?{" "}
                <Link href="/register" className="text-white md:text-gray-900 font-bold hover:text-blue-400 md:hover:text-blue-600 transition-colors">
                  Daftar sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
