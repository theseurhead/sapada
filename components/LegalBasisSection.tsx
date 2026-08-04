"use client";

import React, { useState } from "react";
import { ChevronDown, Scale } from "lucide-react";

interface Regulation {
  tag: string;
  title: string;
  description: string;
}

const regulations: Regulation[] = [
  {
    tag: "UU",
    title: "UU HKPD",
    description:
      "Undang-undang Nomor 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah",
  },
  {
    tag: "PP",
    title: "PP 35",
    description:
      "Peraturan Pemerintah Nomor 35 Tahun 2024 tentang Ketentuan Umum Perpajakan Daerah",
  },
  {
    tag: "Permen",
    title: "Permendagri 90",
    description:
      "Peraturan Menteri Dalam Negeri Nomor 90 Tahun 2023 tentang Klasifikasi, Kodefikasi, dan Nomenklatur Perencanaan Pembangunan dan Keuangan Daerah",
  },
  {
    tag: "PMK",
    title: "PMK 85",
    description:
      "Peraturan Menteri Keuangan Nomor 85 Tahun 2024 tentang Pedoman Penilaian Pajak Bumi dan Bangunan Perdesaan dan Perkotaan",
  },
  {
    tag: "PMK",
    title: "PMK 7",
    description:
      "Peraturan Menteri Keuangan Nomor 7 Tahun 2025 tentang Pedoman Penagihan dan Pemeriksaan Pajak Daerah",
  },
  {
    tag: "Perda",
    title: "Perda Nomor 8",
    description:
      "Peraturan Daerah Kabupaten Garut Nomor 8 Tahun 2023 tentang Pajak dan Retribusi Daerah",
  },
  {
    tag: "Perbup",
    title: "Perbup 44",
    description:
      "Peraturan Bupati Kabupaten Garut Nomor 44 Tahun 2025 tentang Tata Cara Pemungutan Pajak Daerah",
  },
];

export default function LegalBasisSection() {
  const [showAll, setShowAll] = useState(false);

  // Tampilkan 3 regulasi utama jika belum dibuka
  const previewCount = 3;
  const initialRegulations = regulations.slice(0, previewCount);
  const remainingRegulations = regulations.slice(previewCount);

  return (
    <section className="border border-white/10 rounded-2xl bg-white/[0.02] p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-white/20 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Dasar Hukum
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/50 mt-0.5">
            {regulations.length} regulasi perpajakan daerah terkait
          </p>
        </div>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
        >
          <span>
            {showAll
              ? "Tampilkan Lebih Sedikit"
              : `Lihat Semua (${regulations.length})`}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-white/70 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div className="divide-y divide-white/5 pt-1">
        {/* 3 Regulasi Awal */}
        {initialRegulations.map((reg, idx) => (
          <div key={idx} className="py-3.5 first:pt-1 last:pb-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {reg.tag}
              </span>
              <span className="font-semibold text-white text-sm">
                {reg.title}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              {reg.description}
            </p>
          </div>
        ))}

        {/* Regulasi Sisanya (Collapsible) */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            showAll ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden min-h-0 divide-y divide-white/5">
            {remainingRegulations.map((reg, idx) => (
              <div key={idx} className="py-3.5 first:pt-3.5 last:pb-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {reg.tag}
                  </span>
                  <span className="font-semibold text-white text-sm">
                    {reg.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {reg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
