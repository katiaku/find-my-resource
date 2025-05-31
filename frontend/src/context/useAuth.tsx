import { useContext } from "react"
import { AuthContext } from "./authContextObject"
import type { AuthContextType } from "./authContext"

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("Out of the AuthProvider")
  }
  return context
}
