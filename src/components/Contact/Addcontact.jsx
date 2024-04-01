import React,{useState} from 'react'
import '../../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

function Addcontact() {

  const[name,setName]=useState('');
  const[companyname,setCompanyname]=useState('');
  const[address,setAddress]=useState('');
  const[phone,setPhone]=useState('');
 
 const navigate=useNavigate()
 const handleSubmit=(e)=>{
   e.preventDefault()
   Axios.post('https://webcode-crm-server.onrender.com/auth/contact',
   {
     name,
     companyname,
     address,
     phone
   })
   .then(res=>{
     if(res.data.success){
       navigate('/contact')
    //    alert('contact added successfully')
       toast.success("Contact added Successfully")
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

          <label  htmlFor='name' >Name:</label>
          <input  type="text" placeholder='Name'
          className='input'
          onChange={(e)=>setName(e.target.value)}
          />

         <label  htmlFor='companyname' >Companyname:</label>
          <input  type="text" 
          className='input'
          onChange={(e)=>setCompanyname(e.target.value)}
          placeholder='Companyname'
          />

          <label  htmlFor='address' >Address:</label>
          <input  type="text" autoComplete='off' placeholder='Address' 
          className='input'
             onChange={(e)=>setAddress(e.target.value)}
           />
          <label  htmlFor='role' >Phone:</label>
          <input  type="text" autoComplete='off' placeholder='Phone' 
          className='input'
           onChange={(e)=>setPhone(e.target.value)}
           />
           
          <button className='button' type="submit">Add contact</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Addcontact
