import { useState, useEffect, type ReactNode } from "react"
import { AuthContext } from "./authContextObject"
import type { User } from "../types"
import { baseUrl } from "../api/api"

export interface AuthContextType {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${baseUrl}/auth/check-auth`, {
          credentials: "include",
        })

        if (res.ok) {
          const data = await res.json()
          setUserState(data.user)
        } else {
          setUserState(null)
        }
      } catch (error) {
        console.error("Auth checking error:", error)
        setUserState(null)
      }
    }

    checkAuth()
  }, [])

  const setUser = (user: User) => setUserState(user)

  const clearUser = () => {
    setUserState(null)
    fetch(`${baseUrl}/auth/logout/`, {
      method: "POST",
      credentials: "include",
    }).catch(console.error)
  }

  return (
    <AuthContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  )
}
