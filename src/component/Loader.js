import { React } from "react";
import './Loader.css'

function Loader(props) {
    return ( 
        <div className='loader' style={{display:props.display}}>
        </div>
    )
}
export default Loader;