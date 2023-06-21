# Managment Library System
![Nama Gambar](https://highlandlibrary.org/wp-content/uploads/2020/04/31707-2-scaled.jpg)
Ini adalah aplikasi manajemen perpustakaan yang dibangun dengan Laravel dan React.

## Prasyarat

Sebelum memulai, pastikan prasyarat berikut ini telah terpenuhi pada mesin pengembangan Anda:

- PHP (versi 7.4 ke atas)
- Composer
- Node.js (versi 14.x ke atas)
- npm (dalam paket Node.js)

## Langkah-langkah

Berikut adalah langkah-langkah untuk mengatur proyek Laravel + React:

1. **Clone Proyek Laravel**: Clone repositori proyek Laravel menggunakan Git atau unduh file ZIP proyek dari repositori sumber.

2. **Pasang Dependensi**: Buka terminal, arahkan ke direktori utama proyek, dan jalankan perintah berikut:

   ```bash
   composer install
   npm install
    ```
3. **Buat file .env**: Buat file `.env` dari file `.env.example` dan ubah pengaturan database sesuai dengan mesin pengembangan Anda.

4. **Konfigurasi Aplikasi**: Jalankan perintah berikut untuk menghasilkan kunci aplikasi:

   ```bash
   php artisan key:generate
   ```
5. **Konfigurasi JWT Secret**: Jalankan perintah berikut untuk menghasilkan kunci aplikasi:
     ```bash
   php artisan jwt:secret
   ```
6. **Jalankan Migrasi**: Jalankan perintah berikut untuk membuat tabel dan mengisi data awal ke dalam database:
   ```bash
    php artisan migrate --seed
    ```
7. **Jalankan Aplikasi**: Jalankan perintah berikut untuk menjalankan aplikasi:
    ```bash
    php artisan serve
    ```
8. **Jalankan Aplikasi**: Jalankan perintah berikut untuk menjalankan aplikasi:
    ```bash
    npm run watch
    ```
9. **Buka Aplikasi**: Buka aplikasi di browser Anda dengan mengunjungi URL berikut: `http://localhost:8000`.
