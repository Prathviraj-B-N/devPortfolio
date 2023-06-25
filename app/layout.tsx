import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prathviraj B N',
  description: 'Welcome to my Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
