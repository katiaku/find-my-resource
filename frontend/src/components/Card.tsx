import TextLink from "./TextLink"
import type { CardComponentProps } from "../types/index"
import { formatDate } from "../utils/formatDate"

const Card = ({
  name,
  author,
  url,
  date,
  appliedTagsIds,
  allTags,
}: CardComponentProps) => {
  const getTagName = (id: string) => {
    const tag = allTags.find((tag) => tag.id === id)
    return tag ? tag.tag : id
  }

  return (
    <div className="overflow-hidden rounded bg-blue-950 text-white shadow-lg">
      <div className="px-6 py-4">
        <h3 className="mb-2 text-xl font-bold">
          <TextLink label={name} href={url} className="underline" />
        </h3>
        <div className="flex gap-8">
          <p>
            <span>
              By: <span className="font-bold">{author}</span>
            </span>
          </p>
          <p>
            <span>
              Created: <span className="font-bold">{formatDate(date)}</span>
            </span>
          </p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {appliedTagsIds.map((tagId: string) => (
          <span
            className="mr-2 mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white"
            key={tagId}
          >
            {getTagName(tagId)}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
