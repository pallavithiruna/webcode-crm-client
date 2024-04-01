import React,{useState} from 'react'
import './admin.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Admin = () => {

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
 
 const navigate=useNavigate()
 
 Axios.defaults.withCredentials=true;
 
 const handleSubmit=(e)=>{
  e.preventDefault()
  Axios.post('https://webcode-crm-server.onrender.com/auth/admin-login',
  {
    email,
    password
  })
  .then(res=>{
    if(res.data.status){
      navigate('/add')
    }
    else{
      alert('Only admins are allowed')
    }
    console.log(res)})
  .catch(err=>{console.log(err)})
}
  return (
    <>
    <div>
    <h2>Admin/Manager login</h2>
      <div className='add-up-container'>
      <form className='sign-up-form'  onSubmit={handleSubmit}> 
          <label  htmlFor='email' >Email:</label>
          <input
            type="email" autoComplete='off' placeholder='Email' 
           onChange={(e)=>setEmail(e.target.value)}
           />
          <label  htmlFor='password' >Password:</label>
          <input  type="password" placeholder='******' 
           onChange={(e)=>setPassword(e.target.value)}
           />
          <button className='button' type='submit'>Login</button>
          <p>admin:latha@gmail.com/latha123</p>
          <p>manager:reka@gmail.com/latha123</p>
        
      </form>
    </div>
    </div>
    </>
  )
}

export default Admin
