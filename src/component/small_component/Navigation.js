import React from 'react'
import './Navigation.css'
import {AiOutlineClose} from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';
import Menus from './Menus'


function Hide(key){
    document.getElementById(key).style.display='none';
}
export function Show(){
    document.getElementById('cc').style.display='initial'; 
}
function Navigation(props) {

    return ( 
    <div className = 'nav' id='cc'>
        <OutsideClickHandler onOutsideClick={()=>{
            Hide("cc");
        }}>
        <div className ='nav1' style={{background: props.color}}>
            <AiOutlineClose className='icon' onClick={Hide.bind(this,'cc')}></AiOutlineClose>
            <div className='menus'>
                <Menus login={props.login}></Menus>
            </div>
        </div>
    </OutsideClickHandler>
        
    </div>
    )
}
export default Navigation;