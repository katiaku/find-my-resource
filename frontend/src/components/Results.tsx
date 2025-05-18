import Card from "./Card"
import type { Resource, ResultsProps} from "../types/index"

const Results = ({resources}: ResultsProps) => {

  return (
    <section className="container mx-auto my-5 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {resources.map((resource: Resource) => {
        return <Card name={resource.name} url={resource.url} author={resource.author} date={resource.createdAt}/>
      })
      }
      </div>
    </section>
    
  )

}

export default Results