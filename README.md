# HeaLink EMR

HeaLink adalah aplikasi web yang dikembangkan untuk mendukung layanan kesehatan digital di lingkungan akademik. Selain sebagai Medical Record, tujuan lain project ini dikerjakan adalah menyediakan antarmuka yang intuitif bagi dokter, pasien, dan admin untuk mengelola data medis, jadwal, dan komunikasi. **Medical Record System** berbasis **Angular** ini dikembangkan untuk mendukung digitalisasi layanan kesehatan di Klinik/Universitas Pendidikan Nasional.  
Project ini berfokus pada pengelolaan rekam medis, registrasi pasien, daftar obat, serta dashboard terpisah untuk Admin, Dokter, Staff, dan Apoteker.

---

## 🚀 Fitur Utama
- 🔑 **Login & Registrasi**
- 👨‍⚕️ **Dashboard Dokter** (manajemen pasien, lihat, edit, delete rekam medis)
- 📑 **Rekam Medis Pasien**
- 💊 **Daftar Obat (Medicine List)**
- 📝 **Formulir Pasien & Registrasi**
- 🧑‍💼 **Dashboard Staff**
- 🏥 **Dashboard Apoteker (Pharmacy)**
- 🧑‍💻 **Dashboard Admin**
- 🎨 Antarmuka dibuat menyesuaikan color palette Universitas

---

## 🛠️ Tech Stack
- **Frontend**: Angular Angular CLI v20.1.1 (TypeScript)
- **Language & Tools**: TypeScript, Angular CLI, Karma ~6.4.0 (testing), RxJS, npm
- **Styling**: CSS, SCSS (`custom-theme.scss`), font: poppins, tema warna:, primary: #0B2656, accent: #D48608, allert & notifications: #900C0C, background: #EAEAEA
- **Backend**: (Go)
- **Database**: (-)

---

## 📂 Struktur Folder

📦healink-undiknas
 ┣ 📂.vscode
 ┃ ┣ 📜extensions.json
 ┃ ┣ 📜launch.json
 ┃ ┗ 📜tasks.json
 ┣ 📂public
 ┃ ┗ 📜favicon.ico
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📜admin.css
 ┃ ┃ ┃ ┣ 📜admin.html
 ┃ ┃ ┃ ┣ 📜admin.spec.ts
 ┃ ┃ ┃ ┗ 📜admin.ts
 ┃ ┃ ┣ 📂doctordashboard
 ┃ ┃ ┃ ┣ 📜doctordashboard.css
 ┃ ┃ ┃ ┣ 📜doctordashboard.html
 ┃ ┃ ┃ ┣ 📜doctordashboard.spec.ts
 ┃ ┃ ┃ ┗ 📜doctordashboard.ts
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┣ 📜login.css
 ┃ ┃ ┃ ┣ 📜login.html
 ┃ ┃ ┃ ┣ 📜login.spec.ts
 ┃ ┃ ┃ ┗ 📜login.ts
 ┃ ┃ ┣ 📂medicalrecord
 ┃ ┃ ┃ ┣ 📜medicalrecord.css
 ┃ ┃ ┃ ┣ 📜medicalrecord.html
 ┃ ┃ ┃ ┣ 📜medicalrecord.spec.ts
 ┃ ┃ ┃ ┗ 📜medicalrecord.ts
 ┃ ┃ ┣ 📂medicinelist
 ┃ ┃ ┃ ┣ 📜medicinelist.css
 ┃ ┃ ┃ ┣ 📜medicinelist.html
 ┃ ┃ ┃ ┣ 📜medicinelist.spec.ts
 ┃ ┃ ┃ ┗ 📜medicinelist.ts
 ┃ ┃ ┣ 📂patientform
 ┃ ┃ ┃ ┣ 📜patientform.css
 ┃ ┃ ┃ ┣ 📜patientform.html
 ┃ ┃ ┃ ┣ 📜patientform.spec.ts
 ┃ ┃ ┃ ┗ 📜patientform.ts
 ┃ ┃ ┣ 📂patientregistrasi
 ┃ ┃ ┃ ┣ 📜patientregistrasi.css
 ┃ ┃ ┃ ┣ 📜patientregistrasi.html
 ┃ ┃ ┃ ┣ 📜patientregistrasi.spec.ts
 ┃ ┃ ┃ ┗ 📜patientregistrasi.ts
 ┃ ┃ ┣ 📂pharmacydashboard
 ┃ ┃ ┃ ┣ 📜pharmacydashboard.css
 ┃ ┃ ┃ ┣ 📜pharmacydashboard.html
 ┃ ┃ ┃ ┣ 📜pharmacydashboard.spec.ts
 ┃ ┃ ┃ ┗ 📜pharmacydashboard.ts
 ┃ ┃ ┣ 📂staffdashboard
 ┃ ┃ ┃ ┣ 📜staffdashboard.css
 ┃ ┃ ┃ ┣ 📜staffdashboard.html
 ┃ ┃ ┃ ┣ 📜staffdashboard.spec.ts
 ┃ ┃ ┃ ┗ 📜staffdashboard.ts
 ┃ ┃ ┣ 📂userregistration
 ┃ ┃ ┃ ┣ 📜userregistration.css
 ┃ ┃ ┃ ┣ 📜userregistration.html
 ┃ ┃ ┃ ┣ 📜userregistration.spec.ts
 ┃ ┃ ┃ ┗ 📜userregistration.ts
 ┃ ┃ ┣ 📜app.config.ts
 ┃ ┃ ┣ 📜app.css
 ┃ ┃ ┣ 📜app.html
 ┃ ┃ ┣ 📜app.routes.ts
 ┃ ┃ ┣ 📜app.spec.ts
 ┃ ┃ ┗ 📜app.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜doctor-illustration.png
 ┃ ┃ ┣ 📜google-logo.png
 ┃ ┃ ┣ 📜healink_logo.png
 ┃ ┃ ┗ 📜healink_logo2.png
 ┃ ┣ 📜custom-theme.scss
 ┃ ┣ 📜index.html
 ┃ ┣ 📜main.ts
 ┃ ┗ 📜styles.css
 ┣ 📜.editorconfig
 ┣ 📜.gitignore
 ┣ 📜angular.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.app.json
 ┣ 📜tsconfig.json
 ┗ 📜tsconfig.spec.json

---

## 🔧 Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/ademuliadi/healink-project.git
2. **Masuk ke folder dengan cara**
   cd healink-undiknas
3. **Install dependecies**
   npm install
4. **Jalankan dengan**
   ng serve
5. **Sejauh ini kode masing menggunakan**
   http://localhost:4200

> Designed using **Figma** – focusing on usability, accessibility, and simplicity.

## 📎 Preview & Link

Click below to view the design:

[![Figma](https://img.shields.io/badge/Figma-%23a259ff?logo=figma&logoColor=white)](https://www.figma.com/design/0osxQFCUq9c4BDjcmyuoX6/Healink-Undiknas?node-id=0-1&t=EqCGF1CuC63feuay-1)

## 💡 Note
If you’d like to collaborate, give feedback, or request the design file, feel free to open an issue or contact me.

---

- Figma by Mahendra
- Coded by Ade Muliadi
- Backend: Benartdo


