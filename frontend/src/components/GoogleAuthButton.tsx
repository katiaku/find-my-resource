import { BsGoogle } from "react-icons/bs"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { GoogleLogin } from "@react-oauth/google"
import IconButton from "./IconButton"
import { baseUrl } from "../api/api"

const GoogleAuthButton = () => {
  const navigate = useNavigate()
  const [googleButtonDiv, setGoogleButtonDiv] = useState<HTMLDivElement | null>(
    null
  )

  return (
    <>
      <div style={{ display: "none" }} ref={setGoogleButtonDiv}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              fetch(`${baseUrl}/auth/google/`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  token: credentialResponse.credential,
                }),
                credentials: "include",
              })
                .then((response) => {
                  if (!response.ok) {
                    return response.json().then((err) => Promise.reject(err))
                  }
                  toast.success("Successfully logged in with Google!")
                  navigate("/dashboard")
                })
                .catch((error) => {
                  console.error("Login Error:", error)
                  toast.error("Login failed. Please try again.")
                })
            }
          }}
          onError={() => {
            toast.error("Google login failed")
          }}
          useOneTap
        />
      </div>

      <IconButton
        icon={<BsGoogle className="text-4xl text-blue-950" />}
        className="w-fit self-center rounded-lg bg-gray-200 disabled:opacity-50"
        handleClick={() => {
            event?.preventDefault()
          const googleButton =
            googleButtonDiv?.querySelector<HTMLElement>('[role="button"]')
          if (googleButton) {
            googleButton.click()
          } else {
            toast.error("Google login not available. Please try again.")
          }
        }}
      />
    </>
  )
}

export default GoogleAuthButton