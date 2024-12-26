import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { Searchbar } from '../Css'
function Search() {

  const [search,setSearch]=useState('')

  const searchHandler=(e)=>{
    e.preventDefault()
    
  }

  return (
    <Searchbar onSubmit={searchHandler}>
      <div width='100%' position='relative'>
         <FaSearch></FaSearch>
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        type='text' 
        placeholder='Search' 
        value={search} 
      />
      </div>
    </Searchbar>
  )
}

export default Search