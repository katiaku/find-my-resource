import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineUserAdd } from "react-icons/ai"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "./Button"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import { useAuth } from "../context/useAuth"

const Header = () => {
  const navigate = useNavigate()
  const { user, clearUser } = useAuth()
  const location = useLocation()
  const isDashboardPage = location.pathname === "/dashboard"

  const handleLogout = async () => {
    try {
      clearUser()
      navigate("/")
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  return (
    <>
      <div className="sticky top-0 flex gap-3 rounded-b-3xl bg-amber-500 p-3 pr-5 md:justify-end">
        {!user && !isDashboardPage && (
          <>
            <Button
              name={<AiOutlineUserAdd size={20} />}
              onClick={() => navigate("/signup")}
              className="bg-blue-950 px-2.5 py-1"
            />
            <Button
              name={<FiLogIn size={20} />}
              onClick={() => navigate("/login")}
              className="bg-blue-950 px-2.5 py-1"
            />
          </>
        )}

        {user && !isDashboardPage && (
          <>
            <Button
              name={<AiOutlineUser size={20} />}
              onClick={() => navigate("/dashboard")}
              className="bg-blue-950 px-2.5 py-1"
            />
            <Button
              name={<FiLogOut size={20} />}
              onClick={handleLogout}
              className="bg-blue-950 px-2.5 py-1"
            />
          </>
        )}

        {user && isDashboardPage && (
          <Button
            name={<FiLogOut size={20} />}
            onClick={handleLogout}
            className="bg-blue-950 px-2.5 py-1"
          />
        )}
      </div>

      <header className="container mx-auto mt-2">
        <div className="flex flex-col items-center justify-between p-6 sm:flex-row xl:justify-evenly">
          <img
            className="mb-3 h-26 w-26 sm:mb-0 md:h-38 md:w-38"
            src="/logo.png"
            alt="Pictures of various tools that develop your mind"
          />
          <div>
            <h1 className="text-center text-4xl font-semibold text-blue-950 lg:text-6xl">
              FIND MY RESOURCE
            </h1>
            <h2 className="text-center text-base font-semibold tracking-widest text-amber-500 sm:text-right md:text-2xl">
              LEARNING MADE EASY
            </h2>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
