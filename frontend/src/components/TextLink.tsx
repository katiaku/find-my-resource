type TextLinkProps = {
  label: string
  className?: string
  handleClick: () => void
}

const TextLink = ({ label, handleClick, className }: TextLinkProps) => {
  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer px-4 py-2 text-gray-100 transition duration-300 hover:text-amber-500 ${className}`}
    >
      <span>{label}</span>
    </button>
  )
}

export default TextLink
