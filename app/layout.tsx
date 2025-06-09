import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

// Update the metadata for better SEO
export const metadata: Metadata = {
  title: "Efe GSM Alanya - Telefon Tamiri, Ekran Değişimi, Aksesuar | 30 Dakika Garanti",
  description:
    "Alanya'da en hızlı telefon tamiri! 30 dakikada ekran değişimi, batarya tamiri, su hasarı onarımı. Profesyonel GSM servisi, uygun fiyat, garanti. WhatsApp destek.",
  keywords:
    "telefon tamiri alanya, ekran değişimi, batarya değişimi, gsm servisi, telefon tamir, alanya gsm, su hasarı tamiri, iphone tamir, samsung tamir, huawei tamir, xiaomi tamir, oppo tamir, sim kart satışı, telefon aksesuar, powerbank, kılıf, kulaklık, alanya teknoloji, mobil tamir, hızlı tamir, garantili tamir",
  authors: [{ name: "Efe GSM Alanya" }],
  creator: "Efe GSM Alanya",
  publisher: "Efe GSM Alanya",
  robots: "index, follow",
  openGraph: {
    title: "Efe GSM Alanya - 30 Dakikada Telefon Tamiri",
    description:
      "Alanya'da en hızlı ve güvenilir telefon tamiri hizmeti. Profesyonel ekibimizle telefonunuzu kısa sürede tamir ediyoruz.",
    url: "https://efegsmalanya.com",
    siteName: "Efe GSM Alanya",
    images: [
      {
        url: "/images/efe-gsm-logo.png",
        width: 500,
        height: 500,
        alt: "Efe GSM Alanya Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efe GSM Alanya - 30 Dakikada Telefon Tamiri",
    description: "Alanya'da en hızlı ve güvenilir telefon tamiri hizmeti.",
    images: ["/images/efe-gsm-logo.png"],
  },
  alternates: {
    canonical: "https://efegsmalanya.com",
    languages: {
      "tr-TR": "https://efegsmalanya.com",
      "en-US": "https://efegsmalanya.com/en",
      "ru-RU": "https://efegsmalanya.com/ru",
      "de-DE": "https://efegsmalanya.com/de",
    },
  },
    generator: 'v0.dev'
}

// Add structured data script
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Efe GSM Alanya",
    description: "Profesyonel telefon tamiri ve GSM hizmetleri",
    url: "https://efegsmalanya.com",
    telephone: "+905323681555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alanya Merkez",
      addressLocality: "Alanya",
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.5452416",
      longitude: "32.0112344",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    priceRange: "₺₺",
    image: "https://efegsmalanya.com/images/efe-gsm-logo.png",
    sameAs: ["https://t.me/efegsmalanya", "https://wa.me/905323681555"],
  }

  return (
    <html lang="tr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
