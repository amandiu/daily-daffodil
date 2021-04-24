import React from 'react'
import './Theme.css'
import OutsideClickHandler from 'react-outside-click-handler';
import {Color} from './../../App'


function Hide(){
    document.getElementById('theme').style.display='none';
}
export function ShowTheme(){
    document.getElementById('theme').style.display='initial';
}


function Theme(props){
    return(
        <div className='theme1' id='theme'>
            <OutsideClickHandler onOutsideClick={()=>{
                Hide();
            }}>
            <div className='theme'>
                <button style={{background:'black'}} onClick={Color.bind('black')}>Black Theme</button>
                <button style={{background:'red'}} onClick={Color.bind('red')}>Red Theme</button>
                <button style={{background:'blue'}} onClick={Color.bind('blue')}>Blue Theme</button>
            </div>
            </OutsideClickHandler>
        </div>
    );
} 
export default Theme