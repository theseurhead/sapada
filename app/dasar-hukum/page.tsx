import React from "react";
import Header from "@/components/Header";
import LegalBasisSection from "@/components/LegalBasisSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function DasarHukumPage() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white flex flex-col selection:bg-[#1d4ed8] selection:text-white">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-8 space-y-8 sm:space-y-12">
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        <LegalBasisSection />
        
        <div className="pt-8">
          <ContactInfoSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 md:border-gray-200 bg-[#07090e] md:bg-gray-50 mt-12 sm:mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
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
