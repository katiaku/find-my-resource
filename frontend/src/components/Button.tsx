import type { ButtonProps } from "../types"

const Button = ({ type = "button", className, name, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-md flex w-full cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 font-bold tracking-wide transition-colors duration-300 sm:w-auto ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
