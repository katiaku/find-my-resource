import type { JSX } from "react"

export type Link = {
  label: string
  href: string
}

export type TagType = {
  id: number
  external_id: string
  tag: string
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
  appliedTagsIds: string[]
  allTags: TagType[]
}

export type IconButtonProps = {
  icon: JSX.Element
  className?: string
  handleClick: () => void
}

export type SearchTagProps = {
  label: string
  onClick: () => void
  selected?: boolean
  className?: string
}

export type TextLinkProps = {
  label: string
  href: string
  className?: string
}

export type SearchFormProps = {
  handleSearch: (search: string) => void
  handleReset: () => void
}

export type ButtonProps = {
  type?: "button" | "submit"
  className?: string
  name: string
  onClick?: () => void
}

export type ErrorProps = {
  error: string
}

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export type SignupFormInputs = {
  name: string
  email: string
  password: string
  confirmpassword: string
}

export type LoginPageProps = {
  page: string
  handleSetUserName: (user: string) => void
}

export type DashboardPageProps = {
  user: string
}

export type SignupFormProps = {
  handleSetUserName: (user: string) => void
}
