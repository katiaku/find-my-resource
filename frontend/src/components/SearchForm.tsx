import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import type {Inputs} from "../types/index"

const SearchForm = () => {
  const { register, handleSubmit, setValue } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  const handleClear = () => {
    setValue("search", "")
    document.getElementById("search")?.focus()
  }

  return (
    <section>
      <form
        className="m-4 flex flex-col justify-center text-center sm:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            id="search"
            placeholder="Title of resource"
            className="text-md mr-3 mb-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none sm:w-sm md:w-lg lg:w-3xl"
            {...register("search")}
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-md mb-2 w-full cursor-pointer rounded-lg bg-blue-950 px-5 py-2.5 text-center font-bold tracking-wide text-white hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none sm:mr-3 sm:w-auto"
          >
            Search
          </button>
          <button
            type="button"
            className="text-md w-full cursor-pointer rounded-lg bg-amber-500 px-5 py-2.5 text-center font-bold tracking-wide text-white focus:ring-2 focus:ring-blue-950 focus:outline-none sm:w-auto"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
