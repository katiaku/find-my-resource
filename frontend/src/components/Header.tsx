const Header = () => {
  return (
    <header className="flex items-center flex-col sm:flex-row justify-between xl:justify-evenly p-6">
      <img className="h-26 w-26 md:h-38 md:w-38 mb-3 sm:mb-0" src="/logo.png" alt="Pictures of various tools that develop your mind"/>
      <div>
        <h1 className="lg:text-6xl text-4xl text-blue-950 text-center font-semibold">FIND MY RESOURCE</h1>
        <h2 className="text-base md:text-2xl tracking-widest font-semibold text-center sm:text-right text-amber-500">LEARNING MADE EASY</h2>
      </div>
    </header>
  )
}

export default Header