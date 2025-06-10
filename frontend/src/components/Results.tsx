import { BsPrinter } from "react-icons/bs"
import Card from "./Card"
import type { Resource, ResultsProps } from "../types/index"
import { MOCK_TAGS } from "../mock/tags"
import IconButton from "./IconButton"
import { useReactToPrint } from "react-to-print"
import { useRef } from "react"

const Results = ({
  resources,
  savedResources,
  setSavedResources,
}: ResultsProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle: "Chingu Resources Selection",
    bodyClass: "print:m-4",
  })

  return (
    <section className="container mx-auto my-5 p-6">
      <IconButton
        icon={<BsPrinter />}
        handleClick={reactToPrintFn}
        className="mb-2 flex gap-2 rounded-full px-4 text-xl text-blue-950"
      >
        <span>Print</span>
      </IconButton>

      <div
        ref={contentRef}
        className="grid gap-4 md:grid-cols-2 print:grid-cols-1"
      >
        {resources.length === 0 ? (
          <div className="col-span-2 mx-auto h-screen">
            <p className="text-center text-lg text-blue-950">
              No resources found.
            </p>
            <p className="text-center text-lg text-blue-950">
              Please try again with different keywords or tags.
            </p>
          </div>
        ) : (
          resources.map((resource: Resource) => (
            <Card
              key={resource.id}
              name={resource.name}
              url={resource.url}
              author={resource.author}
              date={resource.createdAt}
              appliedTagsIds={resource.appliedTags}
              allTags={MOCK_TAGS}
              id={resource.id}
              savedResources={savedResources}
              setSavedResources={setSavedResources}
              avgRating={resource.avg_rating}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Results
