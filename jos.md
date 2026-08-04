# Prompt: Revisi Posisi & Styling Banner Carousel

## Konteks
Banner carousel yang sudah dibuat (dari task sebelumnya) posisi dan stylingnya masih kurang tepat. Ini revisinya.

## Yang TIDAK boleh diubah
- Behavior carousel yang sudah ada (auto-slide, swipe manual, pause on interaction) — tidak perlu diubah, cuma posisi & tampilannya saja
- Struktur navbar dan hero section

## Revisi 1: Posisi Banner
1. Banner saat ini ada di **atas navbar** (di atas logo SAPADA) — ini salah, pindahkan ke **bawah navbar**, jadi urutannya: Navbar → Banner Carousel → Hero Section.

## Revisi 2: Banner Harus Berbasis Gambar, Bukan Card Teks
2. Implementasi sekarang salah konsep — yang dibuat adalah card teks polos dengan background warna solid, padahal yang dimaksud adalah **banner visual/gambar** (seperti banner promosi/ads pada umumnya). Perbaiki jadi:
   - Setiap slide banner punya **gambar/foto/ilustrasi sebagai background**, bukan cuma warna solid (untuk sekarang pakai gambar dummy/placeholder yang relevan, misal dari Unsplash atau ilustrasi generik terkait pajak/pemerintahan)
   - Teks (judul/deskripsi + tombol CTA) di-overlay di atas gambar tersebut, pastikan kontras teks terhadap gambar tetap terbaca jelas (bisa pakai overlay gradient gelap di belakang teks kalau perlu)
   - Proporsi banner lebih landscape/wide (seperti banner web pada umumnya), bukan kotak seperti card sekarang

## Revisi 3: Hamburger Menu Jadi Modal yang Bisa Di-toggle
3. Saat tombol hamburger menu (☰) di navbar diklik, saat ini kemungkinan langsung fetch/navigasi ke konten/halaman lain. Ubah behavior-nya jadi **munculkan modal/overlay** di atas halaman yang sedang aktif (bukan pindah halaman atau fetch konten baru).
4. Behavior harus **toggle**: klik pertama buka modal, klik lagi (di tombol hamburger yang sama) tutup modal. Selain itu modal juga tetap bisa ditutup dengan klik di luar modal atau tombol close di dalam modal.

## Revisi 4: Simplifikasi Elemen Banner
5. Hapus tombol navigasi panah kiri-kanan di banner (tidak perlu, cukup andalkan swipe manual dan dot indicator saja untuk navigasi antar slide).
6. Hapus badge/tombol "PEMUTIHAN 100%" yang ada di dalam banner — banner cukup punya **1 tombol CTA saja** (misal "Pelajari Syarat & Panduan"), hapus tombol/badge tambahan lainnya.

## Cara Eksekusi
1. Pindahkan posisi komponen banner ke bawah navbar dulu, cek tidak ada elemen yang overlap atau nabrak navbar/hero.
2. Ganti styling banner dari card teks polos jadi banner berbasis gambar sesuai Revisi 2.
3. Perbaiki behavior hamburger menu jadi modal yang bisa di-toggle sesuai Revisi 3.
4. Sederhanakan elemen banner: hapus panah navigasi dan badge "Pemutihan 100%" sesuai Revisi 4, sisakan 1 tombol CTA saja.
5. Cek tampilan di mobile dan desktop, pastikan banner terlihat rapi dengan 1 CTA saja, swipe/dot indicator tetap berfungsi, dan hamburger menu bisa dibuka-tutup (toggle) tanpa reload/fetch halaman.
6.