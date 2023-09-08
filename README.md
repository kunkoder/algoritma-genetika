# :bulb: Algoritma Genetika

Repository ini berisi projek aplikasi berbasis web yang menerapkan algoritma genetika untuk pencarian karakter.

[Klik disini](https://algoritma-genetika.vercel.app) untuk melihat demo aplikasi.

## :package: Prasyarat

Sebelum memulai, pastikan telah terinstall beberapa tools:
* Text editor
* Web browser
* Web server

## :cd: Menginstall Aplikasi

Untuk menginstall aplikasi ini, ikuti langkah berikut:

```bash
# clone this repository
git clone https://github.com/kunkoder/algoritma-genetika.git

# change working directory
cd algoritma-genetika
```

## :open_file_folder: Struktur Projek

```text
├── css
│   ├── atlantis.min.css
│   ├── bootstrap.min.css
│   └── custom.css
├── img
│   ├── bg-math.png
│   ├── icon.ico
│   ├── gemapp-secondary.png
│   ├── gemapp-white.png
│   └── gemapp.svg
├── js
│   ├── atlantis.min.js
│   ├── bootstrap.min.js
│   ├── fontawesome.min.js
│   ├── jquery.min.js
│   ├── listener.js
│   └── popper.min.js
├── index.html
└── sw.js
```

>Note: file `sw.js` berisi service worker yang dapat diaktifkan di file `listener.js`.

## :computer: Menjalankan Aplikasi

Untuk menjalankan aplikasi ini, ada beberapa opsi yang dapat dilakukan:
* Menjalankan aplikasi menggunakan web server. 
  * Menggunakan web server php. Jalankan perintah `php -S localhost:8000` lalu buka [web browser](http://localhost:8000).
* Membuka file `index.html`.
>Note: Menjalankan aplikasi hanya dengan membuka file `index.html` tidak dapat mengaktifkan service worker.

## :balance_scale: Lisensi

[MIT License](https://github.com/kunkoder/espeka/blob/main/LICENSE)
