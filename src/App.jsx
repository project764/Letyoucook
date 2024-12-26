import Pages from "./Page/Pages"
import Filter from "./Component/filter"
import { BrowserRouter } from "react-router-dom"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>      
        <Filter/>
        <Pages/>
      </BrowserRouter>

    </div>
  )
}

export default App
