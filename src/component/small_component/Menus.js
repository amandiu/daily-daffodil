import React from 'react'
import './Menus.css'
import img from './../../file/afaga.png'
import {CgProfile} from 'react-icons/cg'
import {BiAddToQueue} from 'react-icons/bi'
import {AiOutlineLogout} from 'react-icons/ai'
import {Show} from './../user/SignIn'


function Menus(props) {
   if(props.login==='true'){
       return(
        <div className='login'>
        <div className='cartt' style={{background: 'none'}}>
            <img src={img} alt='img'></img>
            <p>Md. Sazzad Hossain</p>
        </div>
        <div className='cart2'>
         <i ><CgProfile className='i'></CgProfile> Profile</i>
         <i ><BiAddToQueue className='i'></BiAddToQueue>Add News</i>
         <i ><AiOutlineLogout className='i'></AiOutlineLogout>LogOut</i>
        </div>
     </div>
       )
   }else{
       return(
        <div className='logout'>
            <div className='cartt' style={{background: 'none'}}>
            <p>Only DIU family members are can sign up here. Please signup and post new news.</p>
            <i onClick={Show}><AiOutlineLogout className='i'></AiOutlineLogout>LogIn</i>
            </div>
        </div>
       )
   }
}
export default Menus;