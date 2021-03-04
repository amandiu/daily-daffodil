import {React,useEffect} from 'react'
import './Cart.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from './../file/download.jpg'
import {AiOutlineEye} from 'react-icons/ai'
const Cart=(props)=>{
    var a="#F81E1E",b="#F8642F",c="#900C3F";
    return(
        <div className='cart'>
            <div className='cart-1'>
                <img src={img}></img>
            </div>
            <div className="cart-2">
                <div className="cart-3">
                    <p>{props.head}</p>
                </div>
                <div className="cart-4">
                    <div className="cart-5" style={{color: a}}>
                        <p>{props.viwer}</p>
                        <AiOutlineEye></AiOutlineEye>
                    </div>
                    <div className="cart-5" style={{color: b}}>
                        <p>{props.time}</p>
                    </div>
                    <div className="cart-5" style={{color: c}}>
                        <p>{props.user}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart