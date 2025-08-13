import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eco Build AI Hub',
  description: 'Your trusted source for AI tool reviews, comparisons, and insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
