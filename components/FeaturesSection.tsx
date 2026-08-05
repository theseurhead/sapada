import React from "react";
import Link from "next/link";
import {
  QrCode,
  FileText,
  MapPin,
  TrendingUp,
  BookOpen,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Cek Kode Bayar",
    desc: "Cek rincian tagihan pajak via kode bayar — tanpa perlu ke kantor.",
    href: "/layanan/cek-kode-bayar",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: FileText,
    title: "Cetak e-SPPT & Cek Surat",
    desc: "Verifikasi keaslian & status surat keputusan pajak secara instan.",
    href: "/layanan/cek-surat",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: ClipboardList,
    title: "Cek Tiket BPHTB",
    desc: "Pantau status validasi berkas BPHTB dengan mudah.",
    href: "/layanan/cek-bphtb",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MapPin,
    title: "Peta Pajak",
    desc: "Pemetaan spasial sebaran potensi objek pajak Kabupaten Garut.",
    href: "/peta-pajak",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: TrendingUp,
    title: "Live Pajak",
    desc: "Pantau realisasi penerimaan pajak daerah secara realtime.",
    href: "/live-pajak",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: BookOpen,
    title: "Panduan Penggunaan",
    desc: "Petunjuk lengkap pendaftaran, pembayaran, dan layanan lainnya.",
    href: "/panduan",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className="space-y-5">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Fitur Layanan SAPADA
        </h2>
        <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-md">
          Semua kebutuhan pajak daerah dalam satu platform — cepat, mudah, dan transparan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="border border-white/10 rounded-2xl bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4 transition-transform duration-200 group-hover:scale-105`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className={`flex items-center gap-1 mt-4 text-xs font-medium ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                <span>Buka Layanan</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
