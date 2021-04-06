import React from 'react'
import './CartView.css'
import logo from './../file/download.jpg'
function CartView(props) {
    var head='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever';
    var text='since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    var person='Md. Sazzad Hossain';
    var date='11/03/2020';
    return(
        <div className='cart-view'>
            <div className='cart1'>
                    <img src={logo} alt='photo' className='img1'></img>
                    <h2>{head}</h2>
                    <p>{text}</p>
            </div>
            <div className='cart1'>
            <img src={logo} alt='profile' className='img'></img>
            <h3>{person}</h3>
            <p style={{color:'red'}}>Date: </p>
            <p>{date}</p>
            </div>
        </div>
    )
}
export default CartView