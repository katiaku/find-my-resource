import AppContextProvider from "./AppContextProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppContextProvider>{children}</AppContextProvider>
}
