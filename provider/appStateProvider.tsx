'use client'

import React, { createContext, ReactNode, useContext, useReducer } from 'react'

interface AppState {
  count: number
}

// Define action types
type Action = {
  type: 'setCount' | ''
  value: any
}

// Create the context
const AppStateContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined)

// Create a reducer function
const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'setCount':
      return {
        ...state,
        count: action.value,
      }
    default:
      return state
  }
}

// Create a provider component
interface AppStateProviderProps {
  children: ReactNode
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const initialState: AppState = {
    count: 0,
  }
  const [state, dispatch] = useReducer(appStateReducer, { ...initialState })

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

// Create a custom hook to use the context
export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}
