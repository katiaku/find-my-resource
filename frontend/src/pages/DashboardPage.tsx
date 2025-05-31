import Button from "../components/Button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"
import Results from "../components/Results"
import Pagination from "../components/Pagination"
import { useEffect, useState } from "react"
import type { ResourcesArray } from "../types"
import { resourceArray } from "../mock/resourceArray"

const DashboardPage = () => {
  const { user } = useAuth()

  const [resources, setResources] = useState<ResourcesArray>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const resourcesPerPage = 8

  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate("/")
  }

  useEffect(() => {
    const fetchResources = async () => {
      try {
        // const response = await fetch(`${API_BASE_URL}/resources/saved/`)
        // const data = await response.json()
        const data: ResourcesArray = resourceArray
        setResources(data)
      } catch (error) {
        console.log("Error fetching resources:", error)
      }
    }

    fetchResources()
  }, [])

  const totalPages = Math.ceil(resources.length / resourcesPerPage)

  const paginatedResources = resources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center gap-4">
      <h1 className="text-base font-semibold tracking-widest text-amber-500 md:text-2xl">
        Welcome, {user?.username}!
      </h1>
      <Button
        name="Search resources"
        onClick={handleRedirect}
        className="mb-2 bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none sm:mr-3"
      />
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

export default DashboardPage
