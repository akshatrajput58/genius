import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'

import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <link rel="apple-touch-icon" sizes="57x57" href="https://vicpra.com/images/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://vicpra.com/images/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://vicpra.com/images/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://vicpra.com/images/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://vicpra.com/images/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://vicpra.com/images/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://vicpra.com/images/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://vicpra.com/images/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://vicpra.com/images/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://vicpra.com/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://vicpra.com/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://vicpra.com/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://vicpra.com/images/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="https://vicpra.com/images/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="https://vicpra.com/images/favicon.ico" />
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
