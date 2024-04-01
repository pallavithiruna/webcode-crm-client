import React,{useState,useEffect} from 'react'
import '../../App.css'
import Axios from 'axios'
import { Link, useNavigate,useParams } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';

function Updateservice() {

const{id}=useParams();
const navigate=useNavigate()
const users={
    company: "",
    servicerequest: "",
    details: "",
    requestdate: ""
}
  const [value, setValue] = useState(users)
const handlechange = (e) => {
    setValue({
        ...value,
        [e.target.name]: e.target.value
    })

}
useEffect(
    ()=>{
        axios.get(`https://webcode-crm-server.onrender.com/auth/getoneservice/${id}`)
        .then((res)=>{
            setValue(res.data)
        })
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    },[id]
)
const handleOnSubmit = async (e) => {
    e.preventDefault();

    
         await Axios.put(`https://webcode-crm-server.onrender.com/auth/updateservice/${id}`,value)
        .then(
            (res)=>{
            
                toast.success("Contact updated Succesfully")
                navigate('/service')
            }
        )
        .catch(err=>console.log(err))
       
  
}


  return (
    <div>
      <h2>Update Service</h2>
       <div className='add-up-container'>
      <form className='add-up-form' onSubmit={handleOnSubmit}>
        <div>

          <label  htmlFor='name' >Company:</label>
          <input  type="text" placeholder='Name'
          className='input'
          value={value.company} name='company' onChange={handlechange}
        //   onChange={(e)=>setName(e.target.value)}
          />

         <label  htmlFor='companyname' >Service Request:</label>
          <input  type="text" 
          className='input'
          value={value.servicerequest} name='servicerequest' onChange={handlechange}
        //   onChange={(e)=>setCompanyname(e.target.value)}
          placeholder='Companyname'
          />

          <label  htmlFor='address' >Details:</label>
          <input  type="text" autoComplete='off' placeholder='Address' 
          className='input'
          value={value.details} name='details' onChange={handlechange}
            //  onChange={(e)=>setAddress(e.target.value)}
           />
          <label  htmlFor='role' >Request Date:</label>
          <input  type="date" autoComplete='off' placeholder='Phone' 
          className='input'
          value={value.requestdate} name='requestdate' onChange={handlechange}
        //    onChange={(e)=>setPhone(e.target.value)}
           />
           
          <button className='button' type="submit">Update service</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Updateservice
