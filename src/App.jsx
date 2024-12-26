import Pages from "./Page/Pages"
import Filter from "./Component/filter"
import { BrowserRouter } from "react-router-dom"
import Search from "./Component/Search"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>    
        <Search/>  
        <Filter/>
        <Pages/>
      </BrowserRouter>

    </div>
  )
}

export default App
