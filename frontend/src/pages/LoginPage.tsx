import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import type { LoginPageProps } from "../types"

const LoginPage = ({ page }: LoginPageProps) => {
  return page === "login" ? <LoginForm /> : <SignupForm />
}

export default LoginPage
