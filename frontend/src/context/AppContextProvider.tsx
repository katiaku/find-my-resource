import type { ReactNode } from "react"
import { UserProvider } from "./userContext"

interface AppContextProviderProps {
  children: ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return <UserProvider>{children}</UserProvider>
}

export default AppContextProvider
