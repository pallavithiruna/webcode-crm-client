import React,{useState} from 'react'
import '../App.css'
import Axios from 'axios'
import {  useNavigate,useParams } from 'react-router-dom';

const ResetPassword = () => {
   
    const[password,setPassword]=useState('');
   const{token}=useParams()
   
   const navigate=useNavigate()
   
   const handleSubmit=(e)=>{
     e.preventDefault()
     Axios.post('https://webcode-crm-server.onrender.com/auth/resetpassword/'+token,
     {
       password
     })
     .then(res=>{
       if(res.data.status){
         navigate('/')
       }
      //  console.log(res.data)
      })
     .catch(err=>{console.log(err)})
   }
  return (
    <div className='sign-up-container'>
    <form className='sign-up-form' onSubmit={handleSubmit}> 
       <h2>Reset Password</h2>
      
       <label  htmlFor='password' >New Password:</label>
          <input  type="password" placeholder='******' 
           onChange={(e)=>setPassword(e.target.value)}/>
        
       
        <button type="submit">Reset</button>
       
    </form>
  </div>
  )
}

export default ResetPassword
