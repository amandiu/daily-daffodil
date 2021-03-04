import React from 'react'
import './Navigation.css'
import {AiOutlineClose} from 'react-icons/ai'
import OutsideClickHandler from 'react-outside-click-handler';


function Hide(key){
    document.getElementById(key).style.display='none';
}
export function Show(){
    document.getElementById('cc').style.display='initial'; 
}
function Navigation() {

    return ( 
    <div className = 'nav' id='cc'>
        <OutsideClickHandler onOutsideClick={()=>{
            Hide("cc");
        }}>
        <div className ='nav1'>
            <AiOutlineClose className='icon' onClick={Hide.bind(this,'cc')}></AiOutlineClose>
        </div>
    </OutsideClickHandler>
        
    </div>
    )
}
export default Navigation;