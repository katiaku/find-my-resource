import { useState, useEffect, type ReactNode } from "react"
import { AuthContext } from "./authContextObject"
import type { User } from "../types"

export interface AuthContextType {
  user: User | null
  token: string | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedToken = localStorage.getItem("token")
    if (storedUser) {
      setUserState(JSON.parse(storedUser))
    }
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const setUser = (user: User, authToken?: string) => {
    setUserState(user)
    localStorage.setItem("user", JSON.stringify(user))
    if (authToken) {
      setToken(authToken)
      localStorage.setItem("token", authToken)
    }
  }

  const clearUser = () => {
    setUserState(null)
    setToken(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ user, setUser, clearUser, token }}>
      {children}
    </AuthContext.Provider>
  )
}
