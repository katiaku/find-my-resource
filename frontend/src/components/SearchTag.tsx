type SearchTagProps = {
  label: string
  onClick: () => void
  selected?: boolean
  className?: string
}

const SearchTag = ({
  label,
  onClick,
  selected = false,
  className,
}: SearchTagProps) => {
  const baseStyle =
    "cursor-pointer rounded-4xl border px-2 py-1 text-sm font-medium transition-colors"
  const selectedStyle = "bg-blue-950 text-white border-blue-950"
  const unselectedStyle = "bg-white text-blue-950 border-blue-950"

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${selected ? selectedStyle : unselectedStyle} ${className}`}
    >
      <span>{label}</span>
    </button>
  )
}

export default SearchTag
