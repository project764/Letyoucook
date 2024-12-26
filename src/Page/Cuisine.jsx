import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Grid,Filtercard } from '../Css'


function Cuisine() {

  const [cuisine,setCuisine]=useState([])
  const {type}=useParams()

  useEffect(()=>{
    getCusinie(type)
    //console.log(type)
  },[type])

  const getCusinie=async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_KEY}&cuisine=${name}&number=20`);
    const recipes=await data.json()
    //console.log(recipes)
    setCuisine(recipes.results)
  }

  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Filtercard key={item.id}>
            <img src={item.image} alt='' />
            <h4>{item.title}</h4>
          </Filtercard>
        )
      })}
    </Grid>
  )
}


export default Cuisine