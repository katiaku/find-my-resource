import type { JSX } from "react"

type IconButtonProps = {
  icon: JSX.Element
  className?: string
  handleClick: () => void
}

const IconButton = ({ icon, handleClick, className }: IconButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex cursor-pointer items-center justify-center p-2 text-gray-100 transition duration-300 hover:text-gray-300 ${className}`}
    >
      <span>{icon}</span>
    </button>
  )
}

export default IconButton
