'use client'

import { useSupabase } from '@/provider/supabase-provider'
import Footer from 'app/home/components/Footer/footer'
import MainStyled from 'app/home/styled.layout'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
  const {
    appState: { isAuthenticated },
  } = useSupabase()
  if (!isAuthenticated) {
    return redirect('/auth/in')
  }
  return (
    <>
      <MainStyled>
        <div className={'home-router'}>{children}</div>
        <Footer />
      </MainStyled>
    </>
  )
}
