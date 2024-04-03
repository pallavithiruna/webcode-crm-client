import React,{useState} from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

 const[username,setUsername]=useState('');
 const[gender,setGender]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');
 const[role,setRole]=useState('');


const navigate=useNavigate()


const handleSubmit=(e)=>{
  e.preventDefault()
  Axios.post('https://webcode-crm-server.onrender.com/auth/signup',
  {
    username,
    gender,
    email,
    role,
    password
  })
  .then(res=>{
    if(res.data.status){
      navigate('/')
    }
    // else{
    //   alert("Please fill all the details")
    // }
    // console.log(res)
  })
  .catch(err=>{console.log(err)
   alert("Please fill the form correctly")})
}
  return (
    <div className='background'>
    <h2 className='heading-main-page'>Customer Relationship Management<br></br>Register here!</h2>
    
    <div className='sign-up-container'>
     
      <form className='sign-up-form' onSubmit={handleSubmit}> 
          {/* <h2>Register here!!</h2> */}
          <label  htmlFor='username' >Username:</label>
          <input  type="text" placeholder='Username' 
          onChange={(e)=>setUsername(e.target.value)}
          />


         <label  htmlFor='gender' >Gender:</label>
          <input  type="text" placeholder='Gender'
          onChange={(e)=>setGender(e.target.value)}
          />

          <label  htmlFor='email' >Email:</label>
          <input  type="email" autoComplete='off' placeholder='Email' 
           onChange={(e)=>setEmail(e.target.value)}
           />

          <label  htmlFor='role' >Role:</label>
          <input  type="text" autoComplete='off' placeholder='Role-admin/manager/employee' 
           onChange={(e)=>setRole(e.target.value)}
           />
          

          <label  htmlFor='password' >Password:</label>
          <input  type="password" placeholder='******' 
           onChange={(e)=>setPassword(e.target.value)}
           />

          <button className='button' type="submit">Register</button>
          <p>Have an account?<Link to="/"style={{paddingLeft: 5, textDecoration: 'none'}}>Login</Link></p>
      </form>
    </div>
    </div>
  )
}

export default Signup

