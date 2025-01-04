import Pages from "./Page/Pages"
import Filter from "./Component/filter"
import { BrowserRouter } from "react-router-dom"
import Search from "./Component/Search"
import Navbar from "./Component/Navbar"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>    
        <Navbar/>
        <Search/>  
        <Filter/>
        <Pages/>
      </BrowserRouter>

    </div>
  )
}

export default App
