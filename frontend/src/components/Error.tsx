import type { ErrorProps } from "../types"

const Error = ({ error }: ErrorProps) => {
  return <p className="text-left text-red-400">{error}</p>
}

export default Error
