import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import AsciiRunner from "@/components/ascii-runner"
import { AnnouncementBanner } from "@/components/announcement-banner"
import { AnnouncementBannerSkeleton } from "@/components/announcement-banner-skeleton"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fieldnet Global Research",
  description:
    "Full-service market research agency providing exceptional quality services to clients across the globe. Established 2005 with 150+ years collective experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/logo-cyan.svg" type="image/svg+xml" />
      </head>
      <body>
        <AsciiRunner />
        <Suspense fallback={<AnnouncementBannerSkeleton />}>
          <AnnouncementBanner />
        </Suspense>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}