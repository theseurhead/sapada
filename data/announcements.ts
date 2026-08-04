export interface Announcement {
  id: string;
  badge?: string;
  text: string;
  link?: {
    label: string;
    url: string;
  };
  active: boolean;
}

export const announcementsData: Announcement[] = [
  {
    id: "announcement-1",
    badge: "Jatuh Tempo",
    text: "Batas akhir pembayaran PBB-P2 Tahun 2026 jatuh tempo pada tanggal 31 Agustus 2026.",
    link: {
      label: "Cek Tagihan",
      url: "/layanan/cek-kode-bayar",
    },
    active: true,
  },
  {
    id: "announcement-2",
    badge: "Pemutihan Denda",
    text: "Program Penghapusan Sanksi Denda Administrasi Pajak Daerah diperpanjang hingga akhir bulan ini!",
    link: {
      label: "Pelajari Syarat",
      url: "/panduan",
    },
    active: true,
  },
  {
    id: "announcement-3",
    badge: "Layanan Baru",
    text: "Kini cetak e-SPPT PBB-P2 dan Surat Keterangan Bebas Pajak dapat diakses secara mandiri.",
    link: {
      label: "Coba Sekarang",
      url: "/layanan/cek-surat",
    },
    active: true,
  },
];
