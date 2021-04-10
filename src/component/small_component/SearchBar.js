import React,{useEffect,useState} from 'react'
import './SearchBar.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import {setInput} from './../../App'



function SearchBar(){

    return(
        <div className='search'>
            <div className='search1' href='/search'>
                <input type='text' placeholder='Search...' id='input' ></input>
                <BiSearchAlt2 className='icon1'></BiSearchAlt2>
            </div>
        </div>
    )
}
export default SearchBar;