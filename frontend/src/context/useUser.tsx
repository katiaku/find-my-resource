import { useContext } from "react"
import { type UserContextType } from "./userContext"
import { UserContext } from "./userContextObject"

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
