import Card from "./Card"
import type { Resource, ResultsProps } from "../types/index"
import { MOCK_TAGS } from "../mock/tags"

const Results = ({ resources }: ResultsProps) => {
  return (
    <section className="container mx-auto my-5 p-6">
      <div className="grid gap-4 md:grid-cols-2">
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
            />
          ))
        )}
      </div>
    </section>
  )
}

export default Results
