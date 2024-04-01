import React,{useState} from 'react'
import './Add.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Add() {

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
       navigate('/user-list')
       alert('user added successfully')
     }
     else{
       alert("Please fill all the details")
     }
     console.log(res)})
   .catch(err=>{console.log(err)
    alert("Please fill the form correctly")})
 }


  return (
    <div>
      <h2>Add New User</h2>
       <div className='add-up-container'>
      <form className='add-up-form' onSubmit={handleSubmit}>
        <div>

        <label  htmlFor='username' >Username:</label>
          <input  type="text" placeholder='Username'
          onChange={(e)=>setUsername(e.target.value)}
          />

         <label  htmlFor='gender' >Gender:</label>
          <input  type="text" 
           onChange={(e)=>setGender(e.target.value)}
          placeholder='Gender'
          />

          <label  htmlFor='email' >Email:</label>
          <input  type="email" autoComplete='off' placeholder='Email' 
             onChange={(e)=>setEmail(e.target.value)}
           />
          <label  htmlFor='role' >Role:</label>
          <input  type="text" autoComplete='off' placeholder='Role-user' 
           onChange={(e)=>setRole(e.target.value)}
           />

          <label  htmlFor='password' >Password:</label>
          <input  type="password" placeholder='******' 
          onChange={(e)=>setPassword(e.target.value)}
           />
          <button className='button' type="submit">Add user</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Add
