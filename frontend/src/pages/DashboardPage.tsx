import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useUser } from "../context/useUser"

const DashboardPage = () => {
  const { user } = useUser()

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/")
  }

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center gap-4">
      <h1 className="text-base font-semibold tracking-widest text-amber-500 md:text-2xl">
        Welcome, {user?.username}!
      </h1>
      <Button
        name="Search resources"
        onClick={handleRedirect}
        className="mb-2 bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none sm:mr-3"
      />
    </div>
  )
}

export default DashboardPage
