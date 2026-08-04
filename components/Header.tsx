"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LogIn,
  UserPlus,
  ChevronDown,
  BookOpen,
  FileText,
  Receipt,
  QrCode,
  CalendarDays,
  Map,
  TrendingUp,
  Users,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

// List 7 Sub-menu Layanan
const servicesList = [
  {
    name: "Cek Surat",
    desc: "Cek keaslian & status surat keputusan pajak",
    icon: FileText,
    href: "/layanan/cek-surat", // TODO: Halaman Cek Surat
  },
  {
    name: "Cek Tiket BPHTB",
    desc: "Verifikasi status validasi berkas BPHTB",
    icon: Receipt,
    href: "/layanan/cek-bphtb", // TODO: Halaman Cek Tiket BPHTB
  },
  {
    name: "Cek Kode Bayar",
    desc: "Cek rincian tagihan via kode bayar",
    icon: QrCode,
    href: "/layanan/cek-kode-bayar", // TODO: Halaman Cek Kode Bayar
  },
  {
    name: "Kalender Pajak",
    desc: "Jadwal jatuh tempo pembayaran & pelaporan",
    icon: CalendarDays,
    href: "/layanan/kalender-pajak", // TODO: Halaman Kalender Pajak
  },
  {
    name: "Peta Pajak",
    desc: "Pemetaan spasial sebaran potensi objek pajak",
    icon: Map,
    href: "/peta-pajak",
  },
  {
    name: "Live Pajak",
    desc: "Pantau realisasi penerimaan pajak realtime",
    icon: TrendingUp,
    href: "/live-pajak",
  },
  {
    name: "Kontributor",
    desc: "Daftar kontributor pengembangan SAPADA",
    icon: Users,
    href: "/layanan/kontributor", // TODO: Halaman Kontributor
  },
];

export default function Header() {
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLayananOpen, setIsMobileLayananOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close desktop dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLayananOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsLayananOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsLayananOpen(false);
    }, 150);
  };

  return (
    <header className="w-full border-b border-white/10 bg-[#0a0c10]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left Side: Brand Logo + Desktop Nav Links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo/logo.png"
                alt="SAPADA Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              SAPADA
            </span>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-1.5">
            {/* Menu Layanan (Dropdown) */}
            <div
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                id="nav-layanan-btn"
                onClick={() => setIsLayananOpen(!isLayananOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isLayananOpen
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isLayananOpen}
              >
                <span>Layanan</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isLayananOpen ? "rotate-180 text-blue-400" : "text-white/50 group-hover:text-white"
                  }`}
                />
              </button>

              {/* Desktop Dropdown Panel */}
              <div
                className={`absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#0e131f] border border-white/15 p-2 shadow-2xl backdrop-blur-xl z-50 transition-all duration-150 ${
                  isLayananOpen
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0 md:group-hover:pointer-events-auto"
                }`}
              >
                <div className="px-3 py-2 mb-1 border-b border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Layanan Pajak Daerah
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">
                    7 Menu
                  </span>
                </div>
                <div className="space-y-0.5">
                  {servicesList.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsLayananOpen(false)}
                        className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover/item:bg-[#1d4ed8] group-hover/item:text-white transition-colors mt-0.5 flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-white group-hover/item:text-blue-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-[11px] text-white/50 truncate">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Menu Panduan */}
            <Link
              href="/panduan"
              id="nav-panduan-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              <BookOpen className="w-3.5 h-3.5 text-white/50" />
              <span>Panduan</span>
            </Link>
          </nav>
        </div>

        {/* Right Side: Navbar Actions (Daftar & Masuk + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            href="/register"
            id="header-register-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/30 text-xs font-medium text-white/80 hover:text-white transition-all hover:bg-white/5"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Daftar</span>
          </Link>

          <Link
            href="/login"
            id="header-login-btn"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1d4ed8] hover:bg-blue-700 text-xs sm:text-sm font-medium text-white transition-all shadow-md shadow-blue-900/30 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Masuk</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0c10] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-1">
          {/* Mobile Layanan Accordion */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
            <button
              type="button"
              onClick={() => setIsMobileLayananOpen(!isMobileLayananOpen)}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>Layanan</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-normal">
                  7 Menu
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 text-white/60 transition-transform duration-200 ${
                  isMobileLayananOpen ? "rotate-180 text-blue-400" : ""
                }`}
              />
            </button>

            {isMobileLayananOpen && (
              <div className="p-2 pt-0 border-t border-white/10 space-y-1 bg-black/40">
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileLayananOpen(false);
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-xs text-white/90"
                    >
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {service.name}
                        </div>
                        <div className="text-[10px] text-white/50">
                          {service.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Mobile Panduan Link */}
          <Link
            href="/panduan"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-3 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-sm font-medium text-white transition-colors"
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Panduan</span>
          </Link>

          {/* Mobile Register Link if on small screen */}
          <div className="pt-1 flex flex-col gap-2 sm:hidden">
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-white/15 text-xs font-medium text-white/90 hover:bg-white/5"
            >
              <UserPlus className="w-4 h-4" />
              <span>Daftar Akun Baru</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
