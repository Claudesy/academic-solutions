# AGENTS.md — Sentra Academic Solutions

> File ini ditujukan untuk AI coding agents. Dokumen ini berisi informasi penting tentang struktur, konvensi, dan cara kerja proyek Sentra Academic Solutions.

---

## Project Overview

**Sentra Academic Solutions (SAS)** adalah landing page untuk platform multi-agent AI yang mendampingi mahasiswa dan dosen Ilmu Kesehatan dari rumusan masalah hingga sidang selesai.

- **Nama Proyek**: sentra-academic
- **Versi**: 1.0.0
- **Bahasa Konten**: Indonesia
- **Tipe**: Landing page (single page application dengan section-based navigation)

---

## Technology Stack

| Kategori | Teknologi | Versi |
|----------|-----------|-------|
| Framework | Next.js | 16.0.10 (App Router) |
| Language | TypeScript | 5.x |
| UI Library | React | 19.2.0 |
| Styling | Tailwind CSS | 4.1.9 |
| Animation | Framer Motion | 12.23.26 |
| UI Primitives | Radix UI | latest |
| Icons | Lucide React | ^0.454.0 |
| Font | Geist (Sans + Mono) | Google Fonts |
| Analytics | Vercel Analytics | 1.3.1 |
| Package Manager | pnpm | - |

---

## Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── layout.tsx               # Root layout dengan metadata & fonts
│   └── page.tsx                 # Single page entry point
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components (50+ components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (50+ files)
│   ├── hero-3d-stage.tsx        # Main hero dengan 3D dashboard
│   ├── dashboard-mockup.tsx     # Mockup dashboard interaktif
│   ├── navbar.tsx               # Navigation fixed header
│   ├── logo-cloud.tsx           # Partner/tech logos
│   ├── problem-section.tsx      # Pain points section
│   ├── feature-cards-section.tsx# Features grid
│   ├── ai-section.tsx           # AI multi-agent section
│   ├── comparison-section.tsx   # Comparison table
│   ├── pricing-section.tsx      # Pricing cards
│   ├── product-direction-section.tsx
│   ├── workflows-section.tsx    # Workflow visualization
│   ├── cta-section.tsx          # Call-to-action
│   ├── footer.tsx               # Footer
│   └── theme-provider.tsx       # Dark mode provider
├── lib/                          # Utility functions
│   └── utils.ts                 # cn() helper untuk Tailwind classes
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile breakpoint detection
│   └── use-toast.ts             # Toast notification hook
├── public/                       # Static assets
│   ├── images/                  # Image assets
│   ├── icon.svg                 # Favicon SVG
│   ├── icon-light-32x32.png     # Light mode favicon
│   ├── icon-dark-32x32.png      # Dark mode favicon
│   └── apple-icon.png           # Apple touch icon
├── styles/                       # Additional CSS files
│   └── globals.css              # Alternate global styles
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── components.json              # shadcn/ui configuration
├── postcss.config.mjs           # PostCSS configuration
└── package.json                 # Dependencies & scripts
```

---

## Build & Development Commands

```bash
# Install dependencies
pnpm install

# Development server (localhost:3000)
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Run ESLint
pnpm lint
```

---

## Code Style Guidelines

### 1. Component Structure

- Gunakan **functional components** dengan TypeScript
- Gunakan `"use client"` directive untuk client-side components
- Export components sebagai named exports
- Gunakan tipe props yang eksplisit

```typescript
"use client"

import { motion } from "framer-motion"

interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
```

### 2. Styling Conventions

- Gunakan **Tailwind CSS** untuk styling
- Gunakan `cn()` utility dari `@/lib/utils` untuk conditional classes
- Gunakan CSS variables dari tema (e.g., `bg-background`, `text-foreground`)
- Warna custom menggunakan OKLCH format di `globals.css`

```typescript
// Contoh penggunaan cn()
import { cn } from "@/lib/utils"

<button className={cn(
  "px-4 py-2 rounded-md transition-colors",
  isActive && "bg-primary text-primary-foreground",
  className
)}>
```

### 3. Import Patterns

```typescript
// Built-in
import { useState, useEffect } from "react"

// External libraries
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Internal aliases (dari tsconfig paths)
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
```

### 4. UI Component Pattern (shadcn/ui)

Semua UI components menggunakan pattern:
- `class-variance-authority` (cva) untuk variants
- Radix UI primitives sebagai base
- `cn()` utility untuk class merging
- Slot pattern untuk composition

```typescript
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
      },
    },
  }
)
```

---

## Page Sections (Anchor Navigation)

Landing page menggunakan smooth scroll navigation ke section berikut:

| Section | ID Anchor | File Component |
|---------|-----------|----------------|
| Hero | `#platform` | `hero-3d-stage.tsx` |
| Logo Cloud | - | `logo-cloud.tsx` |
| Tantangan | `#tantangan` | `problem-section.tsx` |
| Fitur | `#fitur` | `feature-cards-section.tsx` |
| AI Multi-Agent | `#ai` | `ai-section.tsx` |
| Perbandingan | `#perbandingan` | `comparison-section.tsx` |
| Harga | `#harga` | `pricing-section.tsx` |
| CTA | `#cta` | `cta-section.tsx` |

---

## Key Features & Patterns

### 1. 3D Dashboard Mockup
- CSS 3D transforms dengan `perspective: 4000px`
- Framer Motion untuk stagger animations
- Scroll-triggered parallax effect

### 2. Theme System
- Dark mode first design (background: `#09090B`)
- CSS variables untuk theming
- `next-themes` untuk theme switching

### 3. Animation Guidelines
- Gunakan Framer Motion untuk animations
- Prefer `ease: [0.22, 1, 0.36, 1]` untuk smooth transitions
- Stagger children dengan delay 0.1-0.3s

---

## Testing Instructions

> **Catatan**: Proyek ini belum memiliki test suite. Saat menambahkan tests:

1. Install testing libraries:
   ```bash
   pnpm add -D @testing-library/react @testing-library/jest-dom vitest
   ```

2. Buat test files di folder `__tests__/` atau `.test.ts(x)`

3. Test client components dengan mock Framer Motion:
   ```typescript
   vi.mock("framer-motion", () => ({
     motion: { div: "div", span: "span" },
   }))
   ```

---

## Deployment

### Vercel (Recommended)
```bash
# Sudah pre-configured untuk Vercel
git push
# Vercel akan auto-deploy
```

### Railway / Node.js Platforms
```bash
# Build untuk static export
pnpm build

# Atau gunakan Next.js server
pnpm start
```

### Build Output
- Next.js config menggunakan `images.unoptimized: true` untuk static export
- Output: `.next/` folder

---

## Security Considerations

1. **Environment Variables**: Jangan commit file `.env*` (sudah di `.gitignore`)
2. **Images**: Gunakan `unoptimized: true` hanya untuk static export
3. **External Links**: Semua external links menggunakan `https://`
4. **Content**: Tidak ada user input yang dirender sebagai HTML (XSS safe)

---

## Common Tasks

### Menambahkan Section Baru
1. Buat file di `components/nama-section.tsx`
2. Tambahkan ke `hero-3d-stage.tsx` import & render
3. Tambahkan anchor ID jika perlu di-navigasi
4. Update `navbar.tsx` jika perlu link baru

### Menambahkan UI Component
1. Gunakan shadcn/ui CLI (jika tersedia):
   ```bash
   npx shadcn add nama-component
   ```
2. Atau buat manual di `components/ui/nama-component.tsx`
3. Gunakan pattern yang sama dengan existing UI components

### Mengubah Warna Tema
Edit CSS variables di `app/globals.css`:
```css
:root {
  --primary: oklch(0.205 0 0);
  /* ... */
}
```

---

## Dependencies Notes

### Production Dependencies
- **Framer Motion**: Animation library, gunakan `motion.div` etc.
- **Radix UI**: Headless UI primitives, accessible by default
- **Lucide React**: Icon library, import icons individually
- **next-themes**: Theme switching, gunakan `ThemeProvider`
- **Vercel Analytics**: Auto-tracking, sudah di `layout.tsx`

### Dev Dependencies
- **Tailwind CSS v4**: CSS-first configuration (no tailwind.config.js)
- **@tailwindcss/postcss**: PostCSS plugin untuk Tailwind v4
- **tw-animate-css**: Animation utilities

---

## Troubleshooting

### Build Error: "Cannot find module"
- Periksa path alias di `tsconfig.json` ( `@/*` )
- Pastikan import menggunakan `@/` prefix untuk internal modules

### Images tidak muncul
- Check `next.config.mjs` — `images.unoptimized: true` diperlukan untuk static export
- Gunakan standard `<img>` tag untuk external images, atau `next/image` dengan config yang tepat

### CSS tidak ter-apply
- Pastikan `app/globals.css` di-import di `app/layout.tsx`
- Tailwind v4 menggunakan `@import "tailwindcss"` bukan directives lama

---

*Terakhir diupdate: 2026-03-16*
*Maintainer: Sentra Healthcare AI Team*
