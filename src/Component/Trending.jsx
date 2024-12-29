import React, { useEffect,useState } from 'react'
import { Wrapper,Card, Gradient } from '../Css'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

function Trending() {
  const [trend,setTrend]=useState([])

  useEffect(()=>{
    getTrending()

  },[])

  const getTrending=async()=>{

   const check=localStorage.getItem('trending')
   if(check){
    setTrend(JSON.parse(check))
   }else{
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY}&number=8`);
    const data=await api.json()
    localStorage.setItem("trending",JSON.stringify(data.recipes))
    //console.log(data)
    setTrend(data.recipes)
   }

      
  }
  return (
    <Wrapper>
      <h3>Popular Dishes</h3>
      <Splide options={{
        perPage:4,
        arrows:false,
        pagination:false,
        drag:'free',
        gap:"5rem",
      }}>
      {trend.map((recipe)=>
      {
        return(
          <SplideSlide key={recipe.id}>
          <Card >
              <Link to={"/recipeintro/"+recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title}/>
              <Gradient/>
            </Link> 
          </Card>
            
          </SplideSlide>
        )
      })}
      </Splide> 
      
    </Wrapper>
  )
}

export default Trending


     
