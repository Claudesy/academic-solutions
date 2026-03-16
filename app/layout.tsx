import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Sentra Academic Solutions (SAS) - 7 Agent untuk 1 Mahasiswa',
    template: '%s | SAS - Sentra Academic Solutions',
  },
  description: 'Selesaikan Skripsi Lebih Cepat dengan SAS — 7 Agent Spesialis Akademis. Platform multi-agent AI untuk mahasiswa dan dosen Ilmu Kesehatan: dari ide penelitian hingga sidang dengan pengawasan real-time.',
  keywords: [
    'skripsi',
    'tesis',
    'disertasi',
    'AI akademik',
    'bimbingan skripsi',
    'mahasiswa kesehatan',
    'penelitian kesehatan',
    'agent AI',
    'multi-agent',
    'sentra academic',
    'SAS',
    'academic assistant',
    'bimbingan online',
    'konsultasi skripsi',
    'analisis data kesehatan',
  ],
  authors: [{ name: 'Sentra Academic Solutions' }],
  creator: 'Sentra Academic Solutions',
  publisher: 'Sentra Academic Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://academic-solutions-production.up.railway.app',
    siteName: 'Sentra Academic Solutions',
    title: 'Sentra Academic Solutions (SAS) - 7 Agent untuk 1 Mahasiswa',
    description: 'Selesaikan Skripsi Lebih Cepat dengan SAS — 7 Agent Spesialis Akademis untuk mahasiswa Ilmu Kesehatan.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Sentra Academic Solutions - 7 Agent untuk 1 Mahasiswa',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentra Academic Solutions (SAS) - 7 Agent untuk 1 Mahasiswa',
    description: 'Selesaikan Skripsi Lebih Cepat dengan SAS — 7 Agent Spesialis Akademis.',
    images: ['/og-image.svg'],
    creator: '@sentraacademic',
  },
  verification: {
    // Google Search Console - Daftar di: https://search.google.com/search-console
    // Ganti dengan kode verifikasi Anda: <meta name="google-site-verification" content="KODE_ANDA">
    google: 'gSC_CODE_PLACEHOLDER_REPLACE_WITH_ACTUAL_CODE',
    // Bing Webmaster Tools - Daftar di: https://www.bing.com/webmasters
    // yandex: 'YANDEX_CODE',
    // other: {
    //   'msvalidate.01': 'BING_CODE',
    // },
  },
  alternates: {
    canonical: 'https://academic-solutions-production.up.railway.app',
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#09090b',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://academic-solutions-production.up.railway.app/#organization',
        name: 'Sentra Academic Solutions',
        alternateName: 'SAS',
        url: 'https://academic-solutions-production.up.railway.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://academic-solutions-production.up.railway.app/icon.svg',
        },
        description: 'Platform multi-agent AI untuk mahasiswa dan dosen Ilmu Kesehatan.',
        sameAs: [
          'https://github.com/Claudesy/academic-solutions',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://academic-solutions-production.up.railway.app/#website',
        url: 'https://academic-solutions-production.up.railway.app',
        name: 'Sentra Academic Solutions (SAS)',
        description: '7 Agent Spesialis Akademis untuk mahasiswa Ilmu Kesehatan.',
        publisher: {
          '@id': 'https://academic-solutions-production.up.railway.app/#organization',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://academic-solutions-production.up.railway.app/#webpage',
        url: 'https://academic-solutions-production.up.railway.app',
        name: 'Sentra Academic Solutions (SAS) - 7 Agent untuk 1 Mahasiswa',
        isPartOf: {
          '@id': 'https://academic-solutions-production.up.railway.app/#website',
        },
        about: {
          '@id': 'https://academic-solutions-production.up.railway.app/#organization',
        },
        description: 'Selesaikan Skripsi Lebih Cepat dengan SAS — 7 Agent Spesialis Akademis.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Sentra Academic Solutions',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web Browser',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IDR',
          availability: 'https://schema.org/ComingSoon',
        },
        featureList: [
          'Agent Pembimbing Principal',
          'Agent Ahli Penulisan Akademik',
          'Agent Auditor Kualitas Naskah',
          'Agent Kurator Referensi',
          'Agent Analis Data & Metodologi',
          'Agent Simulasi Penguji',
          'Agent Sistem Monitoring Progres',
        ],
      },
    ],
  }

  return (
    <html lang="id" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* 
          GOOGLE ANALYTICS 4 - Uncomment setelah mendapatkan Measurement ID
          Daftar di: https://analytics.google.com
          Ganti G-XXXXXXXXXX dengan Measurement ID Anda
        */}
        {/*
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
        */}
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
