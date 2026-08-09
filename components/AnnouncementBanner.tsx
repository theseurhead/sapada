import React from "react";
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
  const item = activeItems[0];

  if (!item) return null;

  return (
    <div
      role="region"
      aria-label="Banner Pengumuman dan Promosi SAPADA"
      className="w-full relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl bg-[#0b1120] select-none group/banner aspect-[16/9] sm:aspect-[21/8] md:aspect-[24/9] min-h-[200px] sm:min-h-[240px] md:min-h-[260px] flex items-center"
    >
      <div className="absolute inset-0 pointer-events-auto z-10">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover object-center transform transition-transform duration-1000 ease-out scale-105 group-hover/banner:scale-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 900px, 1000px"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 sm:via-black/60 sm:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 py-6 max-w-2xl z-20 space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            {item.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed drop-shadow line-clamp-2 sm:line-clamp-3 max-w-xl break-words">
            {item.description}
          </p>

          {item.link && (
            <div className="pt-1.5 sm:pt-2">
              <Link
                href={item.link.url}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1d4ed8] hover:bg-blue-600 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950/60 transition-all hover:scale-105 group/cta"
              >
                <span>{item.link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
