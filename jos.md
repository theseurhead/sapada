# Prompt: Revisi Struktur Landing Page SAPADA

## Konteks
Landing page SAPADA (sapada.vercel.app) saat ini terlalu panjang dan section-nya belum urut berdasarkan prioritas kebutuhan user. Revisi ini **hanya mengubah struktur, urutan, dan konten section** — bukan mengubah theme atau font.

## ATURAN KETAT — JANGAN DIUBAH
- **Theme (dark mode) tidak boleh diubah.** Pertahankan seluruh color palette, background, warna teks, dan warna card yang sudah ada.
- **Font/typeface tidak boleh diubah.** Pertahankan font-family yang sudah dipakai di seluruh halaman.
- Jangan mengubah komponen/library yang sudah bekerja dengan baik (accordion FAQ, card style, border-radius, dll) kecuali disebutkan eksplisit di bawah.

## Urutan Section Baru (Landing Page)

### 1. Header
- Tidak ada perubahan struktur.
- **Toggle biru** di sebelah hamburger menu: jika ini adalah dark/light mode switch, tambahkan icon (matahari/bulan) sebagai indikator. Jika tidak punya fungsi aktif saat ini, hapus dari UI.

### 2. Hero
- Pertahankan: judul "Sistem Administrasi Pajak Daerah", deskripsi, dan 3 stat card (Pengguna Aktif, Wajib Pajak Terdaftar, Kode Bayar Terbayar).
- **Urutan tombol CTA dibalik**: tombol **"Daftar"** jadi primary/solid (tampil pertama), tombol **"Masuk"** jadi secondary/outline (tampil kedua).
- **Hapus icon panah pada kedua tombol Daftar dan Masuk.** Tombol cukup berisi teks saja, tanpa icon apa pun.
- Hapus label "Resmi Pemerintah Kabupaten Garut" (akan pakai domain resmi pemerintah nanti).

### 3. Banner Urgent (Jatuh Tempo Pajak)
- Ubah dari carousel 3 slide menjadi **1 card statis** — hanya tampilkan info "Batas Akhir Jatuh Tempo PBB-P2 2026".
- Pastikan teks deskripsi tidak terpotong di tengah kata (perbaiki line-clamp/truncate agar berhenti di akhir kata utuh, atau perpendek copy dari awal).
- Hapus 2 slide lain (Bebas Denda, Cetak e-SPPT) dari carousel ini — kontennya bisa dipindah jadi bagian dari halaman Panduan jika masih relevan.

### 4. Cara Pakai (SECTION BARU — belum ada di versi saat ini)
Section baru dengan 3 langkah bernomor + icon, ditampilkan sebagai 3 card horizontal (atau stack vertikal di mobile):
1. **Daftar Akun** — Isi NIK, nama, email, dan nomor HP, lalu verifikasi.
2. **Cek Tagihan** — Lihat tagihan pajak dan kode bayar Anda di dashboard.
3. **Bayar via QRIS/VA** — Bayar langsung tanpa perlu ke kantor Bapenda.

Style: konsisten dengan card style yang sudah ada (dark card, border-radius sama), gunakan warna aksen biru yang sudah dipakai di tombol untuk nomor/icon langkah.

### 5. Testimoni
- Kurangi dari 3 card menjadi **2 card** saja.
- **Ganti avatar foto placeholder (pravatar.cc) dengan avatar inisial nama** dalam lingkaran warna solid (misal lingkaran biru dengan inisial putih di tengah, style konsisten dengan warna primary yang sudah ada). Ini untuk menghindari kesan foto palsu/generik pada aplikasi resmi pemerintah.

### 6. FAQ
- Tidak ada perubahan. Pertahankan accordion dan 4 pertanyaan yang sudah ada.

### 7. CTA Penutup (SECTION BARU)
Section pendek sebelum footer:
- Judul singkat, contoh: "Belum punya akun?"
- Deskripsi 1 baris ajakan mendaftar.
- 1 tombol "Daftar Sekarang" (tanpa icon, konsisten dengan tombol hero).

### 8. Footer (dirapikan)
- Gabungkan 3 blok ("Hubungi Kami", "Jam Operasional", "Ikuti Kami") menjadi **1 section compact** dengan grid 2 kolom di mobile (bukan 3 blok terpisah dengan jarak besar antar blok).
- Judul masing-masing sub-section dibuat **center-aligned dan tanpa icon**.
- Pastikan spacing antar sub-section rapat dan konsisten, tidak ada gap kosong yang berlebihan.

## Section yang Dipindah Keluar dari Landing Page
Section berikut **dihapus dari landing page** dan dipindahkan ke halaman terpisah (tetap bisa diakses via link, tidak dihapus datanya):
- **"Realisasi Pajak per Jenis"** → pindahkan ke halaman `/live-pajak` (sudah ada link ini di footer).
- **"Dasar Hukum"** (7 regulasi) → pindahkan ke halaman baru `/dasar-hukum`, atau gabungkan ke halaman `/panduan` jika lebih sesuai dengan struktur routing yang ada.

## Section yang Dihapus Sepenuhnya
- Section "Fitur Layanan" (listing card fitur) — sudah digantikan oleh section "Cara Pakai" dan "Testimoni" di atas.
- Untuk semua tombol/link fitur yang saat diklik masih mengarah ke halaman kosong/belum jadi: arahkan ke halaman atau modal dengan pesan **"Fitur ini sedang dikembangkan"**, bukan halaman kosong atau broken link.

## Spacing & Layout
- Audit ulang jarak antar section (margin/padding vertikal) agar konsisten di seluruh halaman — saat ini ada gap yang jauh lebih besar di beberapa titik (contoh: setelah section Dasar Hukum menuju Informasi & Bantuan) dibanding section lainnya.
- Gunakan satu skala spacing yang konsisten (misal step 24px/32px/48px) untuk semua jarak antar section, jangan campur nilai custom.

## Ringkasan Urutan Final
1. Header
2. Hero (CTA: Daftar → Masuk, tanpa icon)
3. Banner Urgent (1 card statis)
4. Cara Pakai (baru)
5. Testimoni (2 card, avatar inisial)
6. FAQ
7. CTA Penutup (baru)
8. Footer (compact, grid 2 kolom)

Halaman terpisah baru/dipindah: `/live-pajak` (Realisasi Pajak), `/dasar-hukum` (Dasar Hukum).