'use client'

import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '@/lib/i18n'

const robotoFont = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Mainstream',
  description: 'Generated by create next app',
}

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={robotoFont.className}>{children}</body>
    </html>
  )
}