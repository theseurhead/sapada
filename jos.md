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
   - Tombol navigasi (panah kiri-kanan / dot indicator) tetap dipertahankan, posisikan di atas gambar dengan kontras yang cukup

## Revisi 3: Hamburger Menu Jadi Modal, Bukan Navigasi
3. Saat tombol hamburger menu (☰) di navbar diklik, saat ini kemungkinan langsung fetch/navigasi ke konten/halaman lain. Ubah behavior-nya jadi **munculkan modal/overlay** di atas halaman yang sedang aktif (bukan pindah halaman atau fetch konten baru). Modal berisi isi menu navigasi, dan bisa ditutup dengan klik di luar modal atau tombol close.

## Cara Eksekusi
1. Pindahkan posisi komponen banner ke bawah navbar dulu, cek tidak ada elemen yang overlap atau nabrak navbar/hero.
2. Ganti styling banner dari card teks polos jadi banner berbasis gambar sesuai Revisi 2.
3. Perbaiki behavior hamburger menu jadi modal sesuai Revisi 3.
4. Cek tampilan di mobile dan desktop, pastikan banner terlihat seperti banner visual sungguhan (bukan card teks), dan modal hamburger berfungsi normal (buka/tutup) tanpa reload/fetch halaman.
5.