import { BsGoogle } from "react-icons/bs"
import { useState } from "react"
import { useAuth } from "../context/useAuth"
import Button from "./Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { LoginFormInputs } from "../types/index"
import { useNavigate } from "react-router-dom"
import Error from "../components/Error"
import IconButton from "./IconButton"
import { baseUrl } from "../api/api"

const LoginForm = () => {
  const { setUser } = useAuth()
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

  const handleLoginClick = async (user: LoginFormInputs) => {
    try {
      const response = await fetch(`${baseUrl}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        // credentials: "include",
      })

      const data = await response.json()

      if (!response.ok) {
        setLoginError(
          (data?.error as string) || "Invalid credentials. Please try again."
        )
        return
      }

      setUser({
        username: user.username,
        password: user.password,
        email: data.email || "",
      })
      console.log("User logged in:", user)

      navigate("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      alert("There was an error. Please try again.")
    }
  }

  const onSubmit: SubmitHandler<LoginFormInputs> = ({
    username,
    password,
  }: LoginFormInputs) => {
    if (!username || !password) {
      setLoginError("Username and password are required.")
      return
    }

    handleLoginClick({ username, password })

    setLoginError("")
  }

  return (
    <div className="flex h-[calc(100vh_-_273px)] w-full justify-center">
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
              className={`text-md w-full rounded-lg border bg-gray-50 p-2.5 ${
                errors.username
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-amber-500"
              }`}
              {...register("username", {
                required: "Username is required",
              })}
              aria-invalid={!!errors.username}
            />
            {errors.username && (
              <span className="self-start text-sm text-red-500">
                {errors.username.message}
              </span>
            )}
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`text-md mt-2 w-full rounded-lg border bg-gray-50 p-2.5 ${
                errors.password
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-amber-500"
              }`}
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <span className="self-start text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
            {loginError && <Error error={loginError} />}
          </div>

          <Button
            type="submit"
            name="Log in"
            className="mb-2 bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />

          <div>or</div>
          <IconButton
            icon={<BsGoogle className="text-4xl text-blue-950" />}
            className="w-fit self-center rounded-lg bg-gray-200"
            handleClick={() => {
              console.log("Logging with Google")
            }}
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
