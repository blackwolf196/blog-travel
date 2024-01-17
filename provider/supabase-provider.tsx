'use client'

import type { Database } from '@/types_db'
import { appConfig } from '@/utils/app-config'
import localStorage from '@/utils/LocalStorage'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import type { Session, SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type AppState = {
  isAuthenticated: boolean
  isInitialized: boolean
}

type SupabaseContext = {
  supabase: SupabaseClient<Database>
  session: Session | null
  appState: AppState
  setAppState: (appState: AppState) => void
  isAdmin: boolean
  userInfo: any | null
  setUserInfo: (userInfo: any) => void
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [supabase] = useState(() => createPagesBrowserClient())
  const [session, setSession] = useState<Session | null>(null)
  const [appState, setAppState] = useState<AppState>({
    isAuthenticated: false,
    isInitialized: false,
  })
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        localStorage.set(appConfig.accessTokenName, session.access_token)
        setAppState({
          isAuthenticated: true,
          isInitialized: true,
        })
        setSession(session)

        const { data: checkAdmin } = await supabase.rpc('check_admin', {
          input_user_id: session.user.id,
        })
        setIsAdmin(!!checkAdmin)

        const { data: dataUser } = await supabase
          .from('user_info')
          .select('*')
          .eq('user_id', session.user.id)
        if (!dataUser?.length) {
          const { data: dataInsertUser } = await supabase
            .from('user_info')
            .insert({
              user_id: session.user.id,
              first_login: true,
            })
            .select('*')
          if (dataInsertUser?.length) {
            setUserInfo(dataInsertUser[0])
          }
        } else {
          setUserInfo(dataUser[0])
        }
      } else {
        localStorage.remove(appConfig.accessTokenName)
        setAppState({
          isAuthenticated: false,
          isInitialized: true,
        })
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <Context.Provider
      value={{
        supabase,
        session,
        appState,
        setAppState,
        isAdmin,
        userInfo,
        setUserInfo,
      }}
    >
      {appState.isInitialized && children}
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}
