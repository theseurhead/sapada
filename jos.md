# Prompt: Revisi Struktur Landing Page SAPADA

## Konteks
Landing page SAPADA (sapada.vercel.app) saat ini terlalu panjang dan section-nya belum urut berdasarkan prioritas kebutuhan user. Revisi ini **hanya mengubah struktur, urutan, dan konten section** — bukan mengubah theme atau font.

## ATURAN KETAT — JANGAN DIUBAH
- **Theme (dark mode) tidak boleh diubah.** Pertahankan seluruh color palette, background, warna teks, dan warna card yang sudah ada.
- **Font/typeface tidak boleh diubah.** Pertahankan font-family yang sudah dipakai di seluruh halaman.
- Jangan mengubah komponen/library yang sudah bekerja dengan baik (accordion FAQ, card style, border-radius, dll) kecuali disebutkan eksplisit di bawah.

## Urutan Section Baru (Landing Page)

### 1. Header
- Logo SAPADA tetap di kiri, hamburger menu tetap di kanan.
- **Toggle biru** yang saat ini kosong tanpa label diganti jadi **tombol "Masuk"** yang proper (bentuk tombol biasa dengan teks "Masuk", bukan pill/toggle kosong).
- Di dalam **menu hamburger**, hapus tombol **"Masuk"** dan **"Daftar"** jika ada — sudah redundant karena "Masuk" sudah ada di header dan "Daftar" sudah ada di hero. Isi menu hamburger cukup navigasi halaman (Layanan, Panduan, dll), tanpa duplikat CTA auth.

### 2. Hero
- Pertahankan: judul "Sistem Administrasi Pajak Daerah", deskripsi, dan 3 stat card (Pengguna Aktif, Wajib Pajak Terdaftar, Kode Bayar Terbayar).
- Tombol CTA hero: **"Daftar"** (primary/solid, tampil pertama) dan **"Panduan"** (secondary/outline, tampil kedua — menggantikan tombol "Masuk" yang lama, karena fungsi Masuk sudah dipindah ke header).
- **Kedua tombol tanpa icon.** Tombol cukup berisi teks saja, tanpa icon apa pun.
- Hapus teks **"Belum punya akun? Daftar dulu di sini"** yang ada di bawah tombol CTA — sudah redundant dengan tombol "Daftar" di atasnya.
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
- **BUG KRITIS — perbaiki overlap konten:**
  - Section "Hubungi Kami" & "Jam Operasional" (grid 2 kolom) saat ini elemen-elemennya saling numpuk/overlap — contoh: judul "Jam Operasional" ketiban jadwal "Senin-Kamis", teks "Jumat" ketiban jam "07.30-16.30". Ini kemungkinan disebabkan container/card tidak punya `min-height` yang cukup atau ada elemen dengan `position: absolute`/negative margin yang salah. Pastikan tiap card jadwal & kontak punya container sendiri dengan tinggi otomatis mengikuti konten (auto height), bukan fixed height yang kepotong.
  - Grid "Ikuti Kami" (Instagram/Facebook/YouTube/Twitter, 2x2 card) juga overlap — icon dan nama platform pada card yang berdekatan saling tabrakan/tumpang tindih (contoh: icon Facebook menimpa teks "Instagram", icon Twitter menimpa teks "YouTube"). Perbaiki dengan memastikan gap/grid-gap yang cukup antar card, dan setiap card punya width/padding yang konsisten agar tidak overflow ke card sebelahnya.

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
1. Header (tombol "Masuk" menggantikan toggle biru kosong; menu hamburger tanpa duplikat Masuk/Daftar)
2. Hero (CTA: Daftar → Panduan, tanpa icon; teks "Belum punya akun" dihapus)
3. Banner Urgent (1 card statis)
4. Cara Pakai (baru)
5. Testimoni (2 card, avatar inisial)
6. FAQ
7. CTA Penutup (baru)
8. Footer (compact, grid 2 kolom, overlap di "Hubungi Kami/Jam Operasional" dan "Ikuti Kami" diperbaiki)

Halaman terpisah baru/dipindah: `/live-pajak` (Realisasi Pajak), `/dasar-hukum` (Dasar Hukum).