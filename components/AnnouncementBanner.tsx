"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BellRing,
  Sparkles,
} from "lucide-react";
import { announcementsData, Announcement } from "@/data/announcements";

interface AnnouncementBannerProps {
  items?: Announcement[];
}

export default function AnnouncementBanner({
  items = announcementsData,
}: AnnouncementBannerProps) {
  // Hanya ambil banner yang berstatus active = true
  const activeItems = items.filter((item) => item.active);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalItems = activeItems.length;

  const handleNext = useCallback(() => {
    if (totalItems <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    if (totalItems <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Auto-slide otomatis (4.5 detik jika > 1 item aktif)
  useEffect(() => {
    if (totalItems <= 1 || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [totalItems, isPaused, handleNext]);

  // Pause on user interaction & resume after a few seconds
  const pauseAndScheduleResume = (delayMs = 3000) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    setIsPaused(true);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, delayMs);
  };

  const handleMouseEnter = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    pauseAndScheduleResume(2000);
  };

  // Mobile Touch Gestures (Swipe & Touch Hold)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const deltaX = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 35; // Minimum px for swipe trigger

      if (deltaX > minSwipeDistance) {
        handleNext();
      } else if (deltaX < -minSwipeDistance) {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
    pauseAndScheduleResume(3000);
  };

  if (totalItems === 0) return null;

  const current = activeItems[currentIndex];

  return (
    <div
      role="region"
      aria-label="Pengumuman Pajak Terkini"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0d1e48] via-[#17306e] to-[#0d1e48] border border-blue-500/40 shadow-xl shadow-blue-950/40 backdrop-blur-md p-3.5 sm:p-4 text-white select-none transition-all duration-300 hover:border-blue-400/60 group/banner"
    >
      {/* Background Subtle Glow */}
      <div className="absolute -left-12 -top-12 w-36 h-36 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-12 -bottom-12 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between gap-2.5 sm:gap-4">
        {/* Left: Previous button (Desktop & Tablet) */}
        {totalItems > 1 && (
          <button
            type="button"
            onClick={() => {
              handlePrev();
              pauseAndScheduleResume(4000);
            }}
            aria-label="Pengumuman sebelumnya"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-sm flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Center: Icon, Badge, Text, and CTA Button */}
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row items-center justify-center sm:justify-start md:justify-center gap-2 sm:gap-3 text-center sm:text-left">
          {/* Icon & Badge Row */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-blue-500/25 border border-blue-400/40 flex items-center justify-center text-blue-300 shadow-inner">
              <BellRing className="w-3.5 h-3.5 animate-pulse" />
            </div>

            {current.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-400/20 text-blue-200 border border-blue-400/40">
                {current.badge}
              </span>
            )}
          </div>

          {/* Announcement Message */}
          <div className="min-w-0 text-xs sm:text-sm font-medium text-white/95 leading-snug">
            {current.text}
          </div>

          {/* CTA Action Button */}
          {current.link && (
            <Link
              href={current.link.url}
              onClick={() => pauseAndScheduleResume(5000)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1d4ed8] hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-semibold shadow-md shadow-blue-900/50 transition-all flex-shrink-0 group/btn mt-1 sm:mt-0"
            >
              <span>{current.link.label}</span>
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Link>
          )}
        </div>

        {/* Right: Dot Indicators & Next Button */}
        {totalItems > 1 && (
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Dot Indicators on Desktop */}
            <div className="hidden lg:flex items-center gap-1.5 mr-1">
              {activeItems.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    pauseAndScheduleResume(4000);
                  }}
                  aria-label={`Ke pengumuman ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-4 bg-blue-300 shadow-sm"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              type="button"
              onClick={() => {
                handleNext();
                pauseAndScheduleResume(4000);
              }}
              aria-label="Pengumuman berikutnya"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-sm flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Dot Indicators Bar */}
      {totalItems > 1 && (
        <div className="flex sm:hidden items-center justify-center gap-1.5 pt-2 mt-1 border-t border-white/10">
          {activeItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                pauseAndScheduleResume(4000);
              }}
              aria-label={`Ke pengumuman ${idx + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-5 bg-blue-300" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
