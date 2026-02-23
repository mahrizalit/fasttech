<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/79deaf5c-4b54-41b0-930f-d290bd0d056b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## CI/CD dengan GitHub

Proyek ini memakai **GitHub Actions** untuk CI/CD.

### Yang berjalan otomatis

- **CI** (setiap push/PR ke `main`): install dependensi, lint (`npm run lint`), dan build (`npm run build`).

### Cara nyambung ke GitHub

1. Buat repo baru di GitHub (atau pakai repo yang sudah ada).
2. Tambahkan remote dan push:
   ```bash
   git remote add origin https://github.com/USERNAME/fasttech.git
   git branch -M main
   git push -u origin main
   ```
3. Setelah push, cek tab **Actions** di repo GitHub untuk melihat status CI.

### Opsional: deploy ke GitHub Pages

- Workflow `deploy.yml` siap dipakai untuk deploy ke GitHub Pages.
- Di repo: **Settings → Pages → Build and deployment → Source**: pilih **GitHub Actions**.
- Setelah itu, setiap push ke `main` akan build dan deploy. URL situs: `https://USERNAME.github.io/fasttech/`.
- Jika build butuh `GEMINI_API_KEY`: **Settings → Secrets and variables → Actions** → tambah secret `GEMINI_API_KEY`.
