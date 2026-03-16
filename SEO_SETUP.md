# SEO Setup Guide - Sentra Academic Solutions

Panduan lengkap setup Google Search Console dan analytics untuk website SAS.

---

## 🎯 Google Search Console (Wajib)

### Step 1: Daftar Property
1. Buka [Google Search Console](https://search.google.com/search-console)
2. Login dengan akun Google
3. Klik **"Add Property"**
4. Pilih **"URL prefix"**
5. Masukkan: `https://resourceful-eagerness-production-bb8d.up.railway.app`
6. Klik **"Continue"**

### Step 2: Verifikasi Ownership

#### Opsi A: Meta Tag (Recommended)
1. Di halaman verifikasi, pilih tab **"HTML tag"**
2. Copy kode meta tag, contoh:
   ```html
   <meta name="google-site-verification" content="abc123def456" />
   ```
3. Update file `app/layout.tsx`:
   ```typescript
   verification: {
     google: 'abc123def456', // Ganti dengan kode Anda
   },
   ```
4. Deploy ulang ke Railway

#### Opsi B: HTML File
1. Download file verifikasi dari Google (contoh: `googleabc123.html`)
2. Rename menjadi `google-site-verification.html`
3. Ganti file di `public/google-site-verification.html`
4. Deploy ulang ke Railway

### Step 3: Submit Sitemap
1. Di sidebar, klik **"Sitemaps"**
2. Masukkan: `sitemap.xml`
3. Klik **"Submit"**

---

## 📊 Google Analytics 4 (Recommended)

### Step 1: Buat Property
1. Buka [Google Analytics](https://analytics.google.com)
2. Klik **"Admin"** (gear icon)
3. Klik **"Create Property"**
4. Isi:
   - Property name: `Sentra Academic Solutions`
   - Time zone: `Indonesia`
   - Currency: `Indonesian Rupiah (IDR)`
5. Klik **"Next"** → **"Create"**

### Step 2: Setup Data Stream
1. Pilih **"Web"**
2. Website URL: `https://resourceful-eagerness-production-bb8d.up.railway.app`
3. Stream name: `SAS Production`
4. Klik **"Create stream"**
5. Copy **Measurement ID** (contoh: `G-XXXXXXXXXX`)

### Step 3: Install di Next.js

Tambahkan di `app/layout.tsx`:

```typescript
import Script from 'next/script'

// Dalam return statement, tambahkan sebelum </html>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🔍 Bing Webmaster Tools (Optional)

1. Buka [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Login dengan akun Microsoft
3. Add site: `https://resourceful-eagerness-production-bb8d.up.railway.app`
4. Verifikasi dengan:
   - Meta tag: `<meta name="msvalidate.01" content="KODE_ANDA" />`
   - Atau HTML file

Tambahkan ke layout.tsx:
```typescript
verification: {
  google: 'GSC_CODE',
  other: {
    'msvalidate.01': 'BING_CODE',
  },
},
```

---

## 📋 Checklist SEO

### Technical SEO ✅
- [x] Favicon (multi-size)
- [x] Robots.txt
- [x] Sitemap.xml
- [x] Manifest.json (PWA)
- [x] Canonical URL
- [x] Meta tags lengkap
- [x] JSON-LD Structured Data
- [x] OG Image (1200x630)
- [x] Open Graph tags
- [x] Twitter Card tags

### Setup External Tools ⏳
- [ ] Google Search Console
- [ ] Google Analytics 4
- [ ] Bing Webmaster Tools
- [ ] Google Tag Manager (optional)

### Konten (Ongoing)
- [ ] Indexing halaman utama
- [ ] Indexing halaman workflow
- [ ] Performance monitoring
- [ ] Core Web Vitals check

---

## 🔗 URL Penting

| Resource | URL |
|----------|-----|
| **Live Site** | https://resourceful-eagerness-production-bb8d.up.railway.app |
| **Sitemap** | https://resourceful-eagerness-production-bb8d.up.railway.app/sitemap.xml |
| **Robots** | https://resourceful-eagerness-production-bb8d.up.railway.app/robots.txt |
| **Manifest** | https://resourceful-eagerness-production-bb8d.up.railway.app/manifest.json |

---

## 🚨 Troubleshooting

### "URL not indexed" di GSC
1. Pastikan sitemap sudah submit
2. Request indexing manual di GSC
3. Tunggu 1-7 hari untuk crawling

### Favicon tidak muncul
- Clear browser cache (Ctrl+Shift+R)
- Cek di: `https://realfavicongenerator.net/favicon_checker`

### OG Image tidak terdeteksi
- Test di: https://www.opengraph.xyz
- Pastikan URL absolute (bukan relative)

---

## 📞 Butuh Bantuan?

Dokumentasi resmi:
- [Google Search Console Help](https://support.google.com/webmasters)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
