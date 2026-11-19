# Main Riang Preschool — Next.js + Tailwind CSS

Landing page responsive untuk Main Riang Preschool, dibuat dengan Next.js App Router, TypeScript, Tailwind CSS, dan Lucide React.

## Persyaratan

- Node.js 20.9 atau lebih baru
- npm

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## File penting

- `app/page.tsx` — seluruh halaman landing page
- `app/globals.css` — global CSS dan visual foundation
- `app/layout.tsx` — metadata SEO
- `lib/data.ts` — DATA TERPUSAT cabang, WhatsApp, program, trilogi, gallery
- `components/BranchTabs.tsx` — tab cabang + CTA WhatsApp
- `components/Navbar.tsx` — navbar desktop
- `components/MobileNav.tsx` — hamburger mobile
- `public/` — tempat logo dan foto asli

## Mengganti data cabang

Edit `lib/data.ts`.

Contoh:

```ts
{
  id: "cileunyi",
  shortName: "Cileunyi",
  name: "Main Riang Preschool Cileunyi",
  address: "Alamat lengkap...",
  whatsapp: "628xxxxxxxxxx",
  mapsUrl: "https://maps.google.com/..."
}
```

Untuk WhatsApp gunakan format nomor internasional tanpa tanda `+`, spasi, atau `0` di depan.

## Mengganti Visi, Misi, dan Trilogi

Edit placeholder yang berada di `app/page.tsx` atau pindahkan ke `lib/data.ts` jika ingin seluruh konten dikelola terpusat.

## Mengganti foto

Placeholder visual saat ini sengaja tidak bergantung pada layanan foto eksternal. Anda dapat menggantinya dengan aset di `public/images/`.

Rekomendasi:
- hero: JPG/WebP
- gallery: WebP/JPG
- gunakan ukuran yang proporsional
- gunakan alt text jika mengganti menjadi `<img>` atau `next/image`

## Deploy ke Vercel

1. Push project ke GitHub.
2. Buka Vercel.
3. Import repository.
4. Framework akan terdeteksi sebagai Next.js.
5. Deploy.

Atau dengan Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Catatan

Nomor WhatsApp, alamat, Google Maps, Visi, Misi, Trilogi, program unggulan, social media, logo, dan foto yang belum diberikan sengaja memakai placeholder. Jangan lupa menggantinya sebelum website dipublikasikan.

## Struktur

```text
main-riang-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BranchTabs.tsx
│   ├── MobileNav.tsx
│   ├── Navbar.tsx
│   └── WhatsAppFloat.tsx
├── lib/
│   └── data.ts
├── public/
│   └── README.txt
├── eslint.config.mjs
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```