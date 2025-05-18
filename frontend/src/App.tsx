import "./App.css"
import Header from "./components/Header"

import SearchPage from "./pages/SearchPage"
import Results from "./components/Results"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import {resourceArray} from "./resourceArray"

type Resource = {
  author: string,
  name: string,
  appliedTags: string[],
  url: string,
  createdAt: string,
  id: string
}

type ResourcesArray = Resource[]

function App() {

  const [resources, setResources] = useState<ResourcesArray>()

  async function getResources() {
    // const response = await fetch("https://seshatbe.up.railway.app/resources"

    // const data = await response.json()

    const data: ResourcesArray = resourceArray

    setResources(data)
  }

  useEffect(() => {
    try {
      getResources()
    } catch (error) {
      console.log(error)
    }

  },[])

  return (
    <>
      <Header />
      <SearchPage />
      <Results resources={resources ?? []}/>
      <Footer />
    </>
  )
}

export default App
