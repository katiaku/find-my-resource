import { useState, useEffect } from "react"
import SearchForm from "../components/SearchForm"
import SearchTag from "../components/SearchTag"
import Results from "../components/Results"
import type { ResourcesArray } from "../types"
// import { API_BASE_URL } from "../api"
// import Loading from "../components/Loading"
import { resourceArray } from "../resourceArray"
import { MOCK_TAGS } from "../mock"

const SearchPage = () => {
  // const [allTags, setAllTags] = useState<TagType[]>([])
  const [resources, setResources] = useState<ResourcesArray>([])
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedTags, setSelectedTags] = useState<string[] | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  useEffect(() => {
    // TODO: uncomment the following and necessary variables and imports when the api is functional
    // const fetchAllTags = async () => {
    //   try {
    //     const response = await fetch(`${API_BASE_URL}/tags`)
    //     const data = await response.json()
    //     setAllTags(data)
    //   } catch (error) {
    //     console.error("Error fetching all tags:", error)
    //   } finally {
    //     setIsLoading(false)
    //   }
    // }

    const fetchResources = async () => {
      try {
        // const response = await fetch(`${API_BASE_URL}/resources`"

        // const data = await response.json()

        const data: ResourcesArray = resourceArray

        setResources(data)
      } catch (error) {
        console.log(error)
      }
    }

    // fetchAllTags()
    fetchResources()
  }, [])

  const handleSelection = (id: string) => {
    setSelectedTags((prev) =>
      prev?.includes(id)
        ? prev.filter((tagId) => tagId !== id)
        : [...(prev || []), id]
    )
    console.log("Selected tags: ", selectedTags)
  }

  const handleSearch = (title: string) => {
    setSelectedTitle(title)
  }

  const handleReset = () => {
    setResources(resourceArray)
    setSelectedTitle(null)
    setSelectedTags(null)
  }

  const filteredResources = resources.filter((resource) => {
    const matchesTag =
      selectedTags && selectedTags.length > 0
        ? resource.appliedTags.some((tag) => selectedTags.includes(tag))
        : true

    const matchesTitle = selectedTitle ? resource.name === selectedTitle : true

    return matchesTag && matchesTitle
  })

  return (
    <div className="container mx-auto">
      <SearchForm handleSearch={handleSearch} handleReset={handleReset} />

      <div className="mx-4 my-8">
        <div className="mx-auto flex flex-wrap justify-center gap-2 lg:w-[80%]">
          {/* {isLoading ? (
            <Loading />
          ) : ( */}
          {MOCK_TAGS.map(({ tag, id }) => (
            <SearchTag
              key={id}
              label={tag}
              onClick={() => handleSelection(id)}
              selected={selectedTags?.includes(id)}
            />
          ))}
          {/* )} */}
        </div>
      </div>

      <Results resources={filteredResources} />
    </div>
  )
}

export default SearchPage
