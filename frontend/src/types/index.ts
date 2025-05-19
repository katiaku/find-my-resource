export type Link = {
  label: string
  href: string
}

export type TagType = {
  tag: string
  id: string
}

export type Resource = {
  author: string
  name: string
  appliedTags: string[]
  url: string
  createdAt: string
  id: string
}

export type ResourcesArray = Resource[]

export type ResultsProps = {
  resources: Resource[]
}

export type Inputs = {
  search: string
}

export type CardComponentProps = {
  name: string
  author: string
  url: string
  date: string
}
