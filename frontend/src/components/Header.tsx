import { useNavigate } from "react-router-dom"
import Button from "./Button"

const Header = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/dashboard")
  }

  return (
    <>
      <div className="sticky top-0 flex justify-end gap-3 rounded-b-3xl bg-amber-500 p-3 pr-5">
        <Button name="Sign up" className="bg-blue-950 px-2.5 py-1" />
        <Button
          name="Dashboard"
          onClick={handleRedirect}
          className="bg-blue-950 px-2.5 py-1"
        />
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
