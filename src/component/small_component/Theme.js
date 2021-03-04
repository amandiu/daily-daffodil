import React from 'react'
import './Theme.css'
import OutsideClickHandler from 'react-outside-click-handler';

function Hide(){
    document.getElementById('theme').style.display='none';
}
export function ShowTheme(){
    document.getElementById('theme').style.display='initial';
}
function Theme(){
    return(
        <div className='theme1' id='theme'>
            <OutsideClickHandler onOutsideClick={()=>{
                Hide();
            }}>
            <div className='theme'>

            </div>
            </OutsideClickHandler>
        </div>
    );
}
export default Theme