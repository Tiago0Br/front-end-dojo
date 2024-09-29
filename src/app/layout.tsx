import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Front-end Dojo - Home',
  description: 'Lista dos projetos de front-end.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
