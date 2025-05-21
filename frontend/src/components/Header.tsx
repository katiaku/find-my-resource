const Header = () => {
  return (
    <header className="container mx-auto flex flex-col items-center justify-between p-6 sm:flex-row xl:justify-evenly">
      <img
        className="mb-3 h-26 w-26 sm:mb-0 md:h-38 md:w-38"
        src="/logo.png"
        alt="Pictures of various tools that develop your mind"
      />
      <div>
        <h1 className="text-center text-4xl font-semibold text-blue-950 lg:text-6xl">
          FIND MY RESOURCE
        </h1>
        <h2 className="text-center text-base font-semibold tracking-widest text-amber-500 sm:text-right md:text-2xl">
          LEARNING MADE EASY
        </h2>
      </div>
    </header>
  )
}

export default Header
