import React from 'react'
import './Alert.css'

function Close(){
    document.getElementById('alert').style.display='none';
}
function Alert(props) {
    return ( 
        <div className='alert' id='alert' style={{display:props.display}}>
            <div className='alert-1'>
                <h2>{props.head}</h2>
                <p>{props.text}</p>
                <div>
                    <button onClick={Close}>Ok</button>
                </div>
            </div>
        </div>
    )
}
export default Alert;