"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Megaphone } from "lucide-react";
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

  // Auto-slide effect (4.5 detik jika lebih dari 1 item aktif)
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
        // Swiped left -> Next
        handleNext();
      } else if (deltaX < -minSwipeDistance) {
        // Swiped right -> Prev
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;

    // Resume auto-slide after touch interaction ends
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
      className="w-full bg-gradient-to-r from-[#0d162a] via-[#16294d] to-[#0d162a] border-b border-blue-500/20 text-white select-none transition-colors"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-2 min-h-[36px] sm:min-h-[40px]">
        {/* Left: Previous button (if > 1 item) */}
        {totalItems > 1 && (
          <button
            type="button"
            onClick={() => {
              handlePrev();
              pauseAndScheduleResume(4000);
            }}
            aria-label="Pengumuman sebelumnya"
            className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        )}

        {/* Center: Active Banner Content */}
        <div className="flex-1 min-w-0 flex items-center justify-center gap-2 text-center text-xs sm:text-sm overflow-hidden">
          {/* Announcement Icon / Badge */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Megaphone className="w-3.5 h-3.5 text-blue-400 hidden xs:inline-block flex-shrink-0 animate-pulse" />
            {current.badge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 flex-shrink-0">
                {current.badge}
              </span>
            )}
          </div>

          {/* Banner Text */}
          <span className="text-white/90 truncate font-normal text-[11px] sm:text-xs md:text-sm">
            {current.text}
          </span>

          {/* Optional Action Link */}
          {current.link && (
            <Link
              href={current.link.url}
              onClick={() => pauseAndScheduleResume(5000)}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-blue-300 hover:text-white transition-colors underline underline-offset-2 flex-shrink-0 ml-1 group"
            >
              <span>{current.link.label}</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        {/* Right: Next button & Indicators (if > 1 item) */}
        {totalItems > 1 && (
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Dot Indicators */}
            <div className="hidden sm:flex items-center gap-1">
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
                      ? "w-4 bg-blue-400"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
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
              className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
