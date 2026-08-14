import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Share2,
} from "lucide-react";

// Social Media Custom SVG Icons for authentic branding
const InstagramIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const TwitterXIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactInfoSection() {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@bapendagarut",
      href: "https://instagram.com/bapendagarut",
      icon: InstagramIcon,
      color: "hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-500/10",
    },
    {
      name: "Facebook",
      handle: "Bapenda Garut",
      href: "https://facebook.com/bapendagarut",
      icon: FacebookIcon,
      color: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10",
    },
    {
      name: "YouTube",
      handle: "Bapenda Garut TV",
      href: "https://youtube.com/@bapendagarut",
      icon: YoutubeIcon,
      color: "hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10",
    },
    {
      name: "Twitter / X",
      handle: "@bapendagarut",
      href: "https://x.com/bapendagarut",
      icon: TwitterXIcon,
      color: "hover:text-white hover:border-white/30 hover:bg-white/10",
    },
  ];

  return (
    <section className="space-y-6 pt-2">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white md:text-gray-900">
          Informasi & Bantuan
        </h2>
        <p className="text-xs sm:text-sm text-white/60 md:text-gray-500 mt-1 max-w-md">
          Hubungi kami, cek jam operasional, atau terhubung melalui media sosial resmi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-8 pt-4">
        {/* Kolom 1: Hubungi Kami */}
        <div className="flex flex-col justify-start px-2 sm:px-4">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="font-bold text-base sm:text-lg text-white md:text-gray-900">
                Hubungi Kami
              </h3>
              <p className="text-[11px] text-white/50 md:text-gray-500 mt-1">
                Layanan & bantuan perpajakan
              </p>
            </div>

            <div className="space-y-3 pt-1 text-xs sm:text-sm text-white/70 md:text-gray-600">
              {/* Alamat */}
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-blue-400 md:text-blue-600 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Jl.+Otista+No.278,+Sukagalih,+Tarogong+Kidul,+Garut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 md:hover:text-blue-800 leading-relaxed transition-colors group-hover:underline underline-offset-2 flex-1"
                >
                  Jl. Otista No.278, Sukagalih, Tarogong Kidul, Garut 44151
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3 group">
                <MessageCircle className="w-4 h-4 text-emerald-400 md:text-emerald-600 flex-shrink-0" />
                <a
                  href="https://wa.me/6281315265538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white md:hover:text-gray-900 transition-colors group-hover:underline underline-offset-2"
                >
                  (0813) 1526 5538 <span className="text-[11px] text-emerald-400/80 md:text-emerald-600 font-medium ml-1">(WhatsApp)</span>
                </a>
              </div>

              {/* Telepon Admin */}
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-blue-400 md:text-blue-600 flex-shrink-0" />
                <a
                  href="tel:0262233456"
                  className="hover:text-blue-300 md:hover:text-blue-800 transition-colors group-hover:underline underline-offset-2"
                >
                  (0262) 233 456 <span className="text-[11px] text-white/40 md:text-gray-400 ml-1">(Kantor)</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-blue-400 md:text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:admin@bapenda.garutkab.go.id"
                  className="hover:text-blue-300 md:hover:text-blue-800 transition-colors break-all group-hover:underline underline-offset-2"
                >
                  admin@bapenda.garutkab.go.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 2: Jam Operasional */}
        <div className="flex flex-col justify-start px-2 sm:px-4">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="font-bold text-base sm:text-lg text-white md:text-gray-900">
                Jam Operasional
              </h3>
              <p className="text-[11px] text-white/50 md:text-gray-500 mt-1">
                Waktu pelayanan kantor Bapenda
              </p>
            </div>

            <div className="space-y-3 pt-1 text-xs sm:text-sm">
              <div className="space-y-3 px-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-white/80 md:text-gray-700 font-medium">Senin – Jumat</span>
                  <span className="text-white md:text-gray-900 font-semibold">08.00 – 16.00 WIB</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 text-xs text-white/50 md:text-gray-500 gap-1 mt-2">
                <span>Sabtu, Minggu & Libur Nasional</span>
                <span className="text-rose-400 md:text-rose-600 font-medium">Tutup</span>
              </div>

              {/* Online SAPADA 24/7 Badge */}
              <div className="mt-3 p-2.5 rounded-xl bg-blue-500/10 md:bg-blue-50 border border-blue-500/20 md:border-blue-200 flex items-center gap-2.5 text-xs text-blue-300 md:text-blue-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 md:bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 md:bg-emerald-600"></span>
                </span>
                <span className="font-medium leading-tight">
                  Layanan Online SAPADA aktif 24 jam nonstop.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 3: Ikuti Kami */}
        <div className="flex flex-col justify-start px-2 sm:px-4 col-span-1 md:col-span-1">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="font-bold text-base sm:text-lg text-white md:text-gray-900">
                Ikuti Kami
              </h3>
              <p className="text-[11px] text-white/50 md:text-gray-500 mt-1">
                Kanal resmi media sosial
              </p>
            </div>

            <div className="flex flex-row justify-center gap-4 sm:grid sm:grid-cols-2 sm:gap-4 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`flex flex-col items-center sm:items-start gap-1 p-2 sm:p-3 rounded-xl transition-all ${social.color}`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon />
                      <span className="hidden sm:inline text-xs font-semibold text-white md:text-gray-700">
                        {social.name}
                      </span>
                    </div>
                    <span className="hidden sm:inline text-[11px] text-white/50 md:text-gray-500 truncate w-full">
                      {social.handle}
                    </span>
                  </a>
                );
              })}
            </div>

            <p className="text-[11px] text-white/40 md:text-gray-400 pt-2 sm:pt-1 leading-relaxed text-center">
              Dapatkan berita terbaru, sosialisasi perda, dan pengumuman jatuh tempo pajak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
