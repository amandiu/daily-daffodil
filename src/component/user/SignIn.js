import React from 'react'
import './SignIn.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'

export function Close(x){
    document.getElementById(x).style.display='none';
}
export function Show() {
    document.getElementById('signin').style.display='flex';
}
function name() {
    
var email=document.getElementById('email').value;
var x=document.getElementById('email1');
var em='',j=0;
for(var i=0;i<email.length;i++){
    if(email[i]==='@'){
        j=i;
    }
}
for(i=j;i<email.length;i++){
em=em+email[i];
}

//alert(em.toString());
if(em==='@diu.edu.bd'){
    x.style.border='1px solid green';
    x.style.color='green';
}else{
    x.style.border='1px solid red';
    x.style.color='red';
}

    
}
function SignUp(){
    document.getElementById('head').innerHTML='Create New Account';
    document.getElementById('name1').style.display='flex';
    document.getElementById('signup1').style.display='initial';
    document.getElementById('signin1').style.display='none';
    document.getElementById('sendmail').style.display='none';
    document.getElementById('password1').style.display='flex';
    document.getElementById('flat').style.display='flex';

}
function ForgetPass(){
    document.getElementById('head').innerHTML='Remember Your Password';
    document.getElementById('name1').style.display='none';
    document.getElementById('password1').style.display='none';
    document.getElementById('signup1').style.display='none';
    document.getElementById('signin1').style.display='none';
    document.getElementById('sendmail').style.display='initial';
    document.getElementById('signup1').style.display='none';
    document.getElementById('flat').style.display='flex';


}
function LogIn(){
    document.getElementById('head').innerHTML='Log In Here';
    document.getElementById('name1').style.display='none';
    document.getElementById('password1').style.display='flex';
    document.getElementById('signup1').style.display='none';
    document.getElementById('signin1').style.display='initial';
    document.getElementById('sendmail').style.display='none';
    document.getElementById('signup1').style.display='none';
    document.getElementById('flat').style.display='flex';


}
function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

function SignIn (props){

    return(
        <div className='signin' style={{display: props.display}} id='signin'>
                <div className='bx1'>
                <form>
                <div className='bx2'>
                    <h4 id='head'>Sign In Here</h4>
                </div>
                <div className='bx' id='name1'>
                    <CgProfile></CgProfile>
                    <input type='text' placeholder='Name.....'  id='name' onKeyDown={handleEnter}></input>
                </div>
                <div className='bx' id='email1'>
                    <AiOutlineMail></AiOutlineMail>
                    <input type='text' placeholder='Email.....'  id='email' onChange={name} onKeyDown={handleEnter}></input>
                </div>
                <div className='bx' id='password1'>
                    <RiLockPasswordLine></RiLockPasswordLine>
                    <input type='password' placeholder='Password.....' id='password'></input>
                </div>
                <div className='bx2'>
                    <input type='submit' value='Sign In' id='signin1'></input>
                    <input type='submit' value='Sign Up' id='signup1'></input>
                    <input type='submit' value='Send Mail' id='sendmail'></input>
                </div>
                </form>
                <div className='bx2' id='flat'>
                    <input type='submit' value='Create Account' onClick={SignUp}></input>
                    <input type='submit' value='Forget Password' onClick={ForgetPass}></input>
                    <input type='submit' value='Log In' onClick={LogIn}></input>
                </div>
            </div>
        </div>
    ); 
}
export default SignIn