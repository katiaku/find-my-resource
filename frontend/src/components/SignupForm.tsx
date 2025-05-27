import Button from "../components/Button"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import type { SignupFormInputs, User } from "../types/index"
import { useState } from "react"
import Error from "../components/Error"
import { Link, useNavigate } from "react-router"
import { useUser } from "../context/useUser"

const SignupForm = () => {
  const { setUser } = useUser()
  const [loginError, setLoginError] = useState<string>("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })
  const navigate = useNavigate()

  const handleSignupClick = async (user: User) => {
    const result = await fetch(
      "http://resourcehelper.pythonanywhere.com/api/auth/register/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      }
    )

    const data = await result.json()

    console.log(data)

    setUser(user)

    navigate("/dashboard")
  }

  const onSubmit: SubmitHandler<SignupFormInputs> = ({
    username,
    email,
    password,
    confirmPassword,
  }: SignupFormInputs) => {
    if (password !== confirmPassword) {
      setLoginError("Passwords don't match")
      return
    }

    handleSignupClick({ username, email, password })

    setLoginError("")
  }

  return (
    <div className="flex h-[calc(100vh_-_273px)] w-full justify-center">
      <div className="mt-2 h-fit rounded-lg border border-blue-950 px-4 py-2">
        <form
          className="mx-4 my-2 flex w-[350px] flex-col justify-center gap-6 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <h2 className="mb-2 text-2xl font-bold text-blue-950">Sign up</h2>
            <input
              id="username"
              placeholder="Username"
              className={`text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ${errors.username ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-amber-500"} `}
              {...register("username", {
                required: "First name is required",
              })}
              aria-invalid={!!errors.username}
            />
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className={`text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ${errors.email ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-amber-500"} `}
              {...register("email", {
                required: "Email is required",
              })}
              aria-invalid={!!errors.email}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={`text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ${errors.password ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-amber-500"} `}
              {...register("password", {
                required: "Password is required",
              })}
              aria-invalid={!!errors.password}
            />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className={`text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ${errors.confirmPassword ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-amber-500"} `}
              {...register("confirmPassword", {
                required: "Confirm password is required",
              })}
              aria-invalid={!!errors.confirmPassword}
            />
            {loginError && <Error error={loginError} />}
          </div>
          <Button
            type="submit"
            name="Sign up"
            className="mb-2 bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />

          <div className="flex w-full justify-center gap-2 text-sm text-gray-600">
            <p>Have an account?</p>
            <Link
              to="/login"
              className="font-semibold text-amber-500 hover:underline"
            >
              Log in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupForm
