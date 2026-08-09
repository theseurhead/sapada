import React from "react";
import Header from "@/components/Header";
import TaxRealizationSection from "@/components/TaxRealizationSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function LivePajakPage() {
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

        <TaxRealizationSection />
        
        <div className="pt-8">
          <ContactInfoSection />
        </div>
      </main>

      {/* Footer */}
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
                className="text-white transition-colors"
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
