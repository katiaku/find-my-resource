import { createContext } from "react"
import type { UserContextType } from "./userContext"

export const UserContext = createContext<UserContextType | undefined>(undefined)
