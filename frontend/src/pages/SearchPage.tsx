import { useState, useEffect } from "react"
import SearchForm from "../components/SearchForm"
import SearchTag from "../components/SearchTag"
import type { TagType } from "../types"
import { API_BASE_URL } from "../api"
import Loading from "../components/Loading"

const SearchPage = () => {
  const [allTags, setAllTags] = useState<TagType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedTags, setSelectedTags] = useState<string[] | null>(null)

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/tags`)
        const data = await response.json()
        setAllTags(data)
      } catch (error) {
        console.error("Error fetching all tags:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAllTags()
  }, [])

  const handleSelection = (id: string) => {
    setSelectedTags((prev) =>
      prev?.includes(id)
        ? prev.filter((tagId) => tagId !== id)
        : [...(prev || []), id]
    )
    console.log("Selected tags: ", selectedTags)
  }

  return (
    <div className="container mx-auto">
      <SearchForm />

      <div className="mx-4 my-8">
        <div className="mx-auto flex flex-wrap justify-center gap-2 lg:w-[80%]">
          {isLoading ? (
            <Loading />
          ) : (
            allTags.map(({ tag, id }) => (
              <SearchTag
                key={id}
                label={tag}
                onClick={() => handleSelection(id)}
                selected={selectedTags?.includes(id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage
