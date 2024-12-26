import React from 'react'
import {FaPizzaSlice,FaHamburger} from "react-icons/fa"
import { GiNoodles,GiChopsticks } from "react-icons/gi"
import { PiCookingPotBold } from "react-icons/pi"
import { List } from '../Css'

import { SLink } from '../Css'


function Filter() {
  return (
    <List>
      <SLink to={'/Cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/Cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to={'/Cuisine/Chinese'}>
        <GiNoodles/>
        <h4>Chinese</h4>
      </SLink>
      <SLink to={'/Cuisine/Japanese'}>
        <GiChopsticks/>
        <h4>Japanese</h4>
      </SLink>
      <SLink to={'/Cuisine/Indian'}>
        <PiCookingPotBold />
        <h4>Indian</h4>
      </SLink>
      
    </List>
  )
}

export default Filter