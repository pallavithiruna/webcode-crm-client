import React,{useState} from 'react'
import '../App.css'
import toast from 'react-hot-toast'


import Axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import Background from '../assets/crm.jpg';

function Login() {
//  const[username,setUsername]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');

const navigate=useNavigate()

Axios.defaults.withCredentials=true;

const handleSubmit=(e)=>{
  e.preventDefault()
  Axios.post('https://webcode-crm-server.onrender.com/auth/login',
  {
    email,
    password
  })
  .then(res=>{
    if(res.data.status){
      // alert("login successfull")
      toast.success("Logged in successfully")
      navigate('/home')
    //  {<Navigate to="/home"/>}
    }
    else{
      alert('User does not exist! Register to Login')
    }
    console.log(res)
  })
  .catch(err=>{console.log(err)})
}
  return (
    <div className='background'>
     <h2 className='heading-main-page-login' >Customer Relationship Management<br></br>Login here!</h2>
    <div className='login-up-container'>
      <form className='sign-up-form' onSubmit={handleSubmit}> 
         {/* <h2>Login</h2> */}
          <label  htmlFor='email' >Email:</label>
          <input  type="email" autoComplete='off' placeholder='Email' 
          className='input'
           onChange={(e)=>setEmail(e.target.value)}/>
          <label  htmlFor='password' >Password:</label>
          <input  type="password" placeholder='******' 
           className='input'
           onChange={(e)=>setPassword(e.target.value)}/>
          <button className='button' type="submit">Login</button>
          <Link to="/forgotpassword" style={{textDecoration: 'none'}}>Forgot Password</Link>
          <p>Don't Have an account?<Link to="/signup" style={{paddingLeft: 5, textDecoration: 'none'}}>Register</Link></p>
      </form>
    </div>
    </div>
  )
}

export default Login

