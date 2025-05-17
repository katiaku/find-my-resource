import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

type Inputs = {
  search: string
}

const SearchForm = () => {

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

  const handleClear = () => {
    setValue('search', '');
    document.getElementById('search')?.focus();
  }

  return (
    <section>
      <form className="text-center flex flex-col justify-center sm:flex-row m-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            id="search"
            placeholder="Title of resource"
            className="mb-2 mr-3 w-full sm:w-sm md:w-lg lg:w-3xl bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-2 focus:outline-none focus:ring-amber-500 p-2.5"
            {...register("search")}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mb-2 sm:mr-3 text-white bg-blue-950 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-amber-500 font-bold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center tracking-wide"
          >
            Search
          </button>
          <button
            type="button"
            className="text-white bg-amber-500 focus:ring-2 focus:outline-none focus:ring-blue-950 font-bold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center tracking-wide"
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