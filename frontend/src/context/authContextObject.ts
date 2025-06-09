import { createContext } from "react"
import type { AuthContextType } from "./authContext"

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  clearUser: () => {},
})
