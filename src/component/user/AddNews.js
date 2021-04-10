import React from 'react'
import './AddNews.css'
import {MdViewHeadline} from 'react-icons/md'
import {BsFileEarmarkText} from 'react-icons/bs'


function AddNews(){
    return(
        <div className='add'>
            <div className='bx1'>
                <form>
                    <div className='bx'>
                        <h4>Add News</h4>
                    </div>
                    <div className='bx'>
                        <MdViewHeadline></MdViewHeadline>
                        <input type='text' placeholder='Head line....'></input>
                    </div>
                    <div className='bx'>
                        <BsFileEarmarkText></BsFileEarmarkText>
                        <textarea type='text' placeholder='In details....'></textarea>
                    </div>
                    <div className='bx'>
                        <p style={{color:'black'}}>Upload Image</p>
                        <input type='file'></input>
                    </div>
                    <div className='bx2'>
                        <input type='submit' value='Add'></input>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default AddNews;