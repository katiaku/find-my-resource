import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import type { LoginPageProps } from "../types"
import { GoogleOAuthProvider } from "@react-oauth/google"


const LoginPage = ({ page }: LoginPageProps) => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    {page === "login" ? <LoginForm /> : <SignupForm />}
    </GoogleOAuthProvider>
  )
}

export default LoginPage
