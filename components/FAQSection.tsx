"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "Apakah layanan SAPADA gratis?",
      answer: "Ya, penggunaan layanan aplikasi SAPADA 100% gratis. Anda hanya membayar sejumlah tagihan pajak daerah yang tertera tanpa biaya admin tambahan dari aplikasi."
    },
    {
      id: 2,
      question: "Apakah data saya aman?",
      answer: "Keamanan data Anda adalah prioritas kami. SAPADA menggunakan teknologi enkripsi terkini dan dihosting di server resmi pemerintah yang terjamin keamanannya."
    },
    {
      id: 3,
      question: "Bagaimana cara mendaftar akun?",
      answer: "Klik tombol 'Daftar' di pojok kanan atas, lalu isi formulir pendaftaran dengan NIK, nama lengkap, email, dan nomor HP. Setelah itu ikuti instruksi aktivasi yang dikirimkan."
    },
    {
      id: 4,
      question: "Metode pembayaran apa saja yang didukung?",
      answer: "Kami mendukung pembayaran melalui QRIS, virtual account berbagai bank, dompet digital (e-wallet), dan pembayaran langsung di gerai minimarket yang bekerjasama."
    }
  ];

  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="space-y-6 pt-6 sm:pt-8" id="faq">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Pertanyaan Umum
        </h2>
        <p className="text-sm sm:text-base text-white/60 mt-2 max-w-lg">
          Informasi yang sering ditanyakan seputar layanan SAPADA
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3 pt-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div 
              key={faq.id} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-white/20 bg-white/[0.04]' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.03]'}`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-white/90 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-sm text-white/60 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
