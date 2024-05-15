import "@/styles/globals.css"
import { Metadata } from "next"
import localFont from "next/font/local"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import NavbarSticky from "@/components/nav-bar-sticky"
import LenisProvider from "@/components/providers/lenis-provider"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import BlendThought from "@/components/mask-hovers/mask-hover"
import { Footer } from "@/components/footer"

const fontHeading2 = localFont({
  src: "../public/fonts/boogy.woff2",
  variable: "--font-heading",
})
const fontHeading = localFont({
  src: "../public/fonts/cals.ttf",
  variable: "--font-heading2",
})
const fontHeading3 = localFont({
  src: "../public/fonts/LR.ttf",
  variable: "--font-heading3",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontHeading.variable,
            fontHeading2.variable,
            fontHeading3.variable,
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <NavbarSticky />
              <div className="flex-1">
                <LenisProvider>{children}</LenisProvider>
              </div>
            </div>
            <TailwindIndicator />
          <Footer />
          </ThemeProvider>
          
        </body>
      </html>
    </>
  )
}
