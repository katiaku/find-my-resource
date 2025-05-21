import { MOCK_TAGS } from "../mock/tags"
import SearchTag from "./SearchTag"

const TagList = ({
  selectedTags,
  handleSelection,
}: {
  selectedTags: string[] | null
  handleSelection: (id: string) => void
}) => {
  return (
    <div className="mx-4 my-8">
      <div className="mx-auto flex flex-wrap justify-center gap-2 lg:w-[80%]">
        {MOCK_TAGS.map(({ tag, id }) => (
          <SearchTag
            key={id}
            label={tag}
            onClick={() => handleSelection(id)}
            selected={selectedTags?.includes(id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TagList
