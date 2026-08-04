"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { announcementsData, Announcement } from "@/data/announcements";

interface AnnouncementBannerProps {
  items?: Announcement[];
}

export default function AnnouncementBanner({
  items = announcementsData,
}: AnnouncementBannerProps) {
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

  // Auto-slide effect (4.5s jika > 1 item aktif)
  useEffect(() => {
    if (totalItems <= 1 || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [totalItems, isPaused, handleNext]);

  const pauseAndScheduleResume = (delayMs = 3000) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
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

  // Mobile Touch Gestures (Swipe)
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
      const minSwipeDistance = 35;

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

  return (
    <div
      role="region"
      aria-label="Banner Pengumuman dan Promosi SAPADA"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="w-full relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl bg-[#0b1120] select-none group/banner aspect-[16/9] sm:aspect-[21/8] md:aspect-[24/9] min-h-[200px] sm:min-h-[240px] md:min-h-[260px] flex items-center cursor-grab active:cursor-grabbing"
    >
      {/* Slides */}
      {activeItems.map((item, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={item.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive
                ? "opacity-100 pointer-events-auto z-10"
                : "opacity-0 pointer-events-none z-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              className="object-cover object-center transform transition-transform duration-1000 ease-out scale-105 group-hover/banner:scale-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 1000px"
            />

            {/* Dark Gradient Overlay for Maximum Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 sm:via-black/60 sm:to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Content (Title, Description, and 1 Single CTA Button) */}
            <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 py-6 max-w-2xl z-20 space-y-2 sm:space-y-3">
              {/* Title */}
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-3 max-w-xl">
                {item.description}
              </p>

              {/* Single CTA Button */}
              {item.link && (
                <div className="pt-1.5 sm:pt-2">
                  <Link
                    href={item.link.url}
                    onClick={() => pauseAndScheduleResume(5000)}
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1d4ed8] hover:bg-blue-600 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950/60 transition-all hover:scale-105 group/cta"
                  >
                    <span>{item.link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Bottom Dot Indicators Only (No Arrow Buttons) */}
      {totalItems > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-lg">
          {activeItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                pauseAndScheduleResume(4000);
              }}
              aria-label={`Buka slide banner ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 sm:w-6 bg-blue-400 shadow-md"
                  : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
