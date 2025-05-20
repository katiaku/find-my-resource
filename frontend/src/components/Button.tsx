import type { ButtonProps } from "../types"

const Button = ({ type = "button", className, name, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-md w-full cursor-pointer rounded-lg px-5 py-2.5 text-center font-bold tracking-wide text-white sm:w-auto ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
