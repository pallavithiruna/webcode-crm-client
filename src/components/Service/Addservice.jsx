import React,{useState} from 'react'
import '../../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

function Addservice() {

  const[company,setCompany]=useState('');
  const[servicerequest,setServicerequest]=useState('');
  const[details,setDetails]=useState('');
  const[requestdate,setRequestdate]=useState('');
 
 const navigate=useNavigate()
 const handleSubmit=(e)=>{
   e.preventDefault()
   Axios.post('https://webcode-crm-server.onrender.com/auth/service',
   {
     company,
     servicerequest,
     details,
     requestdate
   })
   .then(res=>{
     if(res.data.success){
       navigate('/service')
    //    alert('contact added successfully')
       toast.success("Service added Successfully")
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

          <label  htmlFor='name' >Company:</label>
          <input  type="text" placeholder='Company'
          className='input'
          onChange={(e)=>setCompany(e.target.value)}
          />

         <label  htmlFor='companyname' >Service Request:</label>
          <input  type="text" 
          className='input'
          onChange={(e)=>setServicerequest(e.target.value)}
          placeholder='service-request'
          />

          <label  htmlFor='address' >Service Details:</label>
          <input  type="text" autoComplete='off' placeholder='Service-Details' 
          className='input'
             onChange={(e)=>setDetails(e.target.value)}
           />
          <label  htmlFor='role' >Request Date:</label>
          <input  type="date" autoComplete='off' placeholder='date' 
          className='input'
           onChange={(e)=>setRequestdate(e.target.value)}
           />
           
          <button className='button' type="submit">Add service</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Addservice
