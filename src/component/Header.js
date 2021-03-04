import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {Show} from './small_component/Navigation'


function Header() {
    return ( 
    <div className = 'header'>
      <div className = 'h1'>
        <div className = 'h-h1'>
          <FaBars className = 'bar' onClick={Show}></FaBars>
       </div> 
       <div className = 'h-h2' >
        <p style={{ color: '#34EA27' }}>D</p> 
            <p style={{color: '#465CEB' }}>I</p> 
            <p>U</p> 
            <h2>News</h2>
       </div>
       <div className = 'h-h3' >
        <BiSearchAlt2 className = 'bar' > </BiSearchAlt2>
       </div>
        <div className = 'h-h4' >
           <BsThreeDotsVertical className = 'bar' > </BsThreeDotsVertical>
        </div>
      </div>  
        <div className ='h2'>
          <div className = 'h2-h1' >
            <p> Top Stories </p>
          </div> 
        <div className = 'h2-h1' >
          <p> Popular </p> 
        </div> 
        <div className = 'h2-h1' >
          <p> Video </p>
        </div>
        <div className = 'h2-h1' >
          <p> Live </p> 
        </div>
        </div>
  </div>
  )
}

export default Header