import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import { useUser } from "./context/useUser"

function App() {
  const { setUser } = useUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route
            path="login"
            element={<LoginPage page="login" handleSetUserName={setUser} />}
          />
          <Route
            path="signup"
            element={<LoginPage page="signup" handleSetUserName={setUser} />}
          />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
