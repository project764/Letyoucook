import React,{ useState } from 'react'

import {FaSearch} from 'react-icons/fa'
import { Searchbar } from '../Css'
import {useNavigate} from 'react-router-dom'
function Search() {

  const [search,setSearch]=useState('')
  const navigate=useNavigate()

  const searchHandler=(e)=>{
    e.preventDefault()
    navigate(`/Searched/${search}`)
  }

  return (
    <Searchbar>
      <div style={{ width: '100%', position: 'relative' }}>
        <FaSearch />
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        type='text' 
        placeholder='Search' 
        value={search} 
      />
      <button onClick={searchHandler}>Search</button>
      </div>
    </Searchbar>
  )
}

export default Search