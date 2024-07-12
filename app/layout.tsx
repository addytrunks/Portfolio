import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adhithya Srivatsan',
  description: "Adhithya Srivatsan's portfolio",
  keywords: ['portfolio', 'adhithya', 'srivatsan'],
  applicationName: 'addy.srivats',
   category:"portfolio",
}

export const revalidate = 10;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
