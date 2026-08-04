export interface Announcement {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: {
    label: string;
    url: string;
  };
  active: boolean;
}

export const announcementsData: Announcement[] = [
  {
    id: "announcement-1",
    title: "Batas Akhir Jatuh Tempo PBB-P2 2026",
    description:
      "Bayar tagihan PBB-P2 Anda tepat waktu sebelum 31 Agustus 2026 bebas antre melalui QRIS dan Virtual Account.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    link: {
      label: "Cek Tagihan Sekarang",
      url: "/layanan/cek-kode-bayar",
    },
    active: true,
  },
  {
    id: "announcement-2",
    title: "Bebas Denda Keterlambatan Pajak Daerah",
    description:
      "Program khusus penghapusan sanksi denda administrasi pajak daerah Kabupaten Garut berlaku hingga akhir bulan ini.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80",
    link: {
      label: "Pelajari Syarat & Panduan",
      url: "/panduan",
    },
    active: true,
  },
  {
    id: "announcement-3",
    title: "Cetak e-SPPT & Surat Pajak Online",
    description:
      "Dapatkan salinan e-SPPT dan verifikasi status keabsahan dokumen pajak daerah instan langsung dari ponsel Anda.",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1400&q=80",
    link: {
      label: "Akses Layanan Mandiri",
      url: "/layanan/cek-surat",
    },
    active: true,
  },
];
