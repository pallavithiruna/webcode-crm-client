import React,{useState} from 'react'
import '../App.css'
import Axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
   
    const[email,setEmail]=useState('');
   
   
   const navigate=useNavigate()
   
   const handleSubmit=(e)=>{
     e.preventDefault()
     Axios.post('https://webcode-crm-server.onrender.com/auth/forgotpassword',
     {
       email,
     })
     .then(res=>{
       if(res.data.status){
        alert("check your email for reset password link")
         navigate('/')
       }
       console.log(res)
       alert("Please enter a correct email address")
      })
     .catch(err=>{console.log(err)})
   }
  return (
    <div className='sign-up-container'>
    <form className='sign-up-form' onSubmit={handleSubmit}> 
       <h2>Forgot Password</h2>
      
        <label  htmlFor='email' >Email:</label>
        <input  type="email" autoComplete='off' placeholder='Email' 
         onChange={(e)=>setEmail(e.target.value)}/>
        
       
        <button type="submit">Send link </button>
       
    </form>
  </div>
  )
}

export default ForgotPassword
