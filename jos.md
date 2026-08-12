# Task: Revisi Layout Landing Page SAPADA (Split-Screen ala Facebook)

Landing page sudah di-split jadi 2 kolom (kiri: hero/branding, kanan: card
"Mulai Gunakan SAPADA"). Sekarang lakukan revisi kecil berikut di atas
implementasi yang sudah ada. **Jangan ubah bagian lain di luar poin di bawah.**

## Revisi yang diminta

### 1. Hapus tombol "Masuk" di navbar/header
- Tombol biru "Masuk" yang ada di pojok kanan atas navbar **dihapus**.
- Navbar cukup berisi: logo SAPADA, menu Layanan, menu Panduan. Tidak ada
  CTA lagi di navbar (karena aksi masuk/daftar sudah dipindah ke card kanan).

### 2. Card "Mulai Gunakan SAPADA" — ganti isi jadi form login langsung
Saat ini isinya: judul, subjudul, tombol "Masuk ke Akun", divider "atau",
tombol "Daftar". Ganti jadi **form login langsung** (bukan tombol yang
membuka halaman lain):

- Judul & subjudul ("Mulai Gunakan SAPADA" / "Masuk atau daftar akun baru") — tetap, tidak berubah.
- Tambahkan 2 input field:
  - **Username** (atau NIK/email — sesuaikan dengan field auth yang sudah dipakai di sistem, jangan invent field baru di luar yang sudah ada di backend/auth logic)
  - **Password**
- Tombol utama: teks **"Masuk"**, warna **biru** (pakai warna accent biru yang sudah dipakai di komponen lain), full width, di bawah 2 input tadi.
- Di bawah tombol "Masuk", tetap ada divider "atau".
- Tombol kedua: teks **"Daftar"**, warna **abu-abu** (bukan biru lagi — biar tidak bersaing secara visual sama tombol "Masuk" yang jadi aksi utama), full width, style solid abu-abu gelap konsisten sama dark theme.
- Fungsi/logic dari tombol Masuk & Daftar **tetap connect ke handler/route yang sudah ada sekarang** (login submit & navigasi ke halaman daftar) — ini murni perubahan tampilan, bukan bikin flow baru.

### 3. Hapus badge/eyebrow "Aplikasi Resmi Bapenda Garut" di konten kiri atas
- Di kolom kiri, di atas headline "Sistem Administrasi Pajak Daerah", kalau
  ada text/badge kecil "Aplikasi Resmi Bapenda Garut" (atau sejenis) —
  **hapus elemen ini sepenuhnya**.
- Headline langsung jadi elemen paling atas di kolom kiri, disusul paragraf
  deskripsi dan stats seperti sekarang (tidak berubah).

## Yang TIDAK berubah (pastikan tetap sama)
- Konten paragraf deskripsi & angka statistik (3.708 / 1.127 / +51rb) tetap sama persis.
- Warna dark theme + accent biru tetap sama.
- Struktur split-screen 2 kolom (kiri hero, kanan card) tetap dipertahankan.
- Section di bawahnya (banner "Batas Akhir Jatuh Tempo PBB-P2 2026" dst) tidak disentuh.

## Deliverable
- Edit komponen/file landing page yang sudah ada, jangan buat halaman baru.
- Pastikan build tetap jalan.
- Verifikasi hasil di dev server sebelum selesai (cek: navbar tanpa tombol Masuk, card kanan sudah jadi form dengan tombol Masuk biru + Daftar abu-abu, eyebrow text di kiri atas sudah hilang).