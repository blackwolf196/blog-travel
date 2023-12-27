'use client'

import { useSupabase } from '@/provider/supabase-provider'
import { Button } from 'antd'
import styles from 'app/page.module.css'
import { redirect } from 'next/navigation'

const Home = () => {
  const { supabase, session } = useSupabase()

  const LogOut = () => {
    supabase.auth.signOut()
  }

  if (!session) {
    return redirect('/auth/signin')
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button onClick={LogOut}>Log out</Button>
      </div>

      <div className={styles.center}></div>
    </main>
  )
}

export default Home
