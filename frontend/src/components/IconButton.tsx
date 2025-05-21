import type { IconButtonProps } from "../types"

const IconButton = ({ icon, handleClick, className }: IconButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex cursor-pointer items-center justify-center p-2 transition duration-300 hover:text-amber-500 ${className}`}
    >
      <span>{icon}</span>
    </button>
  )
}

export default IconButton
