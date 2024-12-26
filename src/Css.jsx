import styled from "styled-components"
import {motion} from "framer-motion"
import { NavLink } from "react-router-dom"

export const Wrapper=styled.div`
margin:4rem 0rem ;
;
`

export const Card=styled.div`

min-height: 12rem;
border-radius: 2rem;
overflow: hidden;

img{
  border-radius:1rem;
  position:absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
}

p{
  position: absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform:translate(-50%, 0%);
  color: white;
  width:100%;
  text-align: center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`

export const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export const List=styled.div`
display:flex;
justify-content:center;
margin: 2rem 0rem; 


`

export const Grid=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(20rem, 1fr));
grid-gap:3rem;
`

export const Filtercard=styled.div`
img{
  width:100%:
  border-radius:2rem;

}
a{
  text-decoration:none;
}
h4{
  text-align:center;
  padding:1rem;
}
`
export const SLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg, #494949, #313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.5);

h4{
  color:white;
  font-size:1rem;
  text-align:center;
}
svg{
  color:white;
  font-size:1.5rem;
  
}
  &.active{
    background:linear-gradient(to right, #f27121, #e94057);
     
    svg{
      color:white;    
    }
    h4{
      color:white;
    }
  }
`

export const Searchbar=styled.div`
margin:0rem 20rem;
input{
  width:100%;
  height:3rem;
  border-radius:1rem;
  border:none;
  padding:0rem 2rem;
  font-size:1rem;
  outline:none;
  background:linear-gradient(35deg, #494949, #313131);
  color:white;
}
svg{
  position:absolute;
  top:50%;
  left:0%;
  transform:translate(100%, -50%);
  color:white;
  
  
}
`