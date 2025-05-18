import TextLink from "./TextLink"
import type { CardComponentProps} from "../types/index"
import {formatDate} from "../utils"

const Card = ({name, author, url, date}: CardComponentProps) => {

  return (
    <div className="rounded overflow-hidden shadow-lg bg-blue-950 text-white">
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold mb-2"><TextLink label={name} href={url} className="underline"/></h3>
        <div className="flex gap-8">
          <p><span>By: <span className="font-bold">{author}</span></span></p>
          <p><span>Created: <span className="font-bold">{formatDate(date)}</span></span></p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#JavaScript</span>
        <span className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#React</span>
        <span className="inline-block bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#CSS</span>
      </div>
    </div>
  )
}

export default Card