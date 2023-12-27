import SupabaseProvider from '@/provider/supabase-provider'
import GlobalStyled from 'app/globalStyled'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Travel',
  description: 'Funny app, create just for fun',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GlobalStyled />
      <body className={inter.className}>
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  )
}
