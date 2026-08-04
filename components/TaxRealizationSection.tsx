"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, TrendingUp } from "lucide-react";

interface TaxItem {
  name: string;
  target: string;
  realization: string;
  percent: number;
}

const taxData: TaxItem[] = [
  {
    name: "Pajak MBLB",
    target: "2.000.000.000",
    realization: "976.293.252",
    percent: 49,
  },
  {
    name: "PBJT atas Tenaga Listrik",
    target: "44.000.000.000",
    realization: "23.322.211.495",
    percent: 53,
  },
  {
    name: "PBJT atas Jasa Perhotelan",
    target: "19.490.564.000",
    realization: "12.214.567.760",
    percent: 63,
  },
  {
    name: "PBJT atas Jasa Kesenian dan Hiburan",
    target: "6.400.000.000",
    realization: "3.900.000.000",
    percent: 61,
  },
  {
    name: "PBJT atas Jasa Parkir",
    target: "1.000.000.000",
    realization: "670.000.000",
    percent: 67,
  },
];

export default function TaxRealizationSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/20">
      {/* Header & Summary Card */}
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Realisasi Pajak per Jenis
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/50 mt-0.5">
              Data resmi capaian pajak daerah tahun ini — untuk transparansi ke masyarakat
            </p>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
          >
            <span>{isOpen ? "Tutup Detail" : "Lihat Detail Lengkap"}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-white/70 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* 1-Baris Ringkasan Ringkas */}
        <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
              Total Realisasi Tahun Berjalan
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                Rp 41,08 Miliar
              </span>
              <span className="text-xs sm:text-sm text-white/40">
                / Target Rp 72,89 Miliar
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-32 h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#1d4ed8] rounded-full w-[56%]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
              56%
            </span>
          </div>
        </div>
      </div>

      {/* Collapsible Detail */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5 space-y-4">
            {taxData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm">
                  <span className="font-medium text-white/90">{item.name}</span>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-white/50">
                      Rp {item.realization} / Rp {item.target}
                    </span>
                    <span className="font-semibold text-white bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-xs">
                      {item.percent}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1d4ed8] rounded-full transition-all duration-500"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}

            <div className="pt-2">
              <Link
                href="/live-pajak"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Lihat live pajak</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
