# Prompt: Revisi Landing Page SAPADA (Banner Carousel, Dasar Hukum, Footer Info)

## Konteks
Landing page SAPADA (sapada.vercel.app) sudah live. Ada beberapa revisi dan penambahan fitur yang perlu dikerjakan tanpa mengubah struktur/desain yang sudah ada di luar bagian yang disebutkan di bawah.

## Yang TIDAK boleh diubah
- Warna, font, dan layout navbar yang sudah ada (logo, tombol Masuk/Daftar, hamburger menu)
- Struktur hero section (judul, deskripsi, stats card, CTA Masuk & Panduan) — kecuali poin revisi yang disebut eksplisit di bawah
- Menu/tombol lain di header yang sudah berfungsi

## Task 1: Announcement Banner Carousel
1. Tambahkan strip banner tipis di **atas navbar** (di atas logo SAPADA), bukan menggantikan hero section.
2. Konten banner harus dinamis (diambil dari array/data source terpisah), bukan hardcode — untuk sekarang pakai **data dummy** (2-3 item banner, isi bebas relevan dengan Bapenda/pajak, misal info jatuh tempo atau pengumuman).
3. Banner auto-slide otomatis (berganti tiap ±4-5 detik) selama ada lebih dari 1 banner aktif. Kalau cuma 1 banner aktif, auto-slide otomatis nonaktif.
4. User bisa geser banner secara manual (swipe di mobile, drag/klik navigasi di desktop).
5. Auto-slide harus pause/tertahan saat user sedang berinteraksi (hover di desktop, touch/hold di mobile), dan resume otomatis setelah user berhenti berinteraksi beberapa detik.
6. Struktur data dummy per banner minimal punya: `id`, `text`, `link` (opsional), `active` (boolean) — biar nanti gampang dikoneksikan ke data admin beneran.

## Task 2: Hapus Badge "Terbaru • Pendataan PBB-P2"
7. Hapus badge/label "Terbaru • Pendataan PBB-P2" yang ada di atas judul hero, karena tidak ada aksi/link apapun di situ (murni dekoratif, tidak fungsional).

## Task 3: Dropdown "Dasar Hukum" — Collapsed by Default
8. Section/dropdown "Dasar Hukum" defaultnya cuma menampilkan **1 item** saja.
9. Sediakan tombol/link "Lihat Semua" (atau serupa) — saat diklik, baru semua item dasar hukum ditampilkan (expand).

## Task 4: Tambahan Section di Bawah Konten (Sebelum Footer)
10. Tambahkan section baru berisi:
    - **Hubungi Kami** — alamat, nomor admin, nomor WhatsApp, email
    - **Jam Operasional** — hari & jam kerja
    - **Ikuti Kami** — ikon sosial media (Facebook, Instagram, YouTube, Twitter/X)
11. Section ini diletakkan di **paling bawah konten**, tapi **jangan sampai tertimpa atau bertabrakan dengan footer** — pastikan ada spacing/margin yang jelas dan footer tetap terpisah rapi.
12. Cek tampilan section ini di mobile dan desktop, pastikan tidak ada elemen yang terpotong atau overlap dengan footer.

## Cara Eksekusi
1. Kerjakan Task 2 (hapus badge) dan Task 3 (dropdown Dasar Hukum) dulu — perubahan kecil, cepat divalidasi.
2. Lanjut Task 4 (section Hubungi Kami/Jam Operasional/Ikuti Kami) — pastikan tidak nabrak footer.
3. Terakhir kerjakan Task 1 (Banner Carousel) — paling kompleks, butuh state management untuk auto-slide, swipe, dan pause-on-interaction.
4. Setelah semua selesai, cek tampilan keseluruhan di mobile dan desktop, pastikan tidak ada elemen yang rusak dari perubahan-perubahan di atas.
5.