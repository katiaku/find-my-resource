import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import type { Inputs } from "../types/index"
import Button from "./Button"

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
          <Button
            type="submit"
            name="Search"
            className="mb-2 bg-blue-950 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none sm:mr-3"
          />
          <Button
            name="Clear"
            className="bg-amber-500 hover:bg-amber-400 focus:ring-2 focus:ring-blue-950 focus:outline-none"
            onClick={handleClear}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
