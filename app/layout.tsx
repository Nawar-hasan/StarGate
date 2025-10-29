import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "Star Gate - بوابة التحول الرقمي والذكاء الاصطناعي",
  description: "ستار جيت - شركة تقنية متخصصة في التحول الرقمي، والذكاء الاصطناعي، وتطوير البرمجيات الذكية",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
