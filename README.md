# The Wedding — Arya & Syvia

Website undangan pernikahan satu halaman untuk Arya Mustofa dan Syvia Maharani. Proyek ini dibuat dengan HTML, CSS, dan JavaScript biasa, tanpa proses build atau framework.

## Fitur

- Tampilan responsif dengan bagian cerita, pasangan, detail acara, lokasi, RSVP, dan hadiah.
- Hitung mundur menuju acara pada 24 Oktober 2026.
- Peta Google Maps interaktif dan tautan untuk membuka lokasi di Google Maps.
- Form RSVP dan buku tamu sebagai demo antarmuka.
- Tombol salin nomor rekening.

## Menjalankan secara lokal

1. Clone atau unduh repository.
2. Buka `index.html` di browser, atau gunakan ekstensi seperti Live Server di VS Code.
3. Pastikan perangkat terhubung ke internet untuk memuat Google Maps dan resource eksternal dari CDN.

Tidak diperlukan instalasi dependency atau langkah build.

## Struktur proyek

```text
.
├── assets/
│   ├── audio/        # Musik latar
│   └── img/          # Gambar pasangan dan aset visual
├── css/
│   ├── animations.css
│   ├── base.css
│   ├── components.css
│   └── style.css     # Mengimpor stylesheet lainnya
├── js/
│   └── main.js       # Countdown, navigasi, RSVP demo, dan interaksi
├── index.html
├── LICENSE
└── README.md
```

## Catatan sebelum dipublikasikan

- RSVP dan buku tamu belum terhubung ke backend atau database. Konfirmasi dan pesan hanya ditampilkan sementara di browser dan tidak tersimpan atau terkirim kepada pemilik acara.
- Musik latar diputar atau dijeda melalui tombol Audio; browser memerlukan interaksi pengguna sebelum memutar suara.
- Periksa dan ganti informasi acara, nama, gambar, serta nomor rekening contoh di `index.html` sebelum menggunakan atau membagikan situs.
- Bootstrap, Bootstrap Icons, Google Fonts, dan peta Google Maps dimuat dari layanan eksternal. Fitur tersebut memerlukan koneksi internet dan tunduk pada ketentuan masing-masing penyedia.

## Publikasi ke GitHub Pages

1. Buat repository GitHub dan unggah seluruh isi folder proyek.
2. Buka **Settings → Pages** di repository.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch yang akan digunakan (misalnya `main`) dan folder `/(root)`, lalu simpan.
5. Setelah deployment selesai, buka URL GitHub Pages yang ditampilkan di pengaturan Pages.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).
