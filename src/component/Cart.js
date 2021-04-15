import {React,useEffect} from 'react'
import './Cart.css'
import 'aos/dist/aos.css';
import img from './../file/download.jpg'
import {AiOutlineEye} from 'react-icons/ai'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import CartView from './CartView';

const Cart=({data})=>{
    var a="#F81E1E",b="#F8642F",c="#900C3F";
    var link='/view/'+data.id;
    return(
        <Router>
            <div className='cart' id='crd'>
                <Switch>
                    
                </Switch>
            <div className='cart-1'>
                <img src={data.ImageUrl} alt='img'></img>
            </div>
            <div className="cart-2">
                <div className="cart-3">
                    <p>{data.HeadLine}</p> 
                </div>
                <div className="cart-4">
                    <div className="cart-5" style={{color: a}}>
                        <p>{data.Viwer}</p>
                        <AiOutlineEye></AiOutlineEye>
                    </div>
                    <div className="cart-5" style={{color: b}}>
                        <p>{data.Date}</p>
                    </div>
                    <div className="cart-5" style={{color: c}}>
                        <p>{data.Admin}</p>
                    </div>
                </div>
            </div>
        </div>
        </Router>
    ) 
}
export default Cart