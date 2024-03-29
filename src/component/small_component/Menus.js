import React from 'react'
import './Menus.css'
import img from './../../file/afaga.png'
import {CgProfile} from 'react-icons/cg'
import {BiAddToQueue} from 'react-icons/bi'
import {AiOutlineLogout} from 'react-icons/ai'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function Menus(props) {
   if(props.login==='true'){
       return(
        <Router>
            <div className='login'>
        <div className='cartt' style={{background: 'none'}}>
            <img src={img} alt='img'></img>
            <p>Md. Sazzad Hossain</p>
        </div>
        <div className='cart2'>
         <i ><CgProfile className='i'></CgProfile> Profile</i>
         <a href='/addnews'><BiAddToQueue className='i'></BiAddToQueue>Add News</a>
         <i ><AiOutlineLogout className='i'></AiOutlineLogout>LogOut</i>
        </div>
     </div>
        </Router>
       )
   }else{
       return(
        <Router>
            <div className='logout'>
            <div className='cartt' style={{background: 'none'}}>
            <p>Only DIU family members are can sign up here. Please signup and post new news.</p>
            <a href='/login'><AiOutlineLogout className='i'></AiOutlineLogout>LogIn</a>
            </div>
        </div>
        </Router>
       )
   }
}
export default Menus;