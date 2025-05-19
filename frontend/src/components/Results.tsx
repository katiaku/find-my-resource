import Card from "./Card"
import type { Resource, ResultsProps } from "../types/index"
import { MOCK_TAGS } from "../mock"

const Results = ({ resources }: ResultsProps) => {
  return (
    <section className="container mx-auto my-5 p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {resources.length === 0 ? (
          <p className="h-screen text-center text-lg text-blue-950">
            No resources found. Please choose another tag.
          </p>
        ) : (
          resources.map((resource: Resource) => (
            <Card
              name={resource.name}
              url={resource.url}
              author={resource.author}
              date={resource.createdAt}
              appliedTagsIds={resource.appliedTags}
              allTags={MOCK_TAGS}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Results
