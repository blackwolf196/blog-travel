'use client'

import { useSupabase } from '@/provider/supabase-provider'
import { Button } from 'antd'
import { redirect, useRouter } from 'next/navigation'

const Home = () => {
  const { supabase, session, userInfo } = useSupabase()
  const router = useRouter()
  const LogOut = () => {
    supabase.auth.signOut().then(() => {
      router.push('/auth/in')
    })
  }

  if (!session) {
    return redirect('/auth/in')
  }
  // if (userInfo.first_login) {
  //   return redirect('/home/user')
  // }

  return (
    <div className={'home-page'}>
      <Button onClick={LogOut}>Log out</Button>
    </div>
  )
}

export default Home
