"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
  ArrowRight,
} from "lucide-react";
import { announcementsData } from "@/data/announcements";

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

  // Mini carousel state inside mobile modal
  const activeAnnouncements = announcementsData.filter((a) => a.active);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const carouselResumeRef = useRef<NodeJS.Timeout | null>(null);
  const carouselTouchStartX = useRef<number | null>(null);
  const carouselTouchEndX = useRef<number | null>(null);

  const carouselNext = useCallback(() => {
    if (activeAnnouncements.length <= 1) return;
    setCarouselIndex((prev) => (prev + 1) % activeAnnouncements.length);
  }, [activeAnnouncements.length]);

  const carouselPrev = useCallback(() => {
    if (activeAnnouncements.length <= 1) return;
    setCarouselIndex(
      (prev) => (prev - 1 + activeAnnouncements.length) % activeAnnouncements.length
    );
  }, [activeAnnouncements.length]);

  useEffect(() => {
    if (!isMobileMenuOpen || activeAnnouncements.length <= 1 || carouselPaused) return;
    const timer = setInterval(carouselNext, 4000);
    return () => clearInterval(timer);
  }, [isMobileMenuOpen, activeAnnouncements.length, carouselPaused, carouselNext]);

  const pauseCarousel = (delay = 3500) => {
    if (carouselResumeRef.current) clearTimeout(carouselResumeRef.current);
    setCarouselPaused(true);
    carouselResumeRef.current = setTimeout(() => setCarouselPaused(false), delay);
  };

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

  // Lock body scroll when mobile modal is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

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
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                id="layanan-dropdown-btn"
                onClick={() => setIsLayananOpen(!isLayananOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isLayananOpen
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
                aria-expanded={isLayananOpen}
              >
                <span>Layanan</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isLayananOpen ? "rotate-180 text-blue-400" : "text-white/60"
                  }`}
                />
              </button>

              {/* Dropdown Menu Container */}
              {isLayananOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-white/10 bg-[#0d1017]/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      Layanan Pajak Daerah
                    </span>
                  </div>

                  <div className="space-y-0.5 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsLayananOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-[11px] text-white/50 leading-snug mt-0.5">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Menu Panduan */}
            <Link
              href="/panduan"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              Panduan
            </Link>
          </nav>
        </div>

        {/* Right Side: Action Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Tombol Daftar (Desktop Only) */}
          <Link
            href="/register"
            id="header-register-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Daftar</span>
          </Link>

          {/* Tombol Masuk (All Screens) */}
          <Link
            href="/login"
            id="header-login-btn"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#1d4ed8] hover:bg-blue-700 text-xs sm:text-sm font-medium text-white transition-all shadow-md shadow-blue-900/30 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:outline-none"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Masuk</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex md:hidden items-center justify-center p-2 rounded-xl transition-all border ${
              isMobileMenuOpen
                ? "text-white bg-white/15 border-white/30"
                : "text-white/80 hover:text-white hover:bg-white/10 border-white/10"
            } focus:outline-none`}
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>


      {/* Mobile Modal Overlay Navigation */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi SAPADA"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md pt-20 px-4 pb-8 flex items-start justify-center overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Modal Content Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#0e131f] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[85vh] animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="relative w-7 h-7 flex-shrink-0">
                  <Image
                    src="/logo/logo.png"
                    alt="SAPADA Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white tracking-tight">
                    Navigasi SAPADA
                  </h3>
                  <p className="text-[10px] text-white/50">
                    Bapenda Kab. Garut
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Tutup menu navigasi"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar">

              {/* ── Mini Banner Carousel ── */}
              {activeAnnouncements.length > 0 && (
                <div
                  className="relative w-full overflow-hidden rounded-2xl border border-white/15 shadow-xl bg-[#0b1120] select-none"
                  style={{ aspectRatio: "16/7" }}
                  onTouchStart={(e) => {
                    if (carouselResumeRef.current) clearTimeout(carouselResumeRef.current);
                    setCarouselPaused(true);
                    carouselTouchStartX.current = e.touches[0].clientX;
                    carouselTouchEndX.current = null;
                  }}
                  onTouchMove={(e) => {
                    carouselTouchEndX.current = e.touches[0].clientX;
                  }}
                  onTouchEnd={() => {
                    if (
                      carouselTouchStartX.current !== null &&
                      carouselTouchEndX.current !== null
                    ) {
                      const delta = carouselTouchStartX.current - carouselTouchEndX.current;
                      if (delta > 35) carouselNext();
                      else if (delta < -35) carouselPrev();
                    }
                    carouselTouchStartX.current = null;
                    carouselTouchEndX.current = null;
                    pauseCarousel(3000);
                  }}
                >
                  {activeAnnouncements.map((item, idx) => (
                    <div
                      key={item.id}
                      aria-hidden={idx !== carouselIndex}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        idx === carouselIndex
                          ? "opacity-100 pointer-events-auto z-10"
                          : "opacity-0 pointer-events-none z-0"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                        sizes="500px"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-center px-5 py-4 max-w-[75%] z-20 space-y-1.5">
                        <h4 className="text-sm font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-white/80 leading-snug line-clamp-2 drop-shadow">
                          {item.description}
                        </p>
                        {item.link && (
                          <div className="pt-1">
                            <Link
                              href={item.link.url}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                pauseCarousel(5000);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1d4ed8] hover:bg-blue-600 text-white text-[11px] font-semibold shadow-lg shadow-blue-950/60 transition-all active:scale-95"
                            >
                              <span>{item.link.label}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Dot indicators */}
                  {activeAnnouncements.length > 1 && (
                    <div className="absolute bottom-2.5 right-3 z-30 flex items-center gap-1">
                      {activeAnnouncements.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setCarouselIndex(idx);
                            pauseCarousel(4000);
                          }}
                          aria-label={`Slide ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === carouselIndex
                              ? "w-5 bg-blue-400 shadow-sm"
                              : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Layanan Accordion / Section */}
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => setIsMobileLayananOpen(!isMobileLayananOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <span>Layanan Pajak Daerah</span>
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
                          <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 flex-shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">
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

              {/* Panduan Link */}
              <Link
                href="/panduan"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-sm font-semibold text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div>Panduan Penggunaan</div>
                  <div className="text-[10px] text-white/50 font-normal">
                    Petunjuk lengkap pendaftaran & pembayaran pajak
                  </div>
                </div>
              </Link>

              {/* Quick Links Section */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/peta-pajak"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-xs text-white/80 hover:text-white transition-colors text-center"
                >
                  Peta Objek Pajak
                </Link>
                <Link
                  href="/live-pajak"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-xs text-white/80 hover:text-white transition-colors text-center"
                >
                  Live Penerimaan Pajak
                </Link>
              </div>
            </div>

            {/* Modal Footer (Action Buttons) */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center gap-2.5">
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-white/90 hover:bg-white/5 transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span>Daftar Akun</span>
              </Link>

              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1d4ed8] hover:bg-blue-700 text-xs font-semibold text-white shadow-lg shadow-blue-950 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
