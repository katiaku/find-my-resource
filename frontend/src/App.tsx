import "./App.css"
import Header from "./components/Header"
import SearchForm from "./components/SearchForm"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <SearchForm />
      </div>
      <Footer />
    </>
  )
}

export default App
