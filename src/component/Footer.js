import React from 'react'
import './Footer.css';
import {CgProfile} from 'react-icons/cg';
import {IoMdContacts} from 'react-icons/io';
import {AiOutlineHome} from 'react-icons/ai';
function Footer(){
    return(
        
        <div className='footer'>
          <div className='f'>
              <CgProfile className='f2'></CgProfile>

          </div>

          <div className='f'>
            <IoMdContacts className='f2'> </IoMdContacts> 
          </div>

          <div className='f'>
              <AiOutlineHome className='f2'></AiOutlineHome>
              
              </div>
    

          
          

        </div>
    )
}
export default Footer