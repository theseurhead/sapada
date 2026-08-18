"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  LogIn,
  UserPlus,
  ChevronDown,
  ChevronRight,
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
  Home,
  Wrench,
  KeyRound,
  LayoutList,
  History,
  HelpCircle,
} from "lucide-react";
import { announcementsData } from "@/data/announcements";

// ── Menu groups sesuai referensi desain ──────────────────────────────────────
const navMenuGroups = [
  {
    label: "Navigasi",
    items: [
      { name: "Beranda", icon: Home, href: "/" },
      { name: "Panduan", icon: BookOpen, href: "/panduan" },
      { name: "Fitur", icon: LayoutList, href: "/#fitur" },
      { name: "Kontributor", icon: Users, href: "/layanan/kontributor" },
      { name: "Perubahan", icon: History, href: "/changelog" },
    ],
  },
  {
    label: "Akun",
    items: [
      { name: "Masuk", icon: LogIn, href: "/login" },
      { name: "Daftar", icon: UserPlus, href: "/register" },
      { name: "Lupa Kata Sandi", icon: KeyRound, href: "/forgot-password" },
    ],
  },
];

// Sub-tool items under "Alat"
const toolSubItems = [
  { name: "Cek Surat", icon: FileText, href: "/layanan/cek-surat" },
  { name: "Cek Tiket BPHTB", icon: Receipt, href: "/layanan/cek-bphtb" },
  { name: "Cek Kode Bayar", icon: QrCode, href: "/layanan/cek-kode-bayar" },
  { name: "Kalender Pajak", icon: CalendarDays, href: "/layanan/kalender-pajak" },
  { name: "Peta Pajak", icon: Map, href: "/peta-pajak" },
  { name: "Live Pajak", icon: TrendingUp, href: "/live-pajak" },
];

// List 7 Sub-menu Layanan (for desktop dropdown)
const servicesList = [
  { name: "Cek Surat", desc: "Cek keaslian & status surat keputusan pajak", icon: FileText, href: "/layanan/cek-surat" },
  { name: "Cek Tiket BPHTB", desc: "Verifikasi status validasi berkas BPHTB", icon: Receipt, href: "/layanan/cek-bphtb" },
  { name: "Cek Kode Bayar", desc: "Cek rincian tagihan via kode bayar", icon: QrCode, href: "/layanan/cek-kode-bayar" },
  { name: "Kalender Pajak", desc: "Jadwal jatuh tempo pembayaran & pelaporan", icon: CalendarDays, href: "/layanan/kalender-pajak" },
  { name: "Peta Pajak", desc: "Pemetaan spasial sebaran potensi objek pajak", icon: Map, href: "/peta-pajak" },
  { name: "Live Pajak", desc: "Pantau realisasi penerimaan pajak realtime", icon: TrendingUp, href: "/live-pajak" },
  { name: "Kontributor", desc: "Daftar kontributor pengembangan SAPADA", icon: Users, href: "/layanan/kontributor" },
];

export default function Header() {
  // Desktop layanan dropdown
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mobile compact dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isToolExpanded, setIsToolExpanded] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Mobile full modal (kept for future use, currently using compact dropdown)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLayananOpen, setIsMobileLayananOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Mini carousel state
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
    setCarouselIndex((prev) => (prev - 1 + activeAnnouncements.length) % activeAnnouncements.length);
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

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLayananOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile compact dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setIsMobileDropdownOpen(false);
        setIsToolExpanded(false);
      }
    }
    if (isMobileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileDropdownOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsLayananOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setIsLayananOpen(false), 150);
  };

  // Body scroll lock for full modal
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // ESC to close compact dropdown
  useEffect(() => {
    if (!isMobileDropdownOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileDropdownOpen(false);
        setIsToolExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileDropdownOpen]);

  // ── Full modal (portal) ────────────────────────────────────────────────────
  const fullModal = isMobileMenuOpen && mounted ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu Navigasi SAPADA"
      onClick={() => setIsMobileMenuOpen(false)}
      className="fixed inset-0 bg-black/80 backdrop-blur-md pt-20 px-4 pb-8 flex items-start justify-center overflow-y-auto animate-in fade-in duration-200"
      style={{ zIndex: 9999 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#0e131f] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[85vh] animate-in zoom-in-95 duration-200"
      >
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 flex-shrink-0">
              <Image src="/logo/logo.png" alt="SAPADA Logo" fill className="object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white tracking-tight">Navigasi SAPADA</h3>
              <p className="text-[10px] text-white/50">Bapenda Kab. Garut</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Tutup menu navigasi"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
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
              onTouchMove={(e) => { carouselTouchEndX.current = e.touches[0].clientX; }}
              onTouchEnd={() => {
                if (carouselTouchStartX.current !== null && carouselTouchEndX.current !== null) {
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
                    idx === carouselIndex ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <Image src={item.image} alt={item.title} fill className="object-cover object-center" sizes="500px" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                  <div className="relative h-full flex flex-col justify-center px-5 py-4 max-w-[75%] z-20 space-y-1.5">
                    <h4 className="text-sm font-extrabold text-white leading-tight tracking-tight drop-shadow-md">{item.title}</h4>
                    <p className="text-[11px] text-white/80 leading-snug line-clamp-2 drop-shadow">{item.description}</p>
                    {item.link && (
                      <div className="pt-1">
                        <Link
                          href={item.link.url}
                          onClick={() => { setIsMobileMenuOpen(false); pauseCarousel(5000); }}
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
              {activeAnnouncements.length > 1 && (
                <div className="absolute bottom-2.5 right-3 z-30 flex items-center gap-1">
                  {activeAnnouncements.map((_, idx) => (
                    <button key={idx} type="button" onClick={() => { setCarouselIndex(idx); pauseCarousel(4000); }} aria-label={`Slide ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === carouselIndex ? "w-5 bg-blue-400 shadow-sm" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
            <button
              type="button"
              onClick={() => setIsMobileLayananOpen(!isMobileLayananOpen)}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              <span className="flex items-center gap-2 font-semibold">
                <span>Layanan Pajak Daerah</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-normal">7 Menu</span>
              </span>
              <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-200 ${isMobileLayananOpen ? "rotate-180 text-blue-400" : ""}`} />
            </button>
            {isMobileLayananOpen && (
              <div className="p-2 pt-0 border-t border-white/10 space-y-1 bg-black/40">
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.name} href={service.href} onClick={() => { setIsMobileMenuOpen(false); setIsMobileLayananOpen(false); }}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors text-xs text-white/90"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400 flex-shrink-0"><Icon className="w-4 h-4" /></div>
                      <div>
                        <div className="font-semibold text-white">{service.name}</div>
                        <div className="text-[10px] text-white/50">{service.desc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/panduan" onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-sm font-semibold text-white transition-colors"
          >
            <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400"><BookOpen className="w-4 h-4" /></div>
            <div>
              <div>Panduan Penggunaan</div>
              <div className="text-[10px] text-white/50 font-normal">Petunjuk lengkap pendaftaran & pembayaran pajak</div>
            </div>
          </Link>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link href="/peta-pajak" onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-xs text-white/80 hover:text-white transition-colors text-center"
            >Peta Objek Pajak</Link>
            <Link href="/live-pajak" onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-xs text-white/80 hover:text-white transition-colors text-center"
            >Live Penerimaan Pajak</Link>
          </div>
        </div>

        {/* Auth buttons removed from mobile modal as requested */}
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="w-full border-b border-white/10 md:border-gray-200 bg-[#0a0c10]/90 md:bg-white/90 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Left Side: Brand Logo + Desktop Nav Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image src="/logo/logo.png" alt="SAPADA Logo" fill className="object-contain" priority />
              </div>
              <span className="font-bold text-lg tracking-tight text-white md:text-gray-900">SAPADA</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5">
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
                    isLayananOpen ? "text-white bg-white/10 md:text-blue-600 md:bg-blue-50" : "text-white/70 hover:text-white hover:bg-white/5 md:text-gray-600 md:hover:text-gray-900 md:hover:bg-gray-100"
                  }`}
                  aria-expanded={isLayananOpen}
                >
                  <span>Layanan</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLayananOpen ? "rotate-180 text-blue-400 md:text-blue-600" : "text-white/60 md:text-gray-500"}`} />
                </button>

                {isLayananOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-white/10 bg-[#0d1017]/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="px-3 py-2 border-b border-white/10 mb-1">
                      <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Layanan Pajak Daerah</span>
                    </div>
                    <div className="space-y-0.5 max-h-[380px] overflow-y-auto">
                      {servicesList.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link key={service.name} href={service.href} onClick={() => setIsLayananOpen(false)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">{service.name}</div>
                              <div className="text-[11px] text-white/50 leading-snug mt-0.5">{service.desc}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/panduan" className="px-3 py-1.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 md:text-gray-600 md:hover:text-gray-900 md:hover:bg-gray-100 transition-colors">
                Panduan
              </Link>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* ── Mobile Hamburger + Compact Dropdown ──────────────────────── */}
            <div ref={mobileDropdownRef} className="relative flex">
              {/* Hamburger Button — 44×44px touch target */}
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => {
                  setIsMobileDropdownOpen((prev) => !prev);
                  setIsToolExpanded(false);
                }}
                className={`flex items-center justify-center rounded-xl transition-all border ${
                  isMobileDropdownOpen
                    ? "text-white bg-white/15 border-white/30 md:text-gray-900 md:bg-gray-100 md:border-gray-300"
                    : "text-white/80 hover:text-white hover:bg-white/10 border-white/10 md:text-gray-600 md:hover:text-gray-900 md:hover:bg-gray-100 md:border-gray-200"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
                style={{ width: 44, height: 44 }}
                aria-label={isMobileDropdownOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={isMobileDropdownOpen}
                aria-haspopup="true"
              >
                {isMobileDropdownOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* ── Compact Dropdown Panel ──────────────────────────────────── */}
              {isMobileDropdownOpen && (
                <div
                  className="absolute top-[calc(100%+10px)] right-0 w-64 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-3 duration-200"
                  style={{ zIndex: 9999, backgroundColor: '#0e131f', boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)' }}
                  role="menu"
                  aria-label="Menu navigasi mobile"
                >
                  <div className="p-2 space-y-0.5">

                    {/* Item: Layanan (with accordion submenu) */}
                    <button
                      type="button"
                      onClick={() => setIsToolExpanded((prev) => !prev)}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/8 transition-colors"
                      aria-expanded={isToolExpanded}
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <LayoutList className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium flex-1 text-left">Layanan</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${isToolExpanded ? "rotate-180 text-blue-400" : ""}`}
                      />
                    </button>

                    {/* Submenu Layanan */}
                    {isToolExpanded && (
                      <div
                        className="mx-1 mb-1 rounded-xl overflow-y-auto animate-in slide-in-from-top-1 fade-in duration-150"
                        style={{ backgroundColor: '#080c14', maxHeight: '260px', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)' }}
                      >
                        {/* Submenu items — no header label */}
                        <div className="p-1.5 space-y-0.5">
                          {servicesList.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                role="menuitem"
                                onClick={() => {
                                  setIsMobileDropdownOpen(false);
                                  setIsToolExpanded(false);
                                }}
                                className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/6 transition-colors group"
                              >
                                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-0.5">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold text-white/90 group-hover:text-white transition-colors">{service.name}</div>
                                  <div className="text-[10px] text-white/40 leading-snug mt-0.5 line-clamp-1">{service.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Divider */}
                    <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)', margin: '2px 4px' }} />

                    {/* Item: Panduan */}
                    <Link
                      href="/panduan"
                      role="menuitem"
                      onClick={() => setIsMobileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/8 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/6 flex items-center justify-center text-white/50 flex-shrink-0">
                        <BookOpen className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">Panduan</span>
                    </Link>

                    {/* Item: FAQ */}
                    <Link
                      href="/faq"
                      role="menuitem"
                      onClick={() => setIsMobileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-2.5 py-2.5 rounded-xl text-sm text-white/80 hover:text-white hover:bg-white/8 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/6 flex items-center justify-center text-white/50 flex-shrink-0">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">Pertanyaan Umum</span>
                    </Link>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Full modal via portal (kept, triggered by isMobileMenuOpen if needed) */}
      {mounted && createPortal(fullModal, document.body)}
    </>
  );
}
