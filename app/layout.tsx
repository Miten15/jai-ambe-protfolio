import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jai Ambe - Creative Developer & Designer | Indian-Inspired Web Development",
  description:
    "Professional web developer specializing in modern React, Next.js, and TypeScript development with traditional Indian design aesthetics. Based in Mumbai, Maharashtra.",
  keywords: [
    "web developer",
    "react developer",
    "nextjs developer",
    "ui ux designer",
    "indian design",
    "mumbai developer",
    "typescript",
    "full stack developer",
  ],
  authors: [{ name: "Jai Ambe" }],
  creator: "Jai Ambe",
  publisher: "Jai Ambe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jaiambe.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jai Ambe - Creative Developer & Designer",
    description:
      "Crafting beautiful digital experiences with a touch of Indian artistry. Specializing in modern web development with traditional design sensibilities.",
    url: "https://jaiambe.dev",
    siteName: "Jai Ambe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jai Ambe - Creative Developer & Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Ambe - Creative Developer & Designer",
    description: "Crafting beautiful digital experiences with Indian artistry",
    images: ["/og-image.jpg"],
    creator: "@jaiambe",
  },  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.svg',
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/troy-sans" rel="stylesheet" />
        {/* Favicon configuration */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#ACB5F7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jai Ambe",
              jobTitle: "Creative Developer & Designer",
              description:
                "Professional web developer specializing in modern React, Next.js, and TypeScript development with traditional Indian design aesthetics.",
              url: "https://jaiambe.dev",
              sameAs: ["https://github.com/jaiambe", "https://linkedin.com/in/jaiambe", "https://twitter.com/jaiambe"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              email: "jai.ambe@example.com",
              telephone: "+91 98765 43210",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
