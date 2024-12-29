import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Detailwrapper,Button,Info } from "../Css";

import React from 'react'

function Recipeintro() {

  let {id}=useParams()
  const [details,setDetails]=useState({})
  const [activetab,setActiveTab]=useState('instruction')

  const fecthDeatils=async()=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_KEY}`)
    const detaildata=await data.json()
    console.log(detaildata)
    setDetails(detaildata)
  }

  useEffect(()=>{
    fecthDeatils()
  },[id])



  return (
    <Detailwrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image}/>
      </div>
      <Info>
        <Button className={activetab === 'instruction'? 'active':''} onClick={()=> setActiveTab("instruction")}>
          Instruction</Button>
        <Button className={activetab === 'ingredients'? 'active':''} onClick={()=>setActiveTab("ingredients")}>
          Ingredients</Button>
          
        {activetab === 'instruction' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        )} 

        {activetab === 'ingredients' && (
          <ul>
          {details.extendedIngredients?.map((ingredient)=>{
            return(
              <li key={ingredient.id}>{ingredient.original}</li>
            )
          })}
        </ul>
        )}
        
      </Info>
    </Detailwrapper>
  )
}

export default Recipeintro