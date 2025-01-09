import React,{ useState } from 'react'

import {FaSearch} from 'react-icons/fa'
import { Searchbar , Button} from '../Css'
import {useNavigate} from 'react-router-dom'
function Search() {

  const [search,setSearch]=useState('')
  const navigate=useNavigate()

  const searchHandler=(e)=>{
    e.preventDefault()
    navigate(`/Searched/${search}`)
  }

 // const handleKeyDown = (e) => {
  //  if (e.key === 'Enter') {
  //    searchHandler();
   // }
 // }

  return (
    <Searchbar>
      <div style={{ width: '100%', position: 'relative' }}>
        <FaSearch />
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        
        type='text' 
        placeholder='Search or ingred1,ingred2..' 
        value={search} 
        
      />
      <button onClick={searchHandler}>Search</button>
      
      </div>
    </Searchbar>
  )
}

export default Search