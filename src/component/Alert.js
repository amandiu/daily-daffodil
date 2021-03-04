import React from 'react'
import './Alert.css'
import OutsideClickHandler from 'react-outside-click-handler';

function Close(action){
    document.getElementById('alert').style.display=action;
}
function Alert(props) {
    return ( 
        <div className='alert' id='alert' style={{display:props.display}}>
            <OutsideClickHandler onOutsideClick={()=>{
                Close("none");
            }}>
            <div className='alert-1'>
                <h2>{props.head}</h2>
                <p>{props.text}</p>
                <div>
                    <button onClick={Close.bind(this,"none")}>Ok</button>
                </div>
            </div>
            </OutsideClickHandler>
        </div>
    )
}
export default Alert;