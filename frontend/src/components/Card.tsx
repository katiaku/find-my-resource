import { MdDeleteForever } from "react-icons/md"
import { FaRegSave } from "react-icons/fa"
import TextLink from "./TextLink"
import type { CardComponentProps } from "../types/index"
import { formatDate } from "../utils/formatDate"
import IconButton from "./IconButton"
import { useState } from "react"
import { toast } from "react-toastify"
import { useLocation } from "react-router-dom"
import { GiRoundStar } from "react-icons/gi"
import { baseUrl } from "../api/api"

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
  avgRating,
}: CardComponentProps) => {
  const isSaved = savedResources?.includes(id)

  const location = useLocation()

  const isDashboardPage = location.pathname === "/dashboard"

  const [rating, setRating] = useState<number>(0)

  const getTagName = (id: string) => {
    const tag = allTags.find((tag) => String(tag.id) === id)
    return tag ? tag.tag : id
  }

  const handleSave = async () => {
    if (isSaved) {
      toast.warn("This resource is already saved.")
      return
    }

    try {
      const response = await fetch(`${baseUrl}/resource/save/${id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error("Failed to save the resource.")
      }

      setSavedResources?.((prev) => [...(prev || []), id])
      toast.error("Resource saved successfully.")
    } catch (error) {
      console.error("Error saving resource:", error)
      toast.error("There was an error. Please try again.")
    }
  }

  const handleUnsave = async () => {
    try {
      const response = await fetch(`${baseUrl}/resource/unsave/${id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error("Failed to unsave the resource.")
      }

      setSavedResources?.((prev) =>
        (prev || []).filter((savedId) => savedId !== id)
      )
      toast.success("Resource unsaved successfully.")
    } catch (error) {
      console.error("Error unsaving resource:", error)
      toast.error("There was an error. Please try again.")
    }
  }

  const handleRateResource = async (rating: number) => {
    try {
      const response = await fetch(`${baseUrl}/resources/rate/${id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ rating }),
      })

      if (!response.ok) {
        throw new Error("Failed to rate the resource.")
      }

      setRating(rating)
    } catch (error) {
      console.error("Error rating resource:", error)
      toast.error("There was an error. Please try again.")
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

      <div className="mb-1 flex items-center gap-2 px-6">
        {avgRating && avgRating > 0 ? <p>Average rating: {avgRating}</p> : null}
      </div>

      {isDashboardPage && (
        <div className="flex items-center gap-2 px-6">
          <p>Rate resource:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <GiRoundStar
              key={star}
              className={`cursor-pointer text-xl ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRateResource(star)}
            />
          ))}
        </div>
      )}

      <div className="flex w-full items-center gap-2 px-6 py-4">
        {appliedTagsIds.map((tagId: string) => (
          <span
            className="flex items-center justify-center rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white"
            key={tagId}
          >
            {getTagName(tagId)}
          </span>
        ))}

        {isDashboardPage && (
          <div className="flex w-full items-center justify-end gap-2">
            {!isSaved && (
              <IconButton
                icon={<FaRegSave />}
                handleClick={handleSave}
                className="text-xl"
              />
            )}
            {isSaved && (
              <IconButton
                icon={<MdDeleteForever />}
                handleClick={handleUnsave}
                className="text-2xl"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
