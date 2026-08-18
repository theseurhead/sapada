# Prompt: Update Halaman Login & Landing Page SAPADA

## Konteks
Revisi tampilan landing/login page SAPADA: hapus judul besar "SAPADA" di konten (bukan di header), redesign card login mengikuti referensi desain baru (dark modern style), hapus beberapa section konten, hapus banner notifikasi jatuh tempo, hapus section "Informasi & Bantuan" sebelum footer, serta pastikan seluruh UI responsive.

## 1. Header
- Teks "SAPADA" di header/navbar **tetap ada**, tidak dihapus.

## 2. Hilangkan judul besar "SAPADA" di konten
- Di bagian hero/konten (sebelah kiri, di atas tulisan "Sistem Administrasi Pajak Daerah Kabupaten Garut"), hapus teks besar "SAPADA".
- Langsung mulai dari heading "Sistem Administrasi Pajak Daerah Kabupaten Garut." sebagai judul utama hero section.

## 3. Redesign card/form login (ikuti referensi gambar terbaru)
Gunakan bahasa Indonesia untuk semua teks pada form. Susunan & elemen:

1. **Judul**: "Masuk ke SAPADA"
2. **Sub judul**: "Masukkan data Anda untuk masuk ke akun."
3. **Dua tombol sosial berdampingan**:
   - "Masuk dengan Google" (dengan icon Google, background gelap/abu, border tipis)
   - "Masuk dengan Apple" (dengan icon Apple, background gelap/abu, border tipis)
4. **Divider** dengan teks "Atau" di tengah
5. **Input "Alamat Email"** — label di atas input, input berbentuk rounded rectangle dengan background sedikit lebih terang dari card
6. **Input "Kata Sandi"** — label di atas input, sertakan icon mata (show/hide password) di sisi kanan input
7. **Baris bawah input password**:
   - Kiri: toggle/checkbox hijau **"Ingat saya"**
   - Kanan: link **"Lupa kata sandi?"**
8. **Tombol utama "Masuk"** — full width, warna hijau gradient (sesuai referensi), rounded rectangle, teks putih bold
9. **Teks bawah**: "Belum punya akun? **Daftar**" (kata "Daftar" jadi link/clickable)

### Style/tema
- Gunakan dark theme untuk card login: background gelap (contoh: `#0d0d0d` – `#1a1a1a`), teks putih/abu terang.
- Border-radius konsisten & proporsional:
  - Card utama: radius besar (±20–24px)
  - Input & tombol: radius medium (±12–14px), rounded rectangle (bukan full pill)
- Spacing antar elemen lega, tidak sempit.
- Tombol sosial: background sedikit lebih terang dari card, border tipis (subtle), icon + teks center-aligned.
- Tombol "Masuk": gradient hijau (contoh dari hijau terang ke hijau tua), efek shadow halus agar terlihat elevated/modern.
- Pastikan kontras teks tetap nyaman dibaca di background gelap.

## 4. Hapus section berikut
- Section **"Panduan cara pakai SAPADA"**
- Section **"Apa kata mereka"** (testimoni pengguna)

## 5. Hapus banner notifikasi jatuh tempo
- Hapus banner/alert berwarna merah muda berisi **"Batas Akhir Jatuh Tempo PBB-P2 2026"** beserta deskripsi dan tombol "Cek Tagihan Sekarang" di bawahnya.

## 6. Hapus section "Informasi & Bantuan" sebelum footer
- Hapus kolom/section **"Informasi & Bantuan"** beserta link-link di dalamnya (Dasar Hukum, Kebijakan Privasi, Kontak Lengkap) yang berada di area sebelum/bagian dari footer.
- Bagian footer lain (logo SAPADA, deskripsi singkat, copyright, "Pemerintah Kabupaten Garut") tetap dipertahankan kecuali disebutkan lain.

## 7. Responsive
- Pastikan seluruh UI (header, hero section, card login, footer, dan bagian lain yang tersisa) responsive di semua ukuran layar: mobile, tablet, dan desktop.
- Cek breakpoint umum (mobile <768px, tablet 768–1024px, desktop >1024px), pastikan tidak ada elemen overflow, teks kepotong, atau layout berantakan.
- Di mobile, dua tombol sosial (Google & Apple) boleh tetap berdampingan jika muat, atau ditumpuk vertikal jika layar terlalu sempit.

## Catatan tambahan
- Style dasar card login mengikuti referensi dark theme di atas; bagian lain (hero, header, footer) tetap mengikuti design system SAPADA yang sudah ada, kecuali jika ingin diseragamkan — sebutkan jika iya.
- Tidak perlu mengubah fungsi/logic autentikasi, hanya perbaikan UI/UX & penghapusan konten.