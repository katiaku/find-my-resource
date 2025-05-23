import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import { useState } from "react"

function App() {
  const [user, setUser] = useState<string>("")

  const handleSetUserName = (user: string) => {
    setUser(user)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route
            path="login"
            element={
              <LoginPage page="login" handleSetUserName={handleSetUserName} />
            }
          />
          <Route
            path="signup"
            element={
              <LoginPage page="signup" handleSetUserName={handleSetUserName} />
            }
          />
          <Route path="dashboard" element={<DashboardPage user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
