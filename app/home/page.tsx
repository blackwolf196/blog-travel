import { useSupabase } from '@/app/supabase-provider'
import { Button } from 'antd'
import styles from 'app/page.module.css'
import Image from 'next/image'

const Home = () => {
  // const { supabase } = useSupabase()
  //
  // const LogOut = () => {
  //   supabase.auth.signOut()
  // }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/*<Button onClick={LogOut}>Log out</Button>*/}
      </div>

      <div className={styles.center}></div>
    </main>
  )
}

export default Home
