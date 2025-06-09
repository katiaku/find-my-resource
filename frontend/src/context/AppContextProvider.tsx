import type { ReactNode } from "react"
import { AuthProvider } from "./authContext"

interface AppContextProviderProps {
  children: ReactNode
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default AppContextProvider
