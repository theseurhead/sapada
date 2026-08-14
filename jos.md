# PROMPT REVISI UI — SAPADA (sapada.vercel.app)

Konteks: SAPADA adalah aplikasi resmi Bapenda Kabupaten Garut untuk administrasi pajak daerah (cek tagihan, bayar via QRIS/VA, dll). Landing page ini akan dibandingkan dan disinkronkan dengan versi resmi di `sapada.bapenda.garutkab.go.id`. Prioritas utama: **mobile-first**, karena mayoritas wajib pajak mengakses via HP, bukan laptop.

Jangan ubah **font** dan **struktur/tema desain dasar** yang sudah ada — perubahan di bawah ini fokus ke: layout responsive, konten yang ditambah/dikurangi, dan perbaikan bug/UX.

---

## 1. TEMA WARNA — RESPONSIVE BACKGROUND

- **Desktop/laptop (breakpoint `md` ke atas)**: background **putih** (light mode)
- **Mobile (di bawah breakpoint `md`)**: background **dark/gelap** (tetap seperti sekarang)
- Ini murni toggle warna background berdasarkan breakpoint, BUKAN redesign ulang komponen. Struktur, font, dan tata letak konten tetap sama — cuma warna bg dan warna teks/elemen yang menyesuaikan supaya tetap kontras dan terbaca di masing-masing mode.
- Pastikan semua text color, border, dan card background ikut menyesuaikan supaya tetap readable di kedua mode (jangan sampai ada teks putih di atas bg putih pas desktop, atau teks gelap di atas bg gelap pas mobile).

---

## 2. HEADER

- Hapus icon panah/masuk di sebelah tombol hamburger menu. Cukup box teks **"Masuk"** saja (tanpa icon).
- Toggle biru yang ada sekarang di header diganti jadi tombol **"Masuk"** yang proper dengan label jelas (bukan pill kosong tanpa teks).
- Tombol **Masuk** dan **Daftar** yang ada di dalam menu hamburger dihapus — karena sudah ada di header/hero, redundant dan cuma menuh-menuhin menu.

---

## 3. HERO SECTION

- Hapus label **"Resmi Pemerintah Kabupaten Garut"** (akan pakai domain resmi pemerintah nanti, jadi label ini tidak diperlukan).
- Tombol Daftar/Masuk di hero tidak perlu pakai icon.
- Karena tombol **Masuk** sudah dipindah ke header, tombol kedua di hero (sebelah tombol **Daftar**) diganti jadi tombol **"Panduan"**.
- Hapus teks **"Belum punya akun? Daftar dulu di sini"** yang ada di bawah tombol CTA hero.
- **PENTING — pisahkan form login dari landing page**: saat ini ada form login (email/password + tombol "Masuk dengan Google") langsung ditampilkan di landing page. Ini harus dipisah ke halaman `/login` tersendiri. Landing page cukup tampilkan tombol "Masuk" dan "Daftar" yang mengarahkan ke halaman terpisah. Alasan: keamanan (form kredensial tidak boleh nempel di halaman promosi/marketing publik) dan supaya user tidak bingung antara konten informasi vs aksi.
- Statistik (Pengguna Aktif, Wajib Pajak Terdaftar, Kode Bayar Terbayar) harus diambil dari data live/API, bukan angka hardcoded statis — supaya konsisten dan tidak ada risiko data usang/salah ditampilkan ke publik.

---

## 4. BANNER CTA "BATAS AKHIR JATUH TEMPO PBB-P2"

- Posisikan banner ini **lebih dekat ke hero/atas halaman**, jangan di tengah-tengah landing page. Ini actionable item paling penting buat user yang niat bayar pajak — jangan bikin mereka scroll jauh dulu sebelum ketemu.

---

## 5. HAPUS SECTION "FITUR LAYANAN"

- Section listing card fitur layanan dihapus, diganti dengan section berikut (urutan sesuai poin 6-10 di bawah).

---

## 6. SECTION "CARA PAKAI SAPADA"

- Tetap pertahankan section 3 langkah ini (Daftar Akun → Cek Tagihan → Bayar via QRIS/VA).
- Di mobile: tampilkan stack vertikal (bukan di-hide), karena ini panduan penting buat user awam.

---

## 7. SECTION TESTIMONI

- Tambahkan section testimoni (pakai data dummy untuk sekarang).
- **Desktop**: tampilkan side-by-side seperti card biasa.
- **Mobile**: ubah jadi carousel/swipeable, supaya tidak makan tempat vertikal terlalu banyak.
- Posisikan section ini **di bawah** "Cara Pakai SAPADA" dan CTA utama — bukan di atas, karena testimoni untuk meyakinkan user yang masih ragu, bukan untuk user yang sudah niat bertransaksi.

---

## 8. SECTION FAQ

- Tambahkan section FAQ singkat.
- Gunakan pola **accordion/collapse** baik di desktop maupun mobile (klik pertanyaan untuk expand jawaban) — ini standar UX untuk FAQ, hemat ruang di semua ukuran layar.
- Posisikan di bawah section testimoni.

---

## 9. SECTION "DASAR HUKUM" (BARU — diambil dari versi resmi)

- Tambahkan section/link **Dasar Hukum** yang saat ini ada di versi resmi (`sapada.bapenda.garutkab.go.id`) tapi belum ada di sini. Isinya:
  - UU Nomor 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah
  - PP Nomor 35 Tahun 2024 tentang Ketentuan Umum Perpajakan Daerah
  - Peraturan Arsip Nasional RI Nomor 5 Tahun 2021 tentang Pedoman Umum Tata Naskah Dinas
  - Permendagri Nomor 90 Tahun 2023 tentang Klasifikasi, Kodefikasi, dan Nomenklatur Perencanaan Pembangunan dan Keuangan Daerah
  - PMK Nomor 85 Tahun 2024 tentang Pedoman Penilaian Pajak Bumi dan Bangunan Perdesaan dan Perkotaan
  - PMK Nomor 7 Tahun 2025 tentang Pedoman Penagihan dan Pemeriksaan Pajak Daerah
  - Perda Kabupaten Garut Nomor 8 Tahun 2023 tentang Pajak dan Retribusi Daerah
  - Perbup Kabupaten Garut Nomor 44 Tahun 2025 tentang Tata Cara Pemungutan Pajak Daerah
- **PENTING soal penempatan**: JANGAN taruh sebagai section penuh di landing page utama (user awam yang mau bayar pajak tidak butuh baca daftar UU). Cukup taruh sebagai **link "Dasar Hukum" di footer** yang mengarah ke halaman/collapse terpisah berisi daftar lengkap di atas.

---

## 10. TABEL REALISASI PAJAK DAERAH (BARU — diambil dari versi resmi)

- Versi resmi punya tabel realisasi pajak per jenis pajak (Target, Realisasi, TW1-TW4) untuk transparansi publik. Tambahkan fitur ini, tapi dengan penyesuaian responsive karena tabel 10 baris x 7 kolom tidak bisa langsung ditempel di mobile:
  - **Desktop**: tampilkan tabel penuh seperti versi resmi.
  - **Mobile**: ubah jadi card per jenis pajak yang bisa di-collapse/expand (tap untuk lihat detail TW1-TW4), ATAU tampilkan 3-4 jenis pajak paling relevan saja + tombol "Lihat detail lengkap".
- Idealnya section ini terhubung ke halaman **"Live Pajak"** yang sudah ada linknya di footer, bukan numpuk semua data di landing page utama.

---

## 11. SECTION "INFORMASI & BANTUAN"

- Hapus card/box pembungkus pada sub-section **Hubungi Kami**, **Jam Operasional**, dan **Ikuti Kami** supaya tidak terlihat sesak.
- Judul masing-masing sub-section dibuat **center** dan **tanpa icon**.
- **Fix bug layout overlap**: saat ini di beberapa ukuran layar, section "Hubungi Kami" & "Jam Operasional" (grid 2 kolom) teks dan icon-nya saling numpuk (contoh: teks "Jam Operasional" ketiban jadwal). Perbaiki spacing/gap antar elemen supaya tidak overlap lagi.
- **Fix bug layout overlap** juga pada grid **"Ikuti Kami"** (Instagram/Facebook/YouTube/Twitter) — icon dan nama platform saat ini saling tabrakan antar card. Perbaiki spacing/gap-nya.
- **Khusus tampilan mobile** untuk section "Ikuti Kami": cukup tampilkan **icon platform saja** (tanpa nama/username), semua icon disusun dalam **1 baris (row)**, dan section dibuat **center**.
- Teks "Dapatkan berita terbaru, sosialisasi perda, dan pengumuman jatuh tempo pajak" dibuat **center** khusus saat dibuka di mobile.
- **Sinkronkan data kontak dengan versi resmi** (perbaiki supaya konsisten, gunakan yang benar):
  - Jam operasional: **Senin–Jumat 08.00–16.00 WIB** (samakan dengan versi resmi, atau konfirmasi dulu versi mana yang benar sebelum eksekusi — saat ini ada perbedaan antara versi vercel dan versi resmi).
  - Pastikan ada nomor kontak **Admin** terpisah dari nomor **WhatsApp**, sesuai versi resmi.
  - Email kontak: pastikan menggunakan `admin@bapenda.garutkab.go.id` — JANGAN pakai email developer/leftover seperti yang ditemukan di versi resmi (`me@rafadlis.space`), itu adalah bug yang harus dihindari di sini.

---

## 12. TOMBOL/LINK FITUR YANG BELUM AKTIF

- Semua tombol/link fitur yang saat diklik masih kosong (belum ada halamannya), diarahkan ke halaman/form **"Fitur ini sedang dikembangkan"** — jangan biarkan link mati atau blank page.

---

## 13. FOOTER — TAMBAHAN

- Tambahkan link **"Kritik & Saran"** dan **"Lupa NPWPD"** (ada di versi resmi, belum ada di sini).
- Tambahkan link balik ke situs induk: **"Beranda"** dan **"Informasi Publik"** (mengarah ke `bapenda.garutkab.go.id`), supaya user yang datang dari luar (misal dari Google search) paham konteks SAPADA adalah bagian dari situs Bapenda Garut.
- Tambahkan link **"Dasar Hukum"** (lihat poin 9).

---

## 14. AKSESIBILITAS UNTUK USER AWAM (NICE TO HAVE, prioritas terakhir kalau waktu memungkinkan)

- Untuk istilah teknis yang mungkin tidak familiar bagi wajib pajak awam (contoh: "NPWPD", "PBB-P2"), pertimbangkan menambahkan tooltip/icon info kecil di kemunculan pertama istilah tersebut untuk membantu pemahaman user non-expert.

---

## CATATAN PRIORITAS EKSEKUSI

Kalau perlu dikerjakan bertahap, urutan prioritas yang disarankan:
1. Fix bug layout overlap (poin 11) — ini bug nyata yang mengganggu, prioritas tertinggi
2. Background responsive putih/dark (poin 1)
3. Pisahkan form login dari landing page (poin 3)
4. Perbaikan header & hero (poin 2, 3)
5. Section baru: Cara Pakai, Testimoni, FAQ (poin 6-8)
6. Dasar Hukum & Tabel Realisasi Pajak (poin 9-10) — butuh effort lebih besar (halaman baru/data API)
7. Footer & sinkronisasi data kontak (poin 11, 13)
8. Aksesibilitas (poin 14) — opsional