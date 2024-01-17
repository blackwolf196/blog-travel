'use client'

import { useSupabase } from '@/provider/supabase-provider'
import SignInAnimation from 'app/auth/in/SignInAnimation'
import { redirect } from 'next/navigation'

export default function SignIn() {
  const {
    appState: { isAuthenticated },
  } = useSupabase()
  if (isAuthenticated) {
    return redirect('/home')
  }

  return <SignInAnimation />
}
