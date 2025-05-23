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
        {allTags.map(({ tag, external_id }) => (
          <SearchTag
            key={external_id}
            label={tag}
            onClick={() => handleSelection(external_id)}
            selected={selectedTags?.includes(external_id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TagList
