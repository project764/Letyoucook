import React from 'react'
import  { useEffect,useState } from 'react'
import { Wrapper,Card, Gradient } from '../Css'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

function Veges(){
  const [vege,setVege]=useState([])
  
  useEffect(()=>{
    getVege()

  },[])

  const getVege=async()=>{

   const check=localStorage.getItem('veges')
   if(check){
    setVege(JSON.parse(check))
   }else{
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_KEY}&number=8&include-tags=vegetarian`);
    const data=await api.json()
    localStorage.setItem("veges",JSON.stringify(data.recipes))
    //console.log(data)
    setVege(data.recipes)
   }
  }
return (
  <Wrapper>
    <h3>Vegetarian Dishes</h3>
    <Splide options={{
      perPage:4,
      arrows:false,
      pagination:false,
      drag:'free',
      gap:"5rem",
    }}>
    {vege.map((recipe)=>
    {
      return(
        <SplideSlide key={recipe.id}>
        <Card key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title}/>
          <Gradient/>
        </Card>
        </SplideSlide>
      )
    })}
    </Splide> 
    
  </Wrapper>
)
  
}

export default Veges