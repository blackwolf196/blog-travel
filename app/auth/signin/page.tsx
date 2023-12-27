'use client'

import { useSupabase } from '@/provider/supabase-provider'
import SignInAnimation from 'app/auth/signin/SignInAnimation'
import { redirect } from 'next/navigation'

export default function SignIn() {
  const {
    appState: { isAuthenticated, isInitialized },
  } = useSupabase()
  if (isAuthenticated && isInitialized) {
    return redirect('/home')
  }

  return <SignInAnimation />
}
