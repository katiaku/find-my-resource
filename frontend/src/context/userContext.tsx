import { useState, type ReactNode } from "react"
import { UserContext } from "./userContextObject"
import type { User } from "../types"

export interface UserContextType {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUserState] = useState<User | null>(null)

  //TODO: Left for testing purposes, change for null when integrating state into signup and login logic
  const [user, setUserState] = useState<User | null>({
    username: "John",
    email: "",
    password: "",
  })

  const setUser = (user: User) => setUserState(user)

  const clearUser = () => setUserState(null)

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  )
}
