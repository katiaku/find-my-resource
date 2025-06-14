import type { TagType } from "../types"
import SearchTag from "./SearchTag"

const TagList = ({
  allTags,
  selectedTags,
  handleSelection,
}: {
  allTags: TagType[]
  selectedTags: string[] | null
  handleSelection: (id: string) => void
}) => {
  return (
    <div className="mx-4 my-8">
      <div className="mx-auto flex flex-wrap justify-center gap-2 lg:w-[80%]">
        {allTags.map(({ tag, id }) => (
          <SearchTag
            key={id}
            label={tag}
            onClick={() => handleSelection(tag)}
            selected={selectedTags?.includes(tag)}
          />
        ))}
      </div>
    </div>
  )
}

export default TagList
