import React from 'react'
import '../../App.css'
import './manager.css'
import { Link } from 'react-router-dom'
const Manager = () => {
  return (
    <>
    <div className='manager-layout'>
      <div className='sign-up-container'>
      <form className='sign-up-form' > 
      {/* onSubmit={handleSubmit} */}
         <h2>Manager-Login</h2>
          <label  htmlFor='email' >Email:</label>
          <input
            type="email" autoComplete='off' placeholder='Email' 
          //  onChange={(e)=>setEmail(e.target.value)}
           />
          <label  htmlFor='password' >Password:</label>
          <input  type="password" placeholder='******' 
          //  onChange={(e)=>setPassword(e.target.value)}
           />
          <button className='button' type="submit">Manager-Login</button>
          <p>email:govindarajuaruljothi@gmail.com</p>
          <p>password:pals@123</p>
          {/* <Link to="/forgotpassword">Forgot Password</Link>
          <p>Don't Have an account?<Link to="/signup">Sign up</Link></p> */}
      </form>
    </div>
    </div>
    </>
  )
}

export default Manager
