import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import type { LoginPageProps } from "../types/index"

const LoginPage = ({ page, handleSetUserName }: LoginPageProps) => {
  return page === "login" ? (
    <LoginForm />
  ) : (
    <SignupForm handleSetUserName={handleSetUserName} />
  )
}

export default LoginPage
