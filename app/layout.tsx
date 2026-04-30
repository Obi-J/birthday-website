import type { Metadata } from "next"
import { Press_Start_2P, VT323, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "HAPPY BIRTHDAY // PLAYER ONE",
  description: "An 80s arcade-style birthday tribute. Press start to celebrate.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${pressStart.variable} ${vt323.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
