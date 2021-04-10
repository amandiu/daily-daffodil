import React from 'react'
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {Show} from './small_component/Navigation'
import {ShowTheme} from './small_component/Theme'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




function Header(props) {
    return ( 
    <div className = 'header' style={{background:props.color}}>
      <div className = 'h1'>
        <div className = 'h-h1'>
          <FaBars className = 'bar' onClick={Show}></FaBars>
       </div> 
       <div className = 'h-h2' >
        <p style={{ color: '#34EA27' }}>D</p> 
            <p style={{color: '#465CEB' }}>I</p> 
            <p style={{color: 'black' }}>U</p> 
            <h2>News</h2>
       </div>
       <div className = 'h-h3' >
        
       </div> 
        <div className = 'h-h4' >
           <BsThreeDotsVertical className = 'bar' onClick={ShowTheme}> </BsThreeDotsVertical>
        </div>
        
      </div>  
        <div className ='h2'>
          <div className = 'h2-h1'>
            <a href='/'> Top Stories </a>
          </div> 
        <div className = 'h2-h1'>
          <a href='/popular'> Popular </a>
        </div> 
        <div className = 'h2-h1' >
          <a href='/video'> Video </a>
        </div>
        <div className = 'h2-h1' >
          <a href='/live'> Live </a> 
        </div>
        </div>
  </div>
  )
}

export default Header