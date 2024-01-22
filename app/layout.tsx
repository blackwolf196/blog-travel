import { AppStateProvider } from '@/provider/appStateProvider'
import SupabaseProvider from '@/provider/supabase-provider'
import GlobalStyled from 'app/globalStyled'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'vietnamese'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Blog Travel',
  description: 'Funny app, create just for fun',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GlobalStyled />
      <body className={montserrat.className}>
        <SupabaseProvider>
          <AppStateProvider>{children}</AppStateProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
