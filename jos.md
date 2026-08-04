# Prompt: Tambah Menu "Panduan" dan "Layanan" di Header

Tolong tambahkan 2 item baru di navbar/header landing page SAPADA (route utama `/`), ditaruh di antara logo dan tombol Daftar/Masuk yang sudah ada. **Jangan ubah warna, font, atau style navbar yang sudah ada** — item baru ini mengikuti style navbar existing.

## 1. Menu "Panduan"
- Tambahkan link/tombol "Panduan" di header.
- Klik menuju halaman/section panduan (kalau sudah ada halaman Panduan di project, arahkan ke situ; kalau belum ada, buat sebagai placeholder link dulu — beri tahu saya kalau perlu saya sediakan konten/route-nya).

## 2. Menu "Layanan" (dropdown, menggantikan konsep "Fitur")
Buat 1 menu di header bernama **"Layanan"** yang saat diklik/hover membuka dropdown berisi sub-menu berikut (semua item **clickable**, masing-masing mengarah ke halaman/fungsinya sendiri):

- Cek Surat
- Cek Tiket BPHTB
- Cek Kode Bayar
- Kalender Pajak
- Peta Pajak
- Live Pajak
- Kontributor

**Detail teknis dropdown:**
- Style dropdown: card/panel muncul di bawah menu "Layanan" saat diklik (atau hover, sesuaikan dengan pola interaksi navbar yang sudah ada di project — kalau menu lain pakai klik, ikut klik; kalau hover, ikut hover).
- Tiap item dropdown idealnya punya ikon kecil di kiri teks (kalau sudah ada icon set/library yang dipakai di project, gunakan yang konsisten).
- Setiap item adalah link — kalau route/halaman tujuannya belum ada di project (misal belum ada halaman "Cek Kode Bayar"), buat sebagai link placeholder dulu dan beri komentar TODO di kode, jangan bikin route baru yang isinya kosong tanpa penanda.
- Dropdown harus responsive: di mobile, menu "Layanan" tetap bisa diakses (misal via menu hamburger yang sudah ada) dan sub-item-nya tetap bisa di-tap satu-satu.

## Yang TIDAK boleh diubah
- Warna, font, dan layout navbar yang sudah ada
- Menu/tombol lain di header (Daftar, Masuk, hamburger menu)

## Cara eksekusi
1. Tambahkan menu "Panduan" dulu, pastikan link/placeholder-nya jalan.
2. Baru bikin menu "Layanan" dengan dropdown-nya, pastikan semua 7 item di dalamnya clickable (meski sementara placeholder untuk yang belum ada halamannya).
3. Cek tampilan di mobile dan desktop, pastikan dropdown tidak terpotong atau nabrak elemen lain.
4.