import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
