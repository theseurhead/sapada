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

];
