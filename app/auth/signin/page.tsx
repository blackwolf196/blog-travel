'use client'

import { useSupabase } from '@/app/supabase-provider'
import { redirect } from 'next/navigation'
import AuthUI from './AuthUI'

export default function SignIn() {
  const {
    appState: { isAuthenticated, isInitialized },
  } = useSupabase()
  if (isAuthenticated && isInitialized) {
    return redirect('/home')
  }

  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
          {/*<Logo width="64px" height="64px" />*/}
        </div>
        <AuthUI />
      </div>
    </div>
  )
}
