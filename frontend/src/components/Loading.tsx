import { GiSandsOfTime } from "react-icons/gi"
const Loading = () => {
  return (
    <div className="flex items-center gap-2">
      <GiSandsOfTime />
      <span className="text-center text-lg text-blue-950">Loading tags...</span>
    </div>
  )
}

export default Loading
