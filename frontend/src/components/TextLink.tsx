import type { TextLinkProps } from "../types"

const TextLink = ({ label, href, className }: TextLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cursor-pointer py-2 text-gray-100 transition duration-300 hover:text-amber-500 ${className}`}
    >
      <span>{label}</span>
    </a>
  )
}

export default TextLink
