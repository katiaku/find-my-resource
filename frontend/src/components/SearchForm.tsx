import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import type { Inputs, SearchFormProps } from "../types/index"
import Button from "./Button"
import Error from "./Error"

const SearchForm = ({ handleSearch, handleReset }: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleSearch(data.search)
  }

  const handleClear = () => {
    setValue("search", "")
    document.getElementById("search")?.focus()
    handleReset()
  }

  return (
    <form
      className="m-auto flex flex-col items-start justify-center gap-2 p-4 md:w-[90%] md:flex-row lg:w-[80%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <input
          id="search"
          placeholder="Title of resource"
          className={`text-md w-full rounded-lg border bg-gray-50 p-2.5 text-gray-900 focus:ring-2 focus:outline-none ${errors.search ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-amber-500"} `}
          {...register("search", {
            required: "A resource title is required",
          })}
          aria-invalid={!!errors.search}
        />
        {errors.search?.message ? (
          <Error error={errors.search.message} />
        ) : (
          <div style={{ height: "24px" }} />
        )}
      </div>

      <div className="flex w-full flex-col gap-2 md:max-h-[46px] md:w-fit md:flex-row">
        <Button
          type="submit"
          name="Search"
          className="bg-blue-950 px-5 py-2.5 hover:bg-blue-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
        />
        <Button
          name="Clear"
          className="bg-amber-500 px-5 py-2.5 hover:bg-amber-400 focus:ring-2 focus:ring-blue-950 focus:outline-none"
          onClick={handleClear}
        />
      </div>
    </form>
  )
}

export default SearchForm
