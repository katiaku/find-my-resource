import { FaRegSave } from "react-icons/fa"
import TextLink from "./TextLink"
import type { CardComponentProps } from "../types/index"
import { formatDate } from "../utils/formatDate"
import { API_BASE_URL } from "../api"
import IconButton from "./IconButton"
import { useContext } from "react"
import { AuthContext } from "../context/authContextObject"

const Card = ({
  name,
  author,
  url,
  date,
  appliedTagsIds,
  allTags,
  id,
  savedResources,
  setSavedResources,
}: CardComponentProps) => {
  const { user, token } = useContext(AuthContext)

  const isSaved = savedResources?.includes(id)

  const getTagName = (id: string) => {
    const tag = allTags.find((tag) => String(tag.id) === id)
    return tag ? tag.tag : id
  }

  const handleSave = async () => {
    if (!user || !token) {
      alert("You need to be logged in to save resources.")
      return
    }

    if (isSaved) {
      alert("This resource is already saved.")
      return
    }

    try {
      const response = await fetch(`${API_BASE_URL}/resource/save/${id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Failed to save the resource.")
      }

      setSavedResources?.((prev) => [...(prev || []), id])
      alert("Resource saved successfully.")
      console.log("Saved resources:", savedResources)
    } catch (error) {
      console.error("Error saving resource:", error)
      alert("An error occurred while saving the resource. Please try again.")
    }
  }

  return (
    <div className="align-between flex flex-col overflow-hidden rounded bg-blue-950 text-white shadow-lg">
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
      <div className="flex w-full items-center gap-2 px-6 py-4">
        {appliedTagsIds.map((tagId: string) => (
          <span
            className="flex items-center justify-center rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white"
            key={tagId}
          >
            {getTagName(tagId)}
          </span>
        ))}
        {!isSaved && (
          <IconButton
            icon={<FaRegSave />}
            handleClick={handleSave}
            className="ml-auto text-xl"
          />
        )}
      </div>
    </div>
  )
}

export default Card
