# Redesign Landing Page SAPADA — Tanpa Merusak Fungsi yang Sudah Ada

## ⚠️ Prinsip Utama (Wajib Dibaca Dulu)
Ini task **redesign/restructure**, BUKAN rewrite dari nol. Sebelum ubah apapun:

1. **Baca dulu semua komponen yang terkait landing page** (biasanya di `app/page.tsx` atau `pages/index.tsx` kalau Next.js, plus komponen-komponen child-nya seperti `Hero`, `Carousel`, `WhySapada`/`Features`, `StatsSection`, `RealisasiPajak`, `DasarHukum`, `ContactSection`, `Footer`, dll — sesuaikan nama sebenarnya di project).
2. **Jangan hapus/rename props, function, atau state yang dipakai komponen lain** tanpa cek dulu apakah dipakai di tempat lain (search usage-nya dulu di seluruh project).
3. **Jangan ubah routing/URL/anchor id yang sudah dipakai di navbar/hamburger menu** — kalau ada link ke `#fitur`, section barunya HARUS tetap punya `id="fitur"` di element yang sesuai, supaya link lama tetap jalan.
4. **Jangan ubah/pindahkan data fetching logic** (misal fetch stats "3.708 Pengguna Aktif", data realisasi pajak, data dasar hukum) — itu kemungkinan connect ke API/database asli. Redesign hanya boleh ubah **layout, urutan, styling, dan copy text**, bukan cara data-nya diambil.
5. **Test tiap section satu-satu** setelah diubah — pastikan tidak ada import yang jadi unused/error, tidak ada component yang crash karena props hilang.
6. Kalau ragu apakah suatu perubahan bisa breaking, **tanya dulu sebelum eksekusi**, jangan asal jalan.

---

## Konteks
Landing page SAPADA (sapada.vercel.app) — aplikasi resmi Bapenda Garut untuk urus pajak daerah. Struktur section saat ini (dari atas ke bawah):

1. Navbar (logo, menu, tombol Masuk/Daftar, hamburger)
2. Carousel promo (3 slide: PBB-P2 jatuh tempo, bebas denda, cetak e-SPPT)
3. Headline utama "Sistem Administrasi Pajak Daerah" + deskripsi + 3 stats (Pengguna Aktif, Wajib Pajak Terdaftar, Kode Bayar Terbayar) + CTA Masuk/Panduan
4. "Kenapa SAPADA?" — 3 card generic (Cepat, Mudah, Lengkap)
5. "Realisasi Pajak per Jenis" — progress bar realisasi per jenis pajak (MBLB, PBJT Listrik, dll)
6. "Dasar Hukum" — list 7 regulasi lengkap
7. "Informasi & Bantuan" — kontak, jam operasional, sosmed
8. Footer

## Masalah yang Perlu Diperbaiki

### 1. Section "Fitur" tidak ada (PRIORITAS UTAMA)
Hamburger menu punya link ke section "Fitur" (anchor `#fitur`), tapi section itu tidak ada — yang ada cuma "Kenapa SAPADA?" yang isinya value proposition kosong (Cepat/Mudah/Lengkap), bukan daftar fitur konkret.

**Yang harus dibuat:**
- Ganti/tambah section baru dengan `id="fitur"` berisi grid fitur nyata, minimal cover layanan yang linknya sudah ada di project (cek dulu route yang sudah eksis, jangan bikin route baru):
  - Cek Tagihan / Kode Bayar (`/layanan/cek-kode-bayar`)
  - Cetak e-SPPT & Cek Surat Pajak (`/layanan/cek-surat`)
  - Daftar Objek Pajak (cek route pendaftaran objek pajak yang sudah ada)
  - Peta Pajak (`/peta-pajak`)
  - Live Pajak (`/live-pajak`)
  - Panduan (`/panduan`)
- Tiap item: icon + judul singkat + deskripsi 1 baris + link ke halaman terkait (pakai komponen Link/anchor yang sudah dipakai di project, jangan bikin pattern baru).
- Kalau ternyata section "Kenapa SAPADA?" itu sendiri yang dimaksud sebagai target `#fitur` di kode (cek dulu di komponen Navbar/hamburger, id apa yang dituju), maka rename konten section itu jadi grid fitur di atas, JANGAN bikin section baru terpisah supaya tidak duplikat.

### 2. Reorder section
Urutan baru yang disarankan:
1. Navbar
2. Headline utama + stats + CTA (pindah ke atas, sebelum carousel)
3. Carousel promo
4. Section Fitur (dari poin 1)
5. Realisasi Pajak per Jenis (pindah lebih ke atas, karena ini konten unik & kredibel)
6. Dasar Hukum (diringkas — lihat poin 3)
7. Informasi & Bantuan
8. Footer

⚠️ Saat reorder, pastikan tidak ada dependency antar-section yang break (misal shared state, context, atau scroll-based animation yang bergantung urutan DOM).

### 3. Ringkas section "Dasar Hukum"
Saat ini semua 7 regulasi di-render penuh di homepage. Ubah jadi:
- Tampilkan hanya 3 regulasi teratas/terpenting di homepage
- Sisanya tetap ada di balik tombol "Lihat Semua (7)" yang sudah ada — pastikan tombol itu tetap berfungsi (cek apakah dia expand inline atau navigasi ke halaman lain, jangan ubah behavior-nya, cukup ubah jumlah default yang ditampilkan)

### 4. Tambah trust/security signal
Tambahkan badge kecil di dekat hero atau footer, misal: "Resmi Pemerintah Kabupaten Garut" + icon shield/verified. Style mengikuti desain yang sudah ada (jangan bikin warna/style baru yang beda dari design system project).

### 5. Tambah FAQ (opsional, kalau ada waktu)
Section accordion FAQ sebelum footer. Pakai komponen accordion/collapsible yang sudah ada di project kalau ada (cek dulu apakah sudah pakai library seperti shadcn/ui, radix, dll — reuse, jangan install library baru kalau belum perlu).

---

## Checklist Sebelum Selesai
- [ ] Semua link di navbar & hamburger menu masih mengarah ke section/halaman yang benar (terutama `#fitur`)
- [ ] Semua data dinamis (stats, realisasi pajak, dasar hukum) masih fetch dari sumber yang sama, tidak di-hardcode
- [ ] Tidak ada console error / warning baru setelah perubahan
- [ ] Layout tetap responsive di mobile (test di lebar layar ~375px, sesuai referensi screenshot)
- [ ] Tidak ada import/komponen yang jadi unused
- [ ] Build project berhasil tanpa error (`npm run build` atau sesuai package manager project)
-