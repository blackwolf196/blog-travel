'use client'

import { useSupabase } from '@/provider/supabase-provider'
import { Button } from 'antd'

const Home = () => {
  const { supabase, setAppState } = useSupabase()
  const LogOut = () => {
    supabase.auth.signOut().then(() => {
      setAppState({
        isAuthenticated: false,
        isInitialized: true,
      })
      // router.push('/auth/in');
    })
  }

  return (
    <div className={'home-page'}>
      <Button onClick={LogOut}>Log out</Button>
    </div>
  )
}

export default Home
