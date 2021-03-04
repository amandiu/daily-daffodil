import React from 'react'
import './SearchBar.css'
import { BiSearchAlt2 } from 'react-icons/bi';

function SearchBar(){
    return(
        <div className='search'>
            <div className='search1'>
                <input type='text' placeholder='Search...' id='input'></input>
                <BiSearchAlt2 className='icon1'></BiSearchAlt2>
            </div>
        </div>
    )
}
export default SearchBar;