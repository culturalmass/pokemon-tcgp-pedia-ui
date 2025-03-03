import type { Metadata } from "next"
import { Titillium_Web } from "next/font/google"
import "./globals.css"

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Pokemon TCGP pedia",
  description: "All abouut pokemon TCGP",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
