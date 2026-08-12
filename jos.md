# Task: Revisi Card Login (Kolom Kanan) — Sesuai Referensi Baru

Ubah **isi card di kolom kanan saja** (yang sekarang judulnya "Mulai Gunakan
SAPADA"). Bagian lain di landing page (navbar, kolom kiri/hero, section di
bawahnya) **tidak diubah**.

## Struktur card baru (urut dari atas ke bawah)

1. **Judul**: "Selamat datang" — (dari referensi tertulis "Selamat datang
   kembali", tapi kata **"kembali" dihapus**, jadi cukup "Selamat datang").
2. **Subjudul**: "Masuk ke SAPADA dengan Google atau akun yang sudah terdaftar."
3. **Tombol "Masuk dengan Google"**
   - Full width, style outline (border tipis, background sedikit lebih terang dari card, teks putih/terang — sesuaikan ke dark theme situs, jangan pakai background putih polos seperti di referensi).
   - Ada icon Google di kiri teks.
4. **Divider** dengan teks di tengah: "atau gunakan email"
5. **Field Email**
   - Label: "Email"
   - Input placeholder: "email@kamu.com"
6. **Field Password**
   - Label: "Password" di kiri, dan link **"Lupa kata sandi?"** di kanan (sejajar, dalam satu baris yang sama dengan label).
   - Input placeholder: "Password"
7. **Tombol "Masuk"**
   - Full width, warna biru (accent yang sudah dipakai di situs), teks putih, bold.
8. **Teks bantuan** di bawah tombol, center-align:
   - Baris 1: "Belum punya akun? **Daftar sekarang**" — "Daftar sekarang" jadi link/teks bold, sisanya teks biasa.
   - Baris 2 (di bawahnya, ukuran lebih kecil): "Sudah memiliki NPWPD?" — sebagai link.

## Catatan penting
- Ini styling & struktur field **login**, bukan bikin flow baru. Kalau di
  kode sekarang sudah ada handler untuk submit login / redirect ke Google
  OAuth / link ke halaman daftar, **pakai fungsi yang sudah ada**, cuma
  tampilannya yang disesuaikan ke struktur di atas.
- Tetap pakai dark theme yang sudah dipakai di seluruh situs (background
  gelap, teks terang, accent biru) — referensi gambar pakai card putih,
  tapi itu cuma acuan **layout/struktur**, bukan acuan warna.
- Tombol "Daftar" abu-abu yang sebelumnya berdiri sendiri di card **tidak
  perlu lagi** sebagai tombol terpisah, karena sekarang sudah terwakili
  lewat teks "Daftar sekarang" di bagian bawah card.
- Kalau field "Sudah memiliki NPWPD?" belum ada halaman/route tujuannya di
  sistem, buat sebagai link placeholder saja (jangan invent logic baru),
  atau tanyakan dulu ke saya sebelum lanjut kalau ragu.

## Deliverable
- Edit komponen card login yang sudah ada, jangan bikin komponen baru dari nol kalau tidak perlu.
- Pastikan build tetap jalan.
- Verifikasi di dev server: judul "Selamat datang" (tanpa "kembali"), tombol Google, divider "atau gunakan email", field Email & Password dengan "Lupa kata sandi?" sejajar label Password, tombol Masuk biru, dan 2 baris teks bantuan di bawahnya.