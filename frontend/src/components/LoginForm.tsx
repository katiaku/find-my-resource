import Button from "./Button"

const LoginForm = () => {
  return (
    <div className="flex h-[calc(100vh_-_333px)] w-full justify-center">
      <div className="mt-6 h-fit rounded-lg border border-blue-950 px-4 py-8">
        <form
          className="m-4 flex w-[350px] flex-col justify-center gap-6 text-center"
          onSubmit={() => console.log("submit")}
        >
          <div className="flex flex-col gap-2">
            <input
              id="email"
              placeholder="Email"
              className="text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <input
              id="password"
              placeholder="Password"
              className="text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            name="Login"
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
