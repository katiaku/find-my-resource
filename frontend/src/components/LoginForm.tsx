import { useState } from "react"
import { useUser } from "../context/useUser"
import Button from "./Button"
import { useForm } from "react-hook-form"
import type { LoginFormInputs } from "../types/index"
import { useNavigate } from "react-router-dom"
import Error from "../components/Error"

const LoginForm = () => {
  const { setUser } = useUser()
  const [loginError, setLoginError] = useState<string>("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })
  const navigate = useNavigate()

  const onSubmit = async (user: LoginFormInputs) => {
    try {
      const response = await fetch(
        "http://resourcehelper.pythonanywhere.com/api/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
          credentials: "include",
        }
      )

      if (!response.ok) {
        setLoginError("Invalid data, please try again")
        return
      }

      setUser({ username: user.username, password: user.password, email: "" })
      navigate("/dashboard")
    } catch (error) {
      setLoginError("Something went wrong. Please try again later.")
      console.error("Login error:", error)
    }
  }

  return (
    <div className="flex h-[calc(100vh_-_333px)] w-full justify-center">
      <div className="mt-6 h-fit rounded-lg border border-blue-950 px-4 py-8">
        <form
          className="m-4 flex w-[350px] flex-col justify-center gap-6 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-bold text-blue-950">Log in</h2>
            <input
              id="username"
              placeholder="Username"
              className={`text-md mb-2 w-full rounded-lg border bg-gray-50 p-2.5 ${
                errors.username
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-amber-500"
              }`}
              {...register("username", {
                required: "Username is required",
              })}
              aria-invalid={!!errors.username}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`text-md mb-2 w-full rounded-lg border bg-gray-50 p-2.5 ${
                errors.password
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-amber-500"
              }`}
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={!!errors.password}
            />
            {loginError && <Error error={loginError} />}
          </div>

          <Button
            type="submit"
            name="Log in"
            className="mb-2 bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />

          <div className="flex w-full justify-center gap-2 text-sm text-gray-600">
            <p>Don’t have an account?</p>
            <a
              href="/signup"
              className="font-semibold text-amber-500 hover:underline"
            >
              Sign up here
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
