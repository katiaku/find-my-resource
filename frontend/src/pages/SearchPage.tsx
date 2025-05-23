import { useState, useEffect } from "react"
import SearchForm from "../components/SearchForm"
import Results from "../components/Results"
import type { ResourcesArray, TagType } from "../types"
import { API_BASE_URL } from "../api"
import Loading from "../components/Loading"
import { resourceArray } from "../mock/resourceArray"
import Pagination from "../components/Pagination"
import TagList from "../components/TagList"

const SearchPage = () => {
  const [allTags, setAllTags] = useState<TagType[]>([])
  const [resources, setResources] = useState<ResourcesArray>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedTags, setSelectedTags] = useState<string[] | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const resourcesPerPage = 8

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/tags`)
        const data = await response.json()
        setAllTags(data.results)
      } catch (error) {
        console.error("Error fetching all tags:", error)
      } finally {
        setIsLoading(false)
      }
    }

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

    fetchAllTags()
    fetchResources()
  }, [])

  const handleSelection = (id: string) => {
    setSelectedTags((prev) =>
      prev?.includes(id)
        ? prev.filter((tagId) => tagId !== id)
        : [...(prev || []), id]
    )
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

    const matchesTitle = selectedTitle
      ? resource.name.toLowerCase().includes(selectedTitle.toLowerCase()) ||
        resource.author.toLowerCase().includes(selectedTitle.toLowerCase())
      : true

    return matchesTag && matchesTitle
  })

  const uniqueFilteredResources = Array.from(
    new Map(filteredResources.map((item) => [item.id, item])).values()
  )

  const totalPages = Math.ceil(
    uniqueFilteredResources.length / resourcesPerPage
  )

  const paginatedResources = uniqueFilteredResources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTags, selectedTitle])

  return (
    <div className="container mx-auto min-h-screen">
      <SearchForm handleSearch={handleSearch} handleReset={handleReset} />

      <div className="mx-auto flex flex-wrap justify-center gap-2 lg:w-[80%]">
        {isLoading ? (
          <Loading />
        ) : (
          <TagList
            allTags={allTags}
            selectedTags={selectedTags}
            handleSelection={handleSelection}
          />
        )}
      </div>

      <Results resources={paginatedResources} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  )
}

export default SearchPage
