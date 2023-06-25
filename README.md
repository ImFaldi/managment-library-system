# Management Library System menggunakan Laravel dan React

(https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/4409931/910/607/m1/fpnw/wm0/triangle_library_book_knowledge_logo_template-01-.png?1525588794&s=9dcba67e3abe7e707e87bc2322322385)

Ini adalah README untuk Management Library System, sebuah aplikasi berbasis web yang dibangun dengan menggunakan Laravel Breeze sebagai framework backend dan React sebagai framework frontend. Aplikasi ini bertujuan untuk mengelola sistem perpustakaan dengan fitur-fitur seperti pendaftaran anggota, pencarian buku, peminjaman dan pengembalian buku, dan pengelolaan stok buku.

## Persyaratan

Sebelum Anda menginstal aplikasi ini, pastikan Anda telah memenuhi persyaratan berikut:

- PHP versi 7.4 atau lebih tinggi
- Composer (untuk mengelola dependensi PHP)
- Node.js versi 14 atau lebih tinggi
- npm (Node Package Manager)
- Laravel CLI (Command Line Interface)

## Instalasi

Berikut adalah langkah-langkah untuk menginstal dan menjalankan aplikasi Management Library System:

1. Salin repositori aplikasi ini ke dalam direktori lokal Anda.

```bash
git clone <URL_REPO>
cd management-library-system
```

2. Instal dependensi PHP menggunakan Composer.

```bash
composer install
```

3. Instal dependensi JavaScript menggunakan npm.

```bash
npm install
```

4. Buat file `.env` dari file `.env.example`.

```bash
cp .env.example .env
```

5. Generate key aplikasi.

```bash
php artisan key:generate
```

6. Buat database baru untuk aplikasi ini.

```bash
php artisan migrate --seed
```

7. Jalankan Laravel 

```bash
php artisan serve
```

8. Jalankan React

```bash
npm run dev
```

9. Buka aplikasi di browser Anda dengan mengunjungi `localhost:8000`.

## Penggunaan

Setelah Anda berhasil menginstal dan menjalankan aplikasi Management Library System, Anda dapat melakukan pendaftaran anggota, mencari buku, serta melakukan peminjaman dan pengembalian buku. Pastikan untuk memahami antarmuka pengguna aplikasi untuk memanfaatkan semua fitur yang disediakan.