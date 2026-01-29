import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { AnnouncementBannerSkeleton } from "@/components/announcement-banner-skeleton"
import "./globals.css"

import CookieConsent from "@/components/cookie-consent"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "FieldNet",
  description:
    "FieldNet is a leading global market research agency specializing in data collection, insights, and analytics. Trusted by top brands since 2004. Offices in India, UK, and worldwide.",
  metadataBase: new URL('https://www.fieldnetglobal.com'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/logo/logo%20brandmark.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/logo%20brandmark.png" />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FieldNet Global Research",
            "url": "https://www.fieldnetglobal.com/",
            "logo": "https://www.fieldnetglobal.com/logo/logo%20brandmark.png",
            "description": "FieldNet is a leading global market research agency specializing in data collection, insights, and analytics. Trusted by top brands since 2004.",
            "sameAs": [
              "https://www.linkedin.com/company/fieldnetglobal/",
              "https://www.facebook.com/field.netglobal.8/"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9892787127",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "F-220, First Floor, The Dreams Mall, Station Road, Bhandup (West)",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400078",
              "addressCountry": "IN"
            }
          }
        `}</script>
      </head>
      <body>
        <Suspense fallback={<AnnouncementBannerSkeleton />}>
          <AnnouncementBanner />
        </Suspense>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  )
}