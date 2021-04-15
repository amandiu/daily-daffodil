import React from 'react'
import './CartView.css'
import logo from './../file/download.jpg'
function CartView({data}) {
    return(
        <div className='cart-view'>
            <div className='cart1'>
                    <img src={data.ImageUrl} alt='photo' className='img1'></img>
                    <h2>{data.HeadLine}</h2>
                    <p>{data.Details}</p>
            </div>
            <div className='cart1'>
            <img src={logo} alt='profile' className='img'></img>
            <h3>{data.Admin}</h3>
            <p style={{color:'red'}}>Date: </p>
            <p>{data.Date}</p>
            </div>
        </div>
    )
}
export default CartView